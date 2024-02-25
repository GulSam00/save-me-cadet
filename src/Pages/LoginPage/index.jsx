import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'Store';
import { CRUDUserService, AllTableService } from 'API';

import LoginForm from './LoginForm';
import Register from './RegisterFormModal';

import { format } from 'date-fns';

import styled from 'styled-components';
import BugReportButton from 'Components/BugReportButton';

const LoginPage = () => {
  const navi = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogin = async body => {
    if (auth.isLoading) return;

    auth.setIsLoading(true);
    const result = await CRUDUserService.postLogin(body);
    console.log('result : ', result);
    if (!result) {
      alert('잘못된 아이디나 비밀번호 입니다!');
      return;
    }

    alert(`환영합니다, ${body.username}!`);
    localStorage.setItem('username', result.username);
    localStorage.setItem('role', result.role);
    auth.setStatus({ username: result.username, role: result.role }); // TODO: postLogin res에 role 담겨서 오는지 확인
    auth.setIsLoading(false);

    const date = new Date();
    const dateFormat = format(date, 'yyyyMMdd');
    const data = {
      [`${result.username}`]: {
        username: result.username,
        attendance: result.attendance,
        role: result.role,
        team: result.team,
        absentScore: result.absentScore,
      },
    };
    await AllTableService.updateTable(dateFormat, data);
    navi('/');
  };

  const handleRegister = async userLoginInfo => {
    if (auth.isLoading) return;
    auth.setIsLoading(true);

    const result = await CRUDUserService.postUser(userLoginInfo);
    if (result) {
      alert('회원가입 실패');
    }
    handleLogin(userLoginInfo);
    auth.setIsLoading(false);
  };
  return (
    <>
      <LoginBackground>
        <LoginMain>
          <img src="/asset/saveme.png" alt="logo" />
          <LoginMainTitle>구해줘 카뎃</LoginMainTitle>
        </LoginMain>
        <LoginForm onClickLogin={handleLogin} />
        <Register onClickRegister={handleRegister} />
        <FooterWrap>
          <BugReportButton />
        </FooterWrap>
      </LoginBackground>
    </>
  );
};

export default LoginPage;

const LoginBackground = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  background-image: url('/asset/login.jpg');
  background-size: cover;
  // background-color: #220646;

  // size
  width: 100%;
  height: 100%;
`;

const LoginMain = styled.div`
  margin-top: 5%;
`;
const LoginMainTitle = styled.span`
  font-size: 70px;
  margin: 20px;
  font-family: 'BMJUA';
  color: white;
`;

const FooterWrap = styled.footer`
  justify-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  margin-top: 1rem;
`;
