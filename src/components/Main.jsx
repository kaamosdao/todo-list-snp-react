import React from 'react';
import styles from './Main.module.scss';
import TextField from './TextField';
import TodosHeader from './TodosHeader';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos</h1>
      <section className={styles.todos}>
        <h2 className="visually-hidden">Todo form</h2>
        <TodosHeader />
        <TextField />
        <ul className="todos__list"></ul>
      </section>
    </main>
  );
};

export default Main;
