import React from 'react';
import TextField from './TextField';
import TodosHeader from './TodosHeader';
import TodosList from './TodosList';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos</h1>
      <section className={styles.todos}>
        <h2 className="visually-hidden">Todo form</h2>
        <TodosHeader />
        <TextField />
        <TodosList />
        {/* <ul className="todos__list"></ul> */}
      </section>
    </main>
  );
};

export default Main;
