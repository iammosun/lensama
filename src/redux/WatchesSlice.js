import { createSlice } from '@reduxjs/toolkit';


const WatchesSlice = createSlice({
  name: 'watches',

  initialState: {
    womenWatches: [],
    menWatches: []
  },

  reducers: {
    women: (state, action) => {
      state.womenWatches = action.payload;
    },

    men: (state, action) => {
      state.menWatches = action.payload;
    },
  },
})

export const { women, men } = WatchesSlice.actions;
export default WatchesSlice.reducer;