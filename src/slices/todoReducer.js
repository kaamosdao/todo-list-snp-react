/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  items: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.items = payload;
    },
    addTodo: (state, { payload }) => {
      state.items.push(payload);
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
