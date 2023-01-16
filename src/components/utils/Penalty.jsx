/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { buttonStyle } from "../../styles/styles";

export default function Penalty() {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  let intervalId;

  function startTimer() {
    setTimer(3 * 60);
    setIsRunning(true);
    intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          setMessage("Pénalité levée");
          setIsRunning(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  }

  return (
    <div className="mx-auto mt-4">
      {!isRunning && timer === 0 && (
        <button className={buttonStyle} onClick={startTimer}>
          Lancer une pénalité
        </button>
      )}

      {timer > 0 && (
        <div className="mx-auto my-4">
          <p>Temps restant: {timer} secondes</p>
        </div>
      )}
    </div>
  );
}
