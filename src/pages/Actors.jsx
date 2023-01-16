/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { actors as actorsData } from "../components/data/actors.js";
import { Link } from "react-router-dom";
import { buttonStyle, mainDivStyle } from "../styles/styles";

const API_KEY = "2235deb68fa3aa47fd73e3361856c0e5";

export default function Actors() {
  const [actors, setActors] = useState([]);
  const [actorId, setActorId] = useState();
  const [selectedActors, setSelectedActors] = useState([]);
  const [actorMovies, setActorMovies] = useState([]);
  const [currentActor, setCurrentActor] = useState("Chargement");
  const [gameStarted, setGameStarted] = useState(false);

  const roundsRemaining = () => actors.length - selectedActors.length;

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = () => {
    setActors(Object.values(actorsData));
    setCurrentActor(actors[0]);
  };

  const fetchActorId = async (formattedActor) => {
    const actorData = await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${formattedActor}`
    )
      .then((res) => res.json())
      .then((data) => {
        setActorId(data["results"][0]["id"]);
      });
  };

  const fetchActorMovies = async () => {
    const moviesData = await fetch(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        setActorMovies(data["cast"]);
      });
  };

  const displayActorMovies = () => {
    if (actorMovies) {
      return (
        <div className="flex">
          <h2>Acteur en cours: {currentActor}</h2>
          <div>Nombre d'acteurs restant: {roundsRemaining()}</div>
          <div>
            <ul>
              {actorMovies.map((movie) => (
                <li>{movie.title}</li>
              ))}
            </ul>
          </div>
          <button
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
            onClick={handleNextClick}
          >
            Acteur suivant
          </button>
        </div>
      );
    } else {
      return (
        <>
          <div>Chargement des films</div>
        </>
      );
    }
  };

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

  useEffect(() => {
    fetchActorMovies();
  }, [actorId]);

  return (
    <div className={mainDivStyle}>
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
          <div className="flex justify-evenly mx-96 mt-12 relative">
            <button onClick={handleNextClick} className={buttonStyle}>
              Commencer
            </button>
            <Link to="/menu">
              <button className={buttonStyle}>
                Retour à la sélection des jeux
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col ">
          <div>{displayActorMovies()}</div>
        </div>
      )}
    </div>
  );
}
