import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';
import AddToCartBtn from '../../components/addToCartBtn/addToCartBtn';




const ProductPage = () => {
  const { id } = useParams();

  const { womenWatches } = useSelector(state => state.watchesSlice);
  const { menWatches } = useSelector(state => state.watchesSlice);
  const watches = [...menWatches, ...womenWatches];
  const product = watches.filter(watch => watch.id === Number(id));
  const prod = product[0];
  const category = prod.category === 'womens-watches' ? 'womenWatches' : 'menWatches';




  return (
    <>
      <Navbar />
      <div className='mainContent'>
        <div> <Link to='/shop' id='backToShop'>back to shop</Link></div>
        <div className='productContainer'>

          <div className='productMainImage'>
            <img src={prod.images[0]}
              width='250px' height='250px'
              alt="product main" />
          </div>

          <div className='productDescription'>
            <p><b>{prod.title}</b></p>
            <p>{prod.description}</p><br />
            <h4>Price: ${prod.price}</h4>

            <AddToCartBtn item={prod} itemId={prod.id} />
          </div>
        </div>




        {/* Recommended ....................*/}
        <div className='flexRow flexRow2 watchesTopPad'>
          <h2>Recommended</h2>
          <Link to={category === 'womenWatches' ? '/women' : '/men'}>See All</Link>
        </div>

        <div className="flexRow flexRow2">
          <WatchesMap
            watches={womenWatches}
            index1={0}
            index2={3}
            ifShowAddBtn='hide'
          />

        </div>

      </div >
      <Footer />
    </>

  );
}

export default ProductPage;