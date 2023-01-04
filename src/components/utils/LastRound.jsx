import React from "react";
import EndGameButtons from "./EndGameButtons";

function LastRound({ currentRound, roundsRemaining}) {
    return (
        <>
            <p>C'est la dernière manche !</p>
            <img
                src={currentRound}
                alt={"Aléatoire " + (roundsRemaining() + 1)}
            />
            <EndGameButtons />
        </>
    )
};

export default LastRound;