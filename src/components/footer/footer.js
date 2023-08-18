import React from 'react';
import logo from '../navbar/logo.png';

const Footer = () => {
  return (
    <footer className='greyBackground'>
      <p>Developed by Mosun</p>
      <img id='lensimaLogo' src={logo} alt="lensima logo" />
      <p>2023</p>
    </footer>
  );
}

export default Footer;