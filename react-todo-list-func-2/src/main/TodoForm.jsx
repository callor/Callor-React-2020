import React from "react";
import "./TodoForm.css";

const TodoForm = ({ value, onCreate }) => {
  return (
    <div className="form">
      <input id="item" type="text" value={value}></input>
      <div className="todo-insert" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default TodoForm;
