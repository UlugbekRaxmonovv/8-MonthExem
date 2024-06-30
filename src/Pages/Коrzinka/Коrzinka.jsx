import React from 'react';
import './Korzinka.scss'
import { NavLink } from 'react-router-dom';
import rasm from '../../assets/img/blog.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
const Korzinka = () => {
    return (
        <div className='container'>
             <div className="korzinka_all">
            <div className="korzinka_all_row">
                <NavLink>
                Главная
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
            <div className="korzinka_all_row">
                <NavLink>
                Каталог
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
            <div className="korzinka_all_row">
                <NavLink>
                Корзина
                </NavLink>
            </div>
             </div>
             <div className="korzinka_alls">
            <div className="korzinka_all_row">
                <NavLink>
                Главная
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
            <div className="korzinka_all_row">
                <NavLink>
                Каталог
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
            <div className="korzinka_all_row">
                <NavLink>
                Люстры
                </NavLink>
            </div>
            <div className="korzinka_all_row">
              <MdKeyboardArrowRight/>
            </div>
             </div>
           <div className="al_h1">
           <h1>Корзина  <span>1</span></h1>
           </div>


    <div className="korzinka_hammasi">
    <div className="korzinka_row">
             <div className="korzinka_row_link">
                <div className="korzinka_all_List">
                <div className="photo">
                        <h5>Фото</h5>
                     </div>
                     <div className="photo">
                        <p>Товары</p>
                     </div>
                </div>
             </div>
             <div className="korzinka_row_link">
                <h5>Описание</h5>
             </div>
             <div className="korzinka_row_link">
                <h5>Артикул  </h5>
             </div>
             <div className="korzinka_row_link">
                <h5>Количество</h5>
             </div>
           </div>
           <div className="korzinka_row">
             <div className="korzinka_row_link">
                <div className="korzinka_all_List">
                <div className="photo">
                    <div className="img">

                       <img src={rasm} alt="" />
                    </div>
                     </div>
                     <div className="photoa">
                       <div className="pr">
                       <div className="pr1">
                            <p>Встраиваемый светильник Novotech</p>
                        </div>
                        <div className="pr1">
                           <h4>6 399₽</h4>
                        </div>
                       </div>
                     </div>
                </div>
             </div>
             <div className="korzinka_row_link">
                <p>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
             </div>
             <div className="korzinka_row_link">
                <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS  </p>
             </div>
             <div className="korzinka_row_link">
                <div className="ink">
                <div className="ink_all">
                        <button>-</button>
                    </div>
                    <div className="ink_allr">
                       <span>1</span>
                    </div>
                    <div className="ink_all">
                        <button>+</button>
                    </div>
                    <RiDeleteBinLine className='delet' />
                </div>
              
             </div>
           </div>
            <div className="korzinka_row">
             <div className="korzinka_row_link">
                <div className="korzinka_all_List">
                <div className="photo">
                    <div className="img">

                       <img src={rasm} alt="" />
                    </div>
                     </div>
                     <div className="photoa">
                       <div className="pr">
                       <div className="pr1">
                            <p>Встраиваемый светильник Novotech</p>
                        </div>
                        <div className="pr1">
                           <h4>6 399₽</h4>
                        </div>
                       </div>
                     </div>
                </div>
             </div>
             <div className="korzinka_row_link">
                <p>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
             </div>
             <div className="korzinka_row_link">
                <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS  </p>
             </div>
             <div className="korzinka_row_link">
                <div className="ink">
                <div className="ink_all">
                        <button>-</button>
                    </div>
                    <div className="ink_allr">
                       <span>1</span>
                    </div>
                    <div className="ink_all">
                        <button>+</button>
                    </div>
                    <RiDeleteBinLine className='delet' />
                </div>
              
             </div>
           </div>
    </div>
          
        </div>
    );
}

export default Korzinka;
