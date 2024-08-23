import React from "react";
import { NavLink } from "react-router-dom";
import Error404 from "../images/Erreur404.png";

const Erreur404 = () => {
  return (
    <div className="container-error">
      <img src={Error404} alt="Erreur 404 " />
      <p className="container-error_txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">
        <p className="container-error_link">Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default Erreur404;
