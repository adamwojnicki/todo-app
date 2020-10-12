import React, { Component } from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

import EntryForm from "./components/EntryForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    todos: [],
  };
  onTodoAdd(text) {
    const newTodo = { id: uuidv1(), text: text };
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
          <TodoList todos={this.state.todos} />
        </main>
        <footer>Adam Wojnicki @ DevChallenges.io</footer>
      </div>
    );
  }
}
