import React, { useState, useEffect } from "react";
import data from "../typos.json";
import { Link } from "react-router-dom";

function Typo() {
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
  }, []);

  return (
    <div>
      {imagesRemaining() === images.length ? (
        <>
          <h1>Les règles</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur illum vero praesentium saepe minus quaerat at minima
            ad. Quis tenetur unde nihil dignissimos placeat consectetur cum
            voluptates quisquam aliquam voluptas. Numquam repellat cupiditate
            laudantium consequuntur quo provident. Laudantium harum animi qui
            fuga commodi modi. Quos saepe pariatur veritatis repudiandae
            voluptate molestiae perspiciatis illo, quas facilis, quaerat veniam
            non eius ratione. Exercitationem atque quam necessitatibus
            consequuntur, quos, nam temporibus, velit eveniet earum dicta vitae
            dolore a fugiat dolor commodi optio mollitia illum. Dicta,
            repellendus quo ad blanditiis facere asperiores. Consequatur, porro.
          </p>{" "}
          <button onClick={handleNextClick}>Commencer</button>
        </>
      ) : imagesRemaining() > 0 ? (
        <>
          <p>Il reste {imagesRemaining()} images à trouver</p>
          <img src={currentImage} alt="Image aléatoire" />
          <button onClick={handleNextClick}>Suivant</button>
        </>
      ) : (
        <div>
          {" "}
          <p>C'est la dernière manche !</p>
          <img src={currentImage} alt="Image aléatoire" />
          <Link to="/menu">
            {" "}
            <button onClick={() => console.log("Retour au menu de sélection")}>
              Retour
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Typo;
