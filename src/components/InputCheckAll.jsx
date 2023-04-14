import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { setTodos } from '../slices/todoReducer';
import selectTodoItems, {
  selectActiveTodosCount,
  selectTodosCount,
} from '../slices/todoSelector';

import { todoStatus } from '../types/types';

import s from './styles/InputCheckAll.module.scss';

const cn = classNames.bind(s);

const InputCheckAll = () => {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodoItems);
  const hasTodos = !!useSelector(selectTodosCount);
  const hasActiveTodo = !!useSelector(selectActiveTodosCount);

  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    if (hasActiveTodo) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  }, [hasActiveTodo]);

  const handleCheckAll = (event) => {
    event.stopPropagation();
    const newTodos = todos.map((todo) => {
      const newStatus = event.target.checked
        ? todoStatus.completed
        : todoStatus.active;
      return { ...todo, status: newStatus };
    });
    setCheckAll(event.target.checked);
    dispatch(setTodos(newTodos));
  };

  return (
    <label className={cn('checkAll', { hide: !hasTodos })} htmlFor="all">
      <input
        className={cn('visually-hidden', 'inputCheck')}
        type="checkbox"
        id="all"
        onChange={handleCheckAll}
        checked={checkAll}
      />
      <span className={s.checkboxMark} />
    </label>
  );
};

export default InputCheckAll;
