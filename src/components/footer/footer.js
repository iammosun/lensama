import React from 'react';
import logo from '../navbar/logo.png';
import { Link } from 'react-router-dom';
import logo2 from '../navbar/logo2.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div id='footerTechContainer'>
          <p>Developed by <Link to='https://github.com/iammosun'
            target="_blank"><b>Mosun</b></Link>
          </p>
          <p>&#8226; ReactJs</p>
          <p>&#8226; CSS</p>
          <p>&#8226; Firebase</p>
          <p>&#8226; Redux</p>
          <p>&#8226; Authentication</p>
        </div>
        <div id='lensamaLogoFooter'>
          <img className='lensamaLogo2' src={logo2}
            alt="lensama logo2" />
          <img id='lensamaLogo' src={logo}
            alt="lensama logo" />
          <p>&copy; 2023</p>
        </div>
        <div id="footerContactContainer">
          <h3>Contact</h3>
          <p>0012388881002</p><br />
          <p>123 None road</p>
          <p>Dummy District</p>
          <p>PU4 0LL</p>
          <p>Fakeshire, Uk.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;