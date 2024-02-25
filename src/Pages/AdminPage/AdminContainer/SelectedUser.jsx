import { useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ROLE_NAME, PARTICIPATE_NAME, VACATION } from 'Utils/constants';

const SelectedUser = ({
  userInfo,
  onClickChangeAttend,
  onClickChangeTeam,
  onClickChangeRole,
  onClickChangeVacation,
}) => {
  console.log('SEelecd : ', userInfo);
  return (
    <div className="box">
      <span className="title">현재 선택 : {userInfo.username}</span>

      <span className="user-status">
        <Chip label={userInfo.attendance} className={userInfo.attendance} />
        {userInfo.attendance === '참가' && (
          <>
            <Chip label={userInfo.team} className={userInfo.team} />
            <Chip label={userInfo.role} className={userInfo.role} />
          </>
        )}
      </span>

      <div className="action">
        <Select
          value={userInfo.attendance}
          onChange={onClickChangeAttend}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'참가'}>참가</MenuItem>
          <MenuItem value={'불참'}>불참</MenuItem>
        </Select>

        {userInfo.attendance === PARTICIPATE_NAME.PARTICIPATED && (
          <>
            <Select
              value={userInfo.team}
              onChange={onClickChangeTeam}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'RED'}>RED</MenuItem>
              <MenuItem value={'BLUE'}>BLUE</MenuItem>
              <MenuItem value={'NONE'}>NONE</MenuItem>
            </Select>
            <Select
              value={userInfo.role}
              onChange={onClickChangeRole}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'머슴'}>머슴</MenuItem>
              <MenuItem value={'일반'}>일반</MenuItem>
            </Select>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedUser;
