/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { musics as musicsData } from "../components/data/musics.js";
import RoundsRemaining from "../components/utils/RoundsRemaining.jsx";
import LastRound from "../components/utils/LastRound.jsx";

export default function Musiques({ gameType }) {
  const [rounds, setRounds] = useState([]);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [currentRound, setCurrentRound] = useState("");
  const [playing, setPlaying] = useState(false);
  const roundsRemaining = () => rounds.length - selectedRounds.length;

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    fetchMusics();
  }, []);

  const fetchMusics = () => {
    setRounds(Object.values(musicsData));
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
          <h1 className="text-4xl text-center w-full mb-8">
            Devine le film dont est issue la musique
          </h1>
          <h2 className="text-4xl w-full text-center my-4">Les règles</h2>
          <p className="w-full text-center my-2 text-xl">
            Une musique minimaliste va apparaître à l'écran, il faudra retrouver
            le film auquel appartient la musique.
          </p>
          <button
            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full my-4"
            onClick={handleNextClick}
          >
            Commencer
          </button>
        </>
      ) : roundsRemaining() > 0 ? (
        <RoundsRemaining
          roundsRemaining={roundsRemaining}
          currentRound={currentRound}
          handleNextClick={handleNextClick}
          gameType={gameType}
          handlePlayPause={handlePlayPause}
          playing={playing}
        />
      ) : (
        <LastRound currentRound={currentRound} gameType={gameType} />
      )}
    </div>
  );
}
