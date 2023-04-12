import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTodoFilter, setTodos } from '../slices/todoReducer';
import selectTodoItems, { selectTodoFilter } from '../slices/todoSelector';

import { useLocalStorage } from '../hooks/index.js';
import filters from '../types/types';

import Todo from './Todo';

import s from './styles/TodosList.module.scss';

const TodosList = () => {
  const dispatch = useDispatch();
  const localStorageTodo = useLocalStorage();

  const todos = useSelector(selectTodoItems);
  const todoFilter = useSelector(selectTodoFilter);

  useEffect(() => {
    if (localStorageTodo.hasData()) {
      const { todos: storageTodos, todoFilter: storageFilter } =
        localStorageTodo.getData();
      dispatch(setTodos(storageTodos));
      dispatch(setTodoFilter(storageFilter));
    }
  }, [dispatch, localStorageTodo]);

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
