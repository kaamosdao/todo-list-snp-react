import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { removeTodo, updateTodo } from '../slices/todoReducer';

import s from './Todo.module.scss';

const cn = classNames.bind(s);

const Todo = ({ id, title, status }) => {
  const dispatch = useDispatch();
  const inputEditingRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(title);

  const checked = status === 'completed';

  useEffect(() => {
    if (isEditing) {
      inputEditingRef.current.focus();
    }
  }, [isEditing]);

  const handleChecked = (event) => {
    event.stopPropagation();
    if (document.querySelector('#todoInput').value.trim()) {
      return;
    }
    const newStatus = event.target.checked ? 'completed' : 'active';
    const newTodo = { id, title, status: newStatus };
    dispatch(updateTodo(newTodo));
  };

  const handleRemoveTodo = () => {
    if (document.querySelector('#todoInput').value.trim()) {
      return;
    }
    dispatch(removeTodo(id));
  };

  const handleDbClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    const newTitle = editingValue.trim();

    if (!newTitle) {
      dispatch(removeTodo(id));
    }

    const newTodo = { id, title: newTitle, status };
    dispatch(updateTodo(newTodo));
    setEditingValue(newTitle);
    setIsEditing(false);
  };

  const handleEditingValue = (event) => {
    setEditingValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    const newTitle = editingValue.trim();

    if (!newTitle) {
      dispatch(removeTodo(id));
    }

    const newTodo = { id, title: newTitle, status };
    dispatch(updateTodo(newTodo));
    setEditingValue(newTitle);
    setIsEditing(false);
  };

  return (
    <li className={cn('todo', { todoEditing: isEditing })}>
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
        <input
          className={s.inputEditing}
          ref={inputEditingRef}
          value={editingValue}
          onChange={handleEditingValue}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
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
