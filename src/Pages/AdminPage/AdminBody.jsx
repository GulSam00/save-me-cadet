import { useContext } from 'react';
import { AuthContext } from 'Store';
import { NotValid } from 'Components';
import { ROLE_NAME, ERROR_MESSAGES } from 'Utils/constants';

import AdminContainer from './AdminContainer';

const AdminBody = ({ isOpen, setIsOpen }) => {
  const auth = useContext(AuthContext);
  const userRole = auth.status.role;
  const username = auth.status.username;

  const isAuth = () => {
    if (userRole === ROLE_NAME.ROLE_MANAGER) return true;
    if (userRole === ROLE_NAME.ROLE_ADMIN) return true;
    return false;
  };
  return (
    <>
      {isAuth() ? (
        <AdminContainer
          auth={auth}
          username={username}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <NotValid code={ERROR_MESSAGES.NO_AUTH} />
      )}
    </>
  );
};

export default AdminBody;
