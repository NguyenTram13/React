import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

// initialState ={}
const initialState = {
  board: Array(9).fill(null),
  xISNext: true,
};
const Game = () => {
  // const [board, setboard] = useState(Array(9).fill(null));
  // const [xISNext, setXIsNext] = useState(true);

  // useReducer
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const action = {type: "CLICK", payload:{}}
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xISNext: true,
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xISNext ? "X" : "O";
    setState({
      ...state,
      board: boardCopy,
      xISNext: !state.xISNext,
    });
    // setboard(boardCopy);
    // setXIsNext((state.xISNext) => !state.xISNext);
  };
  const handleResteGame = () => {
    // setboard(Array(9).fill(null));
    // setXIsNext(true);
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResteGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
