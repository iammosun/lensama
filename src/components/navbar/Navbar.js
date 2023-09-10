import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserDetails from '../userDetails/UserDetails';
import Cart from '../../pages/cart/Cart';
import cart from './cart.png';
import logo from './logo.png';



const Navbar = ({ ifShowSignInBtn = 'show', ifShowSignUpBtn = 'show' }) => {
  const navigate = useNavigate();
  // const ff = document.getElementById('signInBtn');

  const { cartLength } = useSelector(state => state.cartSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');



  const toggleCart = () => {
    const cartIcon = document.querySelector('.nav2RightMargin button');
    const cartClass = cartIcon.getAttribute('class');

    if (!cartClass) {
      setIsOpen(true);
      cartIcon.setAttribute('class', 'toggleCart');

    } else {
      setIsOpen(false);
      cartIcon.removeAttribute('class');
    }
  }


  const onSubmit = (e) => {
    e.preventDefault();
    if (query === '') return;
    navigate('/searchPage/' + query);
  }



  return (
    <>
      {isOpen && <Cart />}
      <div className='navBarContainer'>

        <ul className='flexRow nav1Container'>
          <li id='lensimaLogoLi'>
            <img id='lensimaLogo' src={logo} alt="lensima logo" />
          </li>
          <li><Link to='/'> Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/women'> Women</Link></li>
          <li><Link to='/men'> Men</Link></li>
        </ul>

        <ul className='flexRow nav2Container'>
          <li>
            <form onSubmit={onSubmit}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className='nav2Padding placeholder'
                type="search"
                placeholder='search product...' />
            </form>
          </li>

          <li className='nav2RightMargin'>
            <button onClick={toggleCart}
              aria-label="cart" id='cartIcon'>
              <img src={cart} alt="cart" width='20px' height='20px' />
              <p id='cartIconQuantity'><b>{cartLength}</b></p>
            </button>
          </li>

          <li id='signUpBtn' className={ifShowSignUpBtn + ' signingBtn'}>
            <Link to='/signUp'
              className='signUpBtn'
              aria-label="Sign up">Sign Up
            </Link>
          </li>

          <li id='signInBtn' className={ifShowSignInBtn + ' signingBtn'}>
            <Link to='/signIn'
              className='signInBtn'
              aria-label="Sign in">Sign In
            </Link>
          </li>

          <li><UserDetails /></li>
        </ul>
      </div >
    </>
  );
}

export default Navbar;