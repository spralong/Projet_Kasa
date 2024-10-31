import React from "react";
import logement from "../logements";

const logementData = () => {
  const appart = window.location.pathname;
  console.log(appart);

  let appart2 = appart.split("/logement/");
  console.log(appart2[1]);
  appart2 = appart2[1];

  const test = logement.find(
    (logementFonction) => logementFonction.id === appart2
  );
  console.log(test);

  return (
    <div>
      <h2>{test.title}</h2>
    </div>
  );
};

export default logementData;
