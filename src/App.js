import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>#todo</h1>
        </header>
        <main>
          <div className="filters">
            <button className="filters__btn active">All</button>
            <button className="filters__btn">Active</button>
            <button className="filters__btn">Completed</button>
          </div>
          <form>
            <input type="text" />
            <input type="submit" value="Add" />
          </form>
          <ul className="todo-list">
            <li className="todo-list__item">Todo 1</li>
            <li className="todo-list__item">Todo 2</li>
            <li className="todo-list__item">Todo 3</li>
          </ul>
        </main>
        <footer>Adam Wojnicki @ DevChallenges.io</footer>
      </div>
    );
  }
}
