import './Footer.scss'
import rasm from '../../assets/img/logo.png'
import rasm1 from '../../assets/img/pami.png'
import rasm2 from '../../assets/img/vk.png'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footir_all container">
                     <div className="footir_all_row">
                        <ul>
                            <img src={rasm} alt="" />
                             <div className="p">
                                <p>8 (800) 890-46-56</p>
                             </div>
                             <img  className="img" src={rasm1} alt="" />
                             <h5>Политика конфидециальности</h5>
                             <h5>Пользовательское соглашение</h5>
                           
                        </ul>
                        <div className="icon_alli_list">
                             <div className="icon_all_row">
                                    <img src={rasm2} alt="" />
                                </div>
                                <div className="icon_all_row">
                                    <img src={rasm2} alt="" />
                                </div>
                                <div className="icon_all_row">
                                    <img src={rasm2} alt="" />
                                </div>
                             </div>
                     </div>
                     <div className="footir_all_row">
                        <ul>
                            <h1>Покупателям</h1>
                            <li>
                           <a href="" className="">О компании</a>
                            </li>
                            <li>
                           <a href="" className="">Доставка и оплата</a>
                            </li>
                            <li>
                           <a href="" className="">Возврат</a>
                            </li>
                            <li>
                           <a href="" className="">Контакты</a>
                            </li>
                            <li>
                           <a href="" className="">Гарантии</a>
                            </li>
                            <li>
                           <a href="" className="">Блог</a>
                            </li>

                        </ul>
                     </div>
                     <div className="footir_all_row">
                        <ul>
                            <h1>Товары</h1>
                            <li>
                           <a href="" className="">Люстры</a>
                            </li>
                            <li>
                           <a href="" className="">Светильники</a>
                            </li>
                            <li>
                           <a href="" className="">Бра</a>
                            </li>
                            <li>
                           <a href="" className="">Торшеры</a>
                            </li>
                            <li>
                           <a href="" className="">Комплектуюшие</a>
                            </li>
                            <li>
                           <a href="" className="">Настольные лампы</a>
                            </li>

                        </ul>
                     </div>
                     <div className="footir_all_row">
                        <ul>
                            <h1 style={{opacity:'0'}}>vfr</h1>
                            <li>
                           <a href="" className="">Споты</a>
                            </li>
                            <li>
                           <a href="" className="">Трековые светильники</a>
                            </li>
                            <li>
                           <a href="" className="">Уличные светильники</a>
                            </li>
                            <li>
                           <a href="" className="">Технические светильники</a>
                            </li>
                            <li>
                           <a href="" className="">Светодиодные ленты</a>
                            </li>
        
                        </ul>
                     </div>
                </div>
            </footer>
            
        </div>
    );
}

export default Footer;
