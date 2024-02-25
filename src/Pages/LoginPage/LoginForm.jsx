import { useContext, useState } from 'react';
import styledComp from 'styled-components';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { AuthContext } from 'Store';
import { MODAL_TYPE } from 'Utils/constants';

const LoginForm = ({ onClickLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { setModalType } = useContext(AuthContext);

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
    onClickLogin({
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
    <>
      <LoginFormID>
        <LoginFormIDInput
          value={id}
          placeholder="인트라 ID"
          onChange={handleChangeId}
          onKeyPress={handlePressEnter}
        />
      </LoginFormID>
      <LoginFormPassword>
        <LoginFormPasswordInput
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={handleChangePassword}
          onKeyPress={handlePressEnter}
          // required
        />
      </LoginFormPassword>

      <LoginButton onClick={handleClick} variant="contained">
        로그인
      </LoginButton>
      <RegisterWrap>
        <RegisterButton
          onClick={() => {
            setModalType(MODAL_TYPE.REGISTER);
          }}
        >
          아직 회원이 아니신가요?
        </RegisterButton>
      </RegisterWrap>
    </>
  );
};

export default LoginForm;

const LoginFormID = styledComp.div`
  margin-top: 5%;
`;

const LoginFormIDInput = styledComp.input`
  padding-left: 10px;
  border-color: transparent;
  border-radius: 0.3em;
  height: 50px;
  width: 490px;
  font-size: 20px;
  font-family: 'BMJUA';
`;

const LoginFormPassword = styledComp.div``;
const LoginFormPasswordInput = styledComp.input`
  padding-left: 10px;
  border-color: transparent;
  border-radius: 0.3em;
  margin-top: 1%;
  height: 50px;
  width: 490px;
  font-size: 20px;
  font-family: 'BMJUA';
`;

const LoginButton = styled(Button)({
  borderRadius: '0.3em',
  fontFamily: 'BMJUA',
  fontSize: '20px',
  color: 'white',
  width: '510px',
  height: '2.5em',
  margin: '1em',
  backgroundColor: '#00aaff',
});

const RegisterButton = styled(Button)({
  marginRop: '5%',
  fontFamily: 'BMJUA',
  fontSize: '20px',
  textDecoration: 'underline',
  color: 'white',
  width: '250px',
});

const RegisterWrap = styledComp.div`
`;
