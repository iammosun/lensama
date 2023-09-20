import React from 'react';
import { Link } from 'react-router-dom';

import AddToCartBtn from '../addToCartBtn/addToCartBtn';



const WatchesMap = ({ watches, index1, index2, ifShowAddBtn }) => {

  return (
    watches.slice(index1, index2).map(watch => {

      return (
        <div id='watchImgContainer' key={watch.id}>
          <Link to={'/product/' + watch.id} >
            <div className='mainWatchImgContainer'>
              <img className='mainWatchImg'
                src={watch.images[0]} height='100%' width='100%' alt='watch'>
              </img>
            </div>
            <div className='watchText'>
              <h3><b>{watch.title}</b></h3>
            </div>
            <p className='watchBrand'>
              <b><i>{watch.brand}</i></b>
            </p>
          </Link>

          <AddToCartBtn
            ifShowAddBtn={ifShowAddBtn}
            item={watch}
            itemId={watch.id}
          />
        </div>
      );
    })
  );
}

export default WatchesMap;