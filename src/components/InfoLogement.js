import React from "react";
import logement from "../logements";
import Collapse from "../components/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carrousel from "../components/Carrousel";

const logementData = () => {
  const appart = window.location.pathname;

  let appart2 = appart.split("/logement/");
  appart2 = appart2[1];

  const test = logement.find(
    (logementFonction) => logementFonction.id === appart2
  );

  const tags = test.tags;

  const rating = test.rating;

  const pictures = test.pictures;

  const maxRating = 5;

  let arrayStar = [];

  for (let i = 0; i < maxRating; i++) {
    let star;
    if (i < rating) {
      star = <FontAwesomeIcon className="etoile_pleine" icon={faStar} />;
    } else {
      star = <FontAwesomeIcon className="etoile_vide" icon={faStar} />;
    }
    arrayStar.push(star);
  }

  return (
    <div className="containeur">
      <div className="carrousel">
        <Carrousel pictures={pictures} />
      </div>
      <div className="containeur_logement">
        <div className="containeur_logement-title">
          <h2>{test.title}</h2>
          <p>{test.location}</p>
          <div className="containeur_logement-tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="containeur_profil">
          <div className="containeur_logement-host">
            <p>{test.host.name}</p>
            <img src={test.host.picture} alt="Photo de profil" />
          </div>
          <div className="container_logement-rating">{arrayStar}</div>
        </div>
      </div>
      <div className="containeur_collapse">
        <Collapse content={test.description} title="Description" />
        <Collapse
          content={
            <ul>
              {test.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
          title="Equipements"
        />
      </div>
      <div className="test"></div>
    </div>
  );
};

export default logementData;
