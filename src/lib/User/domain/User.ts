type AccountType = "vendedor" | "comprador";

export type UserRole = 'vendedor' | 'comprador';

export interface User {
    id: number;
    name: string;
    image: string;
    email: string;
    cellphone: string;
    password: string;
    role_id: number;
}

export type LoginUser = Pick<User, "email" | "password">;

export type RegisterUser = Pick<User, "name" | "email" | "password" | "cellphone" | "role_id">;