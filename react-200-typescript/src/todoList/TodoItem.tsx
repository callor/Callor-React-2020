import React from "react";
import "./TodoItem.css";

import { useTodosDispatch, Todo } from "./contexts/TodoContext";

type TodoItemProps = {
  // TodoContext 에서 선언했던 타입을 불러왔습니다.
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;

/*
export type TodoItemProps = {

  // 데이터를 취급할 state 객체를 직접 선언
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;
*/
