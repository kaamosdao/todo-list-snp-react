import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { useTranslation, Trans } from 'react-i18next';

import { setTodoFilter, setTodos } from '../slices/todoReducer';
import {
  selectActiveTodos,
  selectActiveTodosCount,
  selectCompletedTodosCount,
  selectTodoFilter,
  selectTodosCount,
} from '../slices/todoSelector';

import s from './TodosHeader.module.scss';

const cn = classNames.bind(s);

const TodosHeader = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const todoFilter = useSelector(selectTodoFilter);
  const activeTodos = useSelector(selectActiveTodos);
  const activeTodosCount = useSelector(selectActiveTodosCount);
  const hasCompletedTodos = !!useSelector(selectCompletedTodosCount);
  const hasTodos = !!useSelector(selectTodosCount);

  const handleClickAll = () => {
    if (document.querySelector('#todoInput').value) {
      return;
    }
    dispatch(setTodoFilter('all'));
  };

  const handleClickActive = () => {
    if (document.querySelector('#todoInput').value) {
      return;
    }
    dispatch(setTodoFilter('active'));
  };

  const handleClickCompleted = () => {
    if (document.querySelector('#todoInput').value) {
      return;
    }
    dispatch(setTodoFilter('completed'));
  };

  const handleClearCompleted = () => {
    if (document.querySelector('#todoInput').value) {
      return;
    }
    dispatch(setTodos(activeTodos));
  };

  return (
    <header className={cn('header', { hide: !hasTodos })}>
      <h3 className="visually-hidden">Todo information and filter</h3>
      <span className={s.info}>
        <Trans i18nKey="todosCount" count={activeTodosCount}>
          <strong>{{ activeTodosCount }}</strong> item left
        </Trans>
      </span>
      <ul className={s.filterList}>
        <li>
          <button
            className={cn('buttonFilter', {
              buttonFilterSelected: todoFilter === 'all',
            })}
            type="button"
            name="all"
            onClick={handleClickAll}
          >
            {t('filterAll')}
          </button>
        </li>
        <li>
          <button
            className={cn('buttonFilter', {
              buttonFilterSelected: todoFilter === 'active',
            })}
            type="button"
            name="active"
            onClick={handleClickActive}
          >
            {t('filterActive')}
          </button>
        </li>
        <li>
          <button
            className={cn('buttonFilter', {
              buttonFilterSelected: todoFilter === 'completed',
            })}
            type="button"
            name="completed"
            onClick={handleClickCompleted}
          >
            {t('filterCompleted')}
          </button>
        </li>
      </ul>
      <button
        className={cn('buttonClear', { hide: !hasCompletedTodos })}
        type="button"
        onClick={handleClearCompleted}
      >
        {t('buttonClear')}
      </button>
    </header>
  );
};

export default TodosHeader;
