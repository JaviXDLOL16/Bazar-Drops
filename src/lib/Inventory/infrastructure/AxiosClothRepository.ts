import axios from "axios";
import { Cloth, ClothForBuyer } from "../domain/Cloth";
import { ClothRepository } from "../domain/ClothRepository";

const API_URL = 'https://bzrnds.free.beeceptor.com';

export const createAxiosClothRepository = (): ClothRepository => {
    return {
        getAll: async () => {
            const response = await axios.get(`${API_URL}/cloth`);
            const clothes = response.data as ClothForBuyer[];
            return clothes;
        },
        getById: async (id: number) => {
            const response = await fetch(`${API_URL}/cloth/1`)
            const cloth = (await response.json()) as Cloth;
            return cloth;
        },
        save: async (cloth: Cloth) => {
            await fetch('https://bazar-and-drops.free.beeceptor.com/cloth', {
                method: 'POST',
                body: JSON.stringify(cloth)
            });
        },
        delete: async (id: string) => {
            await fetch(`https://bazar-and-drops.free.beeceptor.com/cloth/${id}`, {
                method: 'DELETE'
            });
        }
    }
}