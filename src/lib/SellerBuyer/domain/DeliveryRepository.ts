import { Delivery, NewPendingDelivery } from "./Delivery";

export interface DeliveryRepository {
    getAllForSeller(sellerId: number): Promise<Delivery[]>;
    getAllForBuyer(buyerId: number): Promise<Delivery[]>;
    getById(id: number): Promise<Delivery>;
    save(delivery: NewPendingDelivery): Promise<void>;
    delete(id: number): Promise<void>;
}