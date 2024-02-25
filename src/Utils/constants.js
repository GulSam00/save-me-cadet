const API_URL = 'https://www.savvemecadet.click/api';
const BUG_REPORT_URL =
  'https://github.com/saveme-cadet/LMS-Frontend/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D';
const CHECK_IN = 'checkIn';
const CHECK_OUT = 'checkOut';
const TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60000;

const TEAM_ID = {
  ALL: 0,
  RED: 1,
  BLUE: 2,
};

const PARTICIPATE_NAME = {
  PARTICIPATED: '참가',
  NOT_PARTICIPATED: '불참',
};

const TEAM_NAME = {
  RED: 'RED',
  BLUE: 'BLUE',
  NONE: 'NONE',
};

const ROLE_NAME = {
  ROLE_ADMIN: '관리자',
  ROLE_MANAGER: '머슴',
  ROLE_USER: '일반',
  ROLE_UNAUTHORIZED: '게스트',
};

const API_PARAMS = {
  GET_USERS_OFFSET: 0,
  GET_USERS_SIZE: 10,
};

const VACATION = {
  PLUS_HALF: 0.5,
  ZERO: 0,
  MINUS_HALF: -0.5,
};

const ERROR_MESSAGES = {
  NO_DATA: 'NO_DATA',
  NO_AUTH: 'NO_AUTH',
  NOT_YET: 'NOT_YET',
  WEEKEND: 'WEEKEND',
};

const MODAL_TYPE = {
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  ISSUE_PW: 'ISSUE_PW',
  UPDATE_PW: 'UPDATE_PW',
  REGISTER: 'REGISTER',
};

const CUSTOM_ERR_CODE = ['S5001', 'S5002', 'S5003', 'S5004', 'S5005', 'S5002'];

export {
  TIMEZONE_OFFSET,
  CHECK_IN,
  CHECK_OUT,
  PARTICIPATE_NAME,
  TEAM_NAME,
  ROLE_NAME,
  TEAM_ID,
  API_URL,
  API_PARAMS,
  VACATION,
  ERROR_MESSAGES,
  MODAL_TYPE,
  CUSTOM_ERR_CODE,
  BUG_REPORT_URL,
};
