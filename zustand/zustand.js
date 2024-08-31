// Install Zustand :- npm i zustand
// Use Counter Component :-
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default function Counter() {
  const { count, inc, dec } = useStore();

  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={inc}>one up</button>
      <button onClick={dec}>one down</button>
    </div>
  );
}
