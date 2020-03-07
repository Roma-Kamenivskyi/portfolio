import React from 'react';

import Social from '../../components/layout/social';

import './contacts.css';

const Contacts = () => (
  <div className='contacts-wrapper'>
    <h2 className='section-title'>Contacts</h2>
    <div className='contacts'>
      <p>You can contact me below &#8595;</p>
      <span className='mail'>
        E-mail: &nbsp;
        <a className='mail-link' href='mailto:jumji19992412@gmail.com'>
          jumji19992412@gmail.com
        </a>
      </span>
      <p>And also you can find me in social networks &#8595;</p>
      <Social />
    </div>
  </div>
);

export default Contacts;
