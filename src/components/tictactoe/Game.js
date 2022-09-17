import React, { useReducer, useState } from "react";
import { caculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyte.css";

const Game = () => {
  /*
  const [board, setBoard] = useState(Array(9).fill());
  const [xIsNext, setXIsNext] = useState(true);
  const winner = caculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill());
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div>{winner ? `Winner is ${winner}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
  */

  const initialState = {
    board: Array(9).fill(),
    xIsNext: true,
  };

  const gameReducer = (state, action) => {
    switch (action.type) {
      case "CLICK": {
        const { board, xIsNext } = state;
        const { index, winner } = action.payload;
        if (winner || board[index]) return state;

        const nextState = JSON.parse(JSON.stringify(state));

        nextState.board[index] = xIsNext ? "X" : "O";

        nextState.xIsNext = !xIsNext;
        return nextState;
      }
      case "RESET": {
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill();
        nextState.xIsNext = true;
        return nextState;
      }

      default:
        break;
    }
    return state;
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = caculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index: index,
        winner: winner,
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
      payload: {},
    });
    //setBoard(Array(9).fill());
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div>{winner ? `Winner is ${winner}` : ""}</div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
