import styled from 'styled-components';

import Button from '@mui/material/Button';

const ModalAttendLeaderboard = ({ setIsOpen, attendUser }) => {
  const sortArray = attendUser.sort((a, b) => {
    if (a.attendanceScore === b.attendanceScore) {
      if (a.absentScore < b.absentScore) return -1;
      else if (a.absentScore > b.absentScore) return 1;
      // 아오지 업데이트 되면 교체
      else return 0;
    }
    if (a.attendanceScore > b.attendanceScore) return -1;
    if (a.attendanceScore < b.attendanceScore) return 1;
    return 0;
  });
  // const isVaildLeaderboard = index => {
  //   if (sortArray.length <= index) return -1;
  //   if (sortArray[index].attendanceScore === 0) return -1;
  //   return 0;
  // };
  return (
    <ModalAttendLeaderboardBody>
      <h1>월렛 보상 대상</h1>
      <h3>
        생존자에게 5월렛, 출석 우수자 3인에게 추가 월렛이 차등 지급(3, 2,
        1)됩니다.
      </h3>
      <h3>출석 점수가 동일할 경우, 결석 시간을 비교합니다.</h3>
      {/* {sortArray.map((e, i) => {
        return (
          <h1 key={i}>
            {i + 1}등 - {e.username} {e.attendanceScore}
          </h1>
        );
      })} */}
      {attendUser.length === 0 ? (
        ''
      ) : (
        <h1>
          🥇{sortArray[0].username}🥇 - 출석점수 {sortArray[0].attendanceScore}
          점 - 결석점수 {sortArray[0].absentScore}점
        </h1>
      )}
      {attendUser.length <= 1 ? (
        ''
      ) : (
        <h1>
          🥈{sortArray[1].username}🥈 - 출석점수 {sortArray[1].attendanceScore}
          점 - 결석점수 {sortArray[1].absentScore}점
        </h1>
      )}
      {attendUser.length <= 2 ? (
        ''
      ) : (
        <h1>
          🥉{sortArray[2].username}🥉 - 출석점수 {sortArray[2].attendanceScore}
          점 - 결석점수 {sortArray[2].absentScore}점
        </h1>
      )}
      <Button onClick={() => setIsOpen(false)}>확인</Button>
      <Button onClick={() => setIsOpen(false)}>취소</Button>
    </ModalAttendLeaderboardBody>
  );
};
const ModalAttendLeaderboardBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(216, 216, 216, 0.9);
`;
export default ModalAttendLeaderboard;
