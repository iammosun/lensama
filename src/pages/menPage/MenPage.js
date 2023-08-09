import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';


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


        {/* Men Watches */}
        <div className='flexRow'>
          <h3>Mens Watches</h3>
          {/* <Link to='/menPage'>See All</Link> */}
        </div>


        <div className="flexRow">
          {menWatches.map(menWatch => {
            return (
              <div key={menWatch.id}><Link to={'/product/' + menWatch.id}>
                <img src={menWatch.images[0]}
                  width='260px' height='260px'
                  alt="men watch" />
                <p key={menWatch.id}>{menWatch.title} </p>
              </Link></div>
            );
          })}
        </div>



      </main >

      < Footer />
    </>
  );
}
export default MenPage;