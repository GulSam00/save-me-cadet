import { useState } from 'react';

import DatePicker from 'react-datepicker';
import { add } from 'date-fns';

import Popover from '@mui/material/Popover';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import 'react-datepicker/dist/react-datepicker.css';

const CusDatePicker = ({ date, setDate }) => {
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
    console.log(type);
    setDate(add(date, type));
  };

  return (
    <>
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
        />
      </Popover>
    </>
  );
};

export default CusDatePicker;
