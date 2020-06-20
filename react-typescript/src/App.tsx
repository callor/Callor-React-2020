import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import CounterReducer from "./CounterReducer";
import InputForm from "./InputForm";
import ReducerSample from "./ReducerSample";
import { TodosContextProvider } from "./todoList/contexts/TodoContext";
import TodoForm from "./todoList/TodoForm";
import TodoList from "./todoList/TodoList";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <div className="app" style={{ margin: "10px" }}>
      <input type="text"></input>
      <Greetings name="대한민국" mark="Republic of Korea" />
      <Counter />
      <InputForm onSubmit={onSubmit} />
      <CounterReducer />
      <ReducerSample />
      <TodosContextProvider>
        <TodoForm />
        <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
