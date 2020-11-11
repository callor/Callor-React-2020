import React, { Component } from "react";
import "../css/TodoForm.css";

class TodoForm extends Component {
  render() {
    const { value, onCreate, onChange, onKeyPress } = this.props;
    return (
      <div className="form">
        <input
          id="item"
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <div className="todo-insert" onClick={onCreate}>
          추가
        </div>
      </div>
    );
  }
}

export default TodoForm;
