export type statusId = 'actual' | 'finalizado';

export interface Period {
    clothes: number[];
    end: string;
    name: string;
    location: string;
    id: number;
    start: string;
    status_id: statusId;
    uuid: string;
}

export interface NewPeriod {
    start: string;
    end: string;
    name: string;
    location: string;
    status_id: statusId;
    user_id: number;
}