import { useEffect, useState } from "react";
import Gameboard from "./Gameboard";

const Game = () => {
  const [status, setStatus] = useState(false);
  const [chance, setChances] = useState(5);

  function newGameClick() {
    setStatus(!status);
  }

  useEffect(() => {
    status ? setChances(chance - 1) : setChances(5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  function updateChances() {
    setChances(chance - 1);
  }

  return (
    <div>
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
