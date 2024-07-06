import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, double, reset } from './store/counterSlice';
const Counter = (props) => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(double());
        }}
      >
        Double
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Counter;
