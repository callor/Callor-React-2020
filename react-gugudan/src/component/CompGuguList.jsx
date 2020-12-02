import React from "react";

const CompGuguList = ({ number }) => {
  const guguList = Array(9)
    .fill(1)
    .map((item, index) => {
      return (
        <div>
          {number} x {index + 1} = {number * (index + 1)}
        </div>
      );
    });

  return <div>{guguList}</div>;
};

export default CompGuguList;
