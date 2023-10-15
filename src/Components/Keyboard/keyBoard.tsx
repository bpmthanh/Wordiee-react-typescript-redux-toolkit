import React from "react";
import Key from "../Key/Key";
import "./keyBoard.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, decPos } from "../../Redux/boardSlice";

interface boardState {
  board: { board: string[]; pos: number };
}

const KeyBoard = () => {
  const pos = useSelector((state: boardState) => state.board.pos);
  const board = useSelector((state: boardState) => state.board.board);
  const dispatch = useDispatch();

  const clickBack = () => {
    if (pos <= 0) return;
    const newBoard = [...board];
    newBoard[pos - 1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  };

  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  return (
    <div className="keyboard-container">
      {rows.map((row, rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {rowIndex === 2 && <span style={{ color: "red" }}>Enter</span>}
            {row.split(" ").map((column, columnIndex) => {
              return (
                <div
                  className="column"
                  key={columnIndex}
                  style={column === "m" ? { display: "flex" } : undefined}
                >
                  <Key letter={column.toUpperCase()} key={columnIndex} />
                  {column === "m" && (
                    <span style={{ color: "yellow" }} onClick={clickBack}>
                      Back
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
