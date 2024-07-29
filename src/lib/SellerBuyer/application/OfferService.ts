import { NewOffer } from "../domain/Offer";
import { OfferRepository } from "../domain/OfferRepository";

export const createOfferService = (offerRepository: OfferRepository) => {
    return {
        save: async (offer: NewOffer) => await offerRepository.save(offer),
        update: async (id: number, updateData: Partial<NewOffer>) => await offerRepository.update(id, updateData),
        getAllBySellerId: async (sellerId: number) => await offerRepository.getAllBySellerId(sellerId),
        getAllByBuyerId: async (buyerId: number) => await offerRepository.getAllByBuyerId(buyerId)
    };
}