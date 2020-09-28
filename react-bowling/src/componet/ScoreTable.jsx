import React from "react";

const thList = [];
const tdList = [];
for (let i = 0; i < 10; i++) {
  thList.push(
    <th colSpan={2} key={100 + i}>
      {i}
    </th>
  );
  tdList.push(<td key={200 + i}>{i}</td>);
  tdList.push(<td key={300 + i}>{i}</td>);
}
function ScoreTable(props) {
  return (
    <>
      <div className="player">{props.name}</div>
      <table>
        <thead>
          <tr>
            <th>Frame</th>
            {thList}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Score</td>
            {tdList}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ScoreTable;
