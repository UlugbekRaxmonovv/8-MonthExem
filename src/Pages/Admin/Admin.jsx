import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { VscExtensions } from "react-icons/vsc";
import { LuPencilLine } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import './Admin.scss'

const Admin = () => {
    return (
       <>
        <div className="admin">
      
      <div className="saidbar">
        <div className="home">
        <div className="home_All">
    <GoArrowLeft/>
</div>
<div className="home_All">
    <h1>Admin Dashboard</h1>
</div>
        </div>
      <ul>
    <li className="sidebar-list-item">
      <Link to={'create-product'}><VscExtensions className="icon "/> Create product</Link>
    </li>
    <li className="sidebar-list-item">
   <Link to={'manage-category'}>    <LuPencilLine className="icon "/> Manage product</Link>
    </li>
    <li className="sidebar-list-item">
  <Link to={'create-category'}> <VscExtensions className="icon "/>Create category</Link>
    </li>
    <li className="sidebar-list-item">
        <Link  to={'manage-product'}> <LuPencilLine className="icon "/> Manage product</Link>

    </li>
</ul>
<Link to={'/'}>
<div className="logout">
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

     
       </>
    );
}

export default Admin;
