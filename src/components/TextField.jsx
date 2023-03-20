import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { addTodo } from '../slices/todoReducer';

import InputCheckAll from './InputCheckAll';

import s from './TextField.module.scss';

const TextField = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const inputRef = useRef(null);

  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    const clickHandler = (event) => {
      const trimmedTitle = inputRef.current.value.trim();

      if (event.target.classList.contains('inputTodo')) {
        return;
      }

      if (!trimmedTitle) {
        return;
      }

      const newTodo = {
        id: _.uniqueId(),
        title: trimmedTitle,
        status: 'active',
      };

      dispatch(addTodo(newTodo));
      setTodoTitle('');
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
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
      setTodoTitle('');
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
