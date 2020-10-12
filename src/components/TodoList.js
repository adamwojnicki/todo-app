import React, { Component } from "react";

import Todo from "./Todo";

export default class TodoList extends Component {
  renderTodos() {
    return this.props.todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onCheck={() => this.props.onCheck(todo.id)}
      />
    ));
  }
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.length > 0 ? (
          this.renderTodos()
        ) : (
          <p className="empty-list">No todos found. Please add something :)</p>
        )}
      </ul>
    );
  }
}
