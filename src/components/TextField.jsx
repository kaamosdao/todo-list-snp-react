import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { addTodo } from '../slices/todoReducer';

import InputCheckAll from './InputCheckAll';

import s from './TextField.module.scss';

const TextField = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [todoTitle, setTodoTitle] = useState('');

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    const trimmedTitle = todoTitle.trim();

    if (!trimmedTitle) {
      return;
    };

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
      <label className="visually-hidden" htmlFor="todo">
        {' '}
        Todo{' '}
      </label>
      <input
        className={s.input}
        type="text"
        name="todo"
        id="todo"
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
