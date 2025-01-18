import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import CollapseData from "../collapse.json";
import Montagnes from "../images/Montagnes.png";
import "../styles/base/components/APropos.scss";

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
            <div key={item.id}>
              <Collapse content={item.content} title={item.title} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default About;
