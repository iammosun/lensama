import React from "react";



const Banner = ({ text, bannerImg }) => {
  return (
    <>
      {/* <main className='mainContent'> */}
      <div className='bannerContainer flexRow'>
        <div className='banner1Container flexColumn'>
          <h2>{text}
          </h2>

        </div>

        <div className='banner2Container'>
          <div>
            <img src={bannerImg} width='100px' height='100px' alt="banner" />
          </div>
        </div>
      </div>
      {/* </main> */}
    </>
  )
}

export default Banner;