import { useEffect, useState } from "react";
import Gameboard from "./Gameboard";

const Game = (props) => {
  const { chances } = props;
  const [status, setStatus] = useState(false);
  const [chance, setChances] = useState(chances);

  function newGameClick() {
    setStatus(!status);
  }

  useEffect(() => {
    if (!status) {
      setChances(chances);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function updateChances() {
    setChances(chance - 1);
  }

  return (
    <div>
      {console.log(chances)}
      <div className="game-stats">
        <div className="game-stats__score">
          <div className="game-stats__score--label">Cards Left:</div>
          <div className="game-stats__score--value">{chance}</div>
        </div>
        <button
          onClick={newGameClick}
          className="game-stats__button"
          type="button"
        >
          {status ? "Reset Game" : "Start Game"}
        </button>
      </div>

      <Gameboard
        status={status}
        updateChances={updateChances}
        chance={chance}
      />
    </div>
  );
};

export default Game;
