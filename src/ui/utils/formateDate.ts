export default function formatDate(date: Date): string {
    const daysOfWeek: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dayOfWeek: string = daysOfWeek[date.getDay()];
    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();

    return `${dayOfWeek} ${day} de ${month} ${year}`;
}

export function getDayOfWeekFormatted(date: Date): string {
    const daysOfWeek: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return daysOfWeek[date.getDay()];
}

export function getDateWithoutDayOfWeek(date: Date): string {
    const months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = months[date.getMonth()];
    const year: number = date.getFullYear();

    return `${day} de ${month} ${year}`;
}

export const formatDateSimple = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so we add 1
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};
