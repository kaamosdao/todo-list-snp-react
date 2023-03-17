import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { setTodoFilter } from '../slices/todoReducer';

import s from './TodosHeader.module.scss';

const cn = classNames.bind(s);

const TodosHeader = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const selectedFilter = useSelector((state) => state.todos.filter);

  const hasTodos = !!todos.length;

  const handleClickAll = () => {
    dispatch(setTodoFilter('all'));
  };

  const handleClickActive = () => {
    dispatch(setTodoFilter('active'));
  };

  const handleClickCompleted = () => {
    dispatch(setTodoFilter('completed'));
  };

  return (
    <header className={cn('header', { hide: !hasTodos })}>
      <h3 className="visually-hidden">Todo information and filter</h3>
      <span className={s.info}>
        <strong>0</strong> items left
      </span>
      <ul className={s.filterList}>
        <li>
          <button
            className={cn('buttonFilter', {
              buttonFilterSelected: selectedFilter === 'all',
            })}
            type="button"
            name="all"
            onClick={handleClickAll}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={cn('buttonFilter', {
              buttonFilterSelected: selectedFilter === 'active',
            })}
            type="button"
            name="active"
            onClick={handleClickActive}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={cn('buttonFilter', {
              buttonFilterSelected: selectedFilter === 'completed',
            })}
            type="button"
            name="completed"
            onClick={handleClickCompleted}
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
};

export default TodosHeader;
