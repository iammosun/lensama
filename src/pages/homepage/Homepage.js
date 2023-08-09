import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';



const Homepage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);

  useFetch('https://dummyjson.com/products/category/mens-watches',
    'https://dummyjson.com/products/category/womens-watches');




  return (
    <>
      <div>
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


          {/* Men Watches */}
          <div className='flexRow flexRow2'>
            <h3>Mens Watches</h3>
            <Link to='/men'>See All</Link>
          </div>

          <div className='flexRow flexRow2' >
            <WatchesMap
              watches={menWatches}
              index1={0}
              index2={3}
              btnAddToCart='hide'
            />
          </div>


          {/* Women Watches */}
          <div className='flexRow flexRow2'>
            <h3>Women Watches</h3>
            <Link to='/women'>See All</Link>
          </div>

          <div className="flexRow flexRow2">
            <WatchesMap
              watches={womenWatches}
              index1={0}
              index2={3}
              btnAddToCart='hide'
            />
          </div>
        </main >

        < Footer />
      </div>
    </>
  );
}

export default Homepage;