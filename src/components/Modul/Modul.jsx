import React from 'react';
import './Modul.scss'

const Modul = ({children,btn1}) => {
    return (
        <div>
        <div  onClick={() => btn1(false)} className="overlay"></div>
        <div className="modul">
         {children}
        </div>
        </div>
    );
}

export default Modul;
