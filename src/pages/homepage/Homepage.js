import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../../hooks/useFetch';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';
import Banner from '../../components/banner/Banner';
import homeBanner from '../../components/banner/homeBanner.jpg';
import { updateStorage } from '../../redux/CartSlice';



const Homepage = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cartSlice);
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);


  useFetch('https://dummyjson.com/products/category/mens-watches',
    'https://dummyjson.com/products/category/womens-watches');


  useEffect(() => {
    dispatch(updateStorage());
  }, [cart])




  return (
    <>
      <div>
        <Navbar />

        <main className='mainContent'>
          <Banner
            text={
              <div className='bannerText'>
                <h1>
                  Check <span className='notBold'>time</span><br />
                  <span className='notBold'>in</span> Style
                </h1>
                <p className='smallFont'>Buying wristwatches should
                  leave you happy and good-looking,
                  with money in your pocket. Men and women Wristwatches?
                  We've got your wrist covered.
                </p>
                <button aria-label="Shop now">Shop Now</button>
              </div>
            }

            bannerImg={homeBanner}
          />



          {/* Women Watches ..............*/}
          <div className='flexRow flexRow2 watchesTopPad'>
            <h2>Women Watches</h2>
            <Link to='/women'>See All</Link>
          </div>

          <div className="flexRow flexRow2">
            <WatchesMap
              watches={womenWatches}
              index1={0}
              index2={3}
              ifShowAddBtn='hide'
            />
          </div>



          {/* Men Watches .................*/}
          <div className='flexRow flexRow2 watchesTopPad'>
            <h2>Mens Watches</h2>
            <Link to='/men'>See All</Link>
          </div>

          <div className='flexRow flexRow2' >
            <WatchesMap
              watches={menWatches}
              index1={0}
              index2={3}
              ifShowAddBtn='hide'
            />
          </div>
        </main>
        < Footer />
      </div >
    </>
  );
}

export default Homepage;