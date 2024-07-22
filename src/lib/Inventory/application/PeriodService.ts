import { NewPeriod } from "../domain/Period";
import { PeriodRepository } from "../domain/PeriodRepository";

export const createPeriodService = (repository: PeriodRepository) => {
    return {
        getAll: async (userId: number) => await repository.getAll(userId),
        getById: async (id: number) => await repository.getById(id),
        save: async (period: NewPeriod) => await repository.save(period),
        delete: async (id: number) => await repository.delete(id)
    };
}