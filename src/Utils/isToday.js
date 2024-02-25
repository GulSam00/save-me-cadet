import { format } from 'date-fns';

const isToday = (today, date) => {
  return format(today, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
};

export default isToday;
