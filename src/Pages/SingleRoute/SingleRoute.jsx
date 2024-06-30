import React,{useState} from 'react';
import './SingleRoute.scss'
import rasm from '../../assets/img/sing.png'
import { MdOutlineChevronRight } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';
import { useGetProductByIdQuery } from '../../components/context/api/productApi';
import LoadingSingle from '../../components/LoadingSingle/LoadingSingle';
import ProductTop from '../../components/ProductTop/index'
const SingleRoute = () => {
    const [count,setCount] = useState(1)
    const { id } = useParams();
    const { data,isLoading } = useGetProductByIdQuery(id);
    const onclick = () =>{
        setCount(count + 1)
      }
      const go = () =>{
        setCount(count - 1)
      }
  
    return (
      <>
      <ProductTop/>
        <div className='container'>
         {
            isLoading ? <LoadingSingle/>
            :
            <></>
         }
             <div className="singleRoute">
             <div className="glavnaya">
                   <p>Главная</p> 
                </div>
                <div className="glavnaya">
                <MdOutlineChevronRight />
                </div>
                
             </div>
             <div className="singleRoute_row">
                      <div className="singleRoute_row_img">
                        <div className="img_row">  
                            <img src={data?.url} alt="allll" />
                        </div>
                     <div className="img_link">
                     <div className="img">
                            <img src={data?.url} alt="" />
                        </div>
                        <div className="img">
                            <img src={data?.url} alt="" />
                        </div>
                        <div className="img">
                            <img src={data?.url} alt="" />
                        </div>
                        <div className="img">
                            <img src={data?.url} alt="" />
                        </div>
                     </div>
                      </div>
                      <div className="singleRoute_row_img">
                        <div className="singleRoute_row_teg">
                            <h1>Встраиваемый светильник Novotech</h1>
                            <p>Scott</p>
                            <div className="sorch">
                            <div className="sorch_all">
                                <p>Артикул : 7655-188</p>
                              </div>
                              <div className="sorch_all">
                                  <img src={rasm} alt="" />
                              </div>
                            </div>
                            <span>Артикул : 7655-188</span>
                            <h1>{data?.price * count} <span className="s">522 000 ₽</span></h1> 
                            <h5>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</h5>
                           <div className="dec">
                           <div className="inc">
                              <div className="in_al">
                                <button  disabled={count <= 0} onClick={go}>-</button>
                              </div>
                              <div className="in_al">
                               <span style={{color:"black"}}>{count}</span>
                              </div>
                              <div className="in_al">
                                <button onClick={onclick}>+</button>
                              </div>
                            </div>
                              <div className="inc">
                                   <button className='btn_inc'>В корзину</button>
                              </div>
                              <div className="wishlist">
                                 <FaRegHeart />
                                 </div>
                           </div>
                        </div>
                      </div>
                </div>
                <div className="haraktrski">
                    <h1>Характеристика</h1>
                    <ul className="Ul_link">
                        <li>
                             <div className="li_link">
                                <p>Цвет</p>
                             </div>
                             <p>Жёлтый</p>
                        </li>
                        <li className="list">
                        <div className="li_link">
                                <p>Год</p>
                             </div>
                             <p>2016</p>
                        </li>
                        <li>
                             <div className="li_link">
                                <p>Диаметр колеса</p>
                             </div>
                             <p>27.5</p>
                        </li>
                        <li className="list">
                        <div className="li_link">
                                <p>Материал рамы</p>
                             </div>
                             <p>Карбон</p>
                        </li>
                        <li>
                             <div className="li_link">
                                <p>Размер</p>
                             </div>
                             <p>L</p>
                        </li>
                        <li className="list">
                        <div className="li_link">
                                <p>Страна</p>
                             </div>
                             <p>Швейцария</p>
                        </li>
                        <li>
                             <div className="li_link">
                                <p>Производитель</p>
                             </div>
                             <p>Scott</p>
                        </li>
                        <li className="list">
                        <div className="li_link">
                                <p>Покрышки</p>
                             </div>
                             <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy  <br />/  PaceStar compound</p>
                        </li>

                        <li>
                             <div className="li_link">
                                <p>Рама</p>
                             </div>
                             <p>Scale Carbon / HMX-технология / технология IMP / Коническая <br /> рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                        </li>
                        <li className="list">
                        <div className="li_link">
                                <p>Подседельный Штырь</p>
                             </div>
                             <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy  <br />/  PaceStar compound</p>
                        </li>
                        
                        <li>
                             <div className="li_link">
                                <p>Седло</p>
                             </div>
                             <p>Ritchey WCS Streem V3 Titanium rails</p>
                        </li>
                        <li className="list">
                        <div className="li_link">
                                <p>Подседельный Штырь</p>
                             </div>
                             <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle <br /> / коническая рулевая труба / Удалённая блокировка, регулировка <br /> отскока / ход 100mm</p>
                        </li>

                    </ul>
                </div>
        </div>
                <Footer />
      </>
    );
}

export default SingleRoute;
