import React, { useState } from "react";

export default ({ todo, onCheck }) => {
  const [completed, setCompleted] = useState(false);
  const checkCompleted = () => {
    onCheck();
    setCompleted(!completed);
  };
  return (
    <li className={`todo-list__item ${todo.completed ? "completed" : ""}`}>
      <input
        className="todo-list__checkbox"
        type="checkbox"
        checked={completed}
        onChange={checkCompleted}
      />
      {todo.text}
    </li>
  );
};
