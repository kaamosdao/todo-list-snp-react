import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { removeTodo, updateTodo } from '../slices/todoReducer';

import s from './Todo.module.scss';


const cn = classNames.bind(s);

const Todo = ({ id, title, status }) => {
  const dispatch = useDispatch();
  const checked = status === 'completed';

  const handleChecked = (event) => {
    const newStatus = event.target.checked ? 'completed' : 'active';
    const newTodo = { id, title, status: newStatus };
    dispatch(updateTodo(newTodo));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li className={s.todo}>
      <div className={s.container}>
        <label className={s.checkbox} htmlFor={id}>
          <input
            className={cn('visually-hidden', 'inputCheck')}
            type="checkbox"
            id={id}
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
  status: PropTypes.string.isRequired,
};

export default Todo;
