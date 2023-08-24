import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';
import Banner from '../../components/banner/Banner';
import menBanner from '../../components/banner/menBanner.jpg';


const MenPage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);


  return (
    <>
      <Navbar />

      <main className='mainContent'>
        <Banner text='Men Watches' bannerImg={menBanner} />

        <div className="flexRow watchesTopPad">
          <WatchesMap
            watches={menWatches}
            index1={0}
            index2={Object.keys(menWatches).length + 1}
            ifShowAddBtn='hide'
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MenPage;