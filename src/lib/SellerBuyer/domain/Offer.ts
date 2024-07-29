export type Offer = {
    id: number;
    clothId: number;
    buyerId: number;
    sellerId: number;
    statusId: number;
    offer: number;
}

export type NewOffer = Omit<Offer, 'id'>;