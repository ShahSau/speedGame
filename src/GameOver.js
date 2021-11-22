import React from "react";

function GameOver({ point, closeHandler }) {
  return (
    <div>
      <h4>Game over</h4>
      <p>your score was: {point}</p>
      <button onClick={closeHandler}>X</button>
    </div>
  );
}

export default GameOver;
