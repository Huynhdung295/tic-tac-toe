import classNames from "classnames";
import React from "react";
import "./BtnNewGame.css"
function BtnNewGame(props) {

  const gameOverClasses = classNames({
    "modal-open": props.gameOver,
  })
  
  const message = props.winner ? `Winner is ${props.winner}` : "It's Tie"

  return (
    <div id="modal-overlay" className={gameOverClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
           <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button onClick={props.newGame} id="new-game-button">Start New Game</button>
        </div>
      </div>
    </div>
  );
}

export default BtnNewGame;
