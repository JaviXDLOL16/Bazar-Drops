import { NewOffer, Offer } from "./Offer";

export interface OfferRepository {
    save(offer: NewOffer): Promise<void>;
    update(id: number, updateData: Partial<NewOffer>): Promise<void>;
    getAllBySellerId(sellerId: number): Promise<Offer[]>;
    getAllByBuyerId(buyerId: number): Promise<Offer[]>;
}