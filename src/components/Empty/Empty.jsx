import React from 'react';
import rasm from '../../assets/img/impty.png'
import { Link } from 'react-router-dom';

const Empty = () => {
    return (
        <div style={{textAlign:"center",marginTop:'20px',padding:'40px 0'}}>
        <img src={rasm} width={250} alt="" />
        <h2>Добавьте то, что понравилось</h2>
        <p>Добавьте то, что понравилось</p>
       <Link to={'/'}> <button style={{padding:'4px 16px', 
        border:'none', 
        backgroundColor:'#7000FF', 
        color:'white',borderRadius:'4px', marginTop:'20px', cursor:'pointer'}}>Logout</button></Link>
    </div>
    );
}

export default Empty;
