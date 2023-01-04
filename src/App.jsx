import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TeamContext from './TeamContext.jsx';

import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Typo from './components/Typo.jsx';
import TeamSelectionPage from './components/TeamSelection.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import Posters from './components/Posters.jsx';

function App() {
  const [teamNames, setTeamNames] = useState(['Équipe 1', 'Équipe 2']);
  const [scores, setScores] = useState(teamNames.map(() => 0)); // initialize scores to 0 for each team
  const [totalScores, setTotalScores] = useState(teamNames.map(() => 0)); // initialize total scores to 0 for each team

  return (
    <TeamContext.Provider value={{ teamNames, setTeamNames, scores, setScores, totalScores, setTotalScores }}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/team-selection" element={<TeamSelectionPage />} />
        <Route path="/fonts" element={<Typo />} />
        <Route path="*" element={<div>404</div>} />
              <Route path="/scoreboard" element={<Scoreboard />} />
                <Route path="/posters" element={<Posters />} />
      </Routes>
    </TeamContext.Provider>
  );
}

export default App;
