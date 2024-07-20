import { Cloth, ClothForBuyer } from "./Cloth";

export interface ClothRepository {
    getAll(): Promise<ClothForBuyer[]>;
    getById(id: number): Promise<ClothForBuyer>;
    save(cloth: Cloth): Promise<void>;
    delete(id: string): Promise<void>;
}