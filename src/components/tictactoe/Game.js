import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

// initialState ={}
const initialState = {
  board: Array(9).fill(null),
  xISNext: true,
};

// immutable không thể chỉnh sửa
// [...arr], {...ojb}
//deep coppy JSON.parse(JSON.stringify(ojb))
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xISNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log("gameReducer = nextState", nextState);
      // board[index] = state.xISNext ? "X" : "O";
      nextState.board[index] = xISNext ? "X" : "O";
      nextState.xISNext = !xISNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xISNext = true;
      return nextState;
    }
    default:
      console.log("error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setboard] = useState(Array(9).fill(null));
  // const [xISNext, setXIsNext] = useState(true);

  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: "CLICK", payload:{}}
  // dispath({typeL: 'CLICK'})
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xISNext: true,
  // });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });

    // boardCopy[index] = state.xISNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xISNext: !state.xISNext,
    // });
    // setboard(boardCopy);
    // setXIsNext((state.xISNext) => !state.xISNext);
  };
  const handleResteGame = () => {
    // setboard(Array(9).fill(null));
    // setXIsNext(true);
    dispatch({
      type: "RESET",
    });
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
