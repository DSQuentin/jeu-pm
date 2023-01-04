import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TeamContext from "../utils/TeamContext";

function Menu() {
  const { teamNames, totalScores } = useContext(TeamContext);

  return (
    <div>
      <h1>Menu de sélection</h1>
      {teamNames.map((teamName, index) => (
        <div key={index}>
          {teamName}: {totalScores[index]} points
        </div>
      ))}
      <div>
        <h2>Sélection du jeux</h2>
        <Link to="/fonts">
          {" "}
          <button>Police d'écriture</button>
        </Link>
        <Link to="/posters">
          {" "}
          <button>Affiches de films</button>
        </Link>
        <Link to="/musiques">
          {" "}
          <button>Musiques</button>
        </Link>
      </div>

      <Link to="/scoreboard">
        <button>Scoreboard</button>
      </Link>
      <Link to="/">
        <button>Accueil</button>
      </Link>
    </div>
  );
}

export default Menu;
