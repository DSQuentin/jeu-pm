import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TeamContext from "../components/utils/TeamContext";
import { buttonStyle, mainDivStyle } from "../styles/styles";

export default function Menu() {
  const { teamNames, totalScores } = useContext(TeamContext);

  return (
    <div className={mainDivStyle}>
      <h1 className="text-4xl text-center w-full mb-8">Sélection du jeux</h1>
      {teamNames.map((teamName, index) => (
        <div key={index} className="text-xl w-full text-center">
          {teamName}: {totalScores[index]} points
        </div>
      ))}
      <div className="flex justify-evenly mx-56 mt-12 mb-4">
        <Link to="/fonts">
          {" "}
          <button className={buttonStyle}>Police d'écriture</button>
        </Link>
        <Link to="/posters">
          {" "}
          <button className={buttonStyle}>Affiches de films</button>
        </Link>
        <Link to="/musiques">
          {" "}
          <button className={buttonStyle}>Musiques</button>
        </Link>
        <Link to="/acteurs">
          {" "}
          <button className={buttonStyle}>Acteurs</button>
        </Link>
      </div>
      <div className="flex justify-evenly mx-96">
        <Link to="/scoreboard-modifier">
          <button className={buttonStyle}>Scoreboard</button>
        </Link>
        <Link to="/">
          <button className={buttonStyle}>Accueil</button>
        </Link>
      </div>
    </div>
  );
}
