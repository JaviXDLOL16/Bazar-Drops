import { Cloth, ClothForBuyer, NewCloth } from "./Cloth";

export interface ClothRepository {
    getAll(): Promise<ClothForBuyer[]>;
    getById(id: number): Promise<ClothForBuyer>;
    save(cloth: NewCloth): Promise<void>;
    delete(id: string): Promise<void>;
}