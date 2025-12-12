// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    resetState: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, resetState } = counterSlice.actions;
export default counterSlice.reducer;

//------------------------------------------------------
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// interface CounterState {
//   value: number
// }

// const initialState = { value: 0 } satisfies CounterState as CounterState
// //initializeCount
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.value++
//     },
//     decrement(state) {
//       state.value--
//     },
//     incrementByAmount(state, action: PayloadAction<number>) {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer
