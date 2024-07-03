import React, { useState, Component, createContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { VscExtensions } from "react-icons/vsc";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import './Admin.scss'
import { VscChromeClose } from "react-icons/vsc";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';
 import Switch from "react-switch";
 export const ThemeContext = createContext(null)
const Admin = () => {
  const [them,setThem]  = useState('light')
  const [show,setShow]  = useState(false)
  let {pathname} = useLocation();
  if(pathname.includes('/tavar-products')){
  return <></>;
}

  const toogleThem = () => {
    setThem((curr) => ( curr  === "light" ? "dark" : "light"))
  }
     return (
       <>
         <ThemeContext.Provider value={{ them,setThem }}>
         <div className="home" id={them}>
     
     <div className="hom">
     <div className="home_All">
            <h1>Admin Dashboard</h1>
        </div>
        <div className={`home_All ${show ? "show" : <></>}`}>
           {
            show ? 
            <VscChromeClose className={`all ${show ? "show" : <></>}`}  onClick={() => setShow(!show)} />
            :
            <HiOutlineMenu style={{fontSize:'40px'}} onClick={() => setShow(!show)} />
           }
        </div>
     </div>
     <div className="header-right">
               <BsFillBellFill className='icon'/>
               <BsFillEnvelopeFill className='icon'/>
               <BsPersonCircle className='icon'/>
             
               <label>
           <Switch onChange={toogleThem} checked={them  === "dark"} />
         </label>
               </div>
                </div>
           <div className="admin">
         
         <div className={`saidbar ${show ? "show" : <></>}`}>
         <ul>
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link to={'create-product'}> <VscExtensions className={`icon ${show ? "show" : ""}`}/></Link>
         <li className={`all ${show ? "show" : ""}`}>
         <Link to={'create-product'}> Create product</Link>
       </li>
           </div>
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link to={'manage-category'}><LuPencilLine className={`icon ${show ? "show" : ""}`}/> </Link>    
         <li  className={`all ${show ? "show" : ""}`}>
         <Link to={'manage-category'}>    Manage product</Link>
       </li>
           </div>
   
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link to={'create-category'}> <VscExtensions className={`icon ${show ? "show" : ""}`}/></Link>   
         <li  className={`all ${show ? "show" : ""}`}>
         <Link to={'create-category'}> Create category</Link>
       </li>
           </div>
   
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link  to={'manage-product'}>   <LuPencilLine className={`icon ${show ? "show" : ""}`}/> </Link>
         <li  className={`all ${show ? "show" : ""}`}>
         <Link  to={'manage-product'}> Manage product</Link>
       </li>
           </div>
   </ul>
   <Link to={'/'}>
   <div className={`logouts ${show ? "showa" : ""}`} >
   <div className="logout_all">
   <MdLogout />
       </div>
       <div className="logout_all">
           <h1>Log out</h1>
       </div>
   </div>
   
   <div className={`logout ${show ? "show" : ""}`} >
   <div className="logout_all">
   <MdLogout />
       </div>
       <div className="logout_all">
           <h1>Log out</h1>
       </div>
   </div>
   </Link>
         </div>
         <div className="admin_content">
          <Outlet />
          </div>
        </div>
         </ThemeContext.Provider>
   

     
       </>
    );
}

export default Admin;
