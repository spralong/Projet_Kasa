import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  console.log(isActive);

  return (
    <div className="navigation">
      <ul>
        <NavLink style={{ color: isActive("/") ? "red" : "blue" }} to="/">
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          style={{ color: isActive("/about") ? "red" : "blue" }}
          to="/about"
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
