import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, deleteFromCart, updateStorage } from "../../redux/CartSlice";



const AddToCartBtn = ({ ifShowAddBtn, item, itemId }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cartSlice);

  const [btnText, setBtnText] =
    useState(
      Object.keys(cart).includes(itemId.toString()) ?
        'Remove from Cart' :
        'Add to Cart'
    );


  useEffect(() => {
    dispatch(updateStorage());
  }, [cart]);


  const handleAddClick = (item, itemId) => {
    if (btnText === 'Remove from Cart') { //if item already in cart
      dispatch(deleteFromCart({ itemId: itemId }));
      setBtnText('Add to Cart');

    } else {
      dispatch(addToCart({ itemId: itemId, item: item }));
      setBtnText('Remove from Cart');
    }
  }



  return (
    <button
      aria-label={btnText}
      className={ifShowAddBtn}
      id={'product' + itemId + 'toCart'}
      onClick={() => handleAddClick(item, itemId)}>
      {btnText}
    </button>
  );
}
export default AddToCartBtn;