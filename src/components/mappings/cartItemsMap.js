import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  changeQuantity, deleteFromCart, updateStorage
} from '../../redux/CartSlice';



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
        <div key={Number(id)} className='flexRow boxShadow1'>
          <div className='flex'>
            <button className='sign'
              onClick={() => quantityChange(id, 'subtract')}>-
            </button>

            <button className='sign'
              onClick={() => quantityChange(id, 'add')}>+
            </button>
          </div>

          <img src={cart[id].images[0]} width='50px' heigth='50px' alt="" />

          <div className='flexRow'>
            <p><small id='quantityField'>quantity: &nbsp;</small></p>
            <p ><b>{cart[id].quantity}</b></p>
          </div>

          <p><b>${
            cart[id].price * cart[id].quantity
          }.00</b></p>

          <button className='deleteCartItemBtn'
            onClick={() => deleteItem(id)}>X
          </button>
        </div>
      );
    })
  );
}

export default CartItemsMap;
