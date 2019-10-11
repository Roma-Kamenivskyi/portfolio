import React from "react";
import { Link } from "react-router-dom";
import "./HeaderApp.css";
import logo from "./logo.png";

const HeaderApp = () => {
  return (
    <header className="header-app">
      <div className="wrapper">
        <nav className="navbar-app">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="links-list">
            <li>
              <Link className="link" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="link" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
