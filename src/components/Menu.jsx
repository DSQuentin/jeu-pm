import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
        <h1>Menu de sélection</h1>
        <Link to="/fonts">Police d'écriture</Link>
        <Link to="/movies">Affiche de film</Link>
        <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default Menu;
