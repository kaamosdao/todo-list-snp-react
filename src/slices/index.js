import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todoReducer.js';

import localStorageMiddleware from './middlewares/localStorageMiddleware.js';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});
