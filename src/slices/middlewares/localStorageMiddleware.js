import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import {
  setTodos,
  addTodo,
  removeTodo,
  updateTodo,
  setTodoFilter,
} from '../todoReducer';

import LocalStorageData from '../../utils/localStorageData';

const localStorageTodo = new LocalStorageData('todosTestTask');
const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(setTodos, addTodo, removeTodo, updateTodo, setTodoFilter),
  effect: async (_, listenerApi) => {
    const { items, filter } = listenerApi.getState().todos;
    localStorageTodo.setData({ todos: items, todoFilter: filter });
  },
});

export default localStorageMiddleware;
