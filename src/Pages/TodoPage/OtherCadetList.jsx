import React, { useState, useEffect } from 'react';
import { TodoService } from 'Network';
import { format } from 'date-fns';
import { checkDateTodo } from 'Utils';

import TodoOtherList from './TodoOtherList';
import WarningNotVaildDateText from './WarningNotValidDateText';
import OtherTitle from './OtherTitle';

import styled from 'styled-components';

const OtherCadetList = ({ date }) => {
  const [othersToDo, setOthersToDo] = useState([]);

  const getOthers = async () => {
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    // console.log(result.data);
    setOthersToDo(result.data);
  };

  useEffect(() => {
    getOthers();
  }, [date]);

  return (
    <TodoOtherBody>
      <OtherTitle />
      {checkDateTodo(date) ? (
        <WarningNotVaildDateText />
      ) : (
        <TodoOtherList othersToDo={othersToDo} />
      )}
    </TodoOtherBody>
  );
};

const TodoOtherBody = styled.div`
  overflow: auto;
  flex-wrap: wrap;
  background-color: #eeeeee;
  border: 1px solid #eeeeee;
  padding: 10px;
  border-radius: 1em;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export default React.memo(OtherCadetList);
