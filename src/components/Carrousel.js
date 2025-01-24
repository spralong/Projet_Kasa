import React, { useState } from "react";

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
      <div
        key={index}
        className={
          'containeur_carrousel-image {index === currentIndex ? "active" : "hidden"}'
        }
      >
        {pictures.map((picture, index) => (
          <img src={picture}></img>
        ))}
      </div>
      <div className="containeur_carrousel-button">
        <button onClick={clickGauche}></button>
        <p>
          {currentIndex + 1}/{pictures.length}
        </p>
        <button onClick={clickDroit}></button>
      </div>
    </div>
  );
};

export default Carrousel;
