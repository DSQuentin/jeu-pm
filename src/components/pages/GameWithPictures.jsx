import React, { useState, useEffect } from "react";
import postersData from "../../posters.json";
import typosData from "../../typos.json";
import RoundsRemaining from "../utils/RoundsRemaining";
import LastRound from "../utils/LastRound";
import { Link } from "react-router-dom";

function GameWithPictures({ gameType }) {
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
    <div>
      {roundsRemaining() === rounds.length ? (
        <>
          {gameType === "posters" ? (
            <h1>Devine le film dont est issue l'affiche</h1>
          ) : (
            <h1>Devine le film dont est issue la police d'écriture</h1>
          )}
          <h2>Les règles</h2>
          {gameType === "posters" ? (
            <p>
              Une affiche minimaliste va apparaître à l'écran, il faudra
              retrouver le film auquel appartient l'affiche.
              <br />1 , 2 ou 3 points en fonction de la difficulté.
            </p>
          ) : (
            <p>
              Un texte va apparaître à l'écran avec une police d'écriture venant
              d'une affiche de film. Il faudra retrouver le film auquel
              appartient la police d'écriture.
              <br />1 , 2 ou 3 points en fonction de la difficulté.
            </p>
          )}
          <button onClick={handleNextClick}>Commencer</button>
          <Link to="/menu">
            <button>Retour à la sélection des jeux</button>
          </Link>
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

export default GameWithPictures;
