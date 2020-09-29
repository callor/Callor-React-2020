import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StartGame from "./componet/StartGame";
import Motion_Test from "./componet/Motion_Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          빛나라&nbsp;&nbsp;&nbsp;볼링대전&nbsp;&nbsp;&nbsp;2020에&nbsp;&nbsp;&nbsp;오신것을&nbsp;&nbsp;환경합니다!!!
        </h3>
        <StartGame />
      </header>
      <Motion_Test />
    </div>
  );
}

export default App;
