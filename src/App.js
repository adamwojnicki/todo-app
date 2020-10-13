import React, { Component } from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

import EntryForm from "./components/EntryForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    todos: [],
    filter: "all"
  };
  onTodoAdd(text) {
    const newTodo = { id: uuidv1(), text: text, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  onTodoComplete(id) {
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
  onTodoDelete(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos: newTodos})
  }
  filteredTodos = () => {
    switch (this.state.filter) {
      case "active":
        return this.state.todos.filter(todo => todo.completed===false)
      case "completed":
        return this.state.todos.filter(todo => todo.completed===true)  
      default:
        return this.state.todos
    }
  }
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="header__logo">#todo</h1>
        </header>
        <main>
          <div className="filters">
            <button onClick={()=>this.setState({filter:"all"})} className={`filters__btn ${this.state.filter === "all" ? "active" : ""}`}>All</button>
            <button onClick={()=>this.setState({filter:"active"})} className={`filters__btn ${this.state.filter === "active" ? "active" : ""}`}>Active</button>
            <button onClick={()=>this.setState({filter:"completed"})} className={`filters__btn ${this.state.filter === "completed" ? "active" : ""}`}>Completed</button>
          </div>
          <EntryForm handleSubmit={(text) => this.onTodoAdd(text)} />
          <TodoList
            todos={this.filteredTodos()}
            onCheck={(id) => this.onTodoComplete(id)}
            onDelete={(id) => this.onTodoDelete(id)}
            filter={this.state.filter}
          />
        </main>
        <footer>Adam Wojnicki @ DevChallenges.io</footer>
      </div>
    );
  }
}
