import { Cloth, ClothForBuyer, NewCloth } from "./Cloth";

export interface ClothRepository {
    getAll(): Promise<ClothForBuyer[]>;
    getAllByPeriod(periodId: number): Promise<Cloth[]>;
    getAllByPediodAndStatusIdAvailable(periodId: number): Promise<Cloth[]>;
    getAllByPediodAndStatusIdSold(periodId: number): Promise<Cloth[]>;
    getById(id: number): Promise<ClothForBuyer>;
    save(cloth: NewCloth): Promise<void>;
    delete(id: string): Promise<void>;
}