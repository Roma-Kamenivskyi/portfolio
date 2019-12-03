import React from 'react';
import SocialItem from './SocialItem';
import './Social.css';

const Social = () => {
  return (
    <ul className='social-list'>
      <SocialItem href='https://github.com/kamenivskyi' type='github' />
      <SocialItem
        href='https://www.linkedin.com/in/roman-kamenivskyi-524425194/'
        type='linkedin'
      />
      <SocialItem href='https://t.me/Kamenivskyi' type='telegram' />
    </ul>
  );
};

export default Social;
