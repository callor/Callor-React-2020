import React from "react";

function Button(props) {
  const onIncrement = (event) => {
    props.dispatch(increment());
  };
  const onDecrement = (event) => {
    props.dispatch(decrement());
  };

  return (
    <div>
      <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Button;
