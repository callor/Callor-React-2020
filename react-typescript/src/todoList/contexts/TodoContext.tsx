import React, { createContext, Dispatch, useReducer, useContext } from "react";

// 나중에 다른 컴포넌트에서 타입을 불러와서 쓸 수 있도록
// 클래스(interface)를 선언하여 내보내기
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodosState = Todo[];

const TodosStateContext = createContext<TodosState | undefined>(undefined);

// 액션들의 타입을 선언해주고 나면,
// 우리가 디스패치를 위한 Context를 만들 때
// 디스패치 함수의 타입을 설정 할 수 있게 된다.
type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

/*
이렇게 Dispatch 를 리액트 패키지에서 불러와서 
Generic으로 액션들의 타입을 넣어주면 
추후 컴포넌트에서 액션을 디스패치 할 때 
액션들에 대한 타입을 검사 할 수 있다. 
예를 들어서, 액션에 추가적으로 필요한 값 (예: text, id)이 빠지면 오류가 발생한다.
*/
type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unhandled action");
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, [
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
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
}
