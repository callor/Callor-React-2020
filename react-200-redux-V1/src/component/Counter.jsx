import React from "react";

function Counter(props) {
  return (
    <div>
      <h1>value : {props.store.getState().counter.value}</h1>
    </div>
  );
}

export default Counter;
