import React, { useContext } from 'react';
import './Окомпании.scss'
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
 import Brendlar from '../../components/Brendlar/Brendlar'
 import Blog from '../../components/Blog/Blog'
 import Footer from '../../components/Footer/Footer'
 import { Context } from '../../components/DarkMore/Context';

const Окомпании = () => {
    const {theme} =useContext(Context)
    return (
       <div className={`br ${theme ? "light" : ""}`}>
         <div className='container'>
                     <div className="korzinka_allsy">
            <div className="korzinka_all_row">
                <NavLink to={'/'}>
                Главная
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
            <div className="korzinka_all_row">
                <NavLink>
                О компании
                </NavLink>
            </div>
             </div>
             <div className="about">
             <div className="about_all">
                  <div className="al_h1">
                     <h1>О компании</h1>
                     </div>
                     <div className="bout_row">
                        <div className="about_als">
                              <h1>170+ </h1>
                              <p>Товаров</p>
                        </div>
                     </div>
                     <div className="bout_row">
                        <div className="about_als">
                              <h1>1000+  </h1>
                              <p>Довольных покупателей</p>
                        </div>
                     </div>
                     <div className="bout_row">
                        <div className="about_als">
                              <h1>170+ </h1>
                              <p>Товаров</p>
                        </div>
                     </div>
                     
                </div>
                <div className="about_all">
                <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют</p>
<p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
<p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
<p> Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
             </div>
            
        </div>
        <Brendlar/>
        <Blog/>
        <Footer/>
       </div>
    );
}

export default Окомпании;
