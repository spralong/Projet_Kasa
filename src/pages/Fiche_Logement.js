import React from "react";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import InfoLogement from "../components/Fiche_Logement/InfoLogement";

const logementFonction = () => {
  return (
    <div>
      <Header />
      <div>
        <InfoLogement />
      </div>
      <Footer />
    </div>
  );
};

export default logementFonction;
