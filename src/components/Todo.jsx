import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { removeTodo } from '../slices/todoReducer';
import styles from './Todo.module.scss';

const Todo = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={styles.todo}>
      <div className={styles.container}>
        <label className={styles.checkbox}>
          <input
            className={cn('visually-hidden', styles.inputCheck)}
            type="checkbox"
          />
          <span className={styles.checkboxMark}></span>
        </label>
        <p className={styles.title}>{title}</p>
        <button
          className={styles.buttonDelete}
          type="button"
          onClick={handleRemoveTodo}
        ></button>
      </div>
    </li>
  );
};

export default Todo;
