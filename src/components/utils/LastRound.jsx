import React from "react";
import EndGameButtons from "./EndGameButtons";
import Timer from "./Timer";

export default function LastRound({ currentRound }) {
  return (
    <>
      <p className="text-4xl w-full text-center my-4">
        C'est la dernière manche !
      </p>
      <img
        src={currentRound.image}
        alt={currentRound.title}
        className="mx-auto border-4 border-amber-500 rounded-lg h-80 w-auto"
      />
      <Timer />
      <EndGameButtons />
    </>
  );
}
