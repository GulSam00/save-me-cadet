import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styled from 'styled-components';

const UserGuide = ({ rowData, username }) => {
  const myInfo = rowData.find(array => array.id === +username);

  return (
    <>
      {myInfo !== undefined && (
        <StyledUserGuide>
          <Alert severity="info" className={myInfo.team}>
            <AlertTitle>
              <strong>안녕하세요, {myInfo.name}!</strong>
            </AlertTitle>
            당신의 팀은 {myInfo.team}
            팀입니다!
          </Alert>
          <Alert severity="info" className={myInfo.role}>
            {myInfo.role === 'ROLE_MANAGER' ? (
              <>
                <AlertTitle>
                  <strong>당신은 이번 주 머슴입니다!</strong>
                </AlertTitle>
                42 게더 타운에서 {myInfo.team} 팀 체크인, 체크 아웃을
                진행해주세요!
              </>
            ) : (
              <>
                <AlertTitle>
                  <strong>당신은 이번 주 카뎃입니다!</strong>
                </AlertTitle>
                오늘 목표를 작성하고 42 게더 타운에서 머슴이 진행하는 체크인,
                체크아웃에 참가해주세요!
              </>
            )}
          </Alert>
        </StyledUserGuide>
      )}
    </>
  );
};

export default UserGuide;

const StyledUserGuide = styled.div`
  .red {
    background-color: #ee3e61;
  }
  .blue {
    background-color: #0079f0;
  }
  .머슴 {
    background-color: yellow;
  }
  .일반 {
    background-color: #cccccc;
  }
`;
