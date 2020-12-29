import { setDiff } from "../actions";
import React from "react";

function Option(props) {
  const onChange = (event) => {
    props.store.dispatch(setDiff(parseInt(event.target.value)));
  };

  return (
    <div>
      <input value={props.store.getState().diff} onChange={onChange} />
    </div>
  );
}

export default Option;
