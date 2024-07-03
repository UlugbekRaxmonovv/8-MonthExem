import React from 'react';
import './Modul.scss'

const Modul = ({children,btn1,maxWidth="1200px",width='100%',height="600px"}) => {
    return (
        <div>
        <div  onClick={() => btn1(false)} className="overlay"></div>
        <div style={{maxWidth,width,height}} className="modul" >
         {children}
        </div>
        </div>
    );
}

export default Modul;
