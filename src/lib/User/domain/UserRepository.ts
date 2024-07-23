import { LoginUser, RegisterUser } from "./User";

export interface UserRepository {
    login(user: LoginUser): Promise<{ token: string }>;
    register(newUser: RegisterUser): Promise<{ email: string, id: string }>;
}