import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, deleteFromCart, updateStorage } from "../../redux/CartSlice";



const AddToCartBtn = ({ ifShowAddBtn, item, itemId }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cartSlice);
  const [btnText, setBtnText] = useState();
  const [bgColor, setBgColor] = useState();
  const [fontColor, setFontColor] = useState();


  useEffect(() => {

    if (Object.keys(cart).includes(itemId.toString())) {
      setBtnText('Remove from Cart');
      setBgColor('rgba(170, 166, 166, 0.5)');
      setFontColor('rgb(59, 58, 58)')

    } else {
      setBtnText('Add to Cart');
      setBgColor('black');
      setFontColor('white');
    }

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
      className={ifShowAddBtn + ' addToCartBtn'}
      id={'product' + itemId + 'toCart'}
      onClick={() => handleAddClick(item, itemId)}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      {btnText}
    </button>
  );
}

export default AddToCartBtn;