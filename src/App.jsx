import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Katalog from './Pages/Каtalog/Каtalog'
import Modul from './components/Modul/Modul'
import SingleRoute from './Pages/SingleRoute/SingleRoute'
import Wishlist from './Pages/Wishlist/Wishlist'
import Korzinka from './Pages/Коrzinka/Коrzinka'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Pages/Blog/Blog'
import NotFound from './Pages/NotFound/NotFound'
import Kontact from './Pages/Коntact/Коntact'


function App() {
  const [islogin, setIsLogin] = useState(false);
  document.body.style.overflow =  islogin ? "hidden" : "auto"
  return (
    <>
    <ToastContainer/>
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
      <Route path="/korzinka" element={<Korzinka/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path='/contact' element={<Kontact/>}/>
    </Routes>
     
    </>
  )
}

export default App
