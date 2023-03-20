import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { addTodo } from '../slices/todoReducer';

import InputCheckAll from './InputCheckAll';

import s from './TextField.module.scss';

const TextField = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const inputRef = useRef(null);

  const todos = useSelector((state) => state.todos.items);

  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    setTodoTitle('');
  }, [todos]);

  useEffect(() => {
    const onClickDocument = (event) => {
      const trimmedTitle = inputRef.current.value.trim();

      if (!trimmedTitle) {
        return;
      }

      if (event.target.id === 'todoInput') {
        return;
      }

      const newTodo = {
        id: _.uniqueId(),
        title: trimmedTitle,
        status: 'active',
      };
      dispatch(addTodo(newTodo));
    };

    document.addEventListener('click', onClickDocument);

    return () => {
      document.removeEventListener('click', onClickDocument);
    };
  }, [dispatch]);

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    const trimmedTitle = todoTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo = {
      id: _.uniqueId(),
      title: trimmedTitle,
      status: 'active',
    };

    if (event.key === 'Enter') {
      dispatch(addTodo(newTodo));
    }
  };

  return (
    <>
      <InputCheckAll />
      <label className="visually-hidden" htmlFor="todoInput">
        {' '}
        Todo{' '}
      </label>
      <input
        ref={inputRef}
        className={s.input}
        type="text"
        name="todo"
        id="todoInput"
        placeholder={t('inputPlaceholder')}
        value={todoTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        required
      />
    </>
  );
};

export default TextField;
