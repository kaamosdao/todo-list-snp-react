import React from 'react';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import store from './slices/index.js';

import LocalStorageContext from './context/LocalStorageContext.jsx';
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
