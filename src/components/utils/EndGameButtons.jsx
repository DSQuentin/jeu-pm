import React from "react";
import { Link } from "react-router-dom";
import { buttonStyle } from "../../styles/styles";

export default function EndGameButtons() {
  return (
    <>
      <div className="flex justify-evenly mx-96">
        <Link to="/scoreboard-modifier">
          <button className={buttonStyle}>
            Afficher le tableau des scores
          </button>
        </Link>
        <Link to="/menu">
          <button className={buttonStyle}>Menu</button>
        </Link>
      </div>
    </>
  );
}
