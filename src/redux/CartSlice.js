import { createSlice } from '@reduxjs/toolkit';

const cartFromStorage = JSON.parse(sessionStorage.getItem('cart'));
const totalFromStorage = JSON.parse(sessionStorage.getItem('cartTotal'));
const cartLengthFromStorage = Number(JSON.parse(sessionStorage.getItem('cartLength'))) || 0;

const updateSessionStorage = (cart, cartTotal, cartLength) => {
  sessionStorage.setItem('cartLength', JSON.stringify(cartLength));
  sessionStorage.setItem('cartTotal', JSON.stringify(cartTotal));
  sessionStorage.setItem('cart', JSON.stringify(cart));
}


const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    cart: { ...cartFromStorage },
    cartTotal: Number(totalFromStorage),
    cartLength: cartLengthFromStorage
  },


  reducers: {

    addToCart: (state, action) => {
      let id = action.payload.itemId;
      let item = { ...action.payload.item };

      if (state.cart) { //if storage is not empty

        //add item to items in cart and price to total
        state.cart = { ...state.cart, [id]: { ...item, 'quantity': 1 } }
        state.cartTotal += item.price;

      } else { //if storage is empty
        let data = { ...item, 'quantity': 1 };

        //add item to cart and price to total
        state.cart[id] = data;
        state.cartTotal = data.price;
      }

      state.cartLength += 1;
    },


    deleteFromCart: (state, action) => {
      let id = (action.payload.itemId);

      //change the cart total
      let itemPrice = Number(state.cart[id].price) * state.cart[id].quantity;
      state.cartTotal -= itemPrice;

      //delete the item from cart
      let watchesId = Object.keys(state.cart);
      let deletedItemId = watchesId.filter(watchId => watchId === String(id));
      delete state.cart[deletedItemId];

      state.cartLength -= 1;
      // updateSessionStorage(state.cart , state.cartTotal, state.cartLength);
    },


    changeQuantity: (state, action) => {
      let sign = action.payload.sign;
      let id = action.payload.id;

      if (sign === 'add') {
        state.cart[id].quantity += 1;
        state.cartTotal += state.cart[id].price;

      } else if ((sign === 'subtract') && (state.cart[id].quantity > 1)) {
        state.cart[id].quantity -= 1;
        state.cartTotal -= state.cart[id].price;
      }
    },

    clearCart: (state) => {
      state.cart = {};
      state.cartLength = 0;
      state.cartTotal = 0;
    },

    // called to set session storage for any changes in cart
    updateStorage: (state) => {
      updateSessionStorage(state.cart, state.cartTotal, state.cartLength);
    }
  }
});

export const { addToCart, deleteFromCart, changeQuantity, clearCart, updateStorage } = CartSlice.actions;
export default CartSlice.reducer;