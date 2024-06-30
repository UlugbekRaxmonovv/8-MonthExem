import React from 'react';
import './Korzinka.scss'
import { NavLink } from 'react-router-dom';
import rasm from '../../assets/img/blog.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Footer from '../../components/Footer/Footer'
const Korzinka = () => {
    return (
     <>
        <div className='container all_Oll'>
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

    </div>


    <div className="korzinka_column">
<div className="korzinka_column_alt">
 <form action="">
   <h1>Оформление</h1>
   <div className="input">
   <div className="input_all">
         <input type="text" placeholder='ФИО' />
      </div>
      <div className="input_all">
         <input type="text" placeholder='телефон' />
      </div>
      <div className="input_all">
         <input type="email" placeholder='Электронная почта' />
      </div>
   </div>
   <div className="input_link">
   <h1>Доставка</h1>
<div className="radio_list">
<div className="radio">
      <input type="radio"/> 
      <span>
      Доставка
      </span>
   </div>
   <div className="radio">
      <input type="radio"/> 
      <span>
      Самовывоз
      </span>
   </div>
</div>
        <div className="input_list">
         <input type="text" placeholder='Адрес доставки' />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Комментарий'>Комментарий</textarea>
   </div>
 </form>
</div>
    </div>

    <div className="kupon">
      <div className="kupon_all">
      <h5>Оплата</h5>
 <div className="kupon_hammasi">
 <div className="kupon_right">
      <div className="kupon_pric">
      <input type="text"  placeholder='Товары.............................................'/>
      </div>
      <div className="kupon_pric">
         <p>12 300₽</p>
      </div>
      </div>
      <div className="kupon_right">
      <div className="kupon_pric">
      <input type="text"  placeholder='Доставка..............................................'/>
      </div>
      <div className="kupon_pric">
         <p>12 300₽</p>
      </div>
      </div>
 </div>
 <div className="radio_list">
<div className="radio">
      <input type="radio"/> 
      <span>
      Доставка
      </span>
   </div>
   <div className="radio">
      <input type="radio"/> 
      <span>
      Самовывоз
      </span>
   </div>
</div>
 <div className="kupon_item">
   <h6>12 800₽</h6>

   <div className="kupon_btn">
      <div className="lupon_btn1">
         <button>Купить</button>
      </div>
      <div className="lupon_btn1">
        <input type="radio" /> <span>Я согласен наобработку моих персональных данных</span>
       </div>
   </div>
 </div>
    
      </div>
    </div>
        
        </div>
          <Footer/>
     </>
    );
}

export default Korzinka;
