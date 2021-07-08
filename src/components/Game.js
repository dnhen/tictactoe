import { useState } from 'react';
import Grid from './Grid';

const ROW_SIZE = 3; // e.g. = 3, grid = 3x3

const Game = () => {
  const findWinner = (board) => {
    console.log(board);
  };

  const [gameBoard, setGameBoard] = useState(Array(ROW_SIZE * ROW_SIZE).fill(null));
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = findWinner(gameBoard);
  const nextPlayer = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const currBoard = gameBoard;

    if(winner || currBoard[i]){ // If there is a winner or we are clicking on a taken spot
      return;
    }

    currBoard[i] = nextPlayer;

    setGameBoard(currBoard);
    setStepNum(stepNum + 1);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <Grid className="grid" cells={gameBoard} onClick={handleClick} />
      <h1>{winner ? "Winner: " + winner : "Next Player: " + nextPlayer}</h1>
    </div>
  );
}

export default Game;
