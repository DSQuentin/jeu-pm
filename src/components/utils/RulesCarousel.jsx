import React, { useState } from "react";

export default function RulesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rules = [
    `Les deux équipes doivent décider d'un nom d'équipe`,
    `Crier tu (ne) devras (pas trop fort)! Lors
        du jeu, pour que l'arbitre donner la parole, l'équipe
        devra dire son nom d'équipe pour ensuite donner la
        réponse. Les réponses ne seront valables que si la parole
        a été accordée. Si une mauvaise réponse est donnée, la
        seconde équipe aura automatiquement la parole pendant 10
        secondes sans que la première équipe puisse intervenir. A
        la fin du décompte des 10 secondes, la Règle 2 reprend ses
        droits.`,
    `L'arbitre tous les droits aura !
        Tutututu, je ne veux pas le savoir. Je décide. `,
    `Trop chiant (ou fort) tu es, puni tu
        seras! Pour tous les joueurs enfreignant les règles, un
        handicap sera donné par l'arbitre (Va participer au jeu
        dans les toilettes, tu verras c'est fun!).`,
  ];

  const nextRule = () => {
    setCurrentIndex((currentIndex + 1) % rules.length);
  };

  const previousRule = () => {
    setCurrentIndex((currentIndex - 1 + rules.length) % rules.length);
  };

  return (
    <div className="py-12 flex justify-between items-center relative">
      {currentIndex > 0 && (
        <div
          className="absolute -left-40 cursor-pointer bg-slate-100 rounded-full px-4 py-2 shadow-md shadow-red-500 border-white border-2"
          onClick={previousRule}
        >
          <span>&#x3c;</span>
        </div>
      )}

      <div className="w-full text-center">
        <h1 className="text-3xl font-bold">Règle {currentIndex + 1}</h1>
        <p className="min-h-[160px] p-4 sm:min-h-[128px]">
          {rules[currentIndex]}
        </p>
      </div>

      {currentIndex < rules.length - 1 && (
        <div
          className="absolute -right-40 cursor-pointer bg-slate-100 rounded-full px-4 py-2 shadow-md shadow-red-500 border-white border-2"
          onClick={nextRule}
        >
          <span>&#x3e;</span>
        </div>
      )}
    </div>
  );
}
