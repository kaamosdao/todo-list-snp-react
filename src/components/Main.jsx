import React from 'react';
import styles from './Main.module.scss';
import TodosHeader from './TodosHeader';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos</h1>
      <section className={styles.todos}>
        <h2 className="visually-hidden">Todo form</h2>
        <TodosHeader />
        <label className="todos__check-all">
          <input
            className="visually-hidden todos__input-check"
            type="checkbox"
            id="all"
          />
          <span className="todos__checkbox-mark"></span>
        </label>
        <label className="visually-hidden" htmlFor="todo">
          {' '}
          Todo{' '}
        </label>
        <input
          className="todos__input input-add-todo"
          type="text"
          name="todo"
          id="todo"
          placeholder="What needs to be done?"
          required
        />
        <ul className="todos__list"></ul>
      </section>
    </main>
  );
};

export default Main;
