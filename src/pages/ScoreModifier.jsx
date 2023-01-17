import React, { useContext, useState } from "react";
import TeamContext from "../components/utils/TeamContext";
import { inputLabelStyle } from "../styles/styles";

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
    <div className="flex flex-col content-end items-end">
      <h1 className="text-xl">Scores :</h1>
      {teamNames.map((teamName, index) => (
        <div key={index} className="mx-auto my-1 flex justify-end items-center">
          <label className="mr-2" htmlFor={`score-${index}`}>
            {teamName}
          </label>
          <input
            id={`score-${index}`}
            type="number"
            value={localScores[index]}
            onChange={(event) => handleScoreChange(event, index)}
            className={inputLabelStyle}
          />
        </div>
      ))}
    </div>
  );
}
