import React, { Component } from "react";
import "./App.css";

import EntryForm from "./components/EntryForm";
import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Walk the dog", completed: true },
      { id: 2, text: "Wash dishes", completed: false },
      { id: 3, text: "Do something...", completed: false },
      { id: 4, text: "aabbava", completed: false },
    ],
  };
  onTodoAdd(text) {
    const newTodo = { id: 5, text: text };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  onCheckboxChange(id) {
    const todoIdx = this.state.todos.findIndex((todo) => todo.id === id);
    const newTodos = [...this.state.todos];
    newTodos[todoIdx] = {
      ...newTodos[todoIdx],
      completed: !newTodos[todoIdx].completed,
    };
    this.setState({
      todos: newTodos,
    });
  }
  renderTodos() {
    return this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onCheck={() => this.onCheckboxChange(todo.id)}
      />
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
          <EntryForm handleSubmit={(text) => this.onTodoAdd(text)} />
          <ul className="todo-list">{this.renderTodos()}</ul>
        </main>
        <footer>Adam Wojnicki @ DevChallenges.io</footer>
      </div>
    );
  }
}
