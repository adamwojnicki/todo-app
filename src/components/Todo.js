import React from "react";

export default ({ todo, onCheck }) => {
  return (
    <li className={`todo-list__item ${todo.completed ? "completed" : ""}`}>
      <input
        className="todo-list__checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={onCheck}
      />
      {todo.text}
    </li>
  );
};
