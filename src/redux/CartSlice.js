import { createSlice } from '@reduxjs/toolkit';

const cartFromSessionStorage = JSON.parse(sessionStorage.getItem('cart'));
const totalFromSessionStorage = JSON.parse(sessionStorage.getItem('total'));



const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    cart: { ...cartFromSessionStorage },
    cartTotal: Number(totalFromSessionStorage)
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

      //   // itemById.innerHTML = 'Remove from basket';
      //   cartBtn = 'Remove from basket';


      // } else { //if 'Remove from Basket' is clicked

      //   //change the price total in storage
      //   let itemPrice = Number(item.price) * item.quantity;
      //   total = Number(sessionStorage.getItem('total')) - itemPrice;

      //   //change num of items in storage
      //   numOfItems = Number(sessionStorage.getItem('numOfItems')) - 1;

      //   delete cart[itemId];
      //   items = cart;
      //   // itemById.innerHTML = 'Add To Basket';
      //   cartBtn = 'Add To Basket'
      // }

      // items[itemId].cartBtn = cartBtn;
      // sessionStorage.setItem('cart', JSON.stringify(items));
      // sessionStorage.setItem('numOfItems', numOfItems);
      // sessionStorage.setItem('total', total);
      // // sessionStorage.setItem('cartBtn', cartBtn)
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


    deleteFromCart: (state, action) => {
      let id = action.payload;

      //change the cart total
      let itemPrice = state.cart[id].price * state.cart[id].quantity;
      state.cartTotal -= itemPrice;

      //delete the item from cart
      let deletedItemId = Object.keys(state.cart).filter(watchId => watchId === id);
      delete state.cart[deletedItemId];
    }
  }
});

export const { addToCart, changeQuantity, deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;