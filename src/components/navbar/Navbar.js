import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cart from './cart.png';
import logo from './logo.png';



const Navbar = () => {
  const { cart: cartItems } = useSelector(state => state.cartSlice);

  // const showCart = () => {
  //   document.getElementById('sidebarCart').style.display = 'block';
  // }


  return (
    <>
      <div className='navbarContainer flexRow'>

        <div className='nav1Container'>
          <ul className='flexRow'>
            <li><img id='lensamaLogo' src={logo} alt="lensima logo" /></li>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/women'> Women</Link></li>
            <li><Link to='/men'> Men</Link></li>
          </ul>
        </div>

        <div className='nav2Container'>
          <ul className='flexRow'>
            <li><input type="text" placeholder='search product...' /></li>
            <li id='cartIcon'><Link to='/cart'>
              <button>
                <img src={cart}
                  alt="cart" width='20px' height='20px' />
                <p id='cartIconQuantity'><b>{Object.keys(cartItems).length}</b></p>
              </button></Link>
            </li>
            <li><button>Sign Up</button></li>
            <li><button>Sign In</button></li>
          </ul>
        </div>

      </div >
    </>
  );
}
export default Navbar;