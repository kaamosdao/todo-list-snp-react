import React from 'react';
import cn from 'classnames';
import styles from './Todo.module.scss';

const Todo = ({ id, title }) => {
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
        ></button>
      </div>
    </li>
  );
};

export default Todo;
