import { LoginUser, RegisterUser } from "./User";

export interface UserRepository {
    login(newUser: LoginUser): Promise<{ token: string }>;
    register(user: RegisterUser): Promise<{ id: number, token: string }>;
}