import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Pop Corn Movie Night</h1>
      <h2>Les règles</h2>
      <p>
        Les deux équipes doivent décider d'un nom d'équipe
        <br /> <b>Règle 1:</b> Crier tu (ne) devras (pas trop fort)! Lors du jeu,
        pour que l'arbitre donner la parole, l'équipe devra dire son nom
        d'équipe pour ensuite donner la réponse. Les réponses ne seront valables
        que si la parole a été accordée. Si une mauvaise réponse est donnée, la
        seconde équipe aura automatiquement la parole pendant 10 secondes sans
        que la première équipe puisse intervenir. A la fin du décompte des 10
        secondes, la Règle 1 reprend ses droits. <br />
        <b>Règle 2:</b> L'arbitre a tous les droits Tutututu, je ne veux pas le
        savoir. Je décide.
        <br /> <b>Règle 3:</b> Trop chiant (ou fort) tu es, puni tu seras! Pour tous
        les joueurs enfreignant les règles, un handicap sera donné par l'arbitre
        (Va participer au jeu dans les toilettes, tu verras c'est fun!).{" "}
      </p>
      <Link to="/team-selection">
        <button>Commencer</button>
      </Link>
    </div>
  );
}

export default Home;
