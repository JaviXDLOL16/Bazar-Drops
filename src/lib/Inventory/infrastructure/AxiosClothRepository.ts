import axios from "axios";
import { Cloth, ClothForBuyer, NewCloth } from "../domain/Cloth";
import { ClothRepository } from "../domain/ClothRepository";
import { transformApiToDomain, transformDomainToApi } from "./transform";

const inventoryApiUrl = process.env.EXPO_PUBLIC_API_INVENTORY_URL;
const storageApiUrl = process.env.EXPO_PUBLIC_STORAGE_URL;
const storageKey = process.env.EXPO_PUBLIC_STORAGE_KEY;

export const createAxiosClothRepository = (): ClothRepository => {
    return {

        getAllByPediodAndStatusIdAvailable: async (periodId: number) => {
            const response = await axios.get(`${inventoryApiUrl}/cloth/status?status_id=1&period_id=${3}`);
            const clothes = response.data.data.map(transformApiToDomain) as Cloth[];
            return clothes;
        },
        getAllByPediodAndStatusIdSold: async (periodId: number) => {
            const response = await axios.get(`${inventoryApiUrl}/cloth/status?status_id=2&period_id=${3}`);
            const clothes = response.data.data.map(transformApiToDomain) as Cloth[];
            return clothes;
        },





        getAll: async () => {
            const response = await axios.get(`${inventoryApiUrl}/cloth`);
            const clothes = response.data.data.map(transformApiToDomain) as ClothForBuyer[];
            return clothes;
        },
        getAllByPeriod: async (periodId: number) => {
            const response = await axios.get(`${inventoryApiUrl}/cloth/period/${periodId}`);
            const clothes = response.data.data.map(transformApiToDomain) as Cloth[];
            return clothes;
        },

        getById: async (id: number) => {
            const response = await axios.get(`${inventoryApiUrl}/cloth/${id}`);
            const cloth = transformApiToDomain(response.data.data) as ClothForBuyer;
            return cloth;
        },
        save: async (cloth: NewCloth) => {
            cloth.image = await uploadImageAndReturnURL(cloth.image);
            await axios.post(`${inventoryApiUrl}/cloth/create`, transformDomainToApi(cloth));

        },
        delete: async (id: string) => {
            await axios.delete(`${inventoryApiUrl}/cloth/${id}`);

        }
    }
}

const uploadImageAndReturnURL = async (image: string) => {
    const formData = new FormData();
    formData.append('image', image || '');
    formData.append('key', `${storageKey}`);

    const response = await axios.post(`${storageApiUrl}/upload`, formData);
    return response.data.data.display_url;
}