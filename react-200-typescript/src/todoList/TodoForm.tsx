import React, { useState, FormEvent } from "react";
import { useTodosDispatch } from "./contexts/TodoContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value,
    });
    // 입력박스 clear, 새항목 생성
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
