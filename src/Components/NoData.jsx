import { getMessage } from 'Utils';

import styled from 'styled-components';

const NoData = ({ code }) => {
  return <NoDataContainer>{getMessage(code)}</NoDataContainer>;
};

export default NoData;

const NoDataContainer = styled.div`
  color: #c0c0c0;
  text-align: center;
`;
