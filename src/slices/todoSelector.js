import { createSelector } from '@reduxjs/toolkit';

const selectTodoItems = createSelector(
  (state) => state.todos.items,
  (todos) => todos
);

export const selectTodoFilter = createSelector(
  (state) => state.todos.filter,
  (filter) => filter
);

export const selectActiveTodos = createSelector(selectTodoItems, (todos) =>
  todos.filter((todo) => todo.status === 'active')
);

export const selectCompletedTodos = createSelector(selectTodoItems, (todos) =>
  todos.filter((todo) => todo.status === 'completed')
);

export const selectTodosCount = createSelector(
  selectTodoItems,
  (todos) => todos.length
);

export const selectActiveTodosCount = createSelector(
  selectActiveTodos,
  (activeTodos) => activeTodos.length
);

export const selectCompletedTodosCount = createSelector(
  selectCompletedTodos,
  (completedTodos) => completedTodos.length
);

export default selectTodoItems;
