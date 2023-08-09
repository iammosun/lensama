import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';


const WomenPage = () => {
  const { womenWatches } = useSelector(state => state.watchesSlice);

  return (
    <>
      <Navbar />

      <main className='mainContent'>

        {/* banner ..............*/}
        <div className='bannerContainer flexRow'>

          <div className='banner1Container flexColumn'>
            <h2>See <span className='notBold'>everything</span><br />
              with <span className='notBold'>Clarity</span>
            </h2>
            <p>Buying eyewear should leave you happy and good-looking,
              with money in your pocket. Glasses, sunglasses,
              and contacts—we’ve got your eyes covered.</p>
            <button>Shop Now</button>
          </div>

          <div className='banner2Container'>
            <div>
              <img src="" alt="banner" />
            </div>
          </div>
        </div>


        {/* Women Watches */}
        <div className='flexRow'>
          <h3>Women Watches</h3>
          {/* <Link to='/women'>See All</Link> */}
        </div>

        <div className="flexRow">
          {womenWatches.map(womenWatch => {
            return (
              <div key={womenWatch.id}><Link to={'/product/' + womenWatch.id}>
                <img src={womenWatch.images[0]}
                  width='260px' height='260px'
                  alt="women watch" />
                <p key={womenWatch.id}>{womenWatch.title} </p>
              </Link></div>
            );
          })}
        </div>

      </main >
      < Footer />
    </>
  );
}
export default WomenPage;