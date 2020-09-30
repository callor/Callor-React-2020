import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StartGame from "./componet/StartGame";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-logo">🎳</span>
        <h3>
          빛나라&nbsp;&nbsp;&nbsp;볼링대전&nbsp;&nbsp;&nbsp;2020에&nbsp;&nbsp;&nbsp;오신것을&nbsp;&nbsp;환경합니다!!!
        </h3>
        <StartGame />
      </header>
    </div>
  );
}

export default App;
