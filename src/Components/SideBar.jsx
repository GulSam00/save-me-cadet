import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from 'Store';
import { CRUDUserService } from 'API';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styled from 'styled-components';
import { MODAL_TYPE } from 'Utils/constants';
import BugReportButton from './BugReportButton';
import { IconButton } from '@mui/material';
import { Groups, LockReset } from '@mui/icons-material';
import SubTabLabel from './SubTabLabel';

const gatherTownLink = 'https://app.gather.town/app/Zq3peLuvz5isVQ0f/42seoul';

const SideBar = () => {
  const [curPage, setCurPage] = useState(null);
  const navi = useNavigate();
  const loca = useLocation();
  const auth = useContext(AuthContext);

  const handleChangePage = (event, value) => {
    setCurPage(value);
    navi(`/${value}`);
  };

  const handleClickLogout = () => {
    localStorage.clear();
    auth.setStatus(null);
  };

  useEffect(() => {
    let path = loca.pathname.split('/')[1];
    if (!path) path = '';
    setCurPage(path);
  }, []);

  return (
    <SideBarContainer>
      <HomeButton
        onClick={() => {
          navi('/');
          setCurPage('');
        }}
      >
        <img src="asset/saveme.png" alt="saveme" />
        <span>구해줘 카뎃</span>
      </HomeButton>
      {curPage !== null && (
        <Tabs
          orientation="vertical"
          value={curPage}
          onChange={handleChangePage}
          className="tabs"
        >
          <Tab
            className="button"
            label={<SubTabLabel title="출결표" />}
            value=""
          />
          {/* <Tab
            className="button"
            label={<SubTabLabel title="오늘 할 일" />}
            value="todo"
          /> */}

          <Tab
            className="button"
            label={<SubTabLabel title="머슴" />}
            value="admin"
          />
          <FootWrap>
            <IconButton
              aria-label="redirect-gatherTown"
              color="info"
              onClick={() => window.open(gatherTownLink, '_blank')}
            >
              <Groups fontSize="medium"></Groups>
            </IconButton>
            <IconButton
              aria-label="reset-password"
              color="secondary"
              onClick={() => {
                auth.setModalType(MODAL_TYPE.UPDATE_PW);
              }}
            >
              <LockReset fontSize="medium"></LockReset>
            </IconButton>
            <BugReportButton fontSize="medium" />
          </FootWrap>

          <Tab
            className="button logout"
            label={<SubTabLabel title="로그아웃" fontSize="large" />}
            onClick={handleClickLogout}
            value="login"
          />
        </Tabs>
      )}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #220646;
  height: 100%;
  width: 150px;
  font-family: 'BMJUA';

  .tabs {
    height: 100%;
  }
  .sub-tab {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
  }

  .button {
    color: #ffffff;
    max-width: 13em;
  }
  .logout {
    text-align: center;
    border: 1px solid transparent;
    background-color: #110323;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    font-size: 20px;
    font-weight: bold;
  }
`;

const HomeButton = styled.div`
  margin: 10px 0 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
    margin: 0 5px;
  }
  span {
    white-space: nowrap;
    font-size: large;
  }
`;

const FootWrap = styled.footer`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translate(-50%, 0%);
`;
