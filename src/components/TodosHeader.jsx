import React from 'react';
import cn from 'classnames'
import styles from './TodosHeader.module.scss';

const TodosHeader = () => {
  return (
    <header className={cn(styles.header, styles.hide)}>
      <h3 className="visually-hidden">Todo information and filter</h3>
      <span className={styles.info}>
        <strong>0</strong> items left
      </span>
      <ul className={styles.filterList}>
        <li>
          <button
            className={cn(styles.buttonFilter, styles.buttonFilterSelected)}
            type="button"
            name="all"
          >
            All
          </button>
        </li>
        <li>
          <button className={styles.buttonFilter} type="button" name="active">
            Active
          </button>
        </li>
        <li>
          <button className={styles.buttonFilter} type="button" name="completed">
            Completed
          </button>
        </li>
      </ul>
      <button
        className={cn(styles.buttonClear, styles.hide)}
        type="button"
      >
        Clear completed
      </button>
    </header>
  );
};

export default TodosHeader;
