import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import NavBar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import CartItemsMap from '../../components/mappings/CartItemsMap';




const Cart = () => {
  const { cart } = useSelector(state => state.cartSlice);
  const { cartTotal: total } = useSelector(state => state.cartSlice);

  useEffect(() => {
    //adding any item in storage to cart
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('total', JSON.stringify(total));
  }, [cart])





  return (
    <div className='cartContainer'>
      <NavBar />

      <div className='cart'>
        <div>
          <div className=''>
            <p>My basket</p>
          </div>

          <div className='cartBtns'>
            <button><b>Continue Shopping</b></button>
            <button>close</button>
            <button>clear Basket</button>
          </div>
        </div>

        <div className='basketContents'>
          <CartItemsMap cart={cart} />
          <p><b>Total: {total}</b></p>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Cart;