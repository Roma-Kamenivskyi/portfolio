import React from 'react';

import SocialItem from './social-item';

import './social.css';

const Social = () => (
  <ul className='social-list'>
    <SocialItem href='https://github.com/kamenivskyi' type='github' />
    <SocialItem
      href='https://www.linkedin.com/in/kamenivskyi'
      type='linkedin'
    />
    <SocialItem href='https://t.me/Kamenivskyi' type='telegram' />
  </ul>
);

export default Social;
