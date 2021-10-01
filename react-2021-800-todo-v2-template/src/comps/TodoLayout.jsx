import React from "react";
import AppContextProvider from "../context/AppContextProvider";
import "../css/TodoLayout.css";

const TodoLayout = ({ form, children }) => {
    return (
        <AppContextProvider>
            <main className="todo-list-template">
                <div className="title">오늘 할 일</div>
                <section className="form-wrapper">{form}</section>
                <section className="todos-wrapper">{children}</section>
            </main>
        </AppContextProvider>
    );
};

export default TodoLayout;
