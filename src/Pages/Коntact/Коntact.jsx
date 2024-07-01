import React from 'react';
import './Kontact.scss'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'

const Коntact = () => {
    return (
       <>
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
                Контакты
                </NavLink>
            </div>
             </div>
             <div className="h_teg_h1">
             <div className="h_h1">
              <h6>Контакты</h6>
              </div>
              <div className="h_h1">
              <p>8 (800) 890-46-56</p>
              <h5>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину
Телефоны:</h5>
              </div>
             </div>
        </div>
        <div className="map">
        <div className="map_all">
        <iframe
       
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.817362823962!2d69.22519327636788!3d41.20395520735261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61002c970f39%3A0x9b6f92597f056858!2sSog&#39;lom%20Hayot!5e0!3m2!1suz!2s!4v1714398990201!5m2!1suz!2s"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
         <div className="container">
          <div className="map_all_row">
          <div className="map_all_list">
                  <h1>Адрес магазина</h1>
                  <p>г. Москва, Дмитровское шоссе д.100с2</p>
                 </div>
                 <div className="map_all_list">
                  <h1>Почта</h1>
                  <p>NORNLIGHT@mail.ru</p>
                 </div>
                 <div className="map_all_list">
                  <h1>Телефон</h1>
                  <p>8 (800) 890-46-56</p>
                 </div>
                 <div className="map_all_list">
                    <button>Оставить заявку</button>
                 </div>
          </div>
         </div>
         <Footer/>
       </>
    );
}

export default Коntact;
