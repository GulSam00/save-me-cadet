const vaildDay = day => {
  const today = new Date();

  const todayNum = today.getDay();
  const selcetDayNum = day.getDay();
  if (day.getTime() > today.getTime()) return -1;
  else if (selcetDayNum === 0 || selcetDayNum === 6) return -2;
  else return 0;
};

export default vaildDay;
