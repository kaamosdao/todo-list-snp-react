import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTodos } from '../slices/todoReducer';
import useLocalStorage from '../hooks/index.js';

import Todo from './Todo';

import s from './TodosList.module.scss';

const TodosList = () => {
  const dispatch = useDispatch();
  const localStorageTodo = useLocalStorage();

  const todos = useSelector((state) => state.todos.items);
  const todoFilter = useSelector((state) => state.todos.filter);

  useEffect(() => {
    if (localStorageTodo.hasData()) {
      const storageTodos = localStorageTodo.getData();
      dispatch(setTodos(storageTodos));
    }
  }, [dispatch, localStorageTodo]);

  useEffect(() => {
    localStorageTodo.setData(todos);
  }, [todos, localStorageTodo]);

  return (
    <ul className={s.list}>
      {todos
        .filter(({ status }) => todoFilter === 'all' || status === todoFilter)
        .map(({ id, title, status }) => (
          <Todo id={id} title={title} status={status} key={id} />
        ))}
    </ul>
  );
};

export default TodosList;
