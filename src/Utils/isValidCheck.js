const isValidCheck = (selectUserInfo, myId, myRole, myTeam) => {
  //   // console.log(myId, myRole, myTeam);
  if (myRole !== '머슴' && selectUserInfo.id !== myId) return -1;
  if (myRole === '머슴' && selectUserInfo.team !== myTeam) return -2;
  return 0;
};

export default isValidCheck;
