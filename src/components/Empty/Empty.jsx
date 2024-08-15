import React, { useContext } from 'react';
import rasm from '../../assets/img/impty.png'
import { Link } from 'react-router-dom';
import './Empty.scss'
import { Context } from '../DarkMore/Context';
const Empty = () => {
    const {theme} =useContext(Context)
    return (
       <div className={`fos ${theme ? "light" : ""}`}>
      <div className="container">
      <div className='div' >
        <img src={rasm} width={250} alt="" />
        <h2 className='tx'>Добавьте то, что понравилось</h2>
        <p className='tx'>Добавьте то, что понравилось</p>
       <Link to={'/'}> <button style={{padding:'4px 16px', 
        border:'none', 
        backgroundColor:'#7000FF', 
        color:'white',borderRadius:'4px', marginTop:'20px', cursor:'pointer'}}>Logout</button></Link>
    </div>
      </div>
       </div>
    );
}

export default Empty;
