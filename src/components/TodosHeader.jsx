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

import { useInputRef } from '../hooks';
import filters from '../types/types';

import s from './styles/TodosHeader.module.scss';

const cn = classNames.bind(s);

const TodosHeader = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const inputRef = useInputRef();

  const todoFilter = useSelector(selectTodoFilter);
  const activeTodos = useSelector(selectActiveTodos);
  const activeTodosCount = useSelector(selectActiveTodosCount);
  const hasCompletedTodos = !!useSelector(selectCompletedTodosCount);
  const hasTodos = !!useSelector(selectTodosCount);

  const handleClickAll = () => {
    if (inputRef.current.value.trim()) {
      return;
    }
    dispatch(setTodoFilter(filters.all));
  };

  const handleClickActive = () => {
    if (inputRef.current.value.trim()) {
      return;
    }
    dispatch(setTodoFilter(filters.active));
  };

  const handleClickCompleted = () => {
    if (inputRef.current.value.trim()) {
      return;
    }
    dispatch(setTodoFilter(filters.completed));
  };

  const handleClearCompleted = () => {
    if (inputRef.current.value.trim()) {
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
              buttonFilterSelected: todoFilter === filters.all,
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
              buttonFilterSelected: todoFilter === filters.active,
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
              buttonFilterSelected: todoFilter === filters.completed,
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
