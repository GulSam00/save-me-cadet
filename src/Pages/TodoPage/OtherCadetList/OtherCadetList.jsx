import React, { useState, useEffect } from 'react';
import { TodoService } from 'API';
import { format } from 'date-fns';
import { checkDateTodo } from 'Utils';

import TodoOtherList from './TodoOtherList';

import styled from 'styled-components';

const OtherCadetList = ({ date }) => {
  const [othersToDo, setOthersToDo] = useState([]);

  const getOthers = async () => {
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    setOthersToDo(result.data.content);
  };

  useEffect(() => {
    getOthers();
  }, [date]);

  return (
    <TodoOtherBody>
      <OtherTitle>👀 다른 카뎃은 무엇을?</OtherTitle>
      {checkDateTodo(date) ? (
        <WarningNotVaildDate>
          아직 진행하지 않은 날짜입니다!
        </WarningNotVaildDate>
      ) : (
        <TodoOtherList othersToDo={othersToDo} date={date} />
      )}
    </TodoOtherBody>
  );
};

const OtherTitle = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const WarningNotVaildDate = styled.div`
  justify-content: center;
  align-item: center;
  text-align: center;
  margin-top: 35%;
  color: grey;
`;
const TodoOtherBody = styled.div`
  overflow: auto;
  flex-wrap: wrap;
  background-color: #eeeeee;
  border: 1px solid #eeeeee;
  border-radius: 1em;
  flex-direction: column;
  min-width: 50%;
  margin: 10px;
  height: 100%;
  @media (max-width: 1200px) {
    min-height: 50%;
    margin-bottom: 50px;
  }
`;

export default React.memo(OtherCadetList);
