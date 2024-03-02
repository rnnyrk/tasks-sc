import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export function formatDate(date: Date, dateFormat = 'dd-MM-yyyy'): string {
  return format(date, dateFormat, { locale: nl });
}
