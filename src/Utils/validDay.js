import { ERROR_MESSAGES } from 'Utils/constants';

const validDay = day => {
  const today = new Date();

  const selcetDayNum = day.getDay();
  if (day.getTime() > today.getTime()) return ERROR_MESSAGES.NOT_YET;
  else if (selcetDayNum === 0 || selcetDayNum === 6)
    return ERROR_MESSAGES.WEEKEND;
  else return 0;
};

export default validDay;
