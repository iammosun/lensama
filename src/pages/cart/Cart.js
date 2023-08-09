import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../../components/navbar/Navbar';
import { changeQuantity, deleteFromCart } from '../../redux/CartSlice';




const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cartSlice);
  //get the ids/keys of items in cart
  const itemIds = Object.keys(cart);
  const { cartTotal: total } = useSelector(state => state.cartSlice);


  useEffect(() => {
    //adding whatever in storage to cart
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('total', JSON.stringify(total));
  }, [cart])


  //change item quantity in cart
  const quantityChange = (id, sign) => {
    dispatch(changeQuantity({ id: id, sign: sign }));
  }

  //delete from cart
  const deleteItem = (id) => {
    dispatch(deleteFromCart(id));
  }





  return (
    <>
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
          {itemIds.map(id => {

            return (
              <div key={Number(id)}>
                <div>
                  <button onClick={() => quantityChange(id, 'subtract')}>-</button>
                  <button onClick={() => quantityChange(id, 'add')}>+</button>
                </div>

                <div>
                  <img src={cart[id].images[0]} width='50px' height='50px' alt="" />
                  <p>{cart[id].price * cart[id].quantity}</p>
                  <p id='quantityField'>quantity: {cart[id].quantity}</p>
                  <button onClick={() => deleteItem(id)}>X</button>
                </div>
              </div>
            );
          })
          }

          <p><b>Total: {total}</b></p>

        </div>
      </div>
    </>
  );

}

export default Cart;