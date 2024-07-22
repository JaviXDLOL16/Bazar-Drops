import { NewPeriod, Period } from "./Period";

export interface PeriodRepository {
    getAll(userId: number): Promise<Period[]>;
    getById(id: number): Promise<Period>;
    save(period: NewPeriod): Promise<void>;
    delete(id: number): Promise<void>;
}