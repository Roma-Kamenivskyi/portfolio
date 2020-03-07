import React from 'react';

import Social from '../../components/layout/social';

import './home.css';

const Home = () => (
  <div className='introduction-page'>
    <h1 className='name'>
      <span className='name-top'>Roman</span>
      <span className='name-bottom'>Kamenivskyi</span>
    </h1>
    <p className='text-intro'>
      Hello<span className='c-white'>,</span> i am junior{' '}
      <span className='c-white work-position'>front end developer !</span>
    </p>
    <Social />
  </div>
);

export default Home;
