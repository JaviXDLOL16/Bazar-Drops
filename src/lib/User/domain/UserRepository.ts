import { LoginUser, RegisterUser, User } from "./User";

export interface UserRepository {
    login(user: LoginUser): Promise<{ user: string }>;
    register(newUser: RegisterUser): Promise<{ email: string, id: string }>;
    getUserById(id: number): Promise<User>;
    update(id: number, updateData: Partial<User>): Promise<void>;
}