import React from "react";
import Cards from "./Cards";

const Gameboard = (props) => {
  const { status, updateChances, chance } = props;

  return (
    <>
      <div className="game-instruction">
        <h3 className="game-instruction__header">
          Instruction: - Just Flip ME
        </h3>
      </div>
      <div className="game-board">
        <Cards status={status} updateChances={updateChances} chance={chance} />
      </div>
    </>
  );
};

export default Gameboard;
