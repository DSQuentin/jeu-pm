import React from "react";
import { Link } from "react-router-dom";

function EndGameButtons() {
  return (
    <>
      <Link to="/scoreboard">
        <button>Afficher le tableau des scores</button>
      </Link>
      <Link to="/menu">
        <button>Retour</button>
      </Link>
    </>
  );
}

export default EndGameButtons;
