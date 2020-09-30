import React from "react";
import "./App.css";
import StartGame from "./componet/StartGame";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/bowl-logo.png"}
          className="App-logo"
        />

        <h3>
          빛나라&nbsp;&nbsp;&nbsp;볼링대전&nbsp;&nbsp;&nbsp;2020에&nbsp;&nbsp;&nbsp;오신것을&nbsp;&nbsp;환경합니다!!!
        </h3>
        <StartGame />
      </header>
    </div>
  );
}

export default App;
