import { Square } from "../comps";

const calculateWinner = (squares) => {
    const arrayWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const result = arrayWin.filter((cols) => {
        const [col_0, col_1, col_2] = cols;
        return (
            squares[col_0] &&
            squares[col_0] === squares[col_1] &&
            squares[col_0] === squares[col_2]
        );
    });
    console.log("filter", result, result.length);
    return result.length && squares[result[0][0]];
};

const RenderSquare = (props) => {
    const { squares, onClick } = props;
    let boxIndex = 0;
    const arrayMap = [...Array(3).fill([...Array(3).fill(0)])];
    const SquarArray = arrayMap.map((subMap) => {
        const subSquarArray = subMap.map((item) => {
            return (
                <Square
                    value={squares[boxIndex]}
                    id={boxIndex++}
                    onClick={onClick}
                />
            );
        });
        return <div style={{ display: "flex" }}>{subSquarArray}</div>;
    });
    return SquarArray;
};

export { RenderSquare, calculateWinner };
