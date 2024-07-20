import { Cloth } from "../domain/Cloth";
import { ClothRepository } from "../domain/ClothRepository";

export const createClothService = (repository: ClothRepository) => {
    return {
        getAll: async () => await repository.getAll(),
        getById: async (id: number) => await repository.getById(id),
        save: async (cloth: Cloth) => await repository.save(cloth),
        delete: async (id: string) => await repository.delete(id)
    };
}
