import React from 'react';

function Typo() {
  return (
    <div>
      <h1>Police d'écriture</h1>
    </div>
  );
}

export default Typo;


/**
 * 
import React, { useState } from 'react';

function Typo() {
  // Initialisez l'état local avec un tableau d'images
  const [images, setImages] = useState([
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ]);

  // Index de l'image en cours
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction qui passe à l'image suivante lorsque le bouton est cliqué
  const handleNext = () => {
    // Si l'index de l'image en cours est inférieur à la dernière image, incrémentez-le de 1
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Affiche l'image en cours et le bouton "Suivant" si la partie a démarré, sinon affiche le bouton "Commencer"
  return (
    <div>
      <h1>Police d'écriture</h1>
      {currentIndex >= 0 ? (
        <>
          <img src={images[currentIndex]} alt="Image en cours" />
          <button onClick={handleNext}>Suivant</button>
        </>
      ) : (
        <button onClick={() => setCurrentIndex(0)}>Commencer</button>
      )}
    </div>
  );
}

export default Typo;

 */