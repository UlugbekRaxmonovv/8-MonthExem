import React,{ useEffect, useState,useContext} from 'react';
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
import { MdDarkMode } from "react-icons/md";
import {  useGetProductsQuery} from '../../components/context/api/productApi'
import Search from '../Search/Search';
import {useTranslation} from "react-i18next"
import { IoSunnySharp,IoSunnyOutline } from "react-icons/io5";
import '../../i18n'
import flagEN from '../../assets/img/bay2.jpg';
import flagUZ from '../../assets/img/bay.jpg';
import flagRU from '../../assets/img/bay1.jpg';
import { Context } from '../DarkMore/Context';
import rasm2 from '../../assets/img/Group.svg'

const Navbar = () => {
  const {theme, setTheme} =useContext(Context)
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

            <header className={`dark ${theme ? "light" : ""}`}>
             <div className="container">
             <nav className={`nav_all ${fix ? "fix" : ""}` }>
                    <ul className={`ul ${menu ? "show" : ""}`}>
                        <li>
                           <Link to={'companies'}> {t("navbar.About company")}</Link>
                        </li>
                        <li>
                            <a href="" className="">{t("navbar.Shipping and payment")}</a>
                        </li>
                        <li>
                            <Link to={'return'}>{t("navbar.Return")}</Link>
                        </li>
                        <li>
                          <Link to={'garranty'}>{t("navbar.Guarantees")}</Link>
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
                        <h5><Link to={'login'}>Login</Link></h5>
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
                    <img  width={10} height={10} src={flagUZ} alt="Uzbek" />
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
                    <Link to={'/'}> <svg width="207" height="35" viewBox="0 0 207 35" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7.85714C0 5.7269 1.75512 4 3.92017 4H23.521C25.6861 4 27.4412 5.7269 27.4412 7.85714V27.1429C27.4412 29.2731 25.6861 31 23.521 31H3.92017C1.75512 31 0 29.2731 0 27.1429V7.85714Z"/>
<path d="M13.7206 13.9864C13.4972 13.9864 13.283 13.8991 13.1251 13.7437C12.9671 13.5883 12.8784 13.3775 12.8784 13.1577V9.84297C12.8784 9.62319 12.9671 9.41241 13.1251 9.257C13.283 9.10159 13.4972 9.01429 13.7206 9.01429C13.944 9.01429 14.1582 9.10159 14.3161 9.257C14.4741 9.41241 14.5628 9.62319 14.5628 9.84297V13.1577C14.5628 13.3775 14.4741 13.5883 14.3161 13.7437C14.1582 13.8991 13.944 13.9864 13.7206 13.9864ZM13.7206 25.9857C13.4972 25.9857 13.283 25.8984 13.1251 25.743C12.9671 25.5876 12.8784 25.3768 12.8784 25.157V21.8423C12.8784 21.6225 12.9671 21.4117 13.1251 21.2563C13.283 21.1009 13.4972 21.0136 13.7206 21.0136C13.944 21.0136 14.1582 21.1009 14.3161 21.2563C14.4741 21.4117 14.5628 21.6225 14.5628 21.8423V25.157C14.5628 25.3768 14.4741 25.5876 14.3161 25.743C14.1582 25.8984 13.944 25.9857 13.7206 25.9857ZM9.30734 18.3287H5.93844C5.71507 18.3287 5.50085 18.2414 5.3429 18.086C5.18496 17.9306 5.09622 17.7198 5.09622 17.5C5.09622 17.2802 5.18496 17.0694 5.3429 16.914C5.50085 16.7586 5.71507 16.6713 5.93844 16.6713H9.30734C9.53071 16.6713 9.74494 16.7586 9.90288 16.914C10.0608 17.0694 10.1496 17.2802 10.1496 17.5C10.1496 17.7198 10.0608 17.9306 9.90288 18.086C9.74494 18.2414 9.53071 18.3287 9.30734 18.3287ZM21.5027 18.3287H18.1338C17.9105 18.3287 17.6963 18.2414 17.5383 18.086C17.3804 17.9306 17.2916 17.7198 17.2916 17.5C17.2916 17.2802 17.3804 17.0694 17.5383 16.914C17.6963 16.7586 17.9105 16.6713 18.1338 16.6713H21.5027C21.7261 16.6713 21.9403 16.7586 22.0983 16.914C22.2562 17.0694 22.345 17.2802 22.345 17.5C22.345 17.7198 22.2562 17.9306 22.0983 18.086C21.9403 18.2414 21.7261 18.3287 21.5027 18.3287ZM16.8412 15.2582C16.6747 15.2579 16.5121 15.2091 16.3738 15.1179C16.2356 15.0268 16.1279 14.8973 16.0643 14.7459C16.0007 14.5946 15.9842 14.4281 16.0168 14.2674C16.0493 14.1068 16.1295 13.9593 16.2473 13.8435L18.6277 11.5003C18.705 11.4197 18.798 11.3551 18.9011 11.3104C19.0043 11.2657 19.1155 11.2418 19.2281 11.2402C19.3408 11.2386 19.4527 11.2592 19.5571 11.3009C19.6615 11.3425 19.7564 11.4044 19.8361 11.4828C19.9158 11.5612 19.9787 11.6546 20.021 11.7573C20.0634 11.8601 20.0843 11.9701 20.0827 12.081C20.081 12.1919 20.0568 12.3013 20.0114 12.4027C19.9659 12.5042 19.9003 12.5957 19.8183 12.6718L17.4362 15.0156C17.3581 15.0926 17.2653 15.1536 17.1633 15.1953C17.0612 15.2369 16.9517 15.2583 16.8412 15.2582ZM8.21784 23.743C8.0513 23.7429 7.88853 23.6942 7.7501 23.6031C7.61167 23.512 7.5038 23.3825 7.44012 23.2311C7.37645 23.0797 7.35983 22.9131 7.39236 22.7524C7.42489 22.5917 7.50511 22.4441 7.62289 22.3282L10.0044 19.986C10.0826 19.9091 10.1754 19.848 10.2776 19.8064C10.3798 19.7647 10.4894 19.7433 10.6 19.7433C10.7106 19.7433 10.8201 19.7647 10.9223 19.8064C11.0245 19.848 11.1174 19.9091 11.1956 19.986C11.2738 20.063 11.3359 20.1544 11.3782 20.2549C11.4205 20.3555 11.4423 20.4633 11.4423 20.5721C11.4423 20.6809 11.4205 20.7887 11.3782 20.8893C11.3359 20.9898 11.2738 21.0812 11.1956 21.1581L8.81346 23.4997C8.73536 23.5768 8.64254 23.638 8.54032 23.6798C8.43811 23.7215 8.32851 23.743 8.21784 23.743ZM10.6 15.2582C10.4894 15.2584 10.3798 15.237 10.2776 15.1954C10.1754 15.1538 10.0825 15.0927 10.0044 15.0156L7.62289 12.6718C7.5409 12.5957 7.47525 12.5042 7.42983 12.4027C7.38442 12.3013 7.36016 12.1919 7.3585 12.081C7.35684 11.9701 7.37781 11.8601 7.42017 11.7573C7.46253 11.6546 7.52541 11.5612 7.60509 11.4828C7.68478 11.4044 7.77964 11.3425 7.88407 11.3009C7.9885 11.2592 8.10036 11.2386 8.21304 11.2402C8.32572 11.2418 8.43692 11.2657 8.54005 11.3104C8.64319 11.3551 8.73616 11.4197 8.81346 11.5003L11.1956 13.8442C11.3134 13.9601 11.3937 14.1077 11.4262 14.2685C11.4587 14.4293 11.442 14.5959 11.3782 14.7474C11.3145 14.8988 11.2065 15.0282 11.068 15.1193C10.9295 15.2104 10.7666 15.2583 10.6 15.2582ZM19.2233 23.743C19.1127 23.743 19.0031 23.7215 18.9009 23.6798C18.7987 23.638 18.7058 23.5768 18.6277 23.4997L16.2473 21.1565C16.1025 20.9988 16.0248 20.7924 16.0302 20.5799C16.0357 20.3675 16.1239 20.1652 16.2767 20.015C16.4294 19.8647 16.6349 19.7779 16.8509 19.7725C17.0668 19.7671 17.2766 19.8436 17.4368 19.986L19.8183 22.3282C19.9361 22.4441 20.0164 22.5918 20.0489 22.7526C20.0814 22.9133 20.0647 23.08 20.0009 23.2314C19.9372 23.3829 19.8292 23.5123 19.6907 23.6034C19.5521 23.6944 19.3899 23.743 19.2233 23.743Z" className='oy'/>
<path d="M56.2784 6.90909V28H53.8068L42.3139 11.4403H42.108V28H39.554V6.90909H42.0256L53.5597 23.5099H53.7656V6.90909H56.2784ZM79.1844 17.4545C79.1844 19.679 78.7828 21.6013 77.9795 23.2216C77.1762 24.8419 76.0743 26.0914 74.6737 26.9702C73.2732 27.849 71.6735 28.2884 69.8747 28.2884C68.076 28.2884 66.4763 27.849 65.0757 26.9702C63.6752 26.0914 62.5732 24.8419 61.77 23.2216C60.9667 21.6013 60.5651 19.679 60.5651 17.4545C60.5651 15.2301 60.9667 13.3078 61.77 11.6875C62.5732 10.0672 63.6752 8.81771 65.0757 7.93892C66.4763 7.06013 68.076 6.62074 69.8747 6.62074C71.6735 6.62074 73.2732 7.06013 74.6737 7.93892C76.0743 8.81771 77.1762 10.0672 77.9795 11.6875C78.7828 13.3078 79.1844 15.2301 79.1844 17.4545ZM76.7128 17.4545C76.7128 15.6283 76.4073 14.087 75.7963 12.8306C75.1921 11.5742 74.3717 10.6233 73.335 9.97798C72.3051 9.33262 71.1517 9.00994 69.8747 9.00994C68.5977 9.00994 67.4409 9.33262 66.4042 9.97798C65.3744 10.6233 64.5539 11.5742 63.9429 12.8306C63.3387 14.087 63.0367 15.6283 63.0367 17.4545C63.0367 19.2808 63.3387 20.8221 63.9429 22.0785C64.5539 23.3349 65.3744 24.2857 66.4042 24.9311C67.4409 25.5765 68.5977 25.8991 69.8747 25.8991C71.1517 25.8991 72.3051 25.5765 73.335 24.9311C74.3717 24.2857 75.1921 23.3349 75.7963 22.0785C76.4073 20.8221 76.7128 19.2808 76.7128 17.4545ZM83.4788 28V6.90909H90.6052C92.2529 6.90909 93.6054 7.19058 94.6627 7.75355C95.72 8.30966 96.5027 9.07516 97.0107 10.0501C97.5188 11.025 97.7728 12.1338 97.7728 13.3764C97.7728 14.6191 97.5188 15.721 97.0107 16.6822C96.5027 17.6433 95.7235 18.3986 94.673 18.9478C93.6226 19.4902 92.2804 19.7614 90.6464 19.7614H84.8794V17.4545H90.564C91.69 17.4545 92.5962 17.2898 93.2828 16.9602C93.9762 16.6307 94.4774 16.1638 94.7863 15.5597C95.1021 14.9486 95.26 14.2209 95.26 13.3764C95.26 12.532 95.1021 11.7939 94.7863 11.1623C94.4705 10.5307 93.9659 10.0432 93.2725 9.69993C92.579 9.34979 91.6625 9.17472 90.5228 9.17472H86.0328V28H83.4788ZM93.4063 18.5256L98.5967 28H95.6308L90.5228 18.5256H93.4063ZM118.753 6.90909V28H116.281L104.789 11.4403H104.583V28H102.029V6.90909H104.5L116.034 23.5099H116.24V6.90909H118.753ZM123.864 28V6.90909H126.418V25.7344H136.222V28H123.864ZM142.73 6.90909V28H140.176V6.90909H142.73ZM162.268 13.5C162.042 12.8066 161.743 12.1853 161.373 11.636C161.009 11.0799 160.573 10.6062 160.065 10.2148C159.563 9.82351 158.994 9.52486 158.355 9.31889C157.717 9.11293 157.016 9.00994 156.254 9.00994C155.005 9.00994 153.868 9.33262 152.846 9.97798C151.823 10.6233 151.009 11.5742 150.405 12.8306C149.801 14.087 149.499 15.6283 149.499 17.4545C149.499 19.2808 149.804 20.8221 150.415 22.0785C151.026 23.3349 151.853 24.2857 152.897 24.9311C153.941 25.5765 155.115 25.8991 156.419 25.8991C157.627 25.8991 158.692 25.6417 159.612 25.1268C160.538 24.605 161.259 23.8704 161.774 22.9229C162.296 21.9686 162.557 20.8461 162.557 19.5554L163.339 19.7202H156.996V17.4545H165.028V19.7202C165.028 21.4571 164.658 22.9676 163.916 24.2514C163.182 25.5353 162.165 26.5308 160.868 27.2379C159.577 27.9382 158.094 28.2884 156.419 28.2884C154.552 28.2884 152.911 27.849 151.496 26.9702C150.089 26.0914 148.991 24.8419 148.201 23.2216C147.418 21.6013 147.027 19.679 147.027 17.4545C147.027 15.7862 147.25 14.2861 147.696 12.9542C148.15 11.6154 148.788 10.4757 149.612 9.53516C150.436 8.59458 151.411 7.8737 152.537 7.37251C153.663 6.87133 154.902 6.62074 156.254 6.62074C157.366 6.62074 158.403 6.78894 159.364 7.12535C160.332 7.4549 161.194 7.92519 161.949 8.53622C162.711 9.14039 163.346 9.8647 163.854 10.7092C164.362 11.5468 164.713 12.477 164.905 13.5H162.268ZM169.403 28V6.90909H171.957V16.3011H183.202V6.90909H185.756V28H183.202V18.5668H171.957V28H169.403ZM189.716 9.17472V6.90909H205.534V9.17472H198.902V28H196.348V9.17472H189.716Z" />
</svg>
</Link>
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
                                <MdDarkMode onClick={() =>setTheme(!theme)} />
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
                        <div className="logo_link_all">
                            <Link>
                             <div className="wishlist">
                                <div className="wishlist_alls" >
                                {
                                  theme ? 
                                  <IoSunnyOutline  onClick={() =>setTheme(!theme)} />
                                  :
                                  <IoSunnySharp className='svg' onClick={() =>setTheme(!theme)} />
                                }
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
