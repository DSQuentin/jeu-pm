import React, { useState } from "react";
import { buttonStyle } from "../../styles/styles";

export default function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  function startTimer() {
    setIsRunning(true);
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds > 0) {
          return seconds - 1;
        }
        clearInterval(interval);
        setIsRunning(false);
        return 0;
      });
    }, 1000);
  }

  function resetTimer() {
    setSeconds(10);
  }

  return (
    <div className="mx-auto">
      {!isRunning && seconds > 0 ? (
        <button onClick={startTimer} className={buttonStyle}>
          Lancer le timer
        </button>
      ) : (
        <>
          <div className="mx-auto my-4">
            {seconds === 0 ? (
              <p>Le temps est écoulé !</p>
            ) : (
              <p>Il reste {seconds} secondes</p>
            )}
            {seconds === 0 && (
              <button onClick={resetTimer} className={buttonStyle}>
                Rénitialiser
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
