import React, { useReducer, createContext, useContext, useRef, useEffect } from "react";

const initialTodos = [
  // { id: 1, text: "프로젝트 생성하기", done: true },
  // { id: 2, text: "컴포넌트 스타일링하기", done: true },
  // { id: 3, text: "Context 만들기", done: false },
  // { id: 4, text: "기능 구현하기", done: false },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return action.todoList;
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  // load localStorage
  useEffect(async () => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (!todoList) return false;
    dispatch({
      type: "LOADING",
      todoList: todoList,
    });
    let lastId = todoList.length > 0 ? todoList.length : 0;
    await todoList.forEach((element) => {
      if (lastId < Number(element.id)) {
        lastId = Number(element.id);
      }
    });
    nextId.current = lastId + 1;
  }, []);

  // save localStorage
  useEffect(() => {
    console.log("Data Modify");
    console.log(state);
    const todoList = JSON.stringify(state);
    localStorage.setItem("todoList", todoList);
  }, [state]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// state변수(todoList)를 담고 있다가 return
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    // throw new Error("Cannot find TodoProvider");
    return [{}];
  }
  console.log("todoState", context);
  return context;
}

// state변수 변경함수(dispatch, setState)를 담고 있다가 return
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  console.log("todoDispatch", context);
  return context;
}

// state 를 추가하기 위한 id 값을 담고 있다가 return
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  console.log("todoNextId", context);
  return context;
}
