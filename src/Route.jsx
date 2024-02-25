import { Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage } from 'Pages';
import { SideBar, UpdatePasswordModal } from 'Components';

import styled from 'styled-components';

const MainRoute = () => {
  return (
    <>
      <SideBar />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BodyContainer>
      <UpdatePasswordModal />
    </>
  );
};

export default MainRoute;

const BodyContainer = styled.div`
  margin-left: 150px;
  width: calc(100% - 150px);
  overflow-y: scroll;
`;
