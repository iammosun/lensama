import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import WatchesMap from '../../components/mappings/WatchesMap';




const SearchPage = () => {
  const { query } = useParams();

  const { menWatches } = useSelector(state => state.watchesSlice);
  const { womenWatches } = useSelector(state => state.watchesSlice);
  const watches = [...menWatches, ...womenWatches];
  const [filteredItems, setFilteredItems] = useState([]);


  useEffect(() => {
    const filteredWatches = (watches.filter(watch =>
      ((watch.title.toLowerCase()).includes(query.toLowerCase()))
    ));

    filteredWatches ?
      setFilteredItems(filteredWatches) :
      setFilteredItems(null);
  }, [query])




  return (
    <>
      <Navbar />

      <main>
        <div className='mainContent flexRow'>
          <div className="flexRow">
            {filteredItems ?
              <>
                <WatchesMap
                  watches={filteredItems}
                  index1={0}
                  index2={filteredItems.length + 1}
                  addToCartBtn='hide' />
              </>

              : <h2>No Product Found</h2>}
          </div>
        </div>
      </main >

      <Footer />
    </>
  );
}
export default SearchPage;