import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Katalog from './Pages/Каtalog/Каtalog'
import Modul from './components/Modul/Modul'
import SingleRoute from './Pages/SingleRoute/SingleRoute'
import Wishlist from './Pages/Wishlist/Wishlist'


function App() {
  const [islogin, setIsLogin] = useState(false);
  document.body.style.overflow =  islogin ? "hidden" : "auto"
  return (
    <>
    <Navbar />
    {
        islogin ?    <Modul btn1={setIsLogin}  >
         </Modul>
         :
         <></>
      }
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/catalog" element={<Katalog/>} />
      <Route path="/single/:id" element={<SingleRoute/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
     
    </>
  )
}

export default App
