import { LoginUser, RegisterUser } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export const createUserService = (repository: UserRepository) => {
    return {
        login: async (user: LoginUser) => await repository.login(user),
        register: async (newUser: RegisterUser) => await repository.register(newUser),
        getUserById: async (id: number) => await repository.getUserById(id),
        update: async (id: number, updateData: Partial<RegisterUser>) => await repository.update(id, updateData)
    };
}