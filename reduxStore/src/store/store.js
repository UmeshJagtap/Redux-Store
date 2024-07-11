// Redux Store
// We need to put data in STORE only if it is shared in multiple components...

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;

// Below was working if API is called from Products component
// OR We are just using product list only in one component, so it seems fine here

// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;

// // NOTE -------------------------------------------v----
// // Create a configureStore function
// // create reducer object
// // mention the reducers
