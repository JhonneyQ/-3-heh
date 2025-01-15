import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Client from './components/client'
import Home from './pages/home'
import Favorites from './pages/favorites'
import Details from './pages/details'
import Add from './pages/add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Client/>}>
          <Route index element={<Home/>}/>
          <Route path='favorites' element={<Favorites/>}/>
          <Route path='details' element={<Details/>}>
            <Route path=':id'/>
          </Route>
          <Route path='add' element={<Add/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
