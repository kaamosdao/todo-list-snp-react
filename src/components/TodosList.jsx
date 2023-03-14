import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '../hooks/index.js';
import { setTodos } from '../slices/todoReducer';
import Todo from './Todo';
import styles from './TodosList.module.scss';

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const localStorageTodo = useLocalStorage();

  useEffect(() => {
    if (localStorageTodo.hasData()) {
      const todos = localStorageTodo.getData();
      dispatch(setTodos(todos));
    }
  }, []);

  useEffect(() => {
    localStorageTodo.setData(todos);
  }, [todos]);

  return (
    <ul className={styles.list}>
      {todos.map(({ id, title }) => (
        <Todo id={id} title={title} key={id} />
      ))}
    </ul>
  );
};

export default TodosList;
