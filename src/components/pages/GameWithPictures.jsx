import React, { useState, useEffect } from "react";
import postersData from "../../data/posters.json";
import typosData from "../../data/typos.json";
import RoundsRemaining from "../utils/RoundsRemaining";
import LastRound from "../utils/LastRound";
import { Link } from "react-router-dom";

export default function GameWithPictures({ gameType }) {
  const [rounds, setRounds] = useState([]);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState("");
  const roundsRemaining = () => rounds.length - selectedRounds.length;

  useEffect(() => {
    fetchRounds();
  }, []);

  const fetchRounds = () => {
    if (gameType === "posters") {
      setRounds(Object.values(postersData));
    } else if (gameType === "typos") {
      setRounds(Object.values(typosData));
    }
    setCurrentRound(rounds[0]); // définir la première round du tableau comme round par défaut
  };

  const handleNextClick = () => {
    let round = rounds[Math.floor(Math.random() * rounds.length)];
    while (selectedRounds.includes(round)) {
      round = rounds[Math.floor(Math.random() * rounds.length)];
    }
    setCurrentRound(round);
    setSelectedRounds([...selectedRounds, round]);
  };

  useEffect(() => {
    setCurrentRound(rounds[Math.floor(Math.random() * rounds.length)]);
  }, [rounds]);

  return (
    <div className="m-12 border-4 border-amber-500 rounded-lg bg-amber-400 p-8">
      {roundsRemaining() === rounds.length ? (
        <>
          {gameType === "posters" ? (
            <h1 className="text-4xl text-center w-full mb-8">
              Devine le film dont est issue l'affiche
            </h1>
          ) : (
            <h1 className="text-4xl text-center w-full mb-8">
              Devine le film dont est issue la police d'écriture
            </h1>
          )}
          <h2 className="text-4xl w-full text-center my-4">Les règles</h2>
          {gameType === "posters" ? (
            <p className="w-full text-center my-2 text-xl">
              Une affiche minimaliste va apparaître à l'écran, il faudra
              retrouver le film auquel appartient l'affiche.
              <br />1 , 2 ou 3 points en fonction de la difficulté.
            </p>
          ) : (
            <p className="w-full text-center my-2 text-xl">
              Un texte va apparaître à l'écran avec une police d'écriture venant
              d'une affiche de film. Il faudra retrouver le film auquel
              appartient la police d'écriture.
              <br />1 , 2 ou 3 points en fonction de la difficulté.
            </p>
          )}
          <div className="flex justify-evenly mx-96">
            <button
              onClick={handleNextClick}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
            >
              Commencer
            </button>
            <Link to="/menu">
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 ml-1">
                Retour à la sélection des jeux
              </button>
            </Link>
          </div>
        </>
      ) : roundsRemaining() > 0 ? (
        <RoundsRemaining
          roundsRemaining={roundsRemaining}
          currentRound={currentRound}
          handleNextClick={handleNextClick}
          gameType={gameType}
        />
      ) : (
        <LastRound
          roundsRemaining={roundsRemaining}
          currentRound={currentRound}
          gameType={gameType}
        />
      )}
    </div>
  );
}
