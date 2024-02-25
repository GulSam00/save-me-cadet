import { Modal } from '@mui/material';
import { isRegexPassword } from 'Utils';
import { AuthContext } from 'Store';
import { CRUDUserService } from 'API';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MODAL_TYPE } from 'Utils/constants';

const UpdatePasswordModal = () => {
  const { modalType, setModalType } = useContext(AuthContext);
  const [notiMessage, setNotiMessage] = useState({ msg: '', state: false });
  const [counter, setCounter] = useState(3);
  const [isCountDown, setIsCountDown] = useState(false);
  const oldPassword = useRef();
  const newPassword = useRef();
  const checkPassword = useRef();

  const handleClose = () => {
    setModalType(null);
    setNotiMessage({ msg: '', state: false });
    setCounter(3);
    setIsCountDown(false);
    oldPassword.current = '';
    newPassword.current = '';
    checkPassword.current = '';
  };
  const saveOldPassword = e => {
    oldPassword.current = e.target.value;
  };
  const saveNewPassword = e => {
    if (!e.target.value) {
      setNotiMessage({ msg: '', state: false });
      return;
    }
    newPassword.current = e.target.value;
    const regexResult = isRegexPassword(newPassword.current);
    setNotiMessage({
      msg: regexResult,
      state: regexResult.length ? false : true,
    });
  };
  const checkNewPassword = e => {
    checkPassword.current = e.target.value;
  };

  const updatePassword = async () => {
    if (
      !oldPassword.current ||
      !newPassword.current ||
      !checkPassword.current
    ) {
      setNotiMessage({
        msg: '항목을 다 입력해주세요.',
        state: false,
      });
      return;
    }
    if (newPassword.current !== checkPassword.current) {
      setNotiMessage({
        msg: '새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.',
        state: false,
      });
      return;
    }
    const res = await CRUDUserService.updatePassword(
      oldPassword.current,
      newPassword.current,
      checkPassword.current,
    );
    if (res) {
      setIsCountDown(true);
      setNotiMessage({
        msg: `변경 완료! ${counter}초 뒤 자동으로 닫힙니다`,
        state: true,
      });
    } else {
      setNotiMessage({ msg: '기존 비밀번호가 잘못 됐습니다.', state: false }); // TODO:
    }
  };

  const isSubmit = e => {
    if (e.key === 'Enter') updatePassword();
  };

  useEffect(() => {
    if (isCountDown && counter >= 0) {
      const countDown = setInterval(() => {
        setCounter(value => value - 1);
        setNotiMessage({
          msg: `변경 완료! ${counter - 1}초 뒤 자동으로 닫힙니다`,
          state: true,
        });
      }, 1000);
      return () => {
        clearInterval(countDown);
      };
    } else {
      handleClose();
    }
  }, [isCountDown, counter]);

  return (
    <>
      <Modal open={modalType === MODAL_TYPE.UPDATE_PW} onClose={handleClose}>
        <UpdateModalWrapper>
          <UpdatePasswordModalTitle>
            비밀번호 변경입니다
          </UpdatePasswordModalTitle>
          {/* TODO: 비밀번호 숨기기 / 보이기 버튼 추가 */}
          <PasswordInputForm
            placeholder="기존 비밀번호"
            type="password"
            onChange={saveOldPassword}
          />
          <PasswordInputForm
            placeholder="새 비밀번호"
            type="password"
            onChange={saveNewPassword}
          />
          <PasswordInputForm
            placeholder="새 비밀번호 확인"
            type="password"
            onKeyDown={isSubmit}
            onChange={checkNewPassword}
          />
          <NotiMessage isPossible={notiMessage.state}>
            {notiMessage.msg}
          </NotiMessage>
          <UpdateButton onClick={updatePassword}>변경</UpdateButton>
        </UpdateModalWrapper>
      </Modal>
    </>
  );
};

const UpdateModalWrapper = styled.div`
  background-color: #fff;
  padding: 40px 40px;
  border-radius: 5px;
  width: 570px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  text-align: center;
  font-family: 'BMJUA';
`;

const UpdatePasswordModalTitle = styled.div`
  font-size: 25px;
  margin: 10px 0;
`;

const PasswordInputForm = styled.input`
  border: 2px solid #868a8c;
  margin-top: 2%;
  padding-left: 10px;
  border-radius: 0.3em;
  height: 40px;
  width: 400px;
  font-size: 15px;
  font-family: 'BMJUA';
`;

const NotiMessage = styled.div`
  margin-top: 10px;
  color: ${props => (props.isPossible ? 'blue' : 'red')};
  font-size: 15px;
  height: 25px;
  font-family: 'BMJUA';
`;

const UpdateButton = styled.button`
  width: 60px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  color: white;
  background-color: #4870fd;
  font-size: 15px;
  font-weight: bold;
`;

export default UpdatePasswordModal;
