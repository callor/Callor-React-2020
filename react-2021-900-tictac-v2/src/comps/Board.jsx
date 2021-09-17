import React, { useState } from "react";
import { RenderSquare, calculateWinner } from "../modules/main";

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
        ? `${winner} 승리`
        : `다음 Player : ${nextOk ? "O" : "X"}`;
    return (
        <div className="main-section">
            <div className="game-main">
                <RenderSquare
                    squares={current.squares}
                    nextOk={nextOk}
                    onClick={onClick}
                />
            </div>
            <ol className="game-history">
                <li>{status}</li>

                {timeMS.history.map((step, move) => {
                    const desc = move ? `되돌리기 #${move}` : `다시 시작`;
                    return <li onClick={() => jumpTo(move)}>{desc}</li>;
                })}
            </ol>
            <div id="canvas"></div>
        </div>
    );
}

export default Board;
