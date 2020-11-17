import React from "react";
import BBsListItem from "./BBsListItem";

/*
bbsList를 매개변수로 받아서
    <li>BBS1</li>
    <li>BBS2</li>
    <li>BBS3</li>
    <li>BBS4</li>
    <li>BBS5</li>
*/
// const BBsList = ({ bbsList }) => {
//   const bbsMap = bbsList.map(bbs => <li key={bbs._id}>{bbs.b_title}</li>);
//   return <div>{bbsMap}</div>;
// };

// const BBsList = ({ bbsList }) => {
//   return bbsList.map(bbs => <li key={bbs._id}>{bbs.b_title}</li>);
// };

const BBsList = ({ bbsList }) => {
  // const { editing } = this.state;

  const bbsMap = bbsList.map((bbs) => {
    return <BBsListItem key={bbs._id} bbs={bbs} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <tr>
        <th>작성자</th>
        <th>작성일자</th>
        <th>제목</th>
      </tr>
      {bbsMap}
    </table>
  );
};

export default BBsList;
