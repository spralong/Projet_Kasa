import React, { useState } from "react";
import chevronup from "../../images/chevron-haut.png";
import chevrondown from "../../images/chevron-bas.png";
import { useLocation } from "react-router-dom";

const Collapse = ({ title, content }) => {
  // Déclaration du state pour gérer l'ouverture/fermeture du collapse
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => setIsOpen(!isOpen);

  const location = useLocation();

  const routeAbout = location.pathname === "/about";

  return (
    <div className="collapse_container collapse_block">
      <div
        className={routeAbout ? "collapse_about" : "collapse_single"}
        onClick={toggleCollapse}
      >
        <h2>{title}</h2>
        <img src={isOpen ? chevronup : chevrondown} />
      </div>
      {/* Affiche le contenu si le collapse est ouvert */}
      {isOpen && (
        <div
          className={
            routeAbout ? "collapse_about-content" : "collapse_single-content"
          }
          onClick={toggleCollapse}
        >
          <div className="collapse_contenu">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
