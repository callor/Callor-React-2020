import React, { useState } from "react";

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick} data-id={props.id}>
            {props.value}
        </button>
    );
};

const RenderSquare = (props) => {
    const { squares, onClick } = props;
    let boxIndex = 0;
    const SquarArray = [...Array(3).keys()].map((row) => {
        const squer = [...Array(3).keys()].map((item) => (
            <Square
                value={squares[boxIndex]}
                id={boxIndex++}
                onClick={onClick}
            />
        ));
        return <div>{squer}</div>;
    });
    return SquarArray;
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextOk, setNextOk] = useState(true);
    const onClick = (e) => {
        const index = e.target.dataset.id;
        if (calculateWinner(squares) || squares[index]) {
            return;
        }

        const upDateSquares = [...squares];
        upDateSquares[index] = nextOk ? "O" : "X";
        setSquares(upDateSquares);
        setNextOk(!nextOk);
    };

    const winner = calculateWinner(squares);
    let status = winner
        ? "Winner: " + winner
        : `Next player: ${nextOk ? "O" : "X"}`;
    return (
        <div>
            <div className="status">{status}</div>
            <RenderSquare squares={squares} nextOk={nextOk} onClick={onClick} />
        </div>
    );
}

export default Board;
