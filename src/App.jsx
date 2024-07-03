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
import Login from './Pages/Login/Login'
import Auth from './Pages/Auth/Auth'
import Admin from './Pages/Admin/Admin'
import CreateCategory from './Pages/Admin/CreateCategory/CreateCategory'
import CreateProduct from './Pages/Admin/CreateProduct/CreateProduct'
import ManageCategory from './Pages/Admin/ManageCategory/ManageCategory'
import ManageProduct from './Pages/Admin/ManageProduct/ManageProduct'
import TavarProducts from './Pages/TavarProducts/TavarProducts'


function App() {

  return (
    <>
    <ToastContainer/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/catalog" element={<Katalog/>} />
      <Route path="/single/:id" element={<SingleRoute/>} />
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/korzinka" element={<Korzinka/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path='/contact' element={<Kontact/>}/>
      <Route path='/tavar-products' element={<TavarProducts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Auth/>}>
        <Route path='/admin' element={<Admin/>}>
        <Route path='create-category' element={<CreateCategory/>}/>
        <Route path='create-product' element={<CreateProduct/>}/>
        <Route path='manage-category' element={<ManageCategory/>}/>
        <Route path='manage-product' element={<ManageProduct/>}/>
        </Route>
        </Route>
        <Route path="*" element={<NotFound/>} />

    </Routes>
     
    </>
  )
}

export default App
