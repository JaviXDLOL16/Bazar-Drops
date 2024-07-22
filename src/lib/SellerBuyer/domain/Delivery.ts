export type DeliveryStatus = 'pendiente' | 'vendido' | 'cancelado';

export type Delivery = {
    buyerId: number;
    cellPhone: string;
    clothId: number;
    comments: string;
    date: string;
    id: number;
    location: string;
    offerId: number;
    sellerId: number;
    statusId: DeliveryStatus;
    uuid: string;
};

export type NewPendingDelivery = Omit<Delivery, 'id' | 'uuid'>;