import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Empty from '../../components/Empty/Empty';
import Footer from '../../components/Footer/Footer';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleHeart } from '../../components/context/slices/wishlistSlice'; 
import { addToCart } from '../../components/context/slices/cartSlice'; 
import Loading from '../../components/Loading/Loading';
import { Context } from '../../components/DarkMore/Context';
import './Wishlist.scss'
const Wishlist = ({isLoading}) => {
  const {theme} =useContext(Context)
    const wishlistItems = useSelector((state) => state.wishlist.value);
    console.log(wishlistItems);
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.value);
    const cart = useSelector(state => state.cart.value);
   
    let links = wishlistItems?.map((users) =>(
      <div className="card" key={users.id}>
      <div className="img">
       <div className="img_row">
         <img src={users.url[0]} alt="" onClick={() => setSearchParams({ details: users.id})} />
       </div>
       <div className="img_row">
          <span onClick={() => dispatch(toggleHeart(users))}>
          {
          wishlist?.some(item => item.id === users.id) ? <FaHeart  style={{fontSize:'20px'}} />
          : <FaRegHeart    style={{fontSize:'20px'}} />
        }
          </span>
           
</div>
      </div>
      <Link to={`/single/${users.id}`}>
      <h1>{users.title}</h1>
      </Link>
      <h5>7 000₽</h5>
    <div className="card_alt">
       <div className="card_all">
           <h6>{users.price}</h6>
       </div>
       <div className="card_all_all">
              {
                  cart?.some((cart) => cart.id === users.id) ? 
                  <IoCart onClick={() =>dispatch(addToCart(users))}/>
                  :
                  <IoCartOutline onClick={() =>dispatch(addToCart(users))}/>

              }
       </div>

    </div>
   </div>
  ))
    return (
       <>
            
   <div className={`w ${theme ? "light" : ""}`}>
  <div className="container">
  {
               wishlistItems.length ? 
             <>
                 <div className="al_h2">
               <h1>Избранные товары  <span>{wishlistItems?.length}</span></h1>
              </div>
                    {
                isLoading ?
                 <Loading count={8} /> : 
                 <></>
            }
            <div className="wrapper">
              {links}
            </div>
             </>
               : 
                  <Empty/>
               
            }
  </div>
            <Footer />
   </div>
       </>
    );
}

export default Wishlist;
