import React from "react";
import Montagnes from "../images/Montagnes.png";

const APropos = () => {
  return (
    <div className="container-about">
      <img src={Montagnes} alt="Chaîne de montagnes"></img>
      <div className="infos">
        <h2>Fiabilité</h2>
        {/* Ajouter le collapse */}
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
      <div className="infos">
        <h2>Respect</h2>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>
      <div className="infos">
        <h2>Service</h2>
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </div>
      <div className="infos">
        <h2>Sécurité</h2>
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </div>
  );
};

export default APropos;
