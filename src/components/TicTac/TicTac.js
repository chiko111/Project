import { useDispatch, useSelector } from 'react-redux';
import { jumpToMove, playMove } from '../action';
import { Board } from './Board';

const TicTac = () => {
  const history = useSelector(state => state.game.history);
  const currentMove = useSelector(state => state.game.currentMove);
  const dispatch = useDispatch();
  
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = nextSquares => {
    dispatch(playMove(nextSquares));
  };

  const jumpTo = nextMove => {
    dispatch(jumpToMove(nextMove));
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <div className="gameContent">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
      <div className="game-info">
        <div>
          <p>{moves}</p>
        </div>
      </div>
    </div>
  );
};
export default TicTac;
