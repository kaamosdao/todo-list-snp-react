import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import _ from 'lodash';
import { addTodo } from '../slices/todoReducer';
import styles from './TextField.module.scss';

const cn = classNames.bind(styles);

const TextField = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();
  const hasTodos = !useSelector((state) => state.todos.items).length;

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleKeyDown = (event) => {
    const newTodo = {
      id: _.uniqueId(),
      title: todoTitle,
      checked: false,
    };

    if (event.key === 'Enter') {
      dispatch(addTodo(newTodo));
      setTodoTitle('')
    }
  };

  return (
    <>
      <label className={cn('checkAll', {'hide': hasTodos})}>
        <input
          className={cn('visually-hidden', 'inputCheck')}
          type="checkbox"
          id="all"
        />
        <span className={styles.checkboxMark}></span>
      </label>
      <label className="visually-hidden" htmlFor="todo">
        {' '}
        Todo{' '}
      </label>
      <input
        className={styles.input}
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
