import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Typo from './components/Typo.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" exact element={ <Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/fonts" element={<Typo/>} />
        </Routes>
  );
}

export default App;
