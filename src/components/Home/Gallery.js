import React from "react";
import { Link } from "react-router-dom";
import logements from "../../logements";
import Card from "../Fiche_Logement/Card";

const Gallery = () => {
  return (
    <div className="cont_gallery">
      {logements.map((logement) => {
        return (
          <article className="cont_link" key={logement.id}>
            <Link className="cont_link" to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
