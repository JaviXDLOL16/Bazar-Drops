import axios from "axios";
import { UserRepository } from "../domain/UserRepository";

const API_URL = 'https://reqres.in/api';

export const createAxiosUserRepository = (): UserRepository => {
    return {
        login: async (newUser) => {
            const response = await axios.post(`${API_URL}/login`, newUser);
            return response.data;
        },
        register: async (user) => {
            const response = await axios.post(`${API_URL}/register`, user);
            return response.data;
        }
    }
}