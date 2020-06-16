import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todayplan from "./Todayplan";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Todayplan />
      </div>
    );
  }
}

export default App;
