import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addtocart from './Components/Addtocart';
import Cart from './Components/Cart';

import { createContext, useReducer } from 'react'
import { cartreducer, initialstate } from './reducers/Reducer';

export const Usercontext = createContext()

function App() {
  const [state, dispatch] = useReducer(cartreducer, initialstate)
  return (
    <Usercontext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cart/>} />
          <Route path="add" element={<Addtocart/>} /></Routes>
      </BrowserRouter>
    </Usercontext.Provider>

  );
}

export default App;
