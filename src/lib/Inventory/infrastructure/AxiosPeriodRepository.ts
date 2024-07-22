import { Period } from "../domain/Period";
import { PeriodRepository } from "../domain/PeriodRepository";
import axios from "axios";
import { transformApiToDomainPeriod, transformDomainToApi } from "./periodTransform";

const inventoryApiUrl = process.env.EXPO_PUBLIC_API_INVENTORY_URL;

export const createAxiosPeriodRepository = (): PeriodRepository => {
    return {
        getAll: async (userId: number) => {
            const response = await axios.get(`${inventoryApiUrl}/period/user/${userId}`);
            const periods = response.data.data.map(transformApiToDomainPeriod) as Period[];
            return periods;
        },
        getById: async (id: number) => {
            const response = await axios.get(`${inventoryApiUrl}/period/${id}`);
            const period = transformApiToDomainPeriod(response.data.data) as Period;
            return period;
        },
        save: async (period) => {
            await axios.post(`${inventoryApiUrl}/period/create`, transformDomainToApi(period));
        },
        delete: async (id: number) => {
            await axios.delete(`${inventoryApiUrl}/period/${id}`);
        }
    }

}