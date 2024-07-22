import { Cloth, NewCloth } from "../domain/Cloth";
import { ClothRepository } from "../domain/ClothRepository";

export const createClothService = (repository: ClothRepository) => {
    return {
        getAll: async () => await repository.getAll(),
        getAllByPeriod: async (periodId: number) => await repository.getAllByPeriod(periodId),
        getAllByPediodAndStatusIdAvailable: async (periodId: number) => await repository.getAllByPediodAndStatusIdAvailable(periodId),
        getAllByPediodAndStatusIdSold: async (periodId: number) => await repository.getAllByPediodAndStatusIdSold(periodId),
        getById: async (id: number) => await repository.getById(id),
        save: async (cloth: NewCloth) => await repository.save(cloth),
        delete: async (id: string) => await repository.delete(id)
    };
}
