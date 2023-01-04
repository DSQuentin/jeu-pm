import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TeamContext from '../TeamContext';

function Menu() {
  const { teamNames, scores, totalScores } = useContext(TeamContext);

  return (
    <div>
      <h1>Menu de sélection</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>
          {teamName}: {totalScores[index]} points
        </div>
      ))}
      <Link to="/fonts"> <button>Police d'écriture</button></Link>
      <Link to="/scoreboard"><button>Scoreboard</button></Link>
    </div>
  );
}

export default Menu;
