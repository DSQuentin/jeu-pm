import React, { useContext } from 'react';
import TeamContext from '../utils/TeamContext';
import { Link } from 'react-router-dom';

function TeamSelectionPage() {
    const { teamNames, setTeamNames } = useContext(TeamContext);

  const handleTeamNameChange = (event, index) => {
    const newTeamNames = [...teamNames];
    newTeamNames[index] = event.target.value;
    setTeamNames(newTeamNames);
  };

  const handleAddTeamClick = () => {
    setTeamNames([...teamNames, '']);
  };

  return (
    <div>
      <h1>Sélection de noms d'équipes</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>
          <label htmlFor={`team-${index}`}>Nom de l'équipe {index + 1}</label>
          <input
            id={`team-${index}`}
            value={teamName}
            onChange={(event) => handleTeamNameChange(event, index)}
          />
        </div>
      ))}
      <button onClick={handleAddTeamClick}>Ajouter une équipe</button>
      <Link to="/menu">Suivant</Link>
    </div>
  );
  
}

export default TeamSelectionPage;
