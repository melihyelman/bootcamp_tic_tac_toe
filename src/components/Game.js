import React, { useState } from "react";
import "./Game.css";
import Board from "./Board";

const winnerLines = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (board) => {
  for (var i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  // return draw if board not includes null
  let draw = !board.includes(null);
  if (draw) return "Draw";

  // return null if result empty
  return null;
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);

  // finds the winner
  const winner = calculateWinner(board);

  // execute if user clicks square
  const handleClick = (index) => {
    //   copyed board
    const copy = [...board];

    //  stop the game if user won or draw. skip the function if button already clicked
    if (winner || copy[index]) return 0;

    // put X(false) or O(true) in the clicked square
    copy[index] = next ? "O" : "X";

    // change master board
    setBoard(copy);
    // change next (true => false) (false => true)
    setNext(!next);
  };

  const newGame = () => (
    // clean board if clicked
    <button
      type="button"
      className="newGame"
      onClick={() => setBoard(Array(9).fill(null))}
    >
      New Game
    </button>
  );

  return (
    <>
      <div className="entry">
        <h1> Welcome My Game</h1>
        {newGame()}
      </div>
      <Board squares={board} onClickSquare={handleClick} />
      <div className="game">
        <p className="info">
          {/* show the winner if there is one. If not show the next */}
          {winner ? "Result: " + winner : "Next Player : " + (next ? "O" : "X")}
        </p>
      </div>
    </>
  );
};

export default Game;
