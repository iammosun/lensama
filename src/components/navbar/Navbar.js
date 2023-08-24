import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cart from './cart.png';
import logo from './logo.png';



const Navbar = () => {
  const { cartLength } = useSelector(state => state.cartSlice);



  return (
    <>
      <div className='navBarContainer'>

        <ul className='flexRow nav1Container'>
          <li id='lensimaLogoLi' ><img id='lensimaLogo' src={logo} alt="lensima logo" /></li>
          <li><Link to='/'> Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/women'> Women</Link></li>
          <li><Link to='/men'> Men</Link></li>
        </ul>

        <ul className='flexRow nav2Container'>
          <li><input className='nav2Padding placeholder' type="text" placeholder='search product...' /></li>
          <li className='nav2RightMargin'><Link to='/cart'>
            <button aria-label="cart" id='cartIcon'>
              <img src={cart} alt="cart" width='20px' height='20px' />
              <p id='cartIconQuantity'><b>{cartLength}</b></p>
            </button></Link>
          </li>
          <li><button aria-label="Sign up" className='nav2Padding signUpBtn'>Sign Up</button></li>
          <li><button aria-label="Sign in" className='nav2Padding signInBtn'>Sign In</button></li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;