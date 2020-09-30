import React from "react";

const frameList = [];
const pitchList = [];
const scoreList = [];
for (let i = 0; i < 10; i++) {
  frameList.push(
    <th colSpan={2} key={100 + i}>
      {i}
    </th>
  );
  pitchList.push(<td key={200 + i}>{i}</td>);
  pitchList.push(<td key={300 + i}>{i}</td>);
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
pitchList.push(<td key={2000}>9</td>);
pitchList.push(<td key={3000}>9</td>);
pitchList.push(<td key={4000}>9</td>);
scoreList.push(
  <td colSpan={3} key={5000}>
    10
  </td>
);

function ScoreTable(props) {
  return (
    <>
      <div className="player">{props.name}</div>
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
