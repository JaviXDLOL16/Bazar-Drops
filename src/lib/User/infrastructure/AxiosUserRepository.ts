import axios from "axios";
import { UserRepository } from "../domain/UserRepository";
import { LoginUser, RegisterUser } from "../domain/User";


export const createAxiosUserRepository = (): UserRepository => {
    return {
        login: async (user: LoginUser) => {

            const idUser = user.email === 'leonardo@gmail.com' ? 1 : 2;
            //const response = await axios.post(`${API_URL}/login`, newUser);
            await new Promise(resolve => setTimeout(resolve, 2000));
            return { token: '1111', id: idUser, userName: user.email.split('@')[0] };
        },
        register: async (newUser: RegisterUser) => {
            const idUser = newUser.accountType === 'vendedor' ? 1 : 2;
            //const response = await axios.post(`${API_URL}/register`, user);
            await new Promise(resolve => setTimeout(resolve, 2000));
            return { token: '111', id: idUser, userName: newUser.name };
        }
    }
}