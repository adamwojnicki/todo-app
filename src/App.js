import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Walk the dog", completed: true },
      { id: 2, text: "Wash dishes", completed: false },
      { id: 3, text: "Do something...", completed: false },
      { id: 4, text: "aabbava", completed: false },
    ],
  };
  onCheckboxChange() {
    return;
  }
  renderTodos() {
    return this.state.todos.map((todo) => (
      <li
        key={todo.id}
        className={`todo-list__item ${todo.completed ? "completed" : ""}`}
      >
        <input
          className="todo-list__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => this.onCheckboxChange()}
        />
        {todo.text}
      </li>
    ));
  }
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="header__logo">#todo</h1>
        </header>
        <main>
          <div className="filters">
            <button className="filters__btn active">All</button>
            <button className="filters__btn">Active</button>
            <button className="filters__btn">Completed</button>
          </div>
          <form className="entry-form">
            <input
              className="entry-form__input"
              placeholder="Add details..."
              type="text"
            />
            <button className="entry-form__btn" type="submit">
              Submit
            </button>
          </form>
          <ul className="todo-list">{this.renderTodos()}</ul>
        </main>
        <footer>Adam Wojnicki @ DevChallenges.io</footer>
      </div>
    );
  }
}
