import React from "react";
import "../main/TodoMain.css";
import TodoForm from "../main/TodoForm";
// import TodoList from "../main/TodoList";

const TodoMain = ({ value, onCreate }) => {
  return (
    <main className="todoTemplete">
      <div className="title">할일</div>
      <div className="form-controller">
        <TodoForm onCreate={onCreate} />
      </div>
      <div className="todolist-controller"></div>
    </main>
  );
};

export default TodoMain;
