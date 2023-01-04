import React from "react";
import EndGameButtons from "./EndGameButtons";
import Timer from "./Timer";

function LastRound({ currentRound, roundsRemaining}) {
    return (
        <>
            <p className="text-4xl w-full text-center my-4">C'est la dernière manche !</p>
            <img
                src={currentRound}
                alt={"Aléatoire " + (roundsRemaining() + 1)}
                className="mx-auto border-4 border-amber-500 rounded-lg h-80 w-auto"
            />
            <Timer />
            <EndGameButtons />
        </>
    )
};

export default LastRound;