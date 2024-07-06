import React, { useContext } from 'react';
import './Garantiya.scss'
import { Context } from '../../components/DarkMore/Context';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Footer from '../../components/Footer/Footer';

const Garantiya = () => {
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
                    <h1>Гарантии</h1>
                </div>
              
            </div>
            <div className="vozrat_a">
                   <h5>Обмен и возврат по желанию покупателя</h5>
                   <h6>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.</h6>
                   <h6>Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:</h6>
                   <ul>
                    <li typeof='A' className='li'>Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.</li>
                    <li className='li'>Привезти товар к нам на склад или отправить его транспортной компанией.</li>
                    <li className='li'>После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.</li>
                    <li className='li'>Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.</li>
                    <li className='li'>Для возврата товара необходимо привезти его к нам в офис.</li>
                    <li className='li'>Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.</li>
                   </ul>
                </div>
         </div>
    </div>
    <Footer/>
</div>
    );
}

export default Garantiya;
