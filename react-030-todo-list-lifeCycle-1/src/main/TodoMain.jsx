import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../css/TodoMain.css";

class TodoMain extends Component {
  render() {
    return (
      <main className="todoTemplete">
        <div className="title">할일</div>
        <div className="form-controller">
          <TodoForm
            value={this.props.input}
            onCreate={this.props.onCreate}
            onChange={this.props.onChange}
            onKeyPress={this.props.onKeyPress}
          />
        </div>
        <div className="todolist-controller">
          <TodoList
            todoList={this.props.todoList}
            onToggle={this.props.onToggle}
            onDelete={this.props.onDelete}
          />
        </div>
      </main>
    );
  }
}

export default TodoMain;
