import React, { useState } from "react";
import fleche from "../../images/right-chevron.png";

const Carrousel = ({ pictures }) => {
  const [currentIndex, index] = useState(0);

  const clickDroit = () => {
    index(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
  };
  const clickGauche = () => {
    index(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
  };

  return (
    <div className="containeur_carrousel">
      <div className="images_container">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`containeur_carrousel-image ${
              index === currentIndex ? "active" : "hidden"
            }`}
          >
            <img src={picture}></img>
          </div>
        ))}
        <div className="containeur_carrousel-index">
          <p>
            {currentIndex + 1}/{pictures.length}
          </p>
        </div>
        <div className="containeur_carrousel-button">
          <button className="button_gauche" onClick={clickGauche}>
            <img
              className="fleche_gauche"
              src={fleche}
              alt="Fleche de gauche"
            ></img>
          </button>
          <button className="button_droit" onClick={clickDroit}>
            <img
              className="fleche_droite"
              src={fleche}
              alt="Fleche de droite"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
