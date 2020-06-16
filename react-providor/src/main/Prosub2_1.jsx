import React, { Component } from "react";
import ProMessageContext from "../providor/MessageProvidor";

class Prosub2_1 extends Component {
  state = {
    message: "메롱"
  };
  static contextType = ProMessageContext;

  // context = ProMessageContext;
  handleChange = ev => {
    this.setState({
      message: ev.target.value
    });
  };

  handleClick = ev => {
    this.context.sendMessage(this.state.message);
  };

  
  render() {
    return (
      <div>
        <p>Sub 2-1 에서 수신 : {this.context.message} </p>
        <label>sub 2-2에서 입력 : </label>
        <input onChange={this.handleChange} value={this.state.message}></input>
        <button onClick={this.handleClick}>전달</button>
      </div>
    );
  }
}

export default Prosub2_1;
