import { createSlice } from '@reduxjs/toolkit';
// const { createSlice } = require('@reduxjs/toolkit');

// const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      // Redux Core
      // return [...state, action.payload];   it was returning a new array
      state.push(action.payload);
      // We can mutate the state as above, as it's an abstraction provided by Slice
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

// NOTE
// Create an initial state
// createSlice Function, pass name, initialState, reducers
// reducers are pure function, does not change the data outside it's scope, to change the state
// In Redux Core
//     return [...state, action.payload];   it was returning a new array
// We can mutate the state as above, as it's an abstraction provided by Slice
//     state.push(action.payload);
// export add, remove actions from createSlice actions
// In Redux Core
//     {type: 'add/cart', payload: 1}
//     are the actions which were toe created seprately
