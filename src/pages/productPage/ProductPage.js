import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import AddToCartBtn from '../../components/addToCartBtn/addToCartBtn';




const ProductPage = () => {
  const { id } = useParams();

  const { womenWatches } = useSelector(state => state.watchesSlice);
  const { menWatches } = useSelector(state => state.watchesSlice);
  const watches = [...menWatches, ...womenWatches];
  const product = watches.filter(watch => watch.id === Number(id));
  const prod = product[0];
  const category = prod.category === 'womens-watches' ? womenWatches : menWatches;




  return (
    <>
      <Navbar />

      <div className='mainContainer'>
        <Link to='/shop'>back to shop</Link>
        <div className='productContainer'>
          <div className='productMiniImages'>
            <div className="flexRow2">
              <div><img src={prod.images[0]}
                width='80px' height='80px' alt="small product" /></div><br />
              <div><img src={prod.images[1]}
                width='80px' height='80px' alt="small product" /></div><br />
              <div><img src={prod.images[2]}
                width='80px' height='80px' alt="small product" /></div><br /><br />
            </div>

            <div className='productMainImage'>
              <img src={prod.images[0]}
                width='100px' height='100px'
                alt="product main" />
            </div>

            <div className='productDescription'>
              <p>{prod.title}</p>
              <p>{prod.description}</p><br />
              <h4>Price: ${prod.price}</h4>

              <AddToCartBtn item={prod} itemId={prod.id} />
            </div>
          </div>
        </div>


        <div className='recommendedContainer'>
          <div className='flex'>
            <p>Recommended</p>
            <Link to={category === womenWatches ? '/women' : '/men'}> see all</Link>
          </div>

          {category.slice(0, 3).map(watch => {
            return (
              <div key={watch.id}><Link to={'/product/' + watch.id}>
                <img src={watch.images[0]}
                  width='100px' height='100px'
                  alt="watch" />
                <p key={watch.id}>{watch.title} </p>
              </Link></div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;