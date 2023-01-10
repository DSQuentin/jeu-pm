import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TeamContext from "./components/utils/TeamContext.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import TeamSelectionPage from "./pages/TeamSelection.jsx";
import ScoreModifier from "./pages/ScoreModifier.jsx";
import GameWithPictures from "./pages/GameWithPictures.jsx";
import Musiques from "./pages/Musiques.jsx";
import Actors from "./pages/Actors.jsx";

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
        <Route path="/musiques" element={<Musiques gameType={"musiques"} />} />
        <Route path="/acteurs" element={<Actors />} />
      </Routes>
    </TeamContext.Provider>
  );
}
