import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer.js';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
