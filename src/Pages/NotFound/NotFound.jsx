import React from 'react';
import './NotFound.scss'
import rasm from  '../../assets/img/notFount.png'
const NotFound = () => {
    return (
        <div  className='container'>
       <div className="notFound">
<div className="notFound_all">
    <img src={rasm} alt="" />
    <p>Похоже, ничего не нашлось :</p>
    <button>На главную</button>
</div>
       </div>
            
        </div>
    );
}

export default NotFound;
