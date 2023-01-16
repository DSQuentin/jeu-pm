/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { actors as actorsData } from "../components/data/actors.js";

const API_KEY = "2235deb68fa3aa47fd73e3361856c0e5";

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [actorId, setActorId] = useState();
  const [selectedActors, setSelectedActors] = useState([]);
  const [actorMovies, setActorMovies] = useState([]);
  const [currentActor, setCurrentActor] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  const roundsRemaining = () => actors.length - selectedActors.length;

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = () => {
    setActors(Object.values(actorsData));
    setCurrentActor(actors[0]);
  };

  //Fonction qui récupère les id des acteurs
  const fetchActorId = async (formattedActor) => {
    const actorData = await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${formattedActor}`
    )
      .then((res) => res.json())
      .then((data) => {
        setActorId(data["results"][0]["id"]);
      });
  };

  //Fonction qui récupère les films des acteurs
  const fetchActorMovies = async () => {
    const moviesData = await fetch(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        setActorMovies(data["cast"]);
      });
  };

  //Fonction qui affiche la liste des films des acteurs
  const displayActorMovies = () => {
    if (actorMovies) {
      return (
        <div className="w-full flex flex-col">
          <div>
            <h2>Acteur en cours: {currentActor}</h2>
            <div>Nombre d'acteurs restant: {roundsRemaining()}</div>
            <div className="flex">
              {" "}
              {actorMovies.map((movie) => {
                return <div>{movie.title}</div>;
              })}
            </div>
          </div>
          <button onClick={handleNextClick}>Acteur suivant</button>
        </div>
      );
    } else {
      return (
        <>
          {" "}
          <div>Chargement des films...</div>
          <button onClick={handleNextClick}>Charger</button>
        </>
      );
    }
  };

  // Fonction qui démarre le jeux et qui affiche les films des acteurs, et qui affiche déja le premier acteur
  const handleNextClick = async () => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    let actor = actors[Math.floor(Math.random() * actors.length)];
    while (selectedActors.includes(actor)) {
      actor = actors[Math.floor(Math.random() * actors.length)];
    }
    setCurrentActor(actor);
    const formattedActor = actor.replace(/\s/g, "+");
    setSelectedActors([...selectedActors, actor]);
    await fetchActorId(formattedActor);
    console.log("actorId avant fetchActorMovies : ", actorId);
    await fetchActorMovies();
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
          <button onClick={handleNextClick}>Commencer</button>
        </div>
      ) : (
        <div className="flex flex-col ">{displayActorMovies()}</div>
      )}
    </div>
  );
}
