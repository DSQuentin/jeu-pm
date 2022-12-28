import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TeamContext from './TeamContext.jsx';

import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Typo from './components/Typo.jsx';
import TeamSelectionPage from './components/TeamSelection.jsx';


function App() {
    const [teamNames, setTeamNames] = useState(['Équipe 1', 'Équipe 2']);

    return (
        <TeamContext.Provider value={{ teamNames, setTeamNames }}>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/team-selection" element={<TeamSelectionPage />} />
                <Route path="/fonts" element={<Typo/>} />
            </Routes>
        </TeamContext.Provider>
  );
}

export default App;
