import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/CartSlice";


const AddToCartBtn = ({ item, itemId }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item, itemId) => {
    dispatch(addToCart({ item: item, itemId: itemId }));
  }

  return (
    <button id={'product' + itemId + 'toCart'} onClick={() =>
      handleAddClick(item, itemId)}> Add to cart
    </button>
  );
}
export default AddToCartBtn;