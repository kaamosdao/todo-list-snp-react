import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import _ from 'lodash';

import { addTodo } from '../slices/todoReducer';

import s from './TextField.module.scss';


const cn = classNames.bind(s);

const TextField = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const hasTodos = !todos.length;

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    const newTodo = {
      id: _.uniqueId(),
      title: todoTitle,
      status: 'active',
    };

    if (event.key === 'Enter') {
      dispatch(addTodo(newTodo));
      setTodoTitle('');
    }
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    const hasCheckedTodo = todos.find((todo) => todo.checked);
    if (hasCheckedTodo) {

    }
    // console.log(hasCheckedTodo);
  }, [checked, todos])

  return (
    <>
      <label className={cn('checkAll', { hide: hasTodos })} htmlFor="all">
        <input
          className={cn('visually-hidden', 'inputCheck')}
          type="checkbox"
          id="all"
          onChange={handleChecked}
          checked={checked}
        />
        <span className={s.checkboxMark} />
      </label>
      <label className="visually-hidden" htmlFor="todo">
        {' '}
        Todo{' '}
      </label>
      <input
        className={s.input}
        type="text"
        name="todo"
        id="todo"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        required
      />
    </>
  );
};

export default TextField;
