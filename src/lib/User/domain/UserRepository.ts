import { LoginUser, RegisterUser } from "./User";

export interface UserRepository {
    login(user: LoginUser): Promise<{ id: number, token: string, userName: string }>;
    register(newUser: RegisterUser): Promise<{ id: number, token: string, userName: string }>;
}