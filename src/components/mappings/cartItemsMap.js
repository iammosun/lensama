import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeQuantity, deleteFromCart, updateStorage } from '../../redux/CartSlice';



const CartItemsMap = ({ cart: cart }) => {
  const dispatch = useDispatch();
  const itemIds = Object.keys(cart);


  useEffect(() => {
    dispatch(updateStorage());
  }, [cart])

  //change item quantity in cart
  const quantityChange = (id, sign) => {
    dispatch(changeQuantity({ id: id, sign: sign }));
  }

  //delete from cart
  const deleteItem = (itemId) => {
    dispatch(deleteFromCart({ itemId: itemId }));
  }


  return (
    itemIds.map(id => {
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
  );
}

export default CartItemsMap;
