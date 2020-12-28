import React, { useCallback } from "react";
// import { setDiff } from "../reducers";
import { useDispatch } from "react-redux";

function Option({ diff, setDiff }) {
  const dispatch = useDispatch();
  const onChange = useCallback(
    (event) => {
      dispatch(setDiff(parseInt(event.target.value)));
    },
    [dispatch]
  );

  return (
    <div>
      <input value={diff} onChange={onChange} />
    </div>
  );
}

export default Option;
