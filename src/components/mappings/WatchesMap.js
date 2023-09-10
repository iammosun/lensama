import React from 'react';
import { Link } from 'react-router-dom';

import AddToCartBtn from '../addToCartBtn/addToCartBtn';



const WatchesMap = ({ watches, index1, index2, ifShowAddBtn }) => {

  return (
    watches.slice(index1, index2).map(watch => {
      return (
        <div id='watchImgContainer' key={watch.id}>
          <Link to={'/product/' + watch.id} >
            <div className='mainWatchImg'
              style={{ backgroundImage: `url(${watch.images[0]})` }}>
            </div>
            <p className='watchText'
              key={watch.id}>
              <small><b>{watch.title}</b></small>
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