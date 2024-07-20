
type ClothSize = 'chico' | 'mediano' | 'grande' | 'extra-grande';
type TypeOfCloth = 'playera' | 'pantalon' | 'sueter' | 'short' | 'otro';
type ClothStatus = 'disponible' | 'vendido' | 'oculto';

export interface Cloth {
    buy: number;
    description: string;
    id: number;
    image: string;
    type: TypeOfCloth;
    price: number;
    sellPrice: number;
    location: string;
    size: ClothSize;
    status_id: ClothStatus;
    sellerId: number;
}

export type ClothForBuyer = Omit<Cloth, 'buy' | 'location'>;

