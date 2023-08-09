import React from 'react';
import logo from '../navbar/logo.png';

const Footer = () => {
  return (
    <div className='greyBackground'>
      <p>Developed by Mosun</p>
      <img id='lensamaLogo' src={logo} alt="lensima logo" />
      <p>2023</p>
    </div>
  );
}

export default Footer;