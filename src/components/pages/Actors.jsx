import React from "react";
import { Link } from "react-router-dom";

function Actors() {
  return (
    <div>
      <h1>Donne un maximum de film dans lequel à jouer l'acteur</h1>
      <h2>Les règles</h2>
      <p>
        Un nom d'acteur va être affiché, il va falloir, l'une après l'autre, me
        donner un nom de film dans lequel l'acteur joue un rôle (même tout
        petit). Les doublages voix ne sont pas acceptés.
        <br />2 points par film
      </p>
      <button>Commencer</button>
      <Link to="/menu">
        <button>Retour à la sélection des jeux</button>
      </Link>
    </div>
  );
}

export default Actors;
