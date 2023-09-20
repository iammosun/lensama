import React from "react";


const Banner = ({ text, bannerImg }) => {
  return (
    <div
      className='bannerContainer flexRow'
      id="bannerContainer"
    >
      <div className='banner1Container flexColumn'>
        <h1 className="bigText">{text}</h1>
      </div>

      <div className='banner2Container centerAlign'
        style={{
          backgroundImage: `url(${bannerImg})`,
          width: '60%', height: '380px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat"
        }}>
      </div>
    </div>
  )
}

export default Banner;