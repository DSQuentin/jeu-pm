import React, { useContext } from "react";
import TeamContext from "../components/utils/TeamContext";
import { Link } from "react-router-dom";
import { buttonStyle, inputLabelStyle, mainDivStyle } from "../styles/styles";

export default function TeamSelectionPage() {
  const { teamNames, setTeamNames } = useContext(TeamContext);

  const handleTeamNameChange = (event, index) => {
    const newTeamNames = [...teamNames];
    newTeamNames[index] = event.target.value;
    setTeamNames(newTeamNames);
  };

  const handleAddTeamClick = () => {
    setTeamNames([...teamNames, ""]);
  };

  const handleDeleteTeam = (index) => {
    const newTeamNames = [...teamNames];
    newTeamNames.splice(index, 1);
    setTeamNames(newTeamNames);
  };

  return (
    <div className={mainDivStyle}>
      <h1 className="text-4xl text-center w-full mb-8">
        Sélection de noms d'équipes
      </h1>
      {teamNames.map((teamName, index) => (
        <div
          key={index}
          className=" flex flex-col items-center my-2 py-4 px-2 rounded-xl"
        >
          <label htmlFor={`team-${index}`}>Nom de l'équipe {index + 1}</label>
          <div className="flex w-full justify-center">
            <input
              id={`team-${index}`}
              value={teamName}
              onChange={(event) => handleTeamNameChange(event, index)}
              className={inputLabelStyle}
            />
            <button
              onClick={() => handleDeleteTeam(index)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              <div className=" font-extrabold">X</div>
            </button>
          </div>
        </div>
      ))}
      <div className=" flex justify-center ">
        <button onClick={handleAddTeamClick} className={buttonStyle}>
          Ajouter une équipe
        </button>
        <Link to="/menu">
          <button className={buttonStyle}>Suivant</button>
        </Link>
      </div>
    </div>
  );
}
