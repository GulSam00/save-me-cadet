import styled from 'styled-components';

const Golbal = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .warning {
    font-size: 30px;
    text-align: center;
    color: #c0c0c0;
  }
  .time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
  }
  .message {
    color: #c0c0c0;
  }
`;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #220646;
  height: 100%;
  width: 150px;
  .home {
    margin: 10px 0 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 35px;
      height: 35px;
      margin: 0 5px;
    }
    span {
      white-space: nowrap;
    }
  }
  .tabs {
    height: 100%;
  }
  .button {
    color: #ffffff;
    max-width: 13em;
  }
  .logout {
    text-align: center;
    border: 1px solid transparent;
    background-color: #110323;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Body = styled.div`
  margin-left: 150px;
  width: calc(100% - 150px);
  overflow-y: scroll;
`;

const GlobalStyled = { Golbal, SideBar, Body };

export default GlobalStyled;
