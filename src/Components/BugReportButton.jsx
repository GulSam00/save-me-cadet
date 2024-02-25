import { BugReport } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { BUG_REPORT_URL } from 'Utils/constants';

const BugReportButton = ({ fontSize }) => {
  return (
    <>
      <IconButton
        aria-label="bug-report"
        color="error"
        onClick={() => {
          window.open(BUG_REPORT_URL), '_blank';
        }}
      >
        <BugReport fontSize={fontSize}></BugReport>
      </IconButton>
    </>
  );
};

export default BugReportButton;
