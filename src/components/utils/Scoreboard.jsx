import React, { useContext } from "react";
import TeamContext from "./TeamContext";

export default function Scoreboard() {
  const { teamNames, totalScores } = useContext(TeamContext);

  // Affiche le nom de l'équipe et son score
  return (
    <div className="flex flex-col">
      {teamNames.map((teamName, index) => (
        <div key={index} className="flex flex-row">
          <div className="">{teamName} : </div>
          <div className="ml-2">{totalScores[index]} point(s)</div>
        </div>
      ))}
    </div>
  );
}
