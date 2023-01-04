import React, { useState, useEffect } from "react";
import data from "../posters.json";
import RoundsRemaining from "./RoundsRemaining";
import LastRound from "./LastRound";
import { Link } from "react-router-dom";

function Posters() {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const imagesRemaining = () => images.length - selectedImages.length;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setImages(Object.values(data));
    setCurrentImage(images[0]); // définir la première image du tableau comme image par défaut
  };

  const handleNextClick = () => {
    let image = images[Math.floor(Math.random() * images.length)];
    while (selectedImages.includes(image)) {
      image = images[Math.floor(Math.random() * images.length)];
    }
    setCurrentImage(image);
    setSelectedImages([...selectedImages, image]);
  };

  useEffect(() => {
    setCurrentImage(images[Math.floor(Math.random() * images.length)]);
  }, [images]);

  return (
    <div>
      {imagesRemaining() === images.length ? (
        <>
          <h1>Devine le film dont est issue l'affiche</h1>
          <h2>Les règles</h2>
          <p>
            Une affiche minimaliste va apparaître à l'écran, il faudra retrouver
            le film auquel appartient l'affiche.
            <br />1 , 2 ou 3 points en fonction de la difficulté.
          </p>{" "}
          <button onClick={handleNextClick}>Commencer</button>
          <Link to="/menu">
            <button>Retour à la sélection des jeux</button>
          </Link>
        </>
      ) : imagesRemaining() > 0 ? (
        <RoundsRemaining
          roundsRemaining={imagesRemaining}
          currentRound={currentImage}
          handleNextClick={handleNextClick}
        />
      ) : (
        <LastRound
          roundsRemaining={imagesRemaining}
          currentRound={currentImage}
        />
      )}
    </div>
  );
}

export default Posters;
