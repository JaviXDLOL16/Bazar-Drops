import axios from "axios";
import { DeliveryRepository } from "../domain/DeliveryRepository";
import { transformApiToDomainDelivery } from "./deliveryTransform";
import { Delivery } from "../domain/Delivery";

const sellerApiUrl = process.env.EXPO_PUBLIC_API_SELLER_URL;

export const createAxiosDeliveryRepository = (): DeliveryRepository => {
    return {
        getAllForBuyer: async (buyerId) => {
            const response = await axios.get(`${sellerApiUrl}/delivery/buyer/${buyerId}`);
            const deliveries = response.data.data.map(transformApiToDomainDelivery) as Delivery[];
            return deliveries;
        },
        getAllForSeller: async (sellerId) => {
            const response = await axios.get(`${sellerApiUrl}/delivery/seller/${sellerId}`);
            const deliveries = response.data.data.map(transformApiToDomainDelivery) as Delivery[];
            return deliveries;
        },
        getById: async (id) => {
            const response = await axios.get(`${sellerApiUrl}/delivery/${id}`);
            const delivery = response.data.data;
            return delivery;
        },
        save: async (delivery) => {
            await axios.post(`${sellerApiUrl}/delivery/create`, delivery);
        },
        delete: async (id) => {
            await axios.delete(`${sellerApiUrl}/delivery/${id}`);
        }
    }
}