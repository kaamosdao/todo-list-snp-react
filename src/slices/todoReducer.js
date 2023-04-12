/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';
import _ from 'lodash';

import filters from '../types/types';
import LocalStorageData from '../utils/localStorageData';

const localStorageTodo = new LocalStorageData('todosTestTask');

const getInitTodos = () => {
  if (localStorageTodo.hasData()) {
    return localStorageTodo.getData().todos;
  }
  return [];
};

const getInitFilter = () => {
  if (localStorageTodo.hasData()) {
    return localStorageTodo.getData().todoFilter;
  }
  return filters.all;
};

const initialState = {
  items: getInitTodos(),
  filter: getInitFilter(),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.items = payload;
    },
    addTodo: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: ({ title, status }) => {
        const id = nanoid();
        return { payload: { id, title, status } };
      },
    },
    removeTodo: (state, { payload }) => {
      state.items = _.remove(state.items, (item) => item.id !== payload);
    },
    updateTodo: (state, { payload }) => {
      state.items = state.items.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
    },
    setTodoFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setTodos, addTodo, removeTodo, updateTodo, setTodoFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
