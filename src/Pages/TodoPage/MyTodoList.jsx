import { useState, useEffect } from 'react';
import { TodoService } from 'API';
import { format } from 'date-fns';
import { checkDateTodo } from 'Utils';

import WarningNotVaildDate from './WarningNotValidDate';
import TodoInputForm from './TodoInputForm';
import TodoMyList from './TodoMyList';
import TodoProgress from './TodoProgress';

import styled from 'styled-components';

const MyTodoList = ({ userId, date }) => {
  const [toDo, setToDo] = useState({
    number: 0,
    content: '',
    checked: false,
  });
  const [toDos, setToDos] = useState([]);
  const [number, setNumber] = useState(null);
  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);
  const [othersToDo, setOthersToDo] = useState([]);
  const today = new Date();

  const onSubmit = async event => {
    event.preventDefault();
    if (
      toDo.content === '' ||
      format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
    ) {
      return;
    }

    let nextId = 0;
    if (toDos.length === 0) {
      nextId = 0;
    } else {
      nextId = toDos[toDos.length - 1].todoId;
    }

    const result = await TodoService.postTodo({
      writerId: userId,
      todoId: nextId + 1,
      title: toDo.content,
      titleCheck: false,
      todoDay: format(today, 'yyyy-MM-dd'),
    });

    // console.log(result);
    setNumber(nextId);
    setToDo({
      number: 0,
      content: '',
      checked: false,
    });
  };

  const onChange = event => {
    setToDo({
      number: number,
      content: event.target.value,
      checked: false,
    });
  };

  const changeCheck = async index => {
    if (format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')) return;
    toDos[index].titleCheck = !toDos[index].titleCheck;
    const result = await TodoService.putTodo(toDos[index]);
    // console.log(result);
    getTodos(userId);
  };

  const removeToDo = async event => {
    let toDoNumber;
    const tagName = event.target.tagName;
    if (format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')) return;
    if (tagName === 'BUTTON') {
      const toDoIdButton = parseInt(event.target.previousSibling.id);
      setToDos(toDos.filter(toDo => toDoIdButton !== toDo.todoId));
      toDoNumber = toDoIdButton;
    } else if (tagName === 'svg') {
      const toDoIdSvg = parseInt(event.target.parentElement.previousSibling.id);
      setToDos(toDos.filter(toDo => toDoIdSvg !== toDo.todoId));
      toDoNumber = toDoIdSvg;
    } else if (tagName === 'path') {
      const toDoIdpath = parseInt(
        event.target.parentElement.parentElement.previousSibling.id,
      );
      setToDos(toDos.filter(toDo => toDoIdpath !== toDo.todoId));
      toDoNumber = toDoIdpath;
    }

    const result = await TodoService.deleteTodo(
      userId,
      toDoNumber,
      format(date, 'yyyy-MM-dd'),
    );
    console.log(result);
    getTodos(userId);
  };

  const getTodos = async userId => {
    const result = await TodoService.getTodo(
      userId,
      format(date, 'yyyy-MM-dd'),
    );
    setToDos(result.data);
  };

  const getOthers = async () => {
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    setOthersToDo(result.data);
  };

  useEffect(() => {
    getTodos(userId);
    getOthers();
  }, [number, date]);

  useEffect(() => {
    const total = toDos.length;

    if (total === 0) {
      setTotal(0);
      setChecked(0);
      return;
    }
    let checked = 0;
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].titleCheck === true) checked++;
    }
    // console.log(toDos);
    setTotal(total);
    setChecked(checked);
  }, [toDos]);

  return (
    <TodoListBody>
      {checkDateTodo(date) ? (
        <WarningNotVaildDate date={date} checkDateTodo={checkDateTodo} />
      ) : (
        <TodoListContainer>
          <TodoInputForm
            onSubmit={onSubmit}
            onChange={onChange}
            toDo={toDo}
            date={date}
          />
          <TodoMyList
            toDos={toDos}
            date={date}
            changeCheck={changeCheck}
            removeToDo={removeToDo}
          />
          <TodoProgress total={total} checked={checked} />
        </TodoListContainer>
      )}
    </TodoListBody>
  );
};

const TodoListBody = styled.div`
  width: 50%;
`;
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  padding: 10px;
  border-radius: 1em;
  margin-right: 50px;
  height: 100%;
`;

export default MyTodoList;