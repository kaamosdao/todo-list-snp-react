import React from 'react';
import { useSelector } from 'react-redux';

import selectTodoItems, { selectTodoFilter } from '../slices/todoSelector';

import filters from '../types/types';

import Todo from './Todo';

import s from './styles/TodosList.module.scss';

const TodosList = () => {
  const todos = useSelector(selectTodoItems);
  const todoFilter = useSelector(selectTodoFilter);

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
