import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import axios from "axios";

export default function RoundsRemaining({
  currentRound,
  roundsRemaining,
  handleNextClick,
  gameType,
  handlePlayPause,
  selectedRounds,
}) {
  /*   const [showAnswer, setShowAnswer] = useState(false);
  const [movie, setMovie] = useState({}); */

  /*  const API_KEY = "2235deb68fa3aa47fd73e3361856c0e5";
  const TMDBLINK =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_KEY +
    "&language=fr-FR&query=" +
    currentRound.title +
    "&page=1&include_adult=false";
 */
  /*   useEffect(() => {
    if (showAnswer) {
      axios
        .get(TMDBLINK)
        .then((response) => {
          setMovie(response.data.results[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [showAnswer]); */

  return (
    <>
      <p className="text-4xl w-full text-center my-4">
        Il reste {roundsRemaining()} manches
      </p>
      {gameType === "musiques" ? (
        <div className="flex justify-center">
          <audio
            src={currentRound.file}
            controls
            onPlay={handlePlayPause}
            onPause={handlePlayPause}
          />
        </div>
      ) : (
        <img
          src={currentRound.image}
          alt={currentRound.title}
          className="mx-auto border-4 border-amber-500 rounded-lg h-80 w-auto"
        />
      )}

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
