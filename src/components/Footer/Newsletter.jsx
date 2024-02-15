import React from 'react';

import './Newsletter.css';
import Subheading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <Subheading title='Newsletter' />
      <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your email' />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
