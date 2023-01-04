import React from "react";
import { Link } from "react-router-dom";

function Musique() {
  <div>
    <h1>Devine la musique dont est issue ce film</h1>
    <h2>Les règles</h2>
    <p>
      Une musique va être jouer. Il faudra retrouver le film auquel appartient
      la musique.
      <br />1 , 2 ou 3 points en fonction de la difficulté.
      </p>
      <button>Commencer</button>
      <Link to='/menu'><button>Retour à la sélection des jeux</button></Link>
  </div>;
}

export default Musique;
