import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { addTodo } from '../slices/todoReducer';
import selectTodoItems from '../slices/todoSelector';

import { useInputRef } from '../hooks';
import { todoStatus } from '../types/types';

import InputCheckAll from './InputCheckAll';

import s from './styles/TextField.module.scss';

const TextField = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const inputRef = useInputRef();

  const todos = useSelector(selectTodoItems);

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
        title: trimmedTitle,
        status: todoStatus.active,
      };
      dispatch(addTodo(newTodo));
    };

    document.addEventListener('click', onClickDocument);

    return () => {
      document.removeEventListener('click', onClickDocument);
    };
  }, [dispatch, inputRef]);

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleKeyUp = (event) => {
    const trimmedTitle = todoTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo = {
      title: trimmedTitle,
      status: todoStatus.active,
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
        onKeyUp={handleKeyUp}
        required
      />
    </>
  );
};

export default TextField;
