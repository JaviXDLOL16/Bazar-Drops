import { Delivery, NewPendingDelivery } from "../domain/Delivery";

const apiToDomainStatusId: Record<string, Delivery['statusId']> = {
    1: 'pendiente',
    2: 'entregado',
    3: 'cancelado',
};

export const transformApiToDomainDelivery = (apiDelivery: any): Delivery => {
    return {
        buyerId: apiDelivery.buyerId,
        cellPhone: apiDelivery.cellphone,
        clothId: apiDelivery.clothId,
        comments: apiDelivery.comments,
        date: apiDelivery.date,
        id: apiDelivery.id,
        location: apiDelivery.location,
        offerId: apiDelivery.offerId,
        sellerId: apiDelivery.sellerId,
        statusId: apiToDomainStatusId[apiDelivery.statusId],
        uuid: apiDelivery.uuid
    };
}

const domainToApiStatusId: Record<Delivery['statusId'], string> = {
    pendiente: '1',
    entregado: '2',
    cancelado: '3',
};

export const transformDomainToApi = (domainDelivery: NewPendingDelivery): any => {
    return {
        buyerId: domainDelivery.buyerId,
        cellphone: domainDelivery.cellPhone,
        clothId: domainDelivery.clothId,
        comments: domainDelivery.comments,
        date: domainDelivery.date,
        location: domainDelivery.location,
        offerId: domainDelivery.offerId,
        sellerId: domainDelivery.sellerId,
        statusId: domainToApiStatusId[domainDelivery.statusId],
    };
}