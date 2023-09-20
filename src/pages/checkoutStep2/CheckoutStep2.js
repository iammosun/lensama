import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import CheckoutHeader from '../../components/checkoutHeader/CheckoutHeader';
import { Link } from 'react-router-dom';


const CheckoutStep2 = () => {
  const { cartTotal: total } = useSelector(state => state.cartSlice);
  const [newTotal, setNewTotal] = useState(total);

  const totalCalc = (e) => {
    if (e.target.checked === true) {
      setNewTotal(total + 50);
    } else {
      setNewTotal(total);
    }
  }


  return (
    <>
      <Navbar />
      <div className='checkoutBodyContainer'>
        <CheckoutHeader
          headerText='Payment'
          bgColor1='rgb(225, 225, 225)'
          bgColor2='black'
          bgColor3='rgb(225, 225, 225)'
          fontColor1='black'
          fontColor2='white'
          fontColor3='black'
        />


        <div className='checkoutFormContainer'>
          <form action="">
            <div>
              <label htmlFor="fullName"><small>&#42; Full Name</small></label>
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="email"><small>&#42; Email Address</small></label>
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="shippingAdd"><small>&#42; Shipping Address</small></label>
              <input type="text" required />
            </div>
            <div>
              <label
                id="phone"
                type="tel"
                name="mobileNumber">
                <small>Mobile Number</small>
              </label>
              <input id="phone" type="tel" name="phone" />
            </div >
            <div>
              <label
                htmlFor="shippingOption">
                <small>Shipping Option</small>
              </label>
            </div>

          </form>

          <div id='shippingOptionContainer'>
            <form>
              <div id='shippingOption'>
                <input onClick={(e) => totalCalc(e)} type="checkbox" id='checkIfChecked' />
                <label
                  htmlFor="shippingOption">
                  <small>International Shipping<span> 7-14 days</span></small>
                </label>
              </div>
            </form>
            <p><b>$50.00</b></p>
          </div>
        </div>
      </div>

      <div id="checkoutStep2TotalContainer">
        <div className="step2totalMiniContainer">
          <div className='checkoutTotalDesc'>International Shipping:</div>
          <div className='checkoutStep2Amount'>$50.00</div>
        </div>
        <div className="step2totalMiniContainer">
          <div className='checkoutTotalDesc'>Subtotal:</div>
          <div className='checkoutStep2Amount'>${total}.00</div>
        </div>
        <div className="step2totalMiniContainer">
          <div className='checkoutTotalDesc'>Total:</div>
          <div className='checkoutStep2Amount'><h2><b>${newTotal}.00</b></h2></div>
        </div>
      </div >

      <div className="checkoutBtnsContainer">
        <Link to='/checkoutStep1' className="">&larr; Go Back</Link>
        <Link to='/checkoutStep3' id="checkoutNextStepBtn">Go To Payment &rarr;</Link>
      </div>


    </>
  )
}

export default CheckoutStep2;