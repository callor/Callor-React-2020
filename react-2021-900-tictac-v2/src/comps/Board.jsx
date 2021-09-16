import React, { useState } from "react";
import { Square } from "../comps";

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
        return <div style={{ display: "flex" }}>{squer}</div>;
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
    const [squares, setSquares] = useState(Array(9).fill(0));
    const [nextOk, setNextOk] = useState(true);

    // 시간여행 설정
    const [timeMS, setTimeMS] = useState({
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        isNext: true,
    });

    const onClick = (e) => {
        const index = e.target.dataset.id;
        const history = timeMS.history.slice(0, timeMS.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = { ...current.squares };

        console.log("Squares", squares);
        if (calculateWinner(squares) || squares[index]) {
            return;
        }

        // const upDateSquares = [...current_sq];
        squares[index] = nextOk ? "O" : "X";
        setSquares(squares);
        setNextOk(!nextOk);

        // 시간여행 처리
        setTimeMS({
            history: [...timeMS.history, { squares: squares }],
            stepNumber: timeMS.history.length,
            isNext: !timeMS.isNext,
        });
    };

    const jumpTo = (step) => {
        console.log("move", step);
        setTimeMS({
            ...timeMS,
            stepNumber: step,
            isNext: step % 2 === 0,
            history:
                step === 0
                    ? [{ squares: Array(9).fill(null) }]
                    : [...timeMS.history],
        });
    };

    const current = timeMS.history[timeMS.stepNumber];

    // const current_sq = history[stepMove.stepNumber];
    const winner = calculateWinner(squares);
    let status = winner
        ? "Winner: " + winner
        : `Next player: ${nextOk ? "O" : "X"}`;
    return (
        <div className="main-section">
            <div className="game-main">
                <RenderSquare
                    squares={current.squares}
                    nextOk={nextOk}
                    onClick={onClick}
                />
            </div>
            <div className="game-info">
                <div>
                    <h3>{status}</h3>
                </div>
                <ol className="game-history">
                    {timeMS.history.map((step, move) => {
                        const desc = move
                            ? `다음으로 이동  #${move}`
                            : `게임 다시 시작`;
                        return <li onClick={() => jumpTo(move)}>{desc}</li>;
                    })}
                </ol>
            </div>
        </div>
    );
}

export default Board;
