import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItemsMap from '../../components/mappings/CartItemsMap';
import { updateStorage, clearCart } from '../../redux/CartSlice';
import { auth } from '../../firebase_setup/firebase';




const Cart = () => {
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


  //display cart items or 'cart is empty' message
  const displayCart = () => {
    if (cartLength > 0) {
      return (
        <div className='cartItemsContainer'>
          <CartItemsMap cart={cart} />
        </div>
      );
    }

    return <small style={{ margin: 35 + '%' }}>
      <i><b>Your basket is empty</b></i>
    </small>
  }


  const hideCart = () => {
    const cart = document.querySelector('.cartContainer');
    cart.style.display = 'none';

    const cartIcon = document.querySelector('.nav2RightMargin button');
    cartIcon.removeAttribute('class');
  }


  const checkOut = (e) => (!auth.currentUser) ?
    alert('You need to login to checkout')
    : alert('feature not available')







  return (
    <div className='cartContainer'>

      <button onClick={hideCart} className="cartHalf"></button>

      <div className='cart'>
        <div className="cartMiniContainer">
          <div className='flexRow cartHeaderContainer'>
            <div>
              <p><b>My basket: </b><small>&#40;{cartLength}
                {cartLength > 1 ? ' items' : ' item'}&#41;</small>
              </p>
            </div>

            <div className='cartBtns'>
              <button
                aria-label="close basket"
                onClick={hideCart}><b>Close</b>
              </button>

              <button
                aria-label="Clear basket"
                onClick={clearBasket}>clear Basket
              </button>
            </div>
          </div>

          <div className='hehe'>
            {displayCart()}
            <div className='cartFooter'>
              <p><small>Subtotal Amount:&nbsp;</small><span
                className='h2'><b> ${total}</b></span>
              </p>
              <button
                disable={(cartLength < 1) ? 'true' : 'false'}
                style={{
                  cursor: (cartLength < 1) ? 'not-allowed' : 'pointer',
                  backgroundColor: (cartLength < 1) ? 'gray' : 'black'
                }}

                onClick={(cartLength > 0) //only check out if cart's not empty
                  ? checkOut
                  : console.log('cart Empty')}>
                <h3>Check out</h3>
              </button>
            </div >
          </div>
        </div>
      </div >

    </div >
  );
}

export default Cart;