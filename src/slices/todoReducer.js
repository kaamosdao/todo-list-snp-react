import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.todos = payload;
    },
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state) => {
      state.items = _.remove(state.todos, (item) => item.id !== payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
