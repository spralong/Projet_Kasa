import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Erreur404 from "../components/Error/Erreur404";

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
