import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
// import WatchesMap from '../../components/mappings/WatchesMap';
import AddToCartBtn from '../../components/addToCartBtn/addToCartBtn';


const ShopPage = () => {
  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);
  const allWatches = [...menWatches, ...womenWatches];


  return (
    <>
      <Navbar />

      <main>
        <div className='mainContent flexRow' id='mainContentContainer'>
          <div className="flexRow flexRow2">
            {allWatches.slice(0, Object.keys(allWatches).length + 1).map(watch => {

              return (
                <div id='watchImgContainer'
                  className='watchImgContainer'
                  key={watch.id}>
                  <Link to={'/product/' + watch.id} >
                    <div className='mainWatchImgContainer'>
                      <img className='mainWatchImg'
                        src={watch.images[0]} height='100%' width='30%' alt='watch'>
                      </img>
                    </div>
                    <div className='watchText'>
                      <h3><b>{watch.title}</b></h3>
                    </div>
                    <p id='watchBrand'>
                      <b><i>{watch.brand}</i></b>
                    </p>
                  </Link>

                  <AddToCartBtn
                    ifShowAddBtn='show'
                    item={watch}
                    itemId={watch.id}
                  />
                </div>
              );
            })}
            {/* <WatchesMap
              watches={allWatches}
              index1={0}
              index2={Object.keys(allWatches).length + 1}
              addToCartBtn='show' /> */}
          </div>
        </div>
      </main >
      <Footer />
    </>
  );
}
export default ShopPage;