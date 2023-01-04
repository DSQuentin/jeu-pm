import React from "react";
import { Link } from "react-router-dom";

function EndGameButtons() {
  return (
      <>
          <div className="flex justify-evenly mx-96">
          <Link to="/scoreboard">
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">Afficher le tableau des scores</button>
      </Link>
      <Link to="/menu">
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 ml-1">Menu</button>
      </Link>
          </div>

    </>
  );
}

export default EndGameButtons;
