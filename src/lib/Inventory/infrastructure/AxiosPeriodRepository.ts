import { Period } from "../domain/Period";
import { PeriodRepository } from "../domain/PeriodRepository";
import axios from "axios";
import { transformApiToDomainPeriod, transformDomainToApiPeriod } from "./periodTransform";


export const createAxiosPeriodRepository = (): PeriodRepository => {
    return {
        getAll: async (userId: number) => {
            const response = await axios.get(`${process.env.EXPO_PUBLIC_API_INVENTORY_URL}/period/user/${userId}`);
            const periods = response.data.data.map(transformApiToDomainPeriod) as Period[];
            console.log(periods);
            return periods;
        },
        getById: async (id: number) => {
            const response = await axios.get(`${process.env.EXPO_PUBLIC_API_INVENTORY_URL}/period/${id}`);
            const period = response.data.data.map(transformDomainToApiPeriod) as Period;
            return period;
        },
        save: async (period) => {
            console.log(transformDomainToApiPeriod(period));
            await axios.post(`${process.env.EXPO_PUBLIC_API_INVENTORY_URL}/period/create`, transformDomainToApiPeriod(period));
        },
        delete: async (id: number) => {
            await axios.delete(`${process.env.EXPO_PUBLIC_API_INVENTORY_URL}/period/${id}`);
        }
    }

}