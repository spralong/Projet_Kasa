import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logement from "../logements";

const logementFonction = () => {
  const appart = window.location.pathname;
  console.log(appart);

  const appart2 = appart.split("/logement/");
  console.log(appart2[1]);

  const test = logement.find(
    (logementFonction) => logementFonction.id === appart2
  );
  console.log(test);
};

// const Fiche_Logement = () => {
//   return (
//     <div>
//       <Header />

//       <Footer />
//     </div>
//   );
// };

// export default Fiche_Logement;
export default logementFonction;
