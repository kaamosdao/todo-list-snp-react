import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { removeTodo, updateTodo } from '../slices/todoReducer';

import s from './styles/TodoInputEditing.module.scss';

const TodoInputEditing = ({ id, title, status, isEditing, setIsEditing }) => {
  const dispatch = useDispatch();
  const inputEditingRef = useRef(null);

  const [editingValue, setEditingValue] = useState(title);

  useEffect(() => {
    if (isEditing) {
      inputEditingRef.current.focus();
    }
  }, [isEditing]);

  const editTodo = () => {
    const newTitle = editingValue.trim();

    if (!newTitle) {
      dispatch(removeTodo(id));
    }

    const newTodo = { id, title: newTitle, status };
    dispatch(updateTodo(newTodo));
    setEditingValue(newTitle);
    setIsEditing(false);
  };

  const handleBlur = () => {
    editTodo();
  };

  const handleEditingValue = (event) => {
    setEditingValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    editTodo();
  };

  return (
    <input
      className={s.inputEditing}
      ref={inputEditingRef}
      value={editingValue}
      onChange={handleEditingValue}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
    />
  );
};

TodoInputEditing.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

export default TodoInputEditing;
