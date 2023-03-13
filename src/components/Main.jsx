import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Todos</h1>
      <section className={styles.todos}>
        <h2 className="visually-hidden">Todo form</h2>
        <header className="todos__header todo-header todo-header--hide">
          <h3 className="visually-hidden">Todo information and filter</h3>
          <span className="todo-header__info"></span>
          <ul className="todo-header__filter__list">
            <li className="todo-header__filter-item">
              <button
                className="button-filter button-filter--selected"
                type="button"
                name="all"
              >
                All
              </button>
            </li>
            <li className="todo-header__filter-item">
              <button className="button-filter" type="button" name="active">
                Active
              </button>
            </li>
            <li className="todo-header__filter-item">
              <button className="button-filter" type="button" name="completed">
                Completed
              </button>
            </li>
          </ul>
          <button
            className="todo-header__button-clear todo-header--hide"
            type="button"
          >
            Clear completed
          </button>
        </header>
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
