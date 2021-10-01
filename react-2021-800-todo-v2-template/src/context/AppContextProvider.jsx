import React, { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

export const useTotoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
    const nextid = useRef(0);
    const inputId = useRef();
    const [todo, setTodo] = useState({
        t_id: 0,
        t_text: " 리액트 소개",
        t_isComplete: false,
    });
    const [todoList, setTodoList] = useState([
        {
            t_id: 0,
            t_text: " 리액트 소개",
            t_isComplete: false,
        },
    ]);

    const onChange = (e) => {
        setTodo({ ...todo, t_text: e.target.value, t_id: nextid.current });
    };
    const todoInsert = () => {
        setTodoList([...todoList, todo]);
        nextid.current = todoList.length;
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            todoInsert();
        }
    };
    const completeToggle = (id) => {
        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾기
        const index = todoList.findIndex((todo) => todo.t_id === id);
        const selected = todoList[index]; // 선택한 객체
        const nextTodos = [...todoList]; // 배열을 복사

        // 기존의 값들을 복사하고, index에 해당하는 checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            t_isComplete: !selected?.t_isComplete,
        };
        setTodoList(nextTodos);
    };

    const todoDelete = (id) => {
        setTodoList(todoList.filter((todo) => todo?.t_id !== id));
    };

    const props = {
        todo,
        todoList,
        onChange,
        onKeyPress,
        todoInsert,
        todoDelete,
        completeToggle,
        inputId,
    };
    return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
