import React from "react";



const Banner = ({ text, bannerImg }) => {
  return (
    <div className='bannerContainer flexRow'>
      <div className='banner1Container flexColumn'>
        <h1 className="bigText">{text}</h1>
      </div>

      <div className='banner2Container centerAlign'>
        <img src={bannerImg} width='500px' height='500px' alt="banner" />
      </div>
    </div>
  )
}

export default Banner;