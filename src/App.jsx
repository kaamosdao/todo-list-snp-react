import React, { useRef } from 'react';

import InputRefContext from './hooks/InputRefContext';

import Main from './components/Main';

const App = () => {
  const inputRef = useRef(null);

  return (
    <InputRefContext.Provider value={inputRef}>
      <Main />
    </InputRefContext.Provider>
  );
};

export default App;
