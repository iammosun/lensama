import React from 'react';
import { Link } from 'react-router-dom';

import AddToCartBtn from '../addToCartBtn/addToCartBtn';

const WatchesMap =
  ({ watches: watches, index1: index1, index2: index2, btnAddToCart: btnAddToCart }) => {


    return (
      watches.slice(index1, index2).map(watch => {
        return (
          <div key={watch.id}>
            <Link to={'/product/' + watch.id}>
              <img src={watch.images[0]}
                width='200px' height='200px'
                alt="watch" />
              <p key={watch.id}>{watch.title} </p>
            </Link>
            <AddToCartBtn btnAddToCart={btnAddToCart} item={watch} itemId={watch.id} />
          </div>
        );
      })
    );
  }

export default WatchesMap;