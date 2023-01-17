import React, { useState, useEffect } from "react";
import { actors as actorsData } from "../components/data/actors.js";
import { Link } from "react-router-dom";
import { buttonStyle, mainDivStyle } from "../styles/styles";

const API_KEY = "2235deb68fa3aa47fd73e3361856c0e5";

export default function Actors() {
  const [actors, setActors] = useState(Object.values(actorsData));
  const [actorId, setActorId] = useState();
  const [selectedActor, setSelectedActor] = useState();
  const [actorMovies, setActorMovies] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleChange = async (e) => {
    setActorMovies([]);
    setSelectedActor(e.target.value);
    const formattedActor = e.target.value.replace(/\s/g, "+");
    await fetchActorId(formattedActor);
    if (actorId) {
      await fetchActorMovies();
    }
  };

  const fetchActorId = async (formattedActor) => {
    const actorData = await (
      await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${formattedActor}`
      )
    ).json();
    setActorId(actorData["results"][0]["id"]);
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

  function toggleSpanVisibility(i) {
    const span = document.querySelector(`li:nth-child(${i + 1}) span`);
    span.classList.toggle("visible");
  }

  const displayActorMovies = () => {
    if (actorMovies) {
      return (
        <div className="flex">
          <h2>Acteur en cours: {selectedActor}</h2>
          <div>
            <ul>
              {actorMovies.map((movie, i) => (
                <li
                  className="flex cursor-pointer px-4 py-2"
                  onClick={() => toggleSpanVisibility(i)}
                >
                  {i} - <span>{movie.title}</span>
                </li>
              ))}
            </ul>
          </div>
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

  useEffect(() => {
    fetchActorId();
    fetchActorMovies();
  }, [actorId]);

  return (
    <div className={mainDivStyle}>
      {!gameStarted ? (
        <>
          {" "}
          <div>
            <h1>Donne un maximum de film dans lequel à jouer l'acteur</h1>
            <h2>Les règles</h2>
            <p>
              Un nom d'acteur va être affiché, il va falloir, l'une après
              l'autre, me donner un nom de film dans lequel l'acteur joue un
              rôle (même tout petit). Les doublages voix ne sont pas acceptés.
              <br />2 points par film
            </p>
            <div className="flex justify-evenly mx-96 mt-12 relative">
              <button
                onClick={() => setGameStarted(true)}
                className={buttonStyle}
              >
                Commencer
              </button>
              <Link to="/menu">
                <button className={buttonStyle}>
                  Retour à la sélection des jeux
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <select onChange={handleChange}>
              <option value="Choisir un acteur" disabled selected>
                Choisir un acteur
              </option>
              {actors.map((actor) => (
                <option value={actor}>{actor}</option>
              ))}
            </select>
          </div>
          {displayActorMovies()}
        </>
      )}
    </div>
  );
}
