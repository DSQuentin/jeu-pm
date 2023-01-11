import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { actors as actorsData } from "../components/data/actors.js";

const API_KEY = "2235deb68fa3aa47fd73e3361856c0e5";

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [actorMovies, setActorMovies] = useState([]);
  const [currentActor, setCurrentActor] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const roundsRemaining = () => actors.length - selectedActors.length;

  useEffect(() => {
    setActors(actorsData);
  }, []);

  const handleNextClick = () => {
    // selects a random actor from the list of actors
    let actor = actors[Math.floor(Math.random() * actors.length)];
    while (selectedActors.includes(actor)) {
      actor = actors[Math.floor(Math.random() * actors.length)];
    }
    let formattedActor = actor.replace(/ /g, "+");
    setCurrentActor(actor);
    fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${formattedActor}`
    )
      .then((res) => res.json())
      .then((data) => {
        setActorMovies(data.results[0].known_for);
      });
  };

  return (
    <div>
      {!gameStarted ? (
        <div>
          <h1>Donne un maximum de film dans lequel à jouer l'acteur</h1>
          <h2>Les règles</h2>
          <p>
            Un nom d'acteur va être affiché, il va falloir, l'une après l'autre,
            me donner un nom de film dans lequel l'acteur joue un rôle (même
            tout petit). Les doublages voix ne sont pas acceptés.
            <br />2 points par film
          </p>
          <button onClick={() => setGameStarted(true)}>Commencer</button>
        </div>
      ) : (
        <div>
          <h2>Acteur en cours: {currentActor}</h2>
          <div>Nombre d'acteurs restant: {roundsRemaining()}</div>
          <ul>
            {actorMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
          <button onClick={handleNextClick}>Acteur suivant</button>
        </div>
      )}
    </div>
  );
}
