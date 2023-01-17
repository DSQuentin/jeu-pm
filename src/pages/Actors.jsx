/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { actors as actorsData } from "../components/data/actors.js";
import { Link } from "react-router-dom";
import { buttonStyle, mainDivStyle, inputSelectStyle } from "../styles/styles";
import ScoreModifier from "./ScoreModifier.jsx";
import Penalty from "../components/utils/Penalty.jsx";

const API_KEY = "2235deb68fa3aa47fd73e3361856c0e5";

export default function Actors() {
  const [actors, setActors] = useState(Object.values(actorsData));
  const [actorId, setActorId] = useState();
  const [selectedActor, setSelectedActor] = useState();
  const [actorMovies, setActorMovies] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleShowAllClick = () => {
    setShowAll(!showAll);
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      span.classList.add("visible");
    });
  };

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
    await fetch(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredMovies = data["cast"]
          .filter((movie) => {
            if (movie.title === "I Love L.A.") {
              console.log(movie);
            }
            // 99 for documentaries, 16 for animation, 10402 for music, 10770 for TV movies
            return (
              !movie.genre_ids.includes(99) &&
              !movie.genre_ids.includes(16) &&
              !movie.genre_ids.includes(10402) &&
              !movie.genre_ids.includes(10770) &&
              !movie.character.includes("(voice)") &&
              !movie.character.includes("(uncredited)") &&
              !movie.character.includes("(archive footage)") &&
              !movie.character.includes("(archive sound)")
            );
          })
          .sort((a, b) => {
            return new Date(b.release_date) - new Date(a.release_date);
          });
        setActorMovies(filteredMovies);
      });
  };

  const toggleSpanVisibility = (i) => {
    const span = document.querySelector(`li:nth-child(${i + 1}) span`);
    span.classList.toggle("visible");
  };

  const displayActorMovies = () => {
    if (actorMovies && selectedActor) {
      return (
        <>
          <h2 className="text-center text-4xl mt-12">{selectedActor}</h2>
          <ul className="movies-list mx-24 h-[60vh] border-4 border-red-500 rounded-lg mt-12 bg-gray-700 py-2">
            {actorMovies.map((movie, i) => (
              <li
                className="movie-item flex px-4"
                onClick={() => toggleSpanVisibility(i)}
              >
                {i + 1} - <span className="ml-1">{movie.title}</span>
              </li>
            ))}
          </ul>
        </>
      );
    } else {
      return (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <div>Veuillez choisir un acteur pour commencer</div>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchActorId();
    fetchActorMovies();
  }, [actorId]);

  return (
    <div className={mainDivStyle + " relative"}>
      {!gameStarted ? (
        <>
          {" "}
          <div>
            <h1 className="text-4xl text-center w-full mb-8">
              Donne un maximum de film dans lequel à jouer l'acteur
            </h1>
            <h2 className="text-4xl w-full text-center my-4">Les règles</h2>
            <p className="w-full text-center my-2 text-xl">
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
          <div className="absolute top-6 left-10 flex flex-col">
            <Penalty />
          </div>
          <div className="absolute w-full top-24 left-12 flex flex-col">
            <select className={inputSelectStyle} onChange={handleChange}>
              <option value="Choisir un acteur" disabled selected>
                Choisir un acteur
              </option>
              {actors.map((actor) => (
                <option value={actor}>{actor}</option>
              ))}
            </select>
          </div>
          {displayActorMovies()}
          <div className="absolute top-12 right-12">
            <ScoreModifier />
          </div>
          <div className="flex justify-evenly mx-96 mt-4">
            <Link to="/menu">
              <button className={buttonStyle}>Menu</button>
            </Link>
            <button className={buttonStyle} onClick={handleShowAllClick}>
              Afficher tous
            </button>
          </div>
        </>
      )}
    </div>
  );
}
