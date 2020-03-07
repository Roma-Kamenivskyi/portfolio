import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { linksList } from '../../../db/header-links';

import logo from './logo.svg';

import './header.css';

const Header = () => {
  const linkListRef = useRef();
  const burgerButtonRef = useRef();

  const toggleMobileNav = () => {
    linkListRef.current.classList.toggle('active-mobile-nav');
    burgerButtonRef.current.classList.toggle('active');
  };

  return (
    <header className='header-app'>
      <div className='wrapper'>
        <nav className='navbar-app'>
          <Link to='/' className='logo'>
            <img
              src={logo}
              alt='logo'
              style={{ width: '50px', height: '50px' }}
            />
          </Link>

          <ul className='links-list' ref={linkListRef}>
            {linksList.map(({ label, linkTo }) => (
              <li key={label}>
                <Link className='link' to={linkTo}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className='toggle-mobile-navbar'
            onClick={toggleMobileNav}
            ref={burgerButtonRef}
          >
            {Array(3)
              .fill()
              .map((_, idx) => (
                <span className='burger-span' key={idx}></span>
              ))}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
