import React from 'react';
import { GetCheckIcons } from 'Components';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { ROLE_NAME } from 'Utils/constants';

const mainTableColumns = [
  {
    field: 'team',
    headerName: '팀',
    width: 120,

    // renderCell: params => {
    //   return <div className={`${params.value} info`}>{params.value}</div>;
    // },
  },
  {
    field: 'role',
    headerName: '역할',
    width: 120,

    // renderCell: params => {
    //   return (
    //     <div className={`${params.value} info`}>{ROLE_NAME[params.value]}</div>
    //   );
    // },
  },
  {
    field: 'username',
    headerName: '이름',
    width: 120,
  },
  {
    field: 'attendanceScore',
    headerName: '출석 점수',
    width: 120,
  },
  {
    field: 'absentScore',
    headerName: '결석 점수',
    width: 120,
  },

  {
    field: 'checkIn',
    headerName: '체크인',
    width: 120,

    renderCell: params => {
      return <GetCheckIcons type={params.value} />;
    },
  },
  {
    field: 'checkOut',
    headerName: '체크아웃',
    width: 120,
    editable: true,

    renderCell: params => {
      return <GetCheckIcons type={params.value} />;
    },
  },
];

export default mainTableColumns;
