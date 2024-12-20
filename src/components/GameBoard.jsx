import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

/*********************
 1. return 안에서 중괄호로 변수를 불러온다.
 2. map을 통해 배열의 각 요소에 접근한다.
 3. 상태: initialGameBoard -> gameBoard
**********************/


export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {

        console.log('인덱스가 들어올까?');
        console.log('인덱스가 들어올까? rowIndex',rowIndex);
        console.log('인덱스가 들어올까? colIndex',colIndex);
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((innerArray => [...innerArray]))];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map(
                (row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                )
            )}
        </ol>
    );
}
