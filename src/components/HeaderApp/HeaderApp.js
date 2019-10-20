import React from "react";
import { Link } from "react-router-dom";
import "./HeaderApp.css";
import logo from "./logo.png";

const HeaderApp = () => {
  const linkList = React.createRef();
  const burgerFirstSpan = React.createRef();
  const burgerSecondSpan = React.createRef();
  const burgerThirdSpan = React.createRef();

  const toggleMobileNav = () => {
    const links = linkList.current;
    const firstSpan = burgerFirstSpan.current;
    const secondSpan = burgerSecondSpan.current;
    const thirdSpan = burgerThirdSpan.current;
    firstSpan.classList.toggle("active");
    secondSpan.classList.toggle("active");
    thirdSpan.classList.toggle("active");
    links.classList.toggle("active-mobile-nav");
  };

  return (
    <header className="header-app">
      <div className="wrapper">
        <nav className="navbar-app">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="links-list" ref={linkList}>
            <li>
              <Link className="link" to="">
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
          <button className="toggle-mobile-navbar" onClick={toggleMobileNav}>
            <span className="burger-first-span" ref={burgerFirstSpan}></span>
            <span className="burger-second-span" ref={burgerSecondSpan}></span>
            <span className="burger-third-span" ref={burgerThirdSpan}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
