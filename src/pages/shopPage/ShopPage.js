import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import AddToCartBtn from '../../components/addToCartBtn/addToCartBtn';


const ShopPage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);


  return (
    <>
      <Navbar />

      <main className='mainContent flexRow flexRow2'>
        {menWatches.slice(0, 3).map(menWatch => {
          return (
            <>
              <div key={menWatch.id}><Link to={'/product/' + menWatch.id}>
                <img src={menWatch.images[0]}
                  width='260px' height='260px'
                  alt="men watch" />
                <p key={menWatch.id}>{menWatch.title} </p>
              </Link></div>
              <AddToCartBtn item={menWatch} itemId={menWatch.id} />
            </>
          );
        })}

        {womenWatches.slice(0, 3).map(womenWatch => {
          return (
            <>
              <div key={womenWatch.id}><Link to={'/product/' + womenWatch.id}>
                <img src={womenWatch.images[0]}
                  width='260px' height='260px'
                  alt="women watch" />
                <p key={womenWatch.id}>{womenWatch.title} </p>
              </Link></div>
              <AddToCartBtn item={womenWatch} itemId={womenWatch.id} />
            </>
          );
        })}

        <button>Show More Items</button>
      </main >

      <Footer />
    </>
  );
}
export default ShopPage;