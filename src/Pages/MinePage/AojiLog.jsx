import { differenceInSeconds, parseISO } from 'date-fns';

import { format } from 'date-fns';

const fotmatDate = date => {
  if (!date) return '공부 중!';
  date = new Date(date);

  return format(date, 'HH:mm:ss');
};

const fotmatRecord = record => {
  if (record === 'doing study') return '00:00:00';
  const arr = record.split(':');
  const newRecord = arr.map(i => {
    return parseInt(i) < 10 ? '0' + i : i;
  });

  return newRecord.join(':');
};
const AojiLog = ({ data }) => {
  // console.log(data);
  const earnedPoint = (
    differenceInSeconds(parseISO(data.endAt), parseISO(data.startAt)) /
    60 /
    60 /
    8.0
  ).toFixed(2);

  return (
    <div className="row">
      <div>{fotmatDate(data.startAt)}</div>
      <div>{fotmatDate(data.endAt)}</div>
      <div>{fotmatRecord(data.recodeTime)}</div>
      <div>{!isNaN(earnedPoint) ? <>{earnedPoint}점</> : <>공부 중!</>}</div>

      <div>
        <div className="button">수정</div>
      </div>
    </div>
  );
};

export default AojiLog;