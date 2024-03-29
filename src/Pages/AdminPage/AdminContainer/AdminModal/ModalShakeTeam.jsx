import { useState, useEffect } from 'react';
import { ModalBackground } from 'Components';
import { CRUDUserService } from 'API';

import styled from 'styled-components';

import Button from '@mui/material/Button';

const shuffleArray = array => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const ModalShakeTeam = ({ setIsOpen, attendUser, getUser, changeTable }) => {
  const [curUsers, setCurUsers] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  const teamList = ['RED', 'BLUE', 'NONE'];

  // getUser를 받아 내부에서 사용하도록 수정x
  const onClickChangeShuffleTeam = async (username, team) => {
    await CRUDUserService.updateUser(username, { team: team });
    getUser();
    changeTable();
  };

  const handleCloseModal = isAccept => {
    if (isAccept && isChanged) {
      curUsers?.map(user => {
        onClickChangeShuffleTeam(user.username, user.team);
      });
    }
    setIsOpen(false);
  };

  const handleShakeTeam = () => {
    setIsChanged(true);
    const shuffledUsers = shuffleArray(curUsers);

    const shuffledUsersLength = shuffledUsers.length;
    const teamLength = teamList.length - 1;

    for (let i = 0; i < shuffledUsersLength; i++) {
      shuffledUsers[i].team = teamList[i % teamLength];
    }
    setCurUsers([...shuffledUsers]);
  };

  useEffect(() => {
    setCurUsers(attendUser);
  }, []);

  return (
    <ModalBackground setIsOpen={setIsOpen}>
      <h1>현재 팀 현황</h1>
      <h3>참가한 사용자들만 보여줍니다.</h3>
      {teamList.map(team => {
        return (
          <Team key={team}>
            <h4>{team}</h4>
            <Members>
              {curUsers?.map((user, i) => {
                if (user.team === team)
                  return (
                    <MemberEach key={i} team={team}>
                      {user.username}
                    </MemberEach>
                  );
              })}
            </Members>
          </Team>
        );
      })}
      <div className="buttons">
        <Button onClick={handleShakeTeam}>팀 섞기</Button>
        <Button onClick={() => handleCloseModal(true)}>확인</Button>
        <Button onClick={() => handleCloseModal(false)}>취소</Button>
      </div>
    </ModalBackground>
  );
};

const Team = styled.div``;

const Members = styled.div`
  display: flex;
  flex-direction: row;
`;

const MemberEach = styled.div`
  border-radius: 10%;
  margin: 2px;
  padding: 2px;
  background-color: ${props =>
    props.team === 'NONE'
      ? '#e3e3e3'
      : props.team === 'BLUE'
      ? '#0079f0'
      : '#dc143c'};
`;
export default ModalShakeTeam;
