import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Katalog from './Pages/Каtalog/Каtalog'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/catalog" element={<Katalog/>} />
    </Routes>
     
    </>
  )
}

export default App
