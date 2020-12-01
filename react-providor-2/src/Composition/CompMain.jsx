import React, { Component } from "react";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
      <div>{props.color}</div>
    </div>
  );
}

class CompMain extends Component {
  render() {
    return (
      <FancyBorder color="yellow">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        <SplitPane
          left={<p>메롱</p>}
          right={<button>호랑나비</button>}
        ></SplitPane>
      </FancyBorder>
    );
  }
}

export default CompMain;
