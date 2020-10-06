import React, { Component } from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

import EntryForm from "./components/EntryForm";
import Todo from "./components/Todo";

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
          <ul className="todo-list">
            {this.state.todos.length > 0 ? (
              this.renderTodos()
            ) : (
              <p className="empty-list">
                No todos found. Please add something :)
              </p>
            )}
          </ul>
        </main>
        <footer>Adam Wojnicki @ DevChallenges.io</footer>
      </div>
    );
  }
}
