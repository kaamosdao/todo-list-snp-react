import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { removeTodo, updateTodo } from '../slices/todoReducer';

import { useInputRef } from '../hooks';
import { todoStatus } from '../types/types';

import TodoInputEditing from './TodoInputEditing';

import s from './styles/Todo.module.scss';

const cn = classNames.bind(s);

const Todo = ({ id, title, status }) => {
  const dispatch = useDispatch();
  const inputRef = useInputRef();

  const [isEditing, setIsEditing] = useState(false);

  const checked = status === todoStatus.completed;

  const handleChecked = (event) => {
    event.stopPropagation();
    if (inputRef.current.value.trim()) {
      return;
    }
    const newStatus = event.target.checked
      ? todoStatus.completed
      : todoStatus.active;
    const newTodo = { id, title, status: newStatus };
    dispatch(updateTodo(newTodo));
  };

  const handleRemoveTodo = () => {
    if (inputRef.current.value.trim()) {
      return;
    }
    dispatch(removeTodo(id));
  };

  const handleDbClick = () => {
    setIsEditing(true);
  };

  return (
    <li className={s.todo}>
      <div className={cn('container', { hide: isEditing })}>
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
        <p
          className={cn('title', { todoCompleted: checked })}
          onDoubleClick={handleDbClick}
        >
          {title}
        </p>
        <button
          className={s.buttonDelete}
          type="button"
          onClick={handleRemoveTodo}
        />
      </div>
      {isEditing && (
        <TodoInputEditing
          id={id}
          title={title}
          status={status}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Todo;
