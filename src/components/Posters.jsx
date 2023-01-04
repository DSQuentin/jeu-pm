import React, { useState, useEffect } from "react";
import data from "../posters.json";
import Timer from "./Timer";
import EndGameButtons from "./EndGameButtons";

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
        </>
      ) : imagesRemaining() > 0 ? (
        <>
          <p>Il reste {imagesRemaining()} images à trouver</p>
          <img
            src={currentImage}
            alt={"Aléatoire " + (imagesRemaining() + 1)}
          />
          <Timer />
          <button onClick={handleNextClick}>Suivant</button>
        </>
      ) : (
        <>
          <p>C'est la dernière manche !</p>
          <img
            src={currentImage}
            alt={"Aléatoire " + (imagesRemaining() + 1)}
          />
          <EndGameButtons />
        </>
      )}
    </div>
  );
}

export default Posters;
