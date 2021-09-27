import React from "react";

function CounterInput({ dispatch }) {
    return (
        <div>
            <button onClick={() => dispatch({ type: "증가" })}>증가</button>
            <button onClick={() => dispatch({ type: "감소" })}>감소</button>
        </div>
    );
}

export default CounterInput;
