import axios, { AxiosResponse } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { createAxiosUserRepository } from "src/lib/User/infrastructure/AxiosUserRepository";
import { createUserService } from "src/lib/User/application/UserService";
import { LoginUser, RegisterUser } from "src/lib/User/domain/User";


const repository = createAxiosUserRepository();
const service = createUserService(repository);

interface AuthProps {
    authState?: { userId: string | null; authenticated: boolean | null };
    onRegister?: (newuser: RegisterUser) => Promise<any>;
    onLogin?: (user: LoginUser) => Promise<any>;
    onLogout?: () => Promise<any>;
    getUserInformation?: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        userId: string | null;
        authenticated: boolean | null;
    }>({
        userId: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            const userId = await SecureStore.getItemAsync('userId');

            if (userId) {
                setAuthState({
                    userId: userId,
                    authenticated: true
                });
            }
        }
        loadToken();
    }, [])

    const getUserInformation = async () => {
        try {
            const userId = await SecureStore.getItemAsync('userId');
            if (userId !== null) {
                const user = await service.getUserById(parseInt(userId));
                console.log(user);
                return user;
            } else {
                return { error: true, msg: "User ID is null" };
            }
        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg };
        }
    }

    const register = async (newUser: RegisterUser) => {
        try {
            return await service.register(newUser);
        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg };
        }
    };

    const login = async (user: LoginUser) => {
        try {
            const result = await service.login(user);

            console.log(result);

            setAuthState({
                userId: result.user,
                authenticated: true
            })

            await SecureStore.setItemAsync('userId', result.user);

            return user;

        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg };
        }
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync('userId');

        setAuthState({
            userId: null,
            authenticated: false
        });
    }


    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        getUserInformation,
        authState
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};