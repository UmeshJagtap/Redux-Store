'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/features/counterSlice';

export default function Counter() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter </h2>
      <p>Count: {count}</p>
      <button
        className="bg-red-500 text-white"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-green-500 text-white"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
}
