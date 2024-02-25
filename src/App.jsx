import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext, AuthProvider } from 'Store';
import { LoginPage } from 'Pages';
import MainRoute from './Route';

import styled from 'styled-components';

const Loading = () => {
  return <div>로딩중</div>;
};

const OAuthCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (auth.status?.username) return children;
    else return <Navigate to="/login" />;
  }
};

const LoginCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (!auth.status?.username) return children;
    else return <Navigate to="/" />;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RootContainer>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginCheckRoute>
                  <LoginPage />
                </LoginCheckRoute>
              }
            />

            <Route
              path="/*"
              element={
                <OAuthCheckRoute>
                  <MainRoute />
                </OAuthCheckRoute>
              }
            />
          </Routes>
        </RootContainer>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

const RootContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
  }
`;
