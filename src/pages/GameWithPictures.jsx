/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { posters as postersData } from "../components/data/posters.js";
import { typos as typosData } from "../components/data/typos.js";
import RoundsRemaining from "../components/utils/RoundsRemaining";
import LastRound from "../components/utils/LastRound";
import { Link } from "react-router-dom";
import { buttonStyle, mainDivStyle } from "../styles/styles";

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
    setCurrentRound(rounds[0]);
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
    <div className={mainDivStyle}>
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
            </p>
          ) : (
            <p className="w-full text-center my-2 text-xl">
              Un texte va apparaître à l'écran avec une police d'écriture venant
              d'une affiche de film. Il faudra retrouver le film auquel
              appartient la police d'écriture.
            </p>
          )}
          <div className="flex justify-evenly mx-96 mt-12 relative">
            <button onClick={handleNextClick} className={buttonStyle}>
              Commencer
            </button>
            <Link to="/menu">
              <button className={buttonStyle}>
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
          selectedRounds={selectedRounds}
          gameType={gameType}
        />
      ) : (
        <LastRound currentRound={currentRound} gameType={gameType} />
      )}
    </div>
  );
}
