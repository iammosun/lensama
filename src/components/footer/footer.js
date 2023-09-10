import React from 'react';
import logo from '../navbar/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Developed by <Link to='https://github.com/iammosun'
        target="_blank"><b>Mosun</b></Link>
      </p>
      <img id='lensimaLogo' src={logo} alt="lensima logo" />
      <p>&copy; 2023</p>
    </footer>
  );
}

export default Footer;