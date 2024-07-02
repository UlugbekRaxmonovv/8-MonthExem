import React,{ useState} from 'react';
import { Link} from 'react-router-dom';
import rasm from '../../assets/img/logo.png'
import { RiMenu2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import rasm1 from '../../assets/img/menu.png'
import { IoCartOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import './Navbar.scss'
import { useSelector } from 'react-redux';
import { Navigate,useLocation } from 'react-router-dom';
import Modul from '../../components/Modul/Modul'
import Zvonok from '../Zvonok/Zvonok';

const Navbar = () => {
    const [zvonok, setZvonok] = useState(false);
    let {pathname} = useLocation();
    if(pathname.includes('/login') || pathname.includes('/admin')){
        return <></>;
    }
    const [menu, setMenu] = useState(false);
    const wishlistItems = useSelector((state) => state.wishlist.value);
    const  cartItems  = useSelector(state => state.cart.value);


    return (
        <div>
            <header>
             <div className="container">
             <nav className="nav_all">
                    <ul className={`ul ${menu ? "show" : ""}`}>
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
                            <a href="" className="">Гарантии</a>
                        </li>
                        <li>
                            <Link to={'contact'}>Контакты</Link>
                           
                        </li>
                    
                        <li>
                        <Link to={'blog'}> Блог</Link>
                        </li>
                        <Link to={'catalog'} >
                            <div className="btna">
                                <div className="btn1">
                                <RiMenu2Line />
                                </div>
                                <div className="btn1">
                               <p>Каталог</p>
                                </div>
                            </div>
                          </Link>
                        <div className="ul_list_ab">
                        <p onClick={() => setZvonok(true)}>Заказать звонок</p>
                        {
                                zvonok ? 
                                <Modul maxWidth="800px" width='100%' btn1={setZvonok}>
                                       <Zvonok setZvonok={setZvonok}/>
                                    </Modul>
                                    :
                                    <></>

                            }
                        </div>
                        <div className="ul_list_ab">
                        <h5><Link to={'login'} style={{color: "#454545"}}>Login</Link></h5>
                        </div>
                    </ul>
                    <div className="ul_list">
                          <div className="ul_list_a">
                          <p onClick={() => setZvonok(true)}>Заказать звонок</p>
                            {
                                zvonok ? 
                                <Modul maxWidth="800px" width='100%' padding='0 16px'  btn1={setZvonok}>
                                       <Zvonok setZvonok={setZvonok}/>
                                    </Modul>
                                    :
                                    <></>

                            }
                        </div>
                        <div className="ul_list_a">
                        <h5><Link to={'login'} style={{color: "#454545"}}>Login</Link></h5>
                        </div>
                    </div>
                </nav>  
                <div className="logo">
             
                 {
                    menu? 
                    <VscChromeClose  onClick={() =>setMenu(!menu)} className='menu_list' />
                    : 
                    <TbMenuDeep  onClick={() =>setMenu(!menu)}  className='menu_list' />
                 }
              
                    <div className="logo_img">
                      <Link to={'/'}>  <img src={rasm} alt="" /></Link>
                    </div>
                    <div className="logo_link_all">
                            <Link   to={'wishlist'}>
                             <div className="wishlists">
                                <div className="wishlist_all">
                                <FaRegHeart/>
                                <span className="span">{wishlistItems?.length}</span>
                                </div>
                                <div className="wishlist_all">
                                <p>Избранное</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                        <div className="logo_link_all">
                            <Link>
                             <div className="wishlists">
                                <div className="wishlist_all">
                              <img src={rasm1} alt="" />
                                </div>
                                <div className="wishlist_all">
                                <p>Сравнение</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                        <div className="logo_link_all">
                            <Link   to={'korzinka'}>
                             <div className="wishlists">
                                <div className="wishlist_all">
                                <IoCartOutline />
                                <span className="span">{cartItems?.length}</span>
                                </div>
                                <div className="wishlist_all">
                                <p>Корзина</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                    <div className="logo_link">
                        <div className="logo_link_all">
                        <Link to={'catalog'}>
                            <div className="btn">
                                <div className="btn1">
                                <RiMenu2Line />
                                </div>
                                <div className="btn1">
                               <p>Каталог</p>
                                </div>
                            </div>
                          </Link>
                        </div>
                        <div className="logo_link_all">
                        <div className="navbar_sorch">
                        <input 
                        // value={value}
                        // onFocus={() =>setSearchAll(true)}
                        // onBlur={() => {
                        //   setTimeout(() => setSearchAll(false), 200);
                        // }}
                        // onChange={(e) => setValue(e.target.value)}
                        type="text" placeholder='Поиск по товарам' />
              <IoSearchOutline />
                        {/* {
                            value.trim() &&  searchall ? 
                             <div className="modul_all">
                          <Search data={ data1?.products} />
                            </div>
                            : <></>
                        } */}
                       
                    </div>
                        </div>
                        <div className="logo_link_all">
                            <Link  to={'wishlist'}>
                             <div className="wishlist">
                                <div className="wishlist_all">
                                <FaRegHeart />
                                <span className="span">{wishlistItems?.length}</span>
                                </div>
                                <div className="wishlist_all">
                                <p>Избранное</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                        <div className="logo_link_all">
                            <Link>
                             <div className="wishlist">
                                <div className="wishlist_all">
                              <img src={rasm1} alt="" />
                                </div>
                                <div className="wishlist_all">
                                <p>Сравнение</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                        <div className="logo_link_all">
                            <Link to={'korzinka'}>
                             <div className="wishlist">
                                <div className="wishlist_all">
                                <IoCartOutline />
                                <span className="span">{cartItems?.length}</span>
                                </div>
                                <div className="wishlist_all">
                                <p>Корзина</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                    </div>

                </div>
             </div>
            </header>
        </div>
    );
}

export default Navbar;
