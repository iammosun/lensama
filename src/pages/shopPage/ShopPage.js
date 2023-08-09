import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';


const ShopPage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);


  return (
    <>
      <Navbar />

      <main className='mainContent flexRow flexRow2'>
        <div className="">
          <WatchesMap
            watches={menWatches}
            index1={0}
            index2={3}
            addToCartBtn='show' />
        </div>

        <div className="">
          <WatchesMap
            watches={womenWatches}
            index1={0}
            index2={3}
            btnAddToCart='show'
          />
        </div>

        <button>Show More Items</button>
      </main >
      <Footer />
    </>
  );
}
export default ShopPage;