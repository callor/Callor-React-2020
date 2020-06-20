import React from "react";
import TodoItem from "./TodoItem";
import { useTodosState } from "./contexts/TodoContext";

function TodoList() {
  // TodoContext로 부터 temp 데이터 가져오기
  const todos = useTodosState();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
/**
 *  Custom Hooks을 사용하지 않았을 때
 *  temp 데이터 생성
 */
/*
function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Context API 배우기",
      done: true,
    },
    {
      id: 2,
      text: "TypeScript 배우기",
      done: true,
    },
    {
      id: 3,
      text: "TypeScript 와 Context API 함께 사용하기",
      done: false,
    },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
*/
