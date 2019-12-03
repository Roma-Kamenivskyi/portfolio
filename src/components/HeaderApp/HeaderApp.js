import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderApp.css';
import logo from './logo3.svg';

const HeaderApp = props => {
  const linkListRef = React.createRef();
  const burgerButtonRef = React.createRef();

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
            <li>
              <Link className='link' to=''>
                Home
              </Link>
            </li>
            <li>
              <Link className='link' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className='link' to='/skills'>
                Skills
              </Link>
            </li>
            <li>
              <Link className='link' to='/contacts'>
                Contacts
              </Link>
            </li>
          </ul>
          <button
            className='toggle-mobile-navbar'
            onClick={toggleMobileNav}
            ref={burgerButtonRef}
          >
            <span className='burger-span'></span>
            <span className='burger-span'></span>
            <span className='burger-span'></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderApp;
