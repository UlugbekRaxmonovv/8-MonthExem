import React, { useState, Component, createContext, useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { VscExtensions } from "react-icons/vsc";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Admin.scss'
import { VscChromeClose } from "react-icons/vsc";
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';
 import Switch from "react-switch";
 import { Context } from '../../components/DarkMore/Context';
import { IoSunnyOutline, IoSunnySharp } from 'react-icons/io5';
const Admin = () => {
  const {theme, setTheme} =useContext(Context)
  const [show,setShow]  = useState(false)
  let {pathname} = useLocation();
  const navigate = useNavigate();
  if(pathname.includes('/tavar-products')){
  return <></>;
}


const logout = () => {
  localStorage.removeItem('x-auth-token');
  navigate('/');
};
     return (
       <>
     <div className="ad">
     <div className={`home  ${theme ? "light" : ""} `}>
     
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
             
               {
                                  theme ? 
                                  <IoSunnyOutline className='svg' onClick={() =>setTheme(!theme)} />
                                  :
                                  <IoSunnySharp className='svg' onClick={() =>setTheme(!theme)} />
                                }
               </div>
                </div>
           <div className={`admin  ${theme ? "light" : ""} `}>
         
         <div className={`saidbar ${show ? "show" : <></>}`}>
         <ul>
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link to={'create-product'}> <VscExtensions className={`icon ${show ? "show" : ""}`}/></Link>
         <li className={`all ${show ? "show" : ""}`}>
         <Link to={'create-product'}> Create product</Link>
       </li>
           </div>


           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link to={'create-category'}> < LuPencilLine className={`icon ${show ? "show" : ""}`}/></Link>   
         <li  className={`all ${show ? "show" : ""}`}>
         <Link to={'create-category'}> Manage product</Link>
       </li>
           </div>
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link to={'manage-category'}><VscExtensions className={`icon ${show ? "show" : ""}`}/> </Link>    
         <li  className={`all ${show ? "show" : ""}`}>
         <Link to={'manage-category'}>  Create category  </Link>
       </li>
           </div>
   
       
   
           <div className={`sidebar-list-item ${show ? "show" : ""}`}>
           <Link  to={'manage-product'}>   <LuPencilLine className={`icon ${show ? "show" : ""}`}/> </Link>
         <li  className={`all ${show ? "show" : ""}`}>
         <Link  to={'manage-product'}> Manage product</Link>
       </li>
           </div>
   </ul>
  
   <div className={`logouts ${show ? "showa" : ""}`}onClick={logout} >
   <div className="logout_all">
   <MdLogout />
       </div>
       <div className="logout_all">
           <h1>Log out</h1>
       </div>
   </div>
   
   <div className={`logout ${show ? "show" : ""}`}  onClick={logout}>
   <div className="logout_all">
   <MdLogout />
       </div>
       <div className="logout_all">
           <h1>Log out</h1>
       </div>
   </div>
         </div>
         <div className="admin_content">
          <Outlet />
          </div>
        </div>
     </div>

   

     
       </>
    );
}

export default Admin;
