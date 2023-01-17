import React from "react";
import { Link } from "react-router-dom";
import Penalty from "./Penalty";
import Timer from "./Timer";
import ScoreModifier from "../../pages/ScoreModifier";
import { buttonStyle } from "../../styles/styles";

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
      {gameType === "musiques" ? (
        <div className="flex justify-center my-8">
          <audio
            src={currentRound.file}
            controls
            onPlay={handlePlayPause}
            onPause={handlePlayPause}
            className="w-2/5 mt-24"
          />
        </div>
      ) : (
        <>
          {gameType === "posters" ? (
            <img
              src={currentRound.image}
              alt={currentRound.title}
              className="mx-auto border-4 border-sunray rounded-lg w-auto h-[34rem]"
            />
          ) : (
            <img
              src={currentRound.image}
              alt={currentRound.title}
              className="mx-auto border-4 border-sunray rounded-lg w-auto h-[20rem] mt-24"
            />
          )}
        </>
      )}
      <div className="absolute top-24 left-24 flex flex-col">
        <Timer />
        <Penalty />
      </div>
      <div className="absolute top-24 right-24">
        <ScoreModifier />
      </div>

      <div className="flex justify-center mx-96 mt-4">
        <button onClick={handleNextClick} className={buttonStyle}>
          Suivant
        </button>
        <Link to="/menu">
          <button className={buttonStyle}>Menu</button>
        </Link>
      </div>
    </>
  );
}
