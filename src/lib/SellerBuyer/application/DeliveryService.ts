import { NewPendingDelivery } from "../domain/Delivery";
import { DeliveryRepository } from "../domain/DeliveryRepository";

export const createDeliveryService = (repository: DeliveryRepository) => {
    return {
        getAllForSeller: async (sellerId: number) => await repository.getAllForSeller(sellerId),
        getAllForBuyer: async (buyerId: number) => await repository.getAllForBuyer(buyerId),
        getById: async (id: number) => await repository.getById(id),
        save: async (delivery: NewPendingDelivery) => await repository.save(delivery),
        delete: async (id: number) => await repository.delete(id)
    };
}