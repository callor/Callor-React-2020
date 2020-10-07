import React from "react";
import "../css/InputPlayer.css";
import { NavLink } from "react-router-dom";

let playerId = 0;

const InputPlayer = ({ playerList, setPlayerList }) => {
  const addPlayer = (e) => {
    console.log("click id", ++playerId);
    setPlayerList([...playerList, { id: playerId + 1, playerName: "" }]);
  };

  const removePlayer = (index) => {
    const list = [...playerList];
    list.splice(index, 1);
    setPlayerList(list);
  };

  const inputName = (e, index) => {
    const { name, value } = e.target;
    const list = [...playerList];
    list[index][name] = value;
    setPlayerList(list);
  };

  return (
    <div className="playerInput">
      {playerList.map((player, index) => {
        return (
          <div>
            <input name="playerName" placeholder="플레이어 이름을 입력하세요" className="playerName" value={player.playerName} onChange={(e) => inputName(e, index)}></input>
            <div className="add-btn-box">
              {playerList.length !== 1 && <span onClick={(e) => removePlayer(index)}>&times;</span>}
              {playerList.length - 1 === index && <span onClick={addPlayer}>&#43;</span>}
            </div>
          </div>
        );
      })}
      <div className="start-btn-box">
        <NavLink className="btn-start-game" to="/startGame">
          게임 시작
        </NavLink>
      </div>
    </div>
  );
};

export default InputPlayer;
