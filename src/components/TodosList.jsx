import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import styles from './TodosList.module.scss';

const TodosList = () => {
  const todos = useSelector((state) => state.todos.items);

  return (
    <ul className={styles.list}>
      {todos.map(({ id, title }) => (
        <Todo id={id} title={title} key={id} />
      ))}
    </ul>
  );
};

export default TodosList;
