import React from 'react';
import { useTranslation } from 'react-i18next';

import TextField from './TextField';
import TodosHeader from './TodosHeader';
import TodosList from './TodosList';

import s from './Main.module.scss';

const Main = () => {
  const { t } = useTranslation();

  return (
    <main className={s.main}>
      <h1 className={s.title}>{t('title')}</h1>
      <section className={s.todos}>
        <h2 className="visually-hidden">Todo form</h2>
        <TodosHeader />
        <TextField />
        <TodosList />
      </section>
    </main>
  );
};

export default Main;
