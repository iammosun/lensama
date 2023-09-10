import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import ProductPage from './pages/productPage/ProductPage';
import SearchPage from './pages/searchPage/SearchPage';
import MenPage from './pages/menPage/MenPage';
import WomenPage from './pages/womenPage/WomenPage';
import Cart from './pages/cart/Cart';
import SignUpPage from './pages/signUpPage/SignUpPage';
import SignInPage from './pages/signInPage/SignInPage';




function App() {
  const dataRef = useRef();
  const hey = {
    name: 'haha'
  }

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(hey)
    dataRef.current.value = ""
  }

  return (
    <div className='App'>
      {/* <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form> */}


      <BrowserRouter>
        <Routes>
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/searchPage/:query' element={<SearchPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/men' element={<MenPage />} />
          <Route path='/women' element={<WomenPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path='/signIn' element={<SignInPage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
