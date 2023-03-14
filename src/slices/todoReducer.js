import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  items: [],
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
    removeTodo: (state) => {
      state.items = _.remove(state.items, (item) => item.id !== payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
