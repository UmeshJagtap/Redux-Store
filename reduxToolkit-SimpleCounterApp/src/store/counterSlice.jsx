import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  count: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    double: (state) => {
      state.count = state.count * 2;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, double, reset } = counterSlice.actions;
export default counterSlice.reducer;
