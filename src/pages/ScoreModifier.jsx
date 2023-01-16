import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import TeamContext from "../components/utils/TeamContext";
import { buttonStyle, mainDivStyle } from "../styles/styles";

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
    <div className={mainDivStyle}>
      <h1 className="text-4xl text-center w-full mb-8">Modifier le score</h1>
      {teamNames.map((teamName, index) => (
        <div
          key={index}
          className="border-amber-200 border-2 my-8 py-4 px-2 rounded-xl"
        >
          <div>
            Score de l'équipe {teamName}: <b>{totalScores[index]}</b>
          </div>
          <label htmlFor={`score-${index}`}>Modifier le score:</label>
          <input
            id={`score-${index}`}
            type="number"
            value={localScores[index]}
            onChange={(event) => handleScoreChange(event, index)}
            className="form-control
                  block
                  w-24
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-amber-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none"
          />
        </div>
      ))}
      <Link to="/menu">
        <button className={buttonStyle}>Retour</button>
      </Link>
    </div>
  );
}
