import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import ProductPage from './pages/productPage/ProductPage';
import SearchPage from './pages/searchPage/SearchPage';
import MenPage from './pages/menPage/MenPage';
import WomenPage from './pages/womenPage/WomenPage';
import Cart from './pages/cart/Cart';
import SignUpPage from './pages/signUpPage/SignUpPage';
import SignInPage from './pages/signInPage/SignInPage';
import CheckoutStep1 from './pages/checkoutStep1/CheckoutStep1';
import CheckoutStep2 from './pages/checkoutStep2/CheckoutStep2';
import CheckoutStep3 from './pages/checkoutStep3/CheckoutStep3';




function App() {

  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/searchPage/:query' element={<SearchPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/men' element={<MenPage />} />
          <Route path='/women' element={<WomenPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkoutStep1' element={<CheckoutStep1 />} />
          <Route path='/checkoutStep2' element={<CheckoutStep2 />} />
          <Route path='/checkoutStep3' element={<CheckoutStep3 />} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
