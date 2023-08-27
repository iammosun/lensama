import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import NavBar from '../../components/navbar/Navbar';
// import Footer from '../../components/footer/footer';
import CartItemsMap from '../../components/mappings/CartItemsMap';
import { updateStorage, clearCart } from '../../redux/CartSlice';




const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(true);
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
      return (
        <>
          <CartItemsMap cart={cart} />
          <div className='cartFooter'>
            <div><p>Total:<b> ${total}</b></p></div>
            <button><h3>Check out</h3></button>
          </div >
        </>

      );
    }
    return (<p>Your basket is empty</p>);
  }

  // const onePageBack = (e) => {
  //   e.preventDefault();
  //   navigate(-1);
  // }


  const hideCart = () => {
    const cart = document.querySelector('.cartContainer');
    cart.style.display = 'none';

    const cartIcon = document.querySelector('.nav2RightMargin button');
    cartIcon.removeAttribute('class');
    // cartIcon.className.toggle('toggleCart');
  }






  return (
    <div className='cartContainer'>
      {/* <NavBar /> */}
      <button onClick={hideCart} className="cartHalf"></button>

      <div className='cart'>
        <div className="cartMiniContainer">
          <div className='flexRow cartHeaderContainer'>
            <div className=''>
              <p>My basket</p>
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

          <div className='basketContents'>
            {displayCart()}
          </div>
        </div>
      </div >


      {/* <Footer /> */}
    </div >
  );
}

export default Cart;