/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Penalty() {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("");
  let intervalId;

  function startTimer() {
    setTimer(3);
    intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          setMessage("Pénalité levée");
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  }

  return (
    <>
      <button onClick={startTimer}>Lancer une pénalité</button>
      {timer > 0 && <p>Temps restant: {timer} secondes</p>}
      {timer === 0 && <p>{message}</p>}
    </>
  );
}
