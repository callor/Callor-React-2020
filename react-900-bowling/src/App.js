import React, { useState } from "react";
import "./App.css";
import StartGame from "./componet/StartGame";
import InputPlayer from "./componet/InputPlayer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  /**
   * 게임 실행을 위한 플레이어 설정
   *
   * id : PK
   * playerName : 플레이어 이름
   * pitch : 각 rolling 에서 쓰러뜨린 핀 개수(1인당 9(1~9 프레임) * 2 + 3( 10번 프레임 ))
   *
   */

  // 길이가 23인 배열을 선언하고, 모든 배열값을 0으로 초기화
  // Array.from({length:23,()=>0 })
  const [playerList, setPlayerList] = useState([
    {
      id: 0,
      playerName: "",
      pitchs: [], // Array.from({ length: 23 }, () => 0),
      pitchPoint: 0,
    },
  ]);

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
        {/* <div>
          <p>SSL_CRT_FILE : {process.env.SSL_CRT_FILE}</p>
          <p>REACT_SSL_CRT_FILE : {process.env.REACT_APP_SSL_CRT_FILE}</p>
          <p>REACT_SSL_KEY_FILE : {process.env.REACT_APP_SSL_KEY_FILE}</p>
        </div> */}
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
            render={() => (
              <StartGame
                playerList={playerList}
                setPlayerList={setPlayerList}
              />
            )}
          />
        </Router>
      </header>
    </div>
  );
}

export default App;
