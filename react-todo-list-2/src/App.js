import React, { Component } from "react";
import "./App.css";
import TodoMain from "./class_main/TodoMain";
import TodoList from "./class_main/TodoList";
// import Click from "./clock";

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: " 리액트 소개", checked: false },
      { id: 1, text: " 리액트 소개", checked: true },
      { id: 2, text: " 리액트 소개", checked: false }
    ]
  };

  handleCreate = () => {
    const { input, todos } = this.state;

    this.setState({
      input: "", // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      // handleChange,
      handleCreate
      // handleKeyPress,
      // handleToggle,
      // handleRemove
    } = this.props;

    return (
      <div>
        <TodoMain
          value={input}
          // onKeyPress={handleKeyPress}
          // onChange={handleChange}
          onCreate={handleCreate}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
