import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import selectTodoItems, { selectTodoFilter } from '../slices/todoSelector';

import { useLocalStorage } from '../hooks/index.js';
import filters from '../types/types';

import Todo from './Todo';

import s from './styles/TodosList.module.scss';

const TodosList = () => {
  const localStorageTodo = useLocalStorage();

  const todos = useSelector(selectTodoItems);
  const todoFilter = useSelector(selectTodoFilter);

  useEffect(() => {
    localStorageTodo.setData({ todos, todoFilter });
  }, [todos, todoFilter, localStorageTodo]);

  return (
    <ul className={s.list}>
      {todos
        .filter(
          ({ status }) => todoFilter === filters.all || status === todoFilter
        )
        .map(({ id, title, status }) => (
          <Todo id={id} title={title} status={status} key={id} />
        ))}
    </ul>
  );
};

export default TodosList;
