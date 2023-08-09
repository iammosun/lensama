import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import ProductPage from './pages/productPage/ProductPage';
import MenPage from './pages/menPage/MenPage';
import WomenPage from './pages/womenPage/WomenPage';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/men' element={<MenPage />} />
          <Route path='/women' element={<WomenPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
