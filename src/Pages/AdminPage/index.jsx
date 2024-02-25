import { useState } from 'react';
import { ShowToday } from 'Components';
import AdminBody from './AdminBody';
// import NewUserForm from './NewUserForm';

import styled from 'styled-components';
import { useRef } from 'react';

const AdminPage = () => {
  const date = useRef(new Date());
  const [isOpen, setIsOpen] = useState('false');

  const pressESC = event => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      setIsOpen(false);
    }
  };

  return (
    <AdminBackground onKeyDown={pressESC} tabIndex={0}>
      <AdminHeader>
        <ShowToday date={date.current} />
      </AdminHeader>

      <AdminBody isOpen={isOpen} setIsOpen={setIsOpen} />
    </AdminBackground>
  );
};

const AdminBackground = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px 0px 50px;
`;
const AdminHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
`;
export default AdminPage;
