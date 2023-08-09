import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';


const MenPage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);


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


        {/* Men Watches.....*/}
        <div className='flexRow'>
          <h3>Mens Watches</h3>
        </div>


        <div className="flexRow">
          <WatchesMap
            watches={menWatches}
            index1={0}
            index2={Object.keys(menWatches).length + 1}
            btnAddToCart='hide'
          />
        </div>
      </main >
      < Footer />
    </>
  );
}

export default MenPage;