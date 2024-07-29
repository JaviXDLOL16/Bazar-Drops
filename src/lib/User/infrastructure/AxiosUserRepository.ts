import axios from "axios";
import { UserRepository } from "../domain/UserRepository";
import { LoginUser, RegisterUser } from "../domain/User";

export const API_URL = process.env.EXPO_PUBLIC_API_USER_URL;

export const createAxiosUserRepository = (): UserRepository => {
    return {
        login: async (user: LoginUser) => {
            const response = await axios.post(`${API_URL}/auth/login`, user);
            console.log(response.data.data);
            return response.data;
        },
        register: async (newUser: RegisterUser) => {
            const response = await axios.post(`${API_URL}/users/create`, newUser);
            return { email: response.data.email, id: response.data._id };
        },
        getUserById: async (id: number) => {
            const response = await axios.get(`${API_URL}/users/${id}`);
            return response.data;
        },
        update: async (id: number, updateData: Partial<RegisterUser>) => {
            await axios.put(`${API_URL}/users/update/${id}`, updateData);
        }
    }
}