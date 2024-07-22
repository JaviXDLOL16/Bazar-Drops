import { formatDateSimple } from "src/utils/formateDate";
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

export const transformDomainToApi = (domainPeriod: NewPeriod): any => {
    return {
        start: formatDateSimple(domainPeriod.start),
        end: formatDateSimple(domainPeriod.end),
        //name: domainPeriod.name,
        //location: domainPeriod.location,
        status_id: domainToApiStatusid[domainPeriod.status_id],
        user_id: domainPeriod.user_id
    };
}