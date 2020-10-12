import React from "react";

export default ({ todo, onCheck }) => {
  return (
    <li className={`todo-list__item ${todo.completed ? "completed" : ""}`}>
      <label>
        <input
          className="todo-list__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={onCheck}
        />
        {todo.text}
      </label>
      {todo.completed ? (<button>
        <i className="material-icons">delete_outline</i>
      </button>) : null }
      
    </li>
  );
};
