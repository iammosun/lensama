import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import CartItemsMap from '../../components/mappings/CartItemsMap';
import { updateStorage, clearCart } from '../../redux/CartSlice';




const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cartSlice);
  const { cartLength } = useSelector(state => state.cartSlice);
  const { cartTotal: total } = useSelector(state => state.cartSlice);


  useEffect(() => {
    dispatch(updateStorage());
  }, [cart]);

  const clearBasket = () => {
    dispatch(clearCart());
  };

  //display cart items or cart is empty message
  const displayCart = () => {
    if (cartLength > 0) {
      return (<>
        <CartItemsMap cart={cart} />
        <p> <b>Total: {total}</b></p>
      </>);
    }
    return (<p>Your basket is empty</p>);
  }

  const onePageBack = (e) => {
    e.preventDefault();
    navigate(-1);
  }





  return (
    <div className='cartContainer'>
      <NavBar />

      <div className='cart'>
        <div>
          <div className=''>
            <p>My basket</p>
          </div>

          <div className='cartBtns'>
            <button onClick={(e) => onePageBack(e)}><b>Continue Shopping</b></button>
            <button onClick={clearBasket}>clear Basket</button>
          </div>
        </div>

        <div className='basketContents'>
          {displayCart()}
        </div>
      </div >
      <Footer />
    </div >
  );
}

export default Cart;