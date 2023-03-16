import React from 'react';
import cn from 'classnames';

import s from './TodosHeader.module.scss';

const TodosHeader = () => (
    <header className={cn(s.header, s.hide)}>
      <h3 className="visually-hidden">Todo information and filter</h3>
      <span className={s.info}>
        <strong>0</strong> items left
      </span>
      <ul className={s.filterList}>
        <li>
          <button
            className={cn(s.buttonFilter, s.buttonFilterSelected)}
            type="button"
            name="all"
          >
            All
          </button>
        </li>
        <li>
          <button className={s.buttonFilter} type="button" name="active">
            Active
          </button>
        </li>
        <li>
          <button
            className={s.buttonFilter}
            type="button"
            name="completed"
          >
            Completed
          </button>
        </li>
      </ul>
      <button className={cn(s.buttonClear, s.hide)} type="button">
        Clear completed
      </button>
    </header>
  );

export default TodosHeader;
