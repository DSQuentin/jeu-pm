import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamContext from '../utils/TeamContext';

function Scoreboard() {
  const { teamNames, scores, setScores, totalScores, setTotalScores } = useContext(TeamContext);
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
    <div>
      <h1>Scoreboard</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>
              <div>{teamName}:</div>
              <div>Total score: {totalScores[index]}</div>
              <label htmlFor={`score-${index}`}>Modifier le score:</label>
              <br />
          <input
            id={`score-${index}`}
            type="number"
            value={localScores[index]}
            onChange={(event) => handleScoreChange(event, index)}
          />
        </div>
      ))}
          <Link to="/menu"><button>Retour</button></Link>
    </div>
  );
}

export default Scoreboard;
