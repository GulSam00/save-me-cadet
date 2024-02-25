import { CusDatePicker, ShowToday } from 'Components';

import styled from 'styled-components';

const ShowDate = ({ date, setDate }) => {
  return (
    <ShowDateContainer>
      {/* <ShowToday date={date} /> */}
      <CusDatePicker date={date} setDate={setDate} filterWeekend={true} />
    </ShowDateContainer>
  );
};

export default ShowDate;

const ShowDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
