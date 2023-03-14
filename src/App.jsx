import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTodos } from './slices/todoReducer';
import Main from './components/Main';
import useLocalStorage from './hooks';

const App = () => {
  const dispatch = useDispatch();
  const localStorageTodo = useLocalStorage();

  useEffect(() => {
    if (localStorageTodo.hasData()) {
      const todos = localStorageTodo.getData();
      dispatch(setTodos(todos));
    }
  }, []);

  return <Main />;
};

export default App;
