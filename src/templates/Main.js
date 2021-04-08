import React, { useState } from "react";
import Game from "../Components/Game/Game";
import BtnNewGame from "../Components/ButtonNewGame/BtnNewGame";
import "../Components/root.css";
import { calcWin } from "../utils/calc";

function Main() {
    const empty = (cellIndex) => cellValues[cellIndex] === "";
    const [cellValues, setCellValues] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [toggle, setToggle] = useState(true);
    const [win, setWin] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [turnLeft, setTurnLeft] = useState(9);
    const [winner, setWinner] = useState();

    const newGame = () => {
        setCellValues([  "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",]);
        setToggle(true);
        setGameOver(false);
        setTurnLeft(9);
        setWinner(undefined);
        setWin([]);
    }
    const cellClicked = (cellIndex) => {
        if (empty(cellIndex)) {
            const newCellValues = [...cellValues];
            newCellValues[cellIndex] = toggle ? "X" : "O";

            const newTurnLeft = turnLeft - 1;

            // Caculate the result
            const calcWinner = calcWin(newCellValues, newTurnLeft, cellIndex);

            setCellValues(newCellValues);
            setToggle(!toggle);
            setGameOver(calcWinner.hasRel);
            setTurnLeft(newTurnLeft);
            setWinner(calcWinner.winner);
            setWin(calcWinner.win);
        }
    };

    return (
        <div>
            <Game cellValues={cellValues} win={win} cellClicked={cellClicked} />
            <BtnNewGame gameOver={gameOver} winner={winner} newGame={newGame}/>
        </div>
    );
}

export default Main;
