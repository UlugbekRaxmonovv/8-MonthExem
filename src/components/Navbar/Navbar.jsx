import React,{ useEffect, useState} from 'react';
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
import {  useGetProductsQuery} from '../../components/context/api/productApi'
import Search from '../Search/Search';
import {useTranslation} from "react-i18next"
import '../../i18n'
import flagEN from '../../assets/img/bay2.jpg';
import flagUZ from '../../assets/img/bay.jpg';
import flagRU from '../../assets/img/bay1.jpg';


const Navbar = () => {
    const [zvonok, setZvonok] = useState(false);
    const [value, setValue] = useState("");
    let {t,i18n} =  useTranslation() 
    const [lange,setLange] =useState( localStorage.getItem("i18nextLng")  || 'en')
    console.log(lange);
   
 
    useEffect(() =>{
       i18n.changeLanguage(lange)
    },[lange])

    const handleLanguageChange = (lang) => {
        setLange(lang);
        localStorage.setItem("i18nextLng", lang);
        i18n.changeLanguage(lang);
      };
    const [menu, setMenu] = useState(false);
    const [search, setSearchAll] = useState(false);
    const wishlistItems = useSelector((state) => state.wishlist.value);
    const  cartItems  = useSelector(state => state.cart.value);
    const [fix, setFix] = useState(false);
    const {data} = useGetProductsQuery({q:""});
    let {pathname} = useLocation();
    if(pathname.includes('/login') || pathname.includes('/admin')){
        return <></>;
    }
  const filteredList = data?.filter(prop => prop.title.toLowerCase().includes(value.toLowerCase()));
  



 
  function setFixd() {
      if (window.scrollY >= 1) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener('scroll', setFixd);

     


    return (

            <header>
             <div className="container">
             <nav className={`nav_all ${fix ? "fix" : ""}`}>
                    <ul className={`ul ${menu ? "show" : ""}`}>
                        <li>
                            <a href="" className="">{t("navbar.About company")}</a>
                        </li>
                        <li>
                            <a href="" className="">{t("navbar.Shipping and payment")}</a>
                        </li>
                        <li>
                            <a href="" className="">{t("navbar.Return")}</a>
                        </li>
                        <li>
                            <a href="" className="">{t("navbar.Guarantees")}</a>
                        </li>
                        <li>
                            <Link to={'contact'}>{t("navbar.Contacts")}</Link>
                           
                        </li>
                    
                        <li>
                        <Link to={'blog'}> {t("navbar.Blog")}</Link>
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
                        <h5> <Link to={'login'} style={{color: "#454545"}}>Login</Link></h5>
                        </div>
                    </ul>
                    <div className="ul_list">
                          <div className="ul_list_a">
                          <p onClick={() => setZvonok(true)}>{t("navbar.Zakazat bell")}</p>
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
                        <li>
              <div className="custom-select">
                <div className="custom-select-trigger" >
                  <img width={10} height={10} src={lange === 'en' ? flagEN : lange === 'uz' ? flagUZ : flagRU} alt="flag" />
                  <span>{lange.toUpperCase()}</span>
                </div>
                <div className="custom-options">
                  <div className="custom-option" onClick={() => handleLanguageChange('en')}>
                    <img width={10} height={10} src={flagEN} alt="English" />
                  </div>
                  <div className="custom-option" onClick={() => handleLanguageChange('uz')}>
                    <img  width={10} height={10}src={flagUZ} alt="Uzbek" />
                  </div>
                  <div className="custom-option" onClick={() => handleLanguageChange('ru')}>
                    <img width={10} height={10} src={flagRU} alt="Russian" />
                  </div>
                </div>
              </div>
            </li>
                    </div>
                </nav>  
                <div className={`logo ${fix ? "fix" : ""}`}>
             
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
                                <p>{t("Favorites")}</p>
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
                                <p>{t("Comparison")}</p>
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
                                <p>{t("Cart")}</p>
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
                        value={value}
                        onFocus={() =>setSearchAll(true)}
                        onBlur={() => {
                          setTimeout(() => setSearchAll(false), 200);
                        }}
                        onChange={(e) => setValue(e.target.value)}
                        type="text" placeholder={t("Search")} />
              <IoSearchOutline />
             
                           {
                            value.trim() &&  search ? 
                             <div className="modul_all_row">
                                 <h1>Популярное</h1> <br />
                             {filteredList?.map((item) => (
                                <Search item={item}/>
                                        ))}
                            </div>
                            : <></>
                        }
                       
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
                                <p>{t("Favorites")}</p>
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
                                <p> {t("Comparison")}</p>
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
                                <p>{t("Cart")}</p>
                                </div>
                             </div>
                            </Link>
                        </div>
                    </div>

                </div>
             </div>
            </header>
    
    );
}

export default Navbar;
