import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { removeTodo, updateTodo } from '../slices/todoReducer';

import s from './Todo.module.scss';


const cn = classNames.bind(s);

const Todo = ({ id, title, checked }) => {
  const dispatch = useDispatch();

  const handleChecked = (event) => {
    const newTodo = { id, title, checked: event.target.checked };
    dispatch(updateTodo(newTodo));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={s.todo}>
      <div className={s.container}>
        <label className={s.checkbox} htmlFor="todo">
          <input
            className={cn('visually-hidden', 'inputCheck')}
            type="checkbox"
            id="todo"
            checked={checked}
            onChange={handleChecked}
          />
          <span className={s.checkboxMark} />
        </label>
        <p className={cn('title', { 'todoCompleted': checked })}>{title}</p>
        <button
          className={s.buttonDelete}
          type="button"
          onClick={handleRemoveTodo}
        />
      </div>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Todo;
