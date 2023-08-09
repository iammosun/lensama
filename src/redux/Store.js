import { configureStore } from '@reduxjs/toolkit';
import WatchesSlice from './WatchesSlice';
import CartSlice from './CartSlice';

const Store = configureStore({
    reducer: {
        watchesSlice: WatchesSlice,
        cartSlice: CartSlice
    }
});

export default Store;