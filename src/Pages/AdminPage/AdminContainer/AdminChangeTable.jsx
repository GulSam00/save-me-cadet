import { CRUDUserService } from 'API';
import { TEAM_NAME } from 'Utils/constants';
import SelectedUser from './SelectedUser';

import styled from 'styled-components';

const AdminChangeTable = ({
  selectusername,
  rowData,
  getUser,
  username,
  auth,
}) => {
  const handleLogout = async () => {
    localStorage.clear();
    auth.setStatus(null);
  };

  const validChangeRole = () => {
    if (selectusername === username) {
      if (rowData.filter(data => data.role === 'ROLE_MANAGER').length === 1) {
        alert('머슴이 한 명 뿐입니다!');
        return -1;
      }
      const select = confirm(
        '다른 사람에게 머슴을 넘겨주셨나요? 변경하는 즉시 로그아웃됩니다.',
      );
      if (!select) return -1;
      handleLogout();
    }
    return 0;
  };

  const handleChangeAttend = async event => {
    if (event.target.value === '불참') {
      if (validChangeRole()) return; // 불참일 경우 NONE으로 바꾸기
      await CRUDUserService.updateUser(selectusername, {
        team: 'NONE',
      });
      await CRUDUserService.updateUser(selectusername, {
        role: '게스트',
      });
    } else if (event.target.value === '참가') {
      await CRUDUserService.updateUser(selectusername, {
        role: '일반',
      });
    }
    // TODO: 유저 참여 상태에 따라 NONE or 기본 팀(BLUE)로 설정(BACKEND)
    await CRUDUserService.updateUser(selectusername, {
      attendance: event.target.value,
    });
    getUser();
  };

  const handleChangeTeam = async event => {
    await CRUDUserService.updateUser(selectusername, {
      team: event.target.value,
    });
    getUser();
    // setSelectusername(null);
  };

  const handleChangeRole = async event => {
    if (validChangeRole()) return;

    await CRUDUserService.updateUser(selectusername, {
      role: event.target.value,
    });
    getUser();
  };

  return (
    <AdminChangeTableBody>
      <AdminChangeTableContainer>
        <AdminChangeTableTitle>멤버 정보 수정</AdminChangeTableTitle>
        자정(00:00)을 기준으로 수정사항이 출결표에 갱신됩니다
        {selectusername !== null && (
          <SelectedUser
            userInfo={rowData.find(array => array.username === selectusername)}
            onClickChangeAttend={handleChangeAttend}
            onClickChangeTeam={handleChangeTeam}
            onClickChangeRole={handleChangeRole}
          />
        )}
      </AdminChangeTableContainer>
    </AdminChangeTableBody>
  );
};

const AdminChangeTableBody = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 1em;
  padding: 1em;
  height: 50%;

  .action > * {
    color: #292929;
    width: 8em;
    height: 4em;
    margin: 0 0.5em 0 0.5em;
  }
  .user-status > * {
    margin: 0.4em;
  }

  .PARTICIPATED {
    color: black;
    border: 1px solid black;
    background-color: white;
  }

  .NOT_PARTICIPATED {
    color: white;
    background-color: black;
  }
  .RED {
    background-color: #dc143c;
  }
  .BLUE {
    background-color: #0079f0;
  }
  .ROLE_ADMIN {
    background-color: #ff8c00;
  }

  .ROLE_MANAGER {
    background-color: #ffff00;
  }

  .ROLE_USER {
    background-color: #aeb7ba;
  }
  .ROLE_UNAUTHORIZED {
    background-color: #575b5d;
  }
`;
const AdminChangeTableContainer = styled.div`
  padding: 1em;
  border-radius: 1em;
  text-align: left;
`;
const AdminChangeTableTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export default AdminChangeTable;
