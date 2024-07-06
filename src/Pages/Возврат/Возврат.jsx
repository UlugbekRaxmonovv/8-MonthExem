import React, { useContext } from 'react';
import './Возврат.scss'
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Context } from '../../components/DarkMore/Context';
const Возврат = () => {
    const {theme} =useContext(Context)
    return (
    <div className={`vaz ${theme? "light" : ""}`}>
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
                Возврат
                </NavLink>
            </div>
             </div>
             <div className="vozrat">
                <div className="vozrat_a">
                    <div className="vozrat_row">
                        <h1>Возврат</h1>
                    </div>
                  
                </div>
                <div className="vozrat_a">
                       <h5>Обмен и возврат по желанию покупателя</h5>
                       <h6>Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:</h6>
                       <ul>
                        <li typeof='A' className='li'>Товар имеет первоначальный вид, имеется товарная кондиция;</li>
                        <li className='li'>Товар не имеет следов подключался и не имеет признаков монтажа;</li>
                        <li className='li'>Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;</li>
                        <li className='li'>Есть документ, подтверждающий покупку в нашем интернет-магазине.</li>
                        <li className='li'>Для возврата товара необходимо привезти его к нам в офис.</li>
                        <li className='li'>Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.</li>
                        <li className='li'>*В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера</li>
                       </ul>
           <h4>Обмен и возврат по ошибке продавца</h4>
               <h3>Причины обмена или возврата по ошибке продавца:</h3>

               <ul className="list">
                <li>Неполная комплектация товара</li>
                <li>Брак или дефект товара</li>
                <li>Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/</li>
                <li>Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно</li>
               </ul>
               <h4 className='h4'>Возврат денежных средств</h4>
                  <h6>Возврат денежных средств осуществляется путем перевода  на банковские реквизиты покупателя при наличии заявления от покупателя.</h6>
                    </div>
             </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Возврат;
