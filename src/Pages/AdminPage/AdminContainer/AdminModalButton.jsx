import Button from '@mui/material/Button';

import styled from 'styled-components';

const AdminModalButton = ({ setIsOpen }) => {
  return (
    <ModalButton>
      <FeatureModalButton>
        <Button
          onClick={() => {
            setIsOpen('find');
          }}
        >
          월렛 보상 대상
        </Button>

        <Button
          onClick={() => {
            setIsOpen('shake');
          }}
        >
          팀 섞기
        </Button>
        <Button
          onClick={() => {
            setIsOpen('todo');
          }}
        >
          머슴이 할 일
        </Button>
      </FeatureModalButton>
    </ModalButton>
  );
};

const ModalButton = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 150px;
    height: 50px;
    border: 1px solid #4870fd;
    color: 4870fd;
    margin: 5px;
  }
`;
const FeatureModalButton = styled.div``;
export default AdminModalButton;
