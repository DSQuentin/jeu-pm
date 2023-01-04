import React, { useState } from "react";

function Timer() {
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
    <div className="flex justify-evenly mx-96">
      {!isRunning && seconds > 0 ? (
        <button
          onClick={startTimer}
          className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
        >
          Lancer le timer
        </button>
      ) : (
        <>
          <div className="flex flex-col">
            {seconds === 0 ? (
              <p className="mt-2 text-xl">Le temps est écoulé !</p>
            ) : (
              <p>Il reste {seconds} secondes</p>
            )}
            {seconds === 0 && (
              <button
                onClick={resetTimer}
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
              >
                Rénitialiser
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Timer;
