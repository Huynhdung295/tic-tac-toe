import React from "react";
import classNames from "classnames";

function Cell(props) {
  const cellClasses = classNames({
    cell: true,
    winner: props.winner,
  });

  const cellContentClasses = classNames({
    "cell-content": true,
    populated: props.value,
  });

  return (
    <button onClick={props.onClick} className={cellClasses}>
      <span className={cellContentClasses}> {props.value} </span>
    </button>
  );
}

export default Cell;
