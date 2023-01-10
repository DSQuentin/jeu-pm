import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

export default function RoundsRemaining({
  currentRound,
  roundsRemaining,
  handleNextClick,
  gameType,
  handlePlayPause,
}) {
  return (
    <>
      <p className="text-4xl w-full text-center my-4">
        Il reste {roundsRemaining()} manches
      </p>

      <img
        src={currentRound.image}
        alt={currentRound.title}
        className="mx-auto border-4 border-amber-500 rounded-lg h-80 w-auto"
      />

      <Timer />
      <div className="flex justify-evenly mx-96">
        <button
          onClick={handleNextClick}
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
        >
          Suivant
        </button>
        <Link to="/menu">
          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 ml-1">
            Menu
          </button>
        </Link>
      </div>
    </>
  );
}
