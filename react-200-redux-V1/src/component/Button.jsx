import React from "react";
import { increment, decrement } from "../actions";

const Button = () => {
  const onIncrement = (event) => {
    props.store.dispatch(increment());
  };
  const onDecrement = (event) => {
    props.store.dispatch(decrement());
  };

  return (
    <div>
      <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Button;
