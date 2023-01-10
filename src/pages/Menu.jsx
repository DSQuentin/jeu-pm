import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TeamContext from "../components/utils/TeamContext";

export default function Menu() {
  const { teamNames, totalScores } = useContext(TeamContext);

  return (
    <div className="m-12 border-4 border-amber-500 rounded-lg bg-amber-400 p-8">
      <h1 className="text-4xl text-center w-full mb-8">Sélection du jeux</h1>
      {teamNames.map((teamName, index) => (
        <div key={index} className="text-xl w-full text-center">
          {teamName}: {totalScores[index]} points
        </div>
      ))}
      <div className="flex justify-evenly mx-56 mt-12 mb-4">
        <Link to="/fonts">
          {" "}
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
            Police d'écriture
          </button>
        </Link>
        <Link to="/posters">
          {" "}
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
            Affiches de films
          </button>
        </Link>
        <Link to="/musiques">
          {" "}
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
            Musiques
          </button>
        </Link>
        <Link to="/acteurs">
          {" "}
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
            Acteurs
          </button>
        </Link>
      </div>
      <div className="flex justify-evenly mx-96">
        <Link to="/scoreboard-modifier">
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
            Scoreboard
          </button>
        </Link>
        <Link to="/">
          <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 ml-1">
            Accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
