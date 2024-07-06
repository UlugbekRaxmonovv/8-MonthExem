import React, { useContext, useState } from 'react';
import './Korzinka.scss'
import { NavLink } from 'react-router-dom';
import rasm from '../../assets/img/blog.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Footer from '../../components/Footer/Footer'
import { useSelector,useDispatch } from 'react-redux';
import { RiDeleteBinFill } from "react-icons/ri";
import ProductTop from '../../components/ProductTop/index'
import Empty from '../../components/Empty/Empty';
import { useFormInputValue } from '../../components/Hook/useFormInputValur';
import { decrementCart,incremented,removeFromCart,deleteAllCart } from '../../components/context/slices/cartSlice';
const Bot_Token = "6409705996:AAH7HRsbbymTuGEK2h8joN7nQX0Eypu7MRg"
const Chat_ID = "-1002098227822"
const User_ID = "5125371890"
import { Context } from '../../components/DarkMore/Context';
import { PatternFormat } from 'react-number-format';

const intialState = {
   name: '',
   email: '',
   phone: "",
   comment: '',
   adrest:"",
   radio:"",

}
const Korzinka = () => {
   const {theme} =useContext(Context)
   const [selectedValue, setSelectedValue] = useState('');
   const [adrest,setAdrest] = useState('')
   const [kupon,setKupon] = useState()
    const [name,setName] = useState('')
    const dispatch = useDispatch();
    const  cartItems  = useSelector(state => state.cart.value);
    let javob1 =cartItems?.reduce((a,b) => a + (b.price  * b.quantity),0)
    let javob = Math.floor(javob1)
  
    let links =cartItems?.map((item) =>(
      <div className="korzinka_row" key={item.id}>
      <div className="korzinka_row_link">
         <div className="korzinka_all_List">
         <div className="photo">
             <div className="img">

                <img src={item.url[0]} alt="" />
             </div>
              </div>
              <div className="photoa">
                <div className="pr">
                <div className="pr1">
                     <p>{item.title}</p>
                 </div>
                 <div className="pr1">
                    <h4>${item.price}</h4>
                 </div>
                </div>
              </div>
         </div>
      </div>
      <div className="korzinka_row_link">
         <p>{item.createdAt}</p>
      </div>
      <div className="korzinka_row_link">
         <p>{item.desc}</p>
      </div>
      <div className="korzinka_row_link">
         <div className="ink">
         <div className="ink_all">
                 <button disabled={item.quantity <= 1}  onClick={()=>dispatch(decrementCart(item))}>-</button>
             </div>
             <div className="ink_allr">
                <span>{item.quantity}</span>
             </div>
             <div className="ink_all">
                 <button onClick={() =>dispatch(incremented(item))}>+</button>
             </div>
             <RiDeleteBinLine className='delet'   onClick={() => dispatch(removeFromCart(item))} />
         </div>
       
      </div>
    </div>
    )) 
    const {setState,state,handleChange}= useFormInputValue(intialState)
    const handelSubmit = (e) => {
      e.preventDefault()
      let text = "Buyurtma %0A%0A"
      text +=`Ismi:${state.name}%0A`
      text +=`Phone:${state.phone}%0A`
      text +=`Email:${state.email}%0A`
      text +=`Text:${state.comment}%0A`
      text +=`LastName:${state.adrest}%0A%0A`
      text +=`Olib ketish;: ${adrest}%0A`
      text +=`Manzil:${selectedValue}%0A`
      cartItems?.forEach((item)=>{
         text +=`Nomi: ${item.title}%0A`
         text +=`Miqdori: ${item.quantity}%0A`
         text +=`Narxi: ${item.price}%0A`
    })
      
      let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_ID}&text=${text}`
  
      let api = new XMLHttpRequest()
      api.open("GET", url, true)
      api.send()
      dispatch(deleteAllCart())
      setState(intialState)
  
  }



    const HandleKupon = () =>{
      setKupon( name == "iPhone15" ? javob * 0.2 : 0 ) 
    }
    return (
     <>
 <ProductTop/>
     {
      cartItems.length ? 
    <div className={`kar ${theme ? "light" : ""}`}>
        <div className='container all_Oll'>
     
     <div className="korzinka_all">
    <div className="korzinka_all_row">
        <NavLink to={'/'}>
        Главная
        </NavLink>
    </div>
    <div className="korzinka_all_row">
      <MdKeyboardArrowRight/>
    </div>
    <div className="korzinka_all_row">
        <NavLink to={'/catalog'} >
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
        <NavLink to={'/'}> 
        Главная
        </NavLink>
    </div>
    <div className="korzinka_all_row">
      <MdKeyboardArrowRight/>
    </div>
    <div className="korzinka_all_row">
        <NavLink to={'catalog'}>
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
   <h1>Корзина  <span>{cartItems?.length}</span></h1>
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
 {links}

</div>


<form onSubmit={handelSubmit}> 
<div className="korzinka_column">
<div className="korzinka_column_alt">
<form action=""  >
<h1>Оформление</h1>
<div className="input">
<div className="input_all">
 <input type="text" placeholder='ФИО' required name='name' value={state.name} onChange={handleChange} />
</div>
<div className="input_all">
<PatternFormat format="+998 (##) ### ####" required allowEmptyFormatting mask="_"  placeholder='телефон'   name='phone' value={state.phone} onChange={handleChange}/>
</div>
<div className="input_all">
 <input type="email" required placeholder='Электронная почта'  name='email' value={state.email} onChange={handleChange} />
</div>
</div>
<div className="input_link">
<h1>Доставка</h1>
<div className="radio_list">
<div className="radio">
<input type="radio" 
value="Доставка" 
required
     checked={selectedValue === 'Доставка'} 
     onChange={(e) => setSelectedValue(e.target.value)} /> 
<span>
Доставка
</span>
</div>
<div className="radio">
<input type="radio"
     required
     value="Самовывоз" 
     checked={adrest === 'Самовывоз'} 
     onChange={(e) => setAdrest(e.target.value)}
/> 
<span>
Самовывоз
</span>
</div>
</div>
<div className="input_list">
 <input type="text" placeholder='Адрес доставки'  required name='adrest' value={state.adrest} onChange={handleChange} />
</div>
<textarea  name="comment" required  value={state.comment} onChange={handleChange} id="" cols="30" rows="10" placeholder='Комментарий'>Комментарий</textarea>
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
<input type="text"  value={name} required  onChange={(e) => setName(e.target.value)} placeholder='iPhone15'/>
</div>
<div className="kupon_pric">
 <p>{(javob + kupon)}0</p>
</div>
</div>
<div className="kupon_right">
<div className="kupon_pric">
<input type="text"  placeholder='Доставка..............................................'/>
</div>
<div className="kupon_pric">
 <p>${kupon}</p>
</div>
</div>
</div>
<div className="radio_list">
<div className="radio">
<input type="radio" /> 
<span>
Доставка
</span>
</div>
<div className="radio">
<input type="radio"  /> 
<span>
Самовывоз
</span>
</div>
</div>
<div className="kupon_item">
<h6>${javob}</h6>

<div className="kupon_btn">
<div className="lupon_btn1">
 <button onClick={HandleKupon}>Купить</button>
</div>
<div className="lupon_btn1">
<input type="radio" /> <span>Я согласен наобработку моих персональных данных</span>
</div>
</div>
</div>

</div>
</div>

</form>

</div>
    </div>
     :
   <Empty/>
     }
      
          <Footer/>
     </>
    );
}

export default Korzinka;
