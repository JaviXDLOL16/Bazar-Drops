import axios from "axios";
import { Cloth, ClothForBuyer, NewCloth } from "../domain/Cloth";
import { ClothRepository } from "../domain/ClothRepository";
import { transformApiToDomain } from "./transform";

const API_URL = 'https://bazaranddrops.ddns.net/inventoryService/api';

export const createAxiosClothRepository = (): ClothRepository => {
    return {
        getAll: async () => {
            const response = await axios.get(`${API_URL}/cloth`);
            const clothes = response.data.data.map(transformApiToDomain) as ClothForBuyer[];
            return clothes;
        },
        getById: async (id: number) => {
            const response = await fetch(`${API_URL}/cloth/1`)
            const cloth = (await response.json()) as Cloth;
            return cloth;
        },
        save: async (cloth: NewCloth) => {
            const formData = new FormData();
            console.log(cloth.image);
            formData.append('image', cloth.image);
            formData.append('key', 'e7866c01df5c8cbde422795a0a743514');

            fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        },
        delete: async (id: string) => {
            await axios.delete(`${API_URL}/cloth/${id}`);

        }
    }
}

const uploadImageAndReturnURL = async (image: string) => {

    const formData = new FormData();
    formData.append('image', image);
    console.log('dentro del metodo')
    const uploadResponse = await axios.post(`https://api.imgbb.com/1/upload?key=e7866c01df5c8cbde422795a0a743514`, formData);
    console.log(uploadResponse.data);
}