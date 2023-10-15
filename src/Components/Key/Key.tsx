import React from "react";
import "./Key.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, inPos } from "../../Redux/boardSlice";

interface IProps {
  letter: string;
}

interface boardState {
  board: { board: string[]; pos: number };
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  const board = useSelector((state: boardState) => state.board.board);
  const pos = useSelector((state: boardState) => state.board.pos);

  const dispatch = useDispatch();
  const chooseLetter = () => {
    if (pos >= 30) {
      return;
    }
    const newBoard = [...board];
    newBoard[pos] = letter;
    dispatch(setBoard(newBoard));
    dispatch(inPos());
  };
  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
