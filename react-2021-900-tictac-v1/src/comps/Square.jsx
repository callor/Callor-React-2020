import React from "react";

const Squear = (props) => {
    return (
        <button className="square" onClick={props.onClick} data-id={props.id}>
            {props.value}
        </button>
    );
};

export default Squear;
