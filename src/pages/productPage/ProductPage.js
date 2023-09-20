import React, { useState } from 'react';
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
  const [mainImg, setMainImg] = useState(prod.images[0]);

  const onChangeMainImg = (query) => {
    setMainImg(query);
  }




  return (
    <>
      <Navbar />
      <div className='mainContent'>
        <div id='backToShopBtnContainer'>
          <Link to='/shop' id='backToShopBtn'><b>Back to shop</b></Link>
        </div>
        <div className='productContainer'>

          <div id="miniProductImagesContainer">
            <div onClick={() => onChangeMainImg(prod.images[0])}>
              <img src={prod.images[0]}
                height='80px'
                alt="glasses" />
            </div>
            <div onClick={() => onChangeMainImg(prod.images[1])}>
              <img src={prod.images[1]}
                height='80px'
                alt="glasses" />
            </div>
            <div onClick={() => onChangeMainImg(prod.images[2])}>
              <img src={prod.images[2]}
                height='80px'
                alt="glasses" />
            </div>
          </div>
          <div className='productMainImg'>
            <img src={mainImg}
              width='400px' height='250px'
              alt="product main" />
          </div>

          <div className='productDescriptionContainer'>
            <div><p><b>{prod.title}</b></p></div>
            <div><small>{prod.description}</small></div>
            <div><h2>${prod.price}.00</h2></div>
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