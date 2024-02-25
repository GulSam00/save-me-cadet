import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalBackground = ({ setIsOpen, children }) => {
  const modalRef = useRef();

  const handleModalClose = e => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  };

  return (
    <ModalBackgroundContainer onClick={handleModalClose} ref={modalRef}>
      <ModalBody>{children}</ModalBody>
    </ModalBackgroundContainer>
  );
};
const ModalBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(216, 216, 216, 0.9);
  z-index: 100;
`;

const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60%;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .buttons {
    // 중앙 배치
    display: flex;
    justify-content: center;
  }
`;

export default ModalBackground;
