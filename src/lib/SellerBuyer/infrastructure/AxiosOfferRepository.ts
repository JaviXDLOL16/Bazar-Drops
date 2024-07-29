import axios from "axios";
import { NewOffer } from "../domain/Offer";
import { OfferRepository } from "../domain/OfferRepository";

const sellerApiUrl = process.env.EXPO_PUBLIC_API_SELLER_URL;

export const createAxiosOfferRepository = (): OfferRepository => {
    return {
        save: async (offer: NewOffer) => {
            await axios.post(`${sellerApiUrl}/offer/create`, offer);
        },
        update: async (id: number, updateData: Partial<NewOffer>) => {
            await axios.put(`${sellerApiUrl}/offer/update/${id}`, updateData);
        },
        getAllBySellerId: async (sellerId: number) => {
            const response = await axios.get(`${sellerApiUrl}/offer/seller/${sellerId}`);
            const offers = response.data.data;
            return offers;
        },
        getAllByBuyerId: async (buyerId: number) => {
            const response = await axios.get(`${sellerApiUrl}/offer/buyer/${buyerId}`);
            const offers = response.data.data;
            return offers;
        }
    }
}