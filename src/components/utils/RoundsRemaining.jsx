import React from "react";
import Timer from "./Timer";

function RoundsRemaining({ currentRound, roundsRemaining, handleNextClick}) {
    return (
        <>
            <p>Il reste {roundsRemaining()} images à trouver</p>
            <img
                src={currentRound}
                alt={"Aléatoire " + (roundsRemaining() + 1)}
            />
            <Timer />
            <button onClick={handleNextClick}>Suivant</button>
        </>
    )
};

export default RoundsRemaining;