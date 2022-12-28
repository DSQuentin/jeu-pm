import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TeamContext from '../TeamContext';

function Menu() {
  const { teamNames } = useContext(TeamContext);

  return (
    <div>
      <h1>Menu de sélection</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>{teamName}</div>
      ))}
          <Link to="/fonts">Police d'écriture</Link>
    </div>
  );
}

export default Menu;
