import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import logement from "../logements";
import Collapse from "../components/Collapse";
import InfoLogement from "../components/InfoLogement";

const logementFonction = () => {
  // const appart = window.location.pathname;
  // console.log(appart);

  // let appart2 = appart.split("/logement/");
  // console.log(appart2[1]);
  // appart2 = appart2[1];

  // const test = logement.find(
  //   (logementFonction) => logementFonction.id === appart2
  // );
  // console.log(test);

  return (
    <div>
      <Header />
      <div>
        <InfoLogement />
      </div>

      {/* TEST */}
      {/* <div>
        <h2>{test.title}</h2>
        <p>{test.location}</p>
      </div>
      <div>
        <p>{test.host.name}</p>
        <img src={test.host.picture} alt="Photo de profil" />
      </div>
      <div>
        <ul>
          <li>{test.tags}</li>
        </ul>
      </div>
      <div>{test.rating}</div> */}
      {/* TEST */}

      <Collapse />
      <Footer />
    </div>
  );
};

// export default Fiche_Logement;
export default logementFonction;
