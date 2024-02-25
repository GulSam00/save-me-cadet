import { useState, useContext } from 'react';
import { AuthContext } from 'Store';
import styledComp from 'styled-components';
import { isRegexPassword } from 'Utils';

import { styled } from '@mui/material/styles';
import { Button, Modal } from '@mui/material';
import { MODAL_TYPE } from 'Utils/constants';

const Register = ({ onClickRegister }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const { modalType, setModalType } = useContext(AuthContext);

  const handleClose = () => {
    setModalType(null);
  };

  const handleChangeId = event => {
    setId(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
    if (!id || !password) {
      alert('전부 입력해주세요!');
      return;
    }

    onClickRegister({
      username: id,
      password: password,
    });
    setId('');
    setPassword('');
  };
  const handlePressEnter = e => {
    if (e.key === 'Enter') handleClick();
  };
  return (
    <Modal open={modalType === MODAL_TYPE.REGISTER} onClose={handleClose}>
      <RegisterMain>
        <RegisterWelcome>
          <h2>환영합니다!</h2>
          <h3>새로운 회원이 되어 카뎃을 구해주세요!</h3>
        </RegisterWelcome>
        <RegisterInputForm>
          <RegisterInput
            value={id}
            placeholder="인트라 ID"
            onChange={handleChangeId}
            onKeyPress={handlePressEnter}
            autoFocus
          />
          <RegisterInput
            value={password}
            placeholder="비밀번호"
            onChange={handleChangePassword}
            onKeyPress={handlePressEnter}
            type="password"
            maxLength={30}
          />
        </RegisterInputForm>
        <LoginAlert>
          {isAlert && (
            <>
              비밀번호는 길이 8~30자에 영어 대문자, 영어 소문자, 특수문자,
              숫자를 포함해야 합니다.
            </>
          )}
        </LoginAlert>
        <LoginButton variant="contained" onClick={handleClick}>
          함께하기!
        </LoginButton>
        <BackButton
          onClick={() => {
            setModalType(null);
            setIsAlert(false);
          }}
        >
          되돌아가기
        </BackButton>
      </RegisterMain>
    </Modal>
  );
};

export default Register;

const RegisterMain = styledComp.div`
background-color: #fff;
padding: 40px 40px;
border-radius: 5px;
width: 700px;
height: 600px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
box-sizing: border-box;
text-align: center;
font-family: 'BMJUA';
font-size: 20px;
`;

const RegisterWelcome = styledComp.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-family: 'BMJUA';
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
  }
`;

const RegisterInputForm = styledComp.div`
  margin-top: 5%;
`;

const RegisterInput = styledComp.input`
  border: 2px solid #868a8c;
  margin-top: 2%;
  padding-left: 10px;
  border-radius: 0.3em;
  height: 50px;
  width: 490px;
  font-size: 20px;
  font-family: 'BMJUA';
`;

const LoginAlert = styledComp.div`
  margin-top: 2%;
  margin-bottom: 2%;
  height: 30px;
  font-size: 18px;
`;

const LoginButton = styled(Button)({
  borderRadius: '0.3em',
  fontFamily: 'BMJUA',
  fontSize: '20px',
  color: 'white',
  width: '510px',
  height: '2.5em',
  backgroundColor: '#00aaff',
});

const BackButton = styled(Button)({
  marginTop: '30px',
  fontFamily: 'BMJUA',
  fontSize: '20px',
  textDecoration: 'underline',
  color: 'black',
  width: '150px',
});
