import { ERROR_MESSAGES } from 'Utils/constants';

const checkDateTodo = day => {
  if (
    new Date().getTime() < day.getTime() ||
    new Date('2022-04-03').getTime() > day.getTime()
  )
    return ERROR_MESSAGES.NOT_YET;
  // return ERROR_MESSAGES.NO_AUTH;
};

export default checkDateTodo;
