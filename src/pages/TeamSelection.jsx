import React, { useContext } from "react";
import TeamContext from "../components/utils/TeamContext";
import { Link } from "react-router-dom";

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

  return (
    <div className="m-12 border-4 border-amber-500 rounded-lg bg-amber-400 p-8">
      <h1 className="text-4xl text-center w-full mb-8">
        Sélection de noms d'équipes
      </h1>
      {teamNames.map((teamName, index) => (
        <div
          key={index}
          className=" border-amber-200 border-2 my-8 py-4 px-2 rounded-xl"
        >
          <label htmlFor={`team-${index}`}>Nom de l'équipe {index + 1}</label>
          <input
            id={`team-${index}`}
            value={teamName}
            onChange={(event) => handleTeamNameChange(event, index)}
            className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-amber-700
                  bg-white bg-clip-padding
                  border border-solid border-amber-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-amber-700 focus:bg-white focus:border-amber-500 focus:outline-none"
          />
        </div>
      ))}
      <button
        onClick={handleAddTeamClick}
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
      >
        Ajouter une équipe
      </button>
      <Link to="/menu">
        <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 mx-4">
          Suivant
        </button>
      </Link>
    </div>
  );
}
