import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import InfoLogement from "../components/InfoLogement";
import CollapseData from "../logements.js";

const logementFonction = () => {
  return (
    <div>
      <Header />
      <div>
        <InfoLogement />
      </div>
      {/* <div className="collapse_logement-equipements">
        {CollapseData.map((item) => {
          console.log(item.equipments);
          return (
            <div key={item.id}>
              <Collapse
                content={
                  <ul>
                    <li>{item.equipments}</li>
                  </ul>
                }
                title="Equipements"
              />
            </div>
          );
        })}
      </div> */}
      <Footer />
    </div>
  );
};

export default logementFonction;
