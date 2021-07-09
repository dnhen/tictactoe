import { useState } from 'react';
import Grid from './Grid';

const ROW_SIZE = 3; // e.g. = 3, grid = 3x3

const Game = () => {
  const findWinner = (board) => {
    // Check diagonal (left to right)
    let prev = board[0];
    let i = ROW_SIZE + 1;
    while(prev === board[i]){ // The previous diagonal and current diagonal are the same
      if(i === board.length - 1){ return prev; } // If we are at the last diag
      prev = board[i];
      i += ROW_SIZE + 1;
    }

    // Check diagonal (right to left)
    prev = board[ROW_SIZE - 1];
    i = ROW_SIZE + ROW_SIZE - 2;
    while(prev === board[i]){ // The previous diagonal and current diagonal are the same
      if(i === board.length - ROW_SIZE){ return prev; } // If we are at the last diag
      prev = board[i];
      i += ROW_SIZE - 1;
    }

    // Check horizontal (left to right)
    for(i = 0; i < ROW_SIZE; i++){
      prev = board[i * ROW_SIZE];
      for(let x = 1; x < ROW_SIZE; x++){
        let curr = board[x + (i * ROW_SIZE)]
        if(prev !== curr){ break; } // If previous isnt same as current, end the checking
        if(x === ROW_SIZE - 1) { return prev; } // If we are at the end and all are the same, return winner
        prev = board[x + (i * ROW_SIZE)];
      }
    }

    // Check vertical (top to bottom)
    for(i = 0; i < ROW_SIZE; i++){
      prev = board[i];
      for(let x = 1; x < ROW_SIZE; x++){
        let curr = board[i + (x * ROW_SIZE)]
        if(prev !== curr){ break; } // If previous isnt same as current, end the checking
        if(x === ROW_SIZE - 1) { return prev; } // If we are at the end and all are the same, return winner
        prev = board[i + (x * ROW_SIZE)];
      }
    }
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
