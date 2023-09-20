import React, { useEffect, useState } from 'react';
import CheckoutHeader from '../../components/checkoutHeader/CheckoutHeader';
// import CartItemsMap from '../../components/mappings/CartItemsMap';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

import {
  changeQuantity, deleteFromCart, updateStorage
} from '../../redux/CartSlice';

const CheckoutStep1 = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(state => state.cartSlice);
  const { cartLength } = useSelector(state => state.cartSlice);
  const { cartTotal: total } = useSelector(state => state.cartSlice);
  // const [itemIds, setItemIds] = useState(Object.keys(cart));


  const dispatch = useDispatch();
  const itemIds = Object.keys(cart);

  useEffect(() => {
    dispatch(updateStorage());
    // setItemIds(Object.keys(cart));
  }, [cart])

  //change item quantity in cart
  const quantityChange = (id, sign) => {
    dispatch(changeQuantity({ id: id, sign: sign }));
  }

  //delete from cart
  const deleteItem = (itemId) => {
    dispatch(deleteFromCart({ itemId: itemId }));
  }

  const onDirectToStep2 = () => {
    navigate('/checkoutStep2');
  }

  return (
    <>
      <Navbar />
      <div className='checkoutStep1Container'>
        <CheckoutHeader
          headerText=''
          bgColor1='black'
          bgColor2='rgb(225, 225, 225)'
          bgColor3='rgb(225, 225, 225)'
          fontColor1='white'
          fontColor2='black'
          fontColor3='black'
        />
        <div className="minicheckoutStep1Container">
          <div className='cartItemsContainer'>
            {itemIds.map(id => {
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

                  <img src={cart[id].images[0]} width='150px' heigth='50px' alt="" />

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
            })}
          </div>

          <div className='cartFooter'>
            <p><small>Subtotal Amount:&nbsp;</small><span
              className='h2'><b> ${total}</b></span>
            </p>
            <button id='continueShopBtn'>
              <h3><small>Continue Shopping</small></h3>
            </button>
            <button
              disable={(cartLength < 1) ? 'true' : 'false'}
              style={{
                cursor: (cartLength < 1) ? 'not-allowed' : 'pointer',
                backgroundColor: (cartLength < 1) ? 'gray' : 'black'
              }}
              onClick={onDirectToStep2}

            // onClick={(cartLength > 0) //only check out if cart's not empty
            //   ? checkOut
            //   : console.log('cart Empty')}>
            >
              <h3>Go To Shipping &rarr;</h3>
            </button>


          </div >
        </div>


      </div>
    </>
  )
}

export default CheckoutStep1;