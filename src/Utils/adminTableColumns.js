const adminTableColumns = [
  {
    field: 'attendStatus',
    headerName: '참여 상태',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <div className={`${params.value} info`}>{params.value}</div>;
    },
  },
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <div className={`${params.value} info`}>{params.value}</div>;
    },
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
    renderCell: params => {
      return <div className={`${params.value} info`}>{params.value}</div>;
    },
  },
  {
    field: 'userName',
    headerName: '이름',
    type: 'string',
    width: 120,
  },

  {
    field: 'attendanceScore',
    headerName: '출석 횟수',
    type: 'number',
    width: 120,
  },

  {
    field: 'absentScore',
    headerName: '결석 점수',
    type: 'number',
    width: 120,
  },

  {
    field: 'vacation',
    headerName: '휴가',
    type: 'number',
    width: 120,
  },
];

export default adminTableColumns;
