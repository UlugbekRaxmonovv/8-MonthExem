import React, { useContext } from 'react';
import './Pochemu.scss'
import { VscArrowRight } from 'react-icons/vsc';
import rasm from '../../assets/img/pochemu.png'
import rasm1 from '../../assets/img/pochemu1.png'
import rasm2 from '../../assets/img/pochemu2.png'
import rasm3 from '../../assets/img/pochemu4.png'
import {useTranslation} from "react-i18next"
import { Context } from '../DarkMore/Context';
let data =[
    {
       id:1,
       h1:"Только проверенные бренды" ,
       p:"Бренды, проверенные временем и качеством" ,
       img: rasm 
    },
    {
        id:2,
        h1:"Самые низкие цены" ,
        p:"Ниже не будет нигде" ,
        img: rasm1
     },
     {
        id:3,
        h1:"Быстрая доствка" ,
        p:"Доставляем по всей РФ за 1-10 дней" ,
        img: rasm2
     },
     {
        id:4,
        h1:"Большой ассортимент" ,
        p:"Более 1000 товаров" ,
        img: rasm3
     }
]


let links = data?.map((el,inx) =>(
    <div className="pochemu_all" key={inx}>
    <div className="img">
        <div className="img_all">
            <img src={el.img} alt="" />
        </div>
    </div>
    <h1>{el.h1}</h1>
    <p>{el.p}</p>
    </div>
))

const Pochemu = () => {
    
    const {theme} =useContext(Context)
    let {t} =  useTranslation()
    return (
      <div className={`poch ${ theme ? "ligth" : ""}`}>
          <div className='container'>

<div className="katalog">
    <div className="katalog_item">
        <h1>{t("Почему")}</h1>
    </div>
    <div className="btn">
        <div className="btn1">
            <p>О компании</p>
        </div>
        <div className="btn1">
        <VscArrowRight />
        </div>
    </div>
</div>
<div className="pochemu">
{links}
</div>
<div className="btn4">
     <div className="btnt">
     <div className="btn1">
            <p>О компании</p>
        </div>
        <div className="btn1">
        <VscArrowRight />
        </div>
     </div>
    </div>
</div>
      </div>
    );
}

export default Pochemu;
