import axios, { AxiosResponse } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { createAxiosUserRepository } from "src/lib/User/infrastructure/AxiosUserRepository";
import { createUserService } from "src/lib/User/application/UserService";
import { LoginUser, RegisterUser } from "src/lib/User/domain/User";


const repository = createAxiosUserRepository();
const service = createUserService(repository);

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (newuser: RegisterUser) => Promise<any>;
    onLogin?: (user: LoginUser) => Promise<any>;
    onLogout?: () => Promise<any>;
}

export const API_URL = process.env.EXPO_PUBLIC_API_USER_URL;
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('userToken');

            if (token) {
                setAuthState({
                    token: token,
                    authenticated: true
                });
            }
        }
        loadToken();
    }, [])

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

            setAuthState({
                token: result.token,
                authenticated: true
            })

            await SecureStore.setItemAsync('userToken', result.token);

            return user;

        } catch (e) {
            return { error: true, msg: (e as any).response.data.msg };
        }
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync('userToken');

        setAuthState({
            token: null,
            authenticated: false
        });
    }


    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};