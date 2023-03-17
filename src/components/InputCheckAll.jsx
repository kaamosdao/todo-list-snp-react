import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { setTodos } from '../slices/todoReducer';

import s from './InputCheckAll.module.scss';

const cn = classNames.bind(s);

const InputCheckAll = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const [checkAll, setCheckAll] = useState(false);

  const hasTodos = !todos.length;
  const hasActiveTodo = todos.find((todo) => todo.status === 'active');

  useEffect(() => {
    if (hasActiveTodo) {
      setCheckAll(false);
    } else {
      setCheckAll(true);
    }
  }, [hasActiveTodo]);

  const handleCheckAll = (event) => {
    const newTodos = todos.map((todo) => {
      const newStatus = event.target.checked ? 'completed' : 'active';
      return { ...todo, status: newStatus };
    });
    setCheckAll(event.target.checked);
    dispatch(setTodos(newTodos));
  };

  return (
    <label className={cn('checkAll', { hide: hasTodos })} htmlFor="all">
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
