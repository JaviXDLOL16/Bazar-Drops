import { Cloth } from "../domain/Cloth";

const apiToDomainSizeMap: Record<string, Cloth['size']> = {
    S: 'chico',
    M: 'mediano',
    L: 'grande',
    XL: 'extra-grande'
};

const apiToDomainStatusMap: Record<string, Cloth['status_id']> = {
    available: 'disponible',
    sold: 'vendido',
    hidden: 'oculto'
};

export const transformApiToDomain = (apiCloth: any): Cloth => {
    return {
        buy: apiCloth.buy,
        description: apiCloth.description,
        id: apiCloth.id,
        image: apiCloth.image,
        type: apiCloth.type,
        price: apiCloth.price,
        sellPrice: apiCloth.sellPrice,
        location: apiCloth.location,
        size: apiToDomainSizeMap[apiCloth.size],
        status_id: apiToDomainStatusMap[apiCloth.status],
        sellerId: apiCloth.sellerId
    };
};
