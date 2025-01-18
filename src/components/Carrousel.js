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
      {/* <img
        src={pictures.map(pictures, index)}
        alt="photo appartement"
        className="containeur_carrousel-img"
      /> */}
      <div
        key={index}
        className={
          'image_carrousel {index === currentIndex ? "active" : "hidden"}'
        }
      >
        {pictures.map((picture, index) => (
          <img src={picture}></img>
        ))}
      </div>
      <button onClick={clickGauche}></button>
      <button onClick={clickDroit}></button>
    </div>
  );
};

export default Carrousel;
