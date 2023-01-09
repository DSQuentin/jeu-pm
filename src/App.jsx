import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TeamContext from "./components/utils/TeamContext.jsx";
import Home from "./components/pages/Home.jsx";
import Menu from "./components/pages/Menu.jsx";
import TeamSelectionPage from "./components/pages/TeamSelection.jsx";
import ScoreModifier from "./components/pages/ScoreModifier.jsx";
import GameWithPictures from "./components/pages/GameWithPictures.jsx";
import Musiques from "./components/pages/Musiques.jsx";
import Actors from "./components/pages/Actors.jsx";

export default function App() {
  const [teamNames, setTeamNames] = useState(["Équipe 1", "Équipe 2"]);
  const [scores, setScores] = useState(teamNames.map(() => 0)); // initialize scores to 0 for each team
  const [totalScores, setTotalScores] = useState(teamNames.map(() => 0)); // initialize total scores to 0 for each team

  return (
    <TeamContext.Provider
      value={{
        teamNames,
        setTeamNames,
        scores,
        setScores,
        totalScores,
        setTotalScores,
      }}
    >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team-selection" element={<TeamSelectionPage />} />
        <Route
          path="/fonts"
          element={<GameWithPictures gameType={"typos"} />}
        />
        <Route path="*" element={<div>404</div>} />
        <Route path="/scoreboard-modifier" element={<ScoreModifier />} />
        <Route
          path="/posters"
          element={<GameWithPictures gameType={"posters"} />}
        />
        <Route path="/musiques" element={<Musiques />} />
              <Route path="/acteurs" element={<Actors />} />
      </Routes>
    </TeamContext.Provider>
  );
}
