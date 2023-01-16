import React from "react";
import EndGameButtons from "./EndGameButtons";
import Timer from "./Timer";

export default function LastRound({ currentRound, gameType }) {
  return (
    <>
      <p className="text-4xl w-full text-center my-4">
        C'est la dernière manche !
      </p>
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
      <Timer />
      <EndGameButtons />
    </>
  );
}
