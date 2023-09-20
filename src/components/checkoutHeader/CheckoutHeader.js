import React from 'react';



const CheckoutHeader = ({
  headerText, bgColor1, bgColor2, bgColor3,
  fontColor1, fontColor2, fontColor3
}) => {
  return (
    <div className='checkOutHeaderLargeContainer'>
      <div className='checkoutHeaderContainer'>
        <div className="checkoutHeaderMiniContainer">
          <div className='checkoutHeaderItemContainer'>
            <div className='checkoutStepNumber'
              style={{
                backgroundColor: bgColor1,
                color: fontColor1
              }}
            >1</div>
            <div><small>Order summary</small></div>
          </div>
          <div className='checkoutHeaderItemContainer'>
            <div className='checkoutStepNumber'
              style={{
                backgroundColor: bgColor2,
                color: fontColor2
              }}
            >2</div>
            <div><small>Shipping details</small></div>
          </div>
          <div className='checkoutHeaderItemContainer'>
            <div className='checkoutStepNumber'
              style={{
                backgroundColor: bgColor3,
                color: fontColor3
              }}
            >3</div>
            <div><small>Payment</small></div>
          </div>

          <div className="lineThroughCheckoutHeader"><p></p></div>
        </div>
      </div>
      {/* <div className="">{headerText}</div> */}
    </div>
  )
}

export default CheckoutHeader;