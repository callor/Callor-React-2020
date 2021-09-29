import React from "react";

function CaButton({ children, onClick }) {
    const style = {
        display: "inline-block",
        width: "20%",

        padding: "0.9rem",
        backgroundColor: "blue",
        color: "white",
    };
    return (
        <button style={style} onClick={onClick}>
            {children}
        </button>
    );
}

export default CaButton;
