// import watchedState from './model.js';
// import LocalStorageData from './utils/localStorageData.js';
// import setControllers from './controller.js';

// export default () => {
//   const state = {
//     todos: {
//       filter: 'all',
//       items: [],
//     },
//     editedTodoId: null,
//   };

//   const elements = {
//     inputAddTodo: document.querySelector('.input-add-todo'),
//     inputCheckAllTodo: document.querySelector('.todos__input-check'),
//     todosList: document.querySelector('.todos__list'),
//     filterButtons: document.querySelectorAll('.button-filter'),
//     buttonClearCompleted: document.querySelector(`.todo-header__button-clear`),
//     checkboxAllTodo: document.querySelector('.todos__check-all'),
//     todoHeader: document.querySelector('.todo-header'),
//     spanTodoInfo: document.querySelector(`.todo-header__info`),
//   };

//   const localStorageTodo = new LocalStorageData('todosTestTask');

//   const model = watchedState(state, elements);

//   if (localStorageTodo.hasData()) {
//     const todos = localStorageTodo.getData();
//     model.todos = todos;
//   }

//   setControllers(model, elements, localStorageTodo);

//   elements.inputAddTodo.focus();
// };

import React from 'react';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import store from './slices/index.js';

import LocalStorageContext from './hooks/LocalStorageContext.jsx';
import resources from './locales/index.js';

import App from './App.jsx';

const init = (localStorage) => {
  const i18nInstance = i18next.createInstance();

  i18nInstance.use(initReactI18next).init({
    debug: true,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

  return (
    <Provider store={store}>
      <LocalStorageContext.Provider value={localStorage}>
        <I18nextProvider i18n={i18nInstance}>
          <App />
        </I18nextProvider>
      </LocalStorageContext.Provider>
    </Provider>
  );
};

export default init;
