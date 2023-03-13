import React from 'react';
import cn from 'classnames'
import styles from './TextField.module.scss';

const TextField = () => {
  return (
    <>
      <label className={cn(styles.checkAll, styles.hide)}>
        <input
          className={cn('visually-hidden', styles.inputCheck)}
          type="checkbox"
          id="all"
        />
        <span className={styles.checkboxMark}></span>
      </label>
      <label className="visually-hidden" htmlFor="todo">
        {' '}
        Todo{' '}
      </label>
      <input
        className={styles.input}
        type="text"
        name="todo"
        id="todo"
        placeholder="What needs to be done?"
        required
      />
    </>
  );
};

export default TextField;
