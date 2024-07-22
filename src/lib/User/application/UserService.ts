import { LoginUser, RegisterUser } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export const createUserService = (repository: UserRepository) => {
    return {
        login: async (newUser: LoginUser) => await repository.login(newUser),
        register: async (user: RegisterUser) => await repository.register(user)
    };
}