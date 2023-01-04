import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="text-6xl text-center w-full my-32">
        Pop Corn Movie Night
      </h1>

      <div className=" m-24 border-4 border-amber-500 rounded-lg bg-amber-400 p-8">
        <h2 className="text-4xl w-full text-center my-4">Les règles</h2>
        <p className="w-full text-center my-2 text-xl">
          Les deux équipes doivent décider d'un nom d'équipe
        </p>
        <p className="w-full text-center my-2 text-xl px-8">
          <b>Règle 1:</b> Crier tu (ne) devras (pas trop fort)! Lors du jeu,
          pour que l'arbitre donner la parole, l'équipe devra dire son nom
          d'équipe pour ensuite donner la réponse. Les réponses ne seront
          valables que si la parole a été accordée. Si une mauvaise réponse est
          donnée, la seconde équipe aura automatiquement la parole pendant 10
          secondes sans que la première équipe puisse intervenir. A la fin du
          décompte des 10 secondes, la Règle 1 reprend ses droits.
        </p>
        <p className="w-full text-center my-2 text-xl">
          <b>Règle 2:</b> L'arbitre a tous les droits Tutututu, je ne veux pas
          le savoir. Je décide.
        </p>
        <p className="w-full text-center my-2 text-xl px-8">
          <b>Règle 3:</b> Trop chiant (ou fort) tu es, puni tu seras! Pour tous
          les joueurs enfreignant les règles, un handicap sera donné par
          l'arbitre (Va participer au jeu dans les toilettes, tu verras c'est
          fun!).
        </p>
        <Link to="/team-selection">
          <div className="flex justify-center">
            <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
              Commencer
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
