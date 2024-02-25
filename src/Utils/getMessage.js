import { ERROR_MESSAGES } from 'Utils/constants';

const getMessage = code => {
  if (code === ERROR_MESSAGES.NO_DATA) return '존재하는 데이터가 없습니다';
  if (code === ERROR_MESSAGES.NO_AUTH) return '접근 권한이 없는 페이지 입니다';
  else if (code === ERROR_MESSAGES.NOT_YET)
    return '아직 진행하지 않은 날짜입니다';
  else if (code === ERROR_MESSAGES.WEEKEND)
    return '오늘은 주말입니다! 추가 공부를 하신다면 아오지로!';
};

export default getMessage;
