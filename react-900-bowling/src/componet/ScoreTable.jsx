import React from "react";

const frameList = [];

const scoreList = [];
for (let i = 0; i < 10; i++) {
  frameList.push(
    <th colSpan={2} key={100 + i}>
      {i}
    </th>
  );
  scoreList.push(
    <td colSpan={2} key={500 + i}>
      {i}
    </td>
  );
}
frameList.push(
  <td colSpan={3} key={9000}>
    10
  </td>
);
scoreList.push(
  <td colSpan={3} key={5000}>
    10
  </td>
);

function ScoreTable({ player }) {
  let i = 0;

  const pitchList = player.pitchs.map((pitch) => {
    return <td key={i++}>{pitch || "-"}</td>;
  });
  return (
    <>
      <div className="player">{player.playerName}</div>
      <table>
        <thead>
          <tr>
            <th>Frame</th>
            {frameList}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>Score</td>
            {pitchList}
          </tr>
          <tr>{scoreList}</tr>
        </tbody>
      </table>
    </>
  );
}

export default ScoreTable;
