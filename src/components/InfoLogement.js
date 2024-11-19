import React from "react";
import logement from "../logements";
import Collapse from "../components/Collapse";

const logementData = () => {
  const appart = window.location.pathname;

  let appart2 = appart.split("/logement/");
  appart2 = appart2[1];

  const test = logement.find(
    (logementFonction) => logementFonction.id === appart2
  );
  console.log(test);

  const tags = test.tags;

  return (
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
      <div className="containeur_logement-host">
        <p>{test.host.name}</p>
        <img src={test.host.picture} alt="Photo de profil" />
      </div>
      <div className="containeur_logement-collapse">
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
    </div>
  );
};

export default logementData;
