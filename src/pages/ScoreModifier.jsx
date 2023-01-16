import React, { useContext, useState } from "react";
import TeamContext from "../components/utils/TeamContext";

export default function ScoreModifier() {
  const { teamNames, scores, setScores, totalScores, setTotalScores } =
    useContext(TeamContext);
  const [localScores, setLocalScores] = useState(scores); // initialize local scores to the scores from the context

  const handleScoreChange = (event, index) => {
    const newScores = [...localScores];
    newScores[index] = event.target.value;
    setLocalScores(newScores);
    setScores(newScores); // update the scores in the context
    const newTotalScores = [...totalScores];
    newTotalScores[index] += newScores[index] - scores[index]; // update the total score for the team
    setTotalScores(newTotalScores);
  };

  return (
    <div className="flex flex-col ">
      <h1 className="text-xl">Scores :</h1>
      {teamNames.map((teamName, index) => (
        <div key={index} className="mx-auto my-1">
          <label htmlFor={`score-${index}`}>{teamName}</label>
          <input
            id={`score-${index}`}
            type="number"
            value={localScores[index]}
            onChange={(event) => handleScoreChange(event, index)}
            className="ml-2 w-1/3 px-3 py-1 text-amber-700 bg-white bg-clip-padding border border-solid border-amber-300 rounded transition ease-in-out focus:text-amber-700 focus:bg-white focus:border-amber-500 focus:outline-none"
          />
        </div>
      ))}
    </div>
  );
}
