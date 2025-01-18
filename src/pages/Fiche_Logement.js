import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoLogement from "../components/InfoLogement";
import "../styles/base/components/InfoLogement.scss";

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
