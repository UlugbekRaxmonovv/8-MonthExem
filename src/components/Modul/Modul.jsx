import React from 'react';
import './Modul.scss'

const Modul = ({children,btn1,maxWidth="500px",width='100%',padding='0 16px'}) => {
    return (
        <div>
        <div  onClick={() => btn1(false)} className="overlay"></div>
        <div style={{maxWidth,width,padding}} className="modul" >
         {children}
        </div>
        </div>
    );
}

export default Modul;
