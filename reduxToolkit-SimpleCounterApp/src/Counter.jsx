import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, double, reset } from './store/counterSlice';

function Button(props) {
    return <button style = {{ margin: 10 }} onClick={props.onClick}>{props.name}</button>
}

const Counter = (props) => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <Button
        onClick={() => {
          dispatch(increment());
        }}
        name='Increment'
      >
        Increment
      </Button>
      <button
      style = {{ margin: 10 }}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
      style = {{ margin: 10 }}
        onClick={() => {
          dispatch(double());
        }}
      >
        Double
      </button>
      <button
      style = {{ margin: 10 }}
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
