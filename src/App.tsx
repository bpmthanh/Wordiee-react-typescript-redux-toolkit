import React from "react";
import "./App.scss";
import Board from "./Components/Board/Board";
import Heading from "./Components/Heading/Heading";
import { useSelector } from "react-redux";

interface boardState {
  board: { board: string[]; pos: number };
}

interface boardState {
  board: { board: string[]; pos: number };
}

function App() {
  const board = useSelector((state: boardState) => state.board.board);
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="Wordiee" type="h1" />
        <Heading text="Another Wordle Clone" type="subtitle" />
        <div className="board-container">
          <Board board={board} />
        </div>
      </header>
    </div>
  );
}

export default App;
