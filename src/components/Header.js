import React from "react";
import Navigation from "../components/Navigation";
import logo from "../images/Logo-couleur.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo Kasa" />
      <Navigation />
    </div>
  );
};

export default Header;
