import { NewPeriod, Period } from "../domain/Period";

const apiToDomainStatusid: Record<string, Period['status_id']> = {
    1: 'actual',
    2: 'finalizado',
};

export const transformApiToDomainPeriod = (apiPeriod: any): Period => {
    return {
        clothes: apiPeriod.clothes,
        end: apiPeriod.end,
        location: apiPeriod.location,
        name: apiPeriod.name,
        id: apiPeriod.id,
        start: apiPeriod.start,
        status_id: apiToDomainStatusid[apiPeriod.status_id],
        uuid: apiPeriod.uuid
    };
}

const domainToApiStatusid: Record<Period['status_id'], string> = {
    actual: '1',
    finalizado: '2',
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so we add 1
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const transformDomainToApiPeriod = (domainPeriod: NewPeriod): any => {
    return {
        start: formatDate(domainPeriod.start),
        end: formatDate(domainPeriod.end),
        //name: domainPeriod.name,
        //location: domainPeriod.location,
        status_id: domainToApiStatusid[domainPeriod.status_id],
        user_id: domainPeriod.user_id
    };
}