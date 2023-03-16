import React from 'react';

import TextField from './TextField';
import TodosHeader from './TodosHeader';
import TodosList from './TodosList';

import s from './Main.module.scss';

const Main = () => (
    <main className={s.main}>
      <h1 className={s.title}>Todos</h1>
      <section className={s.todos}>
        <h2 className="visually-hidden">Todo form</h2>
        <TodosHeader />
        <TextField />
        <TodosList />
        {/* <ul className="todos__list"></ul> */}
      </section>
    </main>
  );

export default Main;
