import React from "react";
import { Link } from "react-router-dom";
import "./HeaderApp.css";

const HeaderApp = () => {
  return (
    <header className="header-app">
      <div className="wrapper">
        <nav className="navbar-app">
          <Link to="/">Logo</Link>
          <ul className="links-list">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
