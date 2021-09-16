import React, { useState } from "react";
import { RenderSquare, calculateWinner } from "../modules/main";

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
        ? `${winner} 의 승리`
        : `다음 플레이어: ${nextOk ? "O" : "X"}`;
    return (
        <div>
            {/* RenderSquare 는 모듈 함수 인데 함수로 사용하는 방법과 컴포넌트로 사용하는 방법이 있다 */}
            {/* 함수로 사용할때 : RenderSquare(squares, onClick) */}
            {/* 컴포넌트로 사용할때 */}
            <RenderSquare squares={squares} onClick={onClick} />
        </div>
    );
}

export default Board;
