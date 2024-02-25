import { useState } from 'react';

import ShowToday from './ShowToday';
import DatePicker from 'react-datepicker';
import { add } from 'date-fns';
import styled from 'styled-components';

import Popover from '@mui/material/Popover';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import 'react-datepicker/dist/react-datepicker.css';

const CusDatePicker = ({ date, setDate, isWeekend }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChooseDate = select => {
    setDate(select);
    setAnchorEl(null);
  };

  const handleChangeDate = type => {
    let newDate = add(date, type);
    let dayOf = newDate.getDay();
    // if (!isWeekend) {
    //   if (dayOf === 0 || dayOf === 6) {
    //     const abs = Object.values(type)[0];
    //     while (dayOf === 0 || dayOf === 6) {
    //       newDate = add(newDate, { days: abs });
    //       dayOf = newDate.getDay();
    //     }
    //   }
    // }
    setDate(newDate);
  };

  // const isWeekday = date => {
  //   if (isWeekend) return true;
  //   const day = date.getDay();
  //   return day !== 0 && day !== 6;
  // };

  return (
    <DatePickerBody>
      <KeyboardDoubleArrowLeftIcon
        onClick={() => {
          handleChangeDate({ months: -1 });
        }}
      />
      <KeyboardArrowLeftIcon
        onClick={() => {
          handleChangeDate({ days: -1 });
        }}
      />
      <ShowToday date={date} />
      <CalendarTodayIcon onClick={handleClick} />

      <KeyboardArrowRightIcon
        onClick={() => {
          handleChangeDate({ days: 1 });
        }}
      />
      <KeyboardDoubleArrowRightIcon
        onClick={() => {
          handleChangeDate({ months: 1 });
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DatePicker
          selected={date}
          onChange={handleChooseDate}
          inline
          todayButton="오늘"
          // filterDate={isWeekday}
          maxDate={new Date()}
        />
      </Popover>
    </DatePickerBody>
  );
};

const DatePickerBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & svg {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
  }
`;

export default CusDatePicker;
