import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';
import Banner from '../../components/banner/Banner';
import womenBanner from '../../components/banner/womenBanner.jpg';


const WomenPage = () => {
  const { womenWatches } = useSelector(state => state.watchesSlice);



  return (
    <>
      <Navbar />

      <main className='mainContent'>
        <Banner text='Women Watches' bannerImg={womenBanner} />

        <div className="flexRow">
          <WatchesMap
            watches={womenWatches}
            index1={0}
            index2={Object.keys(womenWatches).length + 1}
            ifShowAddBtn='hide'
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
export default WomenPage;