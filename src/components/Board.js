import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClickSquare }) => {
  return (
    <div className="board">
      {/* render the square */}
      {squares.map((square, index) => (
        <Square
          key="index"
          className="square"
          value={square}
          onClick={() => onClickSquare(index)}
        />
      ))}
    </div>
  );
};

export default Board;
