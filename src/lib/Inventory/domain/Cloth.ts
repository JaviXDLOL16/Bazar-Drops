
export type ClothSize = 'chico' | 'mediano' | 'grande' | 'extra grande';
export type TypeOfCloth = 'playera' | 'pantalon' | 'sueter' | 'short' | 'otro';
export type ClothStatus = 'disponible' | 'vendido' | 'oculto';

export interface Cloth {
    buy: number;
    created_at: string;
    description: string;
    id: number;
    image: string;
    location: string;
    period_id: number;
    price: number;
    sellPrice: number;
    size: ClothSize;
    sold_at: string;
    status_id: ClothStatus;
    type: TypeOfCloth;
    uuid: string;
}

export type NewCloth = Omit<Cloth, 'id' | 'created_at' | 'sold_at' | 'uuid' | 'sellPrice'>;

export type ClothForBuyer = Omit<Cloth, 'buy' | 'location' | 'period_id'>;

