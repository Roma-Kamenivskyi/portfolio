import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderApp.css";
import logo from "./logo.png";

class HeaderApp extends Component {
  linkList = React.createRef();
  burgerFirstSpan = React.createRef();
  burgerSecondSpan = React.createRef();
  burgerThirdSpan = React.createRef();

  toggleMobileNav = () => {
    const links = this.linkList.current;
    const firstSpan = this.burgerFirstSpan.current;
    const secondSpan = this.burgerSecondSpan.current;
    const thirdSpan = this.burgerThirdSpan.current;

    firstSpan.classList.toggle("active");
    secondSpan.classList.toggle("active");
    thirdSpan.classList.toggle("active");
    links.classList.toggle("active-mobile-nav");
  };

  render() {
    return (
      <header className="header-app">
        <div className="wrapper">
          <nav className="navbar-app">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="links-list" ref={this.linkList}>
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
            <button
              className="toggle-mobile-navbar"
              onClick={this.toggleMobileNav}
            >
              <span
                className="burger-first-span"
                ref={this.burgerFirstSpan}
              ></span>
              <span
                className="burger-second-span"
                ref={this.burgerSecondSpan}
              ></span>
              <span
                className="burger-third-span"
                ref={this.burgerThirdSpan}
              ></span>
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderApp;
