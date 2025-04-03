import React from "react";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Collapse from "../components/Fiche_Logement/Collapse";
import CollapseData from "../collapse.json";
import Montagnes from "../images/Montagnes.png";
import "../components/About/APropos.scss";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container-about">
        <img src={Montagnes} alt="Chaîne de montagnes"></img>
      </div>
      <div className="collapse">
        {CollapseData.map((item) => {
          return (
            <Collapse content={item.content} key={item.id} title={item.title} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default About;
