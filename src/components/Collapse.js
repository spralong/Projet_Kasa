import React, { useState } from "react";
import chevronup from "../images/chevron-haut.png";
import chevrondown from "../images/chevron-bas.png";

const Collapse = ({ title, content }) => {
  // Déclaration du state pour gérer l'ouverture/fermeture du collapse
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse_container">
      <div className="collapse_title collapse_about" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img src={isOpen ? chevronup : chevrondown} />
      </div>
      {/* Affiche le contenu si le collapse est ouvert */}
      {isOpen && (
        <div className="collapse_content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
