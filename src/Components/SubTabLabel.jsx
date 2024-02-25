import React from 'react';
import styled from 'styled-components';

const SubTabLabel = ({ title, fontSize = 'medium' }) => {
  return (
    <>
      <SubTabTitle fontSize={fontSize}>{title}</SubTabTitle>
    </>
  );
};
const SubTabTitle = styled.div`
  font-family: 'BMJUA';
  font-size: ${props => (props.fontSize === 'large' ? '20px' : props.fontSize)};
  color: white;
`;

export default SubTabLabel;
