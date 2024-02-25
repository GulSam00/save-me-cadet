import { ROLE_NAME } from './constants';

const isWrongAccess = myRole => {
  if (myRole === ROLE_NAME.ROLE_MANAGER || myRole === ROLE_NAME.ROLE_ADMIN) {
    return 0;
  }
  return -1;
};

export default isWrongAccess;
