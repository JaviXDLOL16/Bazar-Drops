import { Cloth, NewCloth } from "../domain/Cloth";

const apiToDomainSizeMap: Record<string, Cloth['size']> = {
    S: 'chico',
    M: 'mediano',
    L: 'grande',
    XL: 'extra grande'
};

const apiToDomainStatusMap: Record<string, Cloth['status_id']> = {
    1: 'disponible',
    2: 'vendido',
    3: 'oculto'
};

const apiToDomainTypeMap: Record<string, Cloth['type']> = {
    shirt: 'playera',
    pants: 'pantalon',
    sweater: 'sueter',
    short: 'short',
    other: 'otro'
};

export const transformApiToDomainCloth = (apiCloth: any): Cloth => {
    return {
        buy: apiCloth.buy,
        created_at: apiCloth.created_at,
        description: apiCloth.description,
        id: apiCloth.id,
        image: apiCloth.image,
        location: apiCloth.location,
        period_id: apiCloth.period_id,
        price: apiCloth.price,
        sellPrice: apiCloth.sellPrice,
        size: apiToDomainSizeMap[apiCloth.size],
        sold_at: apiCloth.sold_at,
        status_id: apiToDomainStatusMap[apiCloth.status_id],
        type: apiToDomainTypeMap[apiCloth.type],
        uuid: apiCloth.uuid
    };
};

const domainToApiSizeMap: Record<Cloth['size'], string> = {
    chico: 'S',
    mediano: 'M',
    grande: 'L',
    'extra grande': 'XL'
};

export { domainToApiSizeMap as sizeSimpleText };

const domainToApiStatusMap: Record<Cloth['status_id'], string> = {
    disponible: '1',
    vendido: '2',
    oculto: '3'
};

const domainToApiTypeMap: Record<Cloth['type'], string> = {
    playera: 'shirt',
    pantalon: 'pants',
    sueter: 'sweater',
    short: 'short',
    otro: 'other'
};

export const transformDomainClothToApi = (domainCloth: NewCloth): any => {
    return {
        buy: domainCloth.buy,
        description: domainCloth.description,
        image: domainCloth.image,
        location: domainCloth.location,
        period_id: domainCloth.period_id,
        price: domainCloth.price,
        sellPrice: domainCloth.sellPrice,
        size: domainToApiSizeMap[domainCloth.size],
        status_id: domainToApiStatusMap[domainCloth.status_id],
        type: domainToApiTypeMap[domainCloth.type],
    };
};