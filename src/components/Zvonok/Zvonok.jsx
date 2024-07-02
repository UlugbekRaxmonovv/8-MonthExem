import React from 'react';
import './Zvonok.scss'
import { TiArrowRight } from "react-icons/ti";
import { VscChromeClose } from "react-icons/vsc";

const Zvonok = ({setZvonok}) => {
    return (
        <div className='container'>
            <div className="zvonok">
            <div className="x">
            <VscChromeClose onClick={() => setZvonok(false)}/>
            </div>
                <div className="zvonok_all">
                    <h1>Заполните,и мы перезвоним</h1>
                    <form action="">
                        <input type="text" placeholder='ФИО' />
                        <input type="text" placeholder='телефон' />
                        <button>Весь каталог  <TiArrowRight /></button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Zvonok;
