import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Client from './components/client';
import Home from './pages/home';
import Details from './pages/details';
import Favorites from './pages/favorites';
import Add from './pages/add';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Client/>}>
        <Route index element={<Home/>}/>
        <Route path='details/:id' element={<Details/>}/>
        <Route path='favorites' element={<Favorites/>}/>
        <Route path='add' element={<Add/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
