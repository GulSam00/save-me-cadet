import { adminTableColumns } from 'Utils';

import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DataGrid } from '@mui/x-data-grid';

const AdminTable = ({
  tab,
  setTab,
  rowData,
  updateSelectRowData,
  selectRowData,
  setSelectusername,
}) => {
  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectRowData(rowData, dstTab);
  };

  const handleCellClick = e => {
    console.log(e.row.username);
    setSelectusername(e.row.username);
  };

  return (
    <AdminTableBody>
      <AdminTableContainer>
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="전체 보기" />
          <Tab label="참가한 사용자" />
          <Tab label="불참한 사용자" />
        </Tabs>
        {selectRowData && (
          <DataGrid
            rows={selectRowData}
            columns={adminTableColumns}
            onCellClick={handleCellClick}
            hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
            hideFooterSelectedRowCount={true} // row count 숨기기
          />
        )}
      </AdminTableContainer>
    </AdminTableBody>
  );
};

const AdminTableBody = styled.div`
  margin: 1em 0 1em 0;
  border: 1px solid #c0c0c0;
  padding: 1em;

  height: 70%;
  border-radius: 1em;
`;
const AdminTableContainer = styled.div`
  padding: 1em;
  border-radius: 1em;
  // border: 1px solid #dbdbdb;
  text-align: left;
  height: 30em;
  margin: 1em;
  margin-bottom: 2em;

  .info {
    width: 8em;
    padding: 0.2em;
    border-radius: 10em;
    text-align: center;
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

export default AdminTable;
