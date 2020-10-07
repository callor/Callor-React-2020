import React, { useState } from "react";
import "./App.css";
import StartGame from "./componet/StartGame";
import InputPlayer from "./componet/InputPlayer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [playerList, setPlayerList] = useState([{ id: 0, playerName: "" }]);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/bowl-logo.png"}
          className="App-logo"
          alt="logo"
        />

        <h3>
          빛나라&nbsp;&nbsp;&nbsp;볼링대전&nbsp;&nbsp;&nbsp;2020에&nbsp;&nbsp;&nbsp;오신것을&nbsp;&nbsp;환경합니다!!!
        </h3>
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <InputPlayer
                playerList={playerList}
                setPlayerList={setPlayerList}
              />
            )}
          />
          <Route
            path="/startGame"
            render={() => <StartGame playerList={playerList} />}
          />
        </Router>
      </header>
    </div>
  );
}

export default App;
