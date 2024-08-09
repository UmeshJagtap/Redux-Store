// -----------------------------------------------------------------------------------------------------------------------
// 1. Redux toolkit crash course | Chai aur React Series -(https://www.youtube.com/watch?v=1i04-A7kfFI)
// 2. Redux - Complete Tutorial (with Redux Toolkit) -Cosden Solutions -(https://www.youtube.com/watch?v=5yEG6GhoJBs)
// -----------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
// 1. Redux toolkit crash course | Chai aur React Series  (https://www.youtube.com/watch?v=1i04-A7kfFI)
//-------------------------------------------------------------------------------------------

// -(https://stackblitz.com/edit/react-tailwind-fe4zmp?file=Hello.js,index.js,App1.jsx,app%2Fstore.js,features%2Ftodo%2FtodoSlice.js,components%2FAddTodo.jsx,components%2FTodos.jsx)


// https://redux.js.org/
// Redux
// A Predictable State Container for JS Apps  

// React 
// React-dom
// React-native

// react-redux 

// https://www.youtube.com/watch?v=1i04-A7kfFI
// https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-with-aem-headless/spa-editor/remote-spa/spa-fixed-component.html?lang=en
// https://redux.js.org/
// https://search.brave.com/search?q=state+management+in+react&source=web

// Flux 
// -Good data-flow

// Redux
// -Single source of Truth
// -State should be Read-only
// -Changes should as pure Functions

// Extension -->> redux chrome extension
// Redux DevTools

// redux-toolkit
// -easy way to make store
// -slicing, reducer, already included in Redux Thunk

// store -single source of truth
// reducers -fuctionality
// useSelector -to select value from store 
// useDispatch -to send value to store

// Terminal :

// $npm create vite@latest
// ? Project name : > reduxToolkitTodo //08miniContext
// ? Package name: > reduxtoolkittodo
// ? Select a framework: > React
// ? Select a variant: > JavaScript

// $cd reduxToolkitTodo/
// $bun i


// App1.jsx
import React from 'react';
export default function App1() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1 className="text-yellow-500">APP1 below</h1>
      <h1 className="text-red-500">Learn about redux toolkit</h1>
    </>
  );
}

// Terminal :

// $npm run dev

// Redux installation
// https://redux-toolkit.js.org/introduction/getting-started
// $npm install @reduxjs/toolkit
// $npm install react-redux

// src > app > store.js  
// Where to place te store is an opinioniated, doesn't matter where it is placed

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducer,
});


// features >> todo >> todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'Hello world' }],
};

// function sayHello() {
//   console.log('Hello world');
// }
export const todoSlice = createSlice({
  name: 'todo', // will be shown on Chrome developer tools
  initialState,
  reducers: {
    // addTodo: sayHello,
    addTodo: (state, action) => {
      const todo = {
        // id: 1,
        // text: 'Hello world',
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = {
        id: todo.id,
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;


// components >> AddTodo.jsx
import React, { use } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };
  return (
    <>
      <div>AddTodo</div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outlie-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </>
  );
}

export default AddTodo;

// components >> Todos.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
}

export default Todos;

// features >> App1.jsx

import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import { store } from './app/store';
export default function App1() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1 className="text-yellow-500">APP1 below</h1>
      <h1 className="text-red-500">Learn about redux toolkit</h1>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  );
}









//-------------------------------------------------------------------------------------------
//  2. Redux - Complete Tutorial (with Redux Toolkit) -https://www.youtube.com/watch?v=5yEG6GhoJBs
//-------------------------------------------------------------------------------------------
// **Counter with TypeScript **

// Anoter react-redux example :-
// -(https://stackblitz.com/edit/base-react-tailwind-4bkpca?file=Ref.js,src%2Fstate%2Fstore.ts,src%2Fstate%2Fcounter%2FcounterSlice.ts,src%2Fcomponents%2FCounter.tsx,src%2Fmain.tsx,src%2Findex.js)

// src > state > store.ts  <----------------------

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// src > state > counter > counterSlice.ts  <----------------------

import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment: (state, action) => {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;



// src > components > Counter.tsx  <----------------------

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { increment, decrement } from '../state/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;



// main.tsx

import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

ReactDOM.createRoot(document.getElementById{"root"}.render(
  <Provider store={store}>
    <App />
  </Provider>
);







// -----------------------------------------------------------------------------------------
// Handling Actions with argument
// Handling Async Actions
// -(https://stackblitz.com/edit/base-react-tailwind-4bkpca?file=Ref.js,src%2Fstate%2Fstore.ts,src%2Fstate%2Fcounter%2FcounterSlice.ts,src%2Fcomponents%2FCounter.tsx,src%2Fmain.tsx,src%2Findex.js)

// src > state > store.ts  <---------------------------------------
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// src > state > counter > counterSlice.ts  <----------------------

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment: (state, action) => {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Actions with argument
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // incrementByAmount: (state, action: PayloadAction<{ value: number }>) => {
    //   state.value += action.payload.value;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync.pending');
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;



// src > components > Counter.tsx  <----------------------

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from '../state/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment by 10 Async
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;


// ---------------------------------------------v---- (BONUS)
// Redux DevTools
// Refresh > Increment >
// @@INIT
// counter/incrementAsync/pending
// counter/incrementAsync/fulfilled
// In case of fulfilled :-
// counter (pin)
//   value (pin): 10 => 20
// In case of counter/decrement :-
// counter (pin)
//   value (pin): 20 => 19
// We can jump back in time, to check how system looks..
// We can [Jump] to present state, to check current state.


// Example 3 :-
// TODO -https://stackblitz.com/edit/react-redux-app?file=reducers%2Ftodos.js







// ----------------------------------------------------v---( REF )

// Build a React E-commerce App with Redux🚀 | Full-Stack Web Development Coding Ninjas👌 
// >> https://www.youtube.com/watch?v=vb86O7LlC2U
// >> https://github.com/ParmodKumar28/E-Commerce-React-App
// >> https://shopify88.netlify.app/

// Learn Redux Toolkit in one video 🔥🔥🚀 ( Hindi ) -(https://www.youtube.com/watch?v=XwGNhppX4as)
// https://www.linkedin.com/in/codersgyan

// 🛒React + Redux Toolkit E-commerce Cart Project In One Video || Complete Redux Toolkit In One Video
// https://www.youtube.com/watch?v=Su6-hYhrRys