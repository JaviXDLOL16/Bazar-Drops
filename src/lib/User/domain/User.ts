type AccountType = "vendedor" | "comprador";

export type UserRole = 'vendedor' | 'comprador';

export interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    accountType: AccountType;
    created_at: string;
    updated_at: string;
}

export type LoginUser = Pick<User, "email" | "password">;

export type RegisterUser = Pick<User, "name" | "phoneNumber" | "email" | "password" | "accountType">;