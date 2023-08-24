import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';


const ShopPage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);
  const allWatches = [...menWatches, ...womenWatches];


  return (
    <>
      <Navbar />

      <main>
        <div className='mainContent flexRow'>
          <div className="flexRow">
            <WatchesMap
              watches={allWatches}
              index1={0}
              index2={Object.keys(allWatches).length + 1}
              addToCartBtn='show' />
          </div>
        </div>
      </main >
      <Footer />
    </>
  );
}
export default ShopPage;