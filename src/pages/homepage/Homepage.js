import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { women, men } from '../../redux/WatchesSlice';
// import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';



const Homepage = () => {
  const dispatch = useDispatch();
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);

  // useFetch('https://dummyjson.com/products/category/mens-watches',
  //   'https://dummyjson.com/products/category/womens-watches');
  // useFetch('https://dummyjson.com/products/category/mens-watches')

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/womens-watches', {
      method: 'GET'

    }).then(res => res.json())
      .then(data => dispatch(women(data.products)));

    fetch('https://dummyjson.com/products/category/mens-watches', {
      method: 'GET'

    }).then(res => res.json())
      .then(data => { dispatch(men(data.products)) });
  }, []);


  const hideCart = () => {
    // document.getElementById('sidebarCart').style.display = 'block';
  }






  return (
    <>
      <div id='homeBody' onClick={hideCart}>

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
            {menWatches.slice(0, 3).map(menWatch => {
              return (
                <div key={menWatch.id}><Link to={'/product/' + menWatch.id}>
                  <img src={menWatch.images[0]}
                    width='200px' height='200px'
                    alt="men watch" />
                  <p key={menWatch.id}>{menWatch.title} </p>
                </Link></div>
              );
            })}
          </div>



          {/* Women Watches */}
          <div className='flexRow flexRow2'>
            <h3>Women Watches</h3>
            <Link to='/women'>See All</Link>
          </div>


          <div className="flexRow flexRow2">
            {womenWatches.slice(0, 3).map(womenWatch => {
              return (
                <div key={womenWatch.id}><Link to={'/product/' + womenWatch.id}>
                  <img src={womenWatch.images[0]}
                    width='200px' height='200px'
                    alt="women watch" />
                  <p key={womenWatch.id}>{womenWatch.title} </p>
                </Link></div>
              );
            })}
          </div>
        </main >

        < Footer />
      </div>
      {/* <Cart /> */}
    </>
  );
}

export default Homepage;