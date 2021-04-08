import React from "react";
import Cell from "../Cells/Cell";
import "./Game.css";
function Game(props) {

   

  const cells = props.cellValues.map((value, index) => {
    const winner = props.win && props.win.indexOf(index) >= 0;
    return <Cell key={index} value={value} winner={winner} onClick={()=>props.cellClicked(index)} />;
  });

  

  return (
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <div id="board">
       {cells}
      </div>
    </div>
  );
}

export default Game;
