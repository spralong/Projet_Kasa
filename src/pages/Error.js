import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Erreur404 from "../components/Erreur404";

const Error = () => {
  return (
    <div>
      <Header />
      <Erreur404 />
      <Footer />
    </div>
  );
};

export default Error;
