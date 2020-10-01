import React, { useState } from "react";
import "../css/InputPlayer.css";

let playerId = 0;
const InputBox = ({ players, addPlayer, player, inputName }) => {
  console.log("In Key", player);
  return (
    <div>
      <input
        className="playerName"
        value={players[player.id].name}
        onChange={inputName}
      ></input>
      <span className="addPlayer" onClick={addPlayer}>
        &#43;
      </span>
      <span className="removePlayer">&times;</span>
    </div>
  );
};

const InputPlayer = () => {
  const [players, setPlayers] = useState([{ id: 0, name: "플레이어 0" }]);
  const addPlayer = (e) => {
    console.log("click id", ++playerId);
    setPlayers(players.concat({ id: playerId, name: "플레이어 " + playerId }));
  };

  const inputName = (e, id) => {
    // [e.target.name] = e.target.value;
    setPlayers([...players, { id: id, name: e.target.value }]);
  };

  return (
    <div>
      <form className="formPlayer">
        {players.map((player) => {
          console.log("map player id", player);
          return (
            <InputBox
              players={players}
              addPlayer={addPlayer}
              key={player.id}
              player={player}
              inputName={(e) => inputName(e, player.id)}
            />
          );
        })}
      </form>
    </div>
  );
};

export default InputPlayer;
