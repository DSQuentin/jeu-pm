import React, { useState, useEffect } from "react";
import data from "../typos.json";
import RoundsRemaining from "./RoundsRemaining";
import LastRound from "./LastRound";
import { Link } from "react-router-dom";

function Typo() {
  const [rounds, setRounds] = useState([]);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState("");
  const roundsRemaining = () => rounds.length - selectedRounds.length;

  useEffect(() => {
    fetchRounds();
  }, []);

  const fetchRounds = () => {
    setRounds(Object.values(data));
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
          <h1>Devine le film dont est issue la police d'écriture</h1>
          <h2>Les règles</h2>
          <p>
            Une mot ou une phrase va apparaître à l'écran, il faudra retrouver
            le film auquel appartient la « police d'écriture ». <br />{" "}
            Attention, le mot ou la phrase n'a strictement (ou pas) rien à voir
            avec le film ! <br />1 , 2 ou 3 points en fonction de la difficulté.
          </p>{" "}
          <button onClick={handleNextClick}>Commencer</button>
          <Link to="/menu">Retour à la sélection des jeux</Link>
        </>
      ) : roundsRemaining() > 0 ? (
        <RoundsRemaining
          roundsRemaining={roundsRemaining}
          currentRound={currentRound}
          handleNextClick={handleNextClick}
        />
      ) : (
        <LastRound
          roundsRemaining={roundsRemaining}
          currentRound={currentRound}
        />
      )}
    </div>
  );
}

export default Typo;
