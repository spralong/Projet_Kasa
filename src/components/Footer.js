import React from "react";
import logo from "../images/Logo-blanc.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo Kasa" />
      <p>
        {/* Faire apparaitre l'icon */}
        <span className="footer-icon">
          <i class="fa-thin fa-circle-c"></i>
        </span>
        2020 Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
