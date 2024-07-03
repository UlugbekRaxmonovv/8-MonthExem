import React, { useState,useEffect } from 'react';
import './Products.scss'
import './ProductAll.scss'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline,IoCart } from "react-icons/io5";
import { VscArrowRight } from 'react-icons/vsc';
import Modul from '../Modul/Modul';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Single from '../Single/Single';
import Loading from '../Loading/Loading';
import {useDispatch,useSelector } from 'react-redux';
import {toggleHeart} from '../../components/context/slices/wishlistSlice'
import { addToCart } from '../context/slices/cartSlice';
import { useDeleteProductMutation } from '../context/api/productApi';



let Api_Url = "https://667fec3456c2c76b495a8d83.mockapi.io"
const Products = ({data, btn1, btn,isLoading,title,isAdmin}) => {
    const [deletUser] = useDeleteProductMutation();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.value);
    const cart = useSelector(state => state.cart.value);
    const [searchParams, setSearchParams] = useSearchParams();
    const [productDetails, setProductDetails] = useState(null);
    useEffect(() => {
        const id = searchParams.get('details');
        if (id) {
            axios
                .get(`${Api_Url}/cards/${id}`)
                .then((res) => {
                    setProductDetails(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching product details:', error);
                });
        }
    }, [searchParams]);

    const handelDeletUser = (id) => {
        deletUser(id)
      }

      
    let links = data?.map((users) =>(
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
           {
              isAdmin ?
                <button onClick={() =>handelDeletUser(users.id)}>delet</button>

              :
              <></>
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

    
   
    const removeProductDetails = () => {
        setProductDetails(null);
        setSearchParams({});
    };
    return (
        <div className='container'>
                <div className="katalog">
                <div className="katalog_item">
                    <h1>{title}</h1>
                </div>
                <Link to={'/tavar-products'}>
                <div className="btn"> 
                    <div className="btn1">
                        <p>Все товары</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                </div>
                </Link>
            </div>
            {
                isLoading ?
                 <Loading count={8} /> : 
                 <></>
            }
            <div className="wrapper">
              {links}
            </div>
          <Link to={'/tavar-products'}>
          <div className="btn_all_list">
                    <div className="btn1">
                        <p>Все товары</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                </div>
          </Link>
                {productDetails && (
                <Modul btn1={removeProductDetails} >
                    <Single detail={productDetails} />
                </Modul>
            )}
        </div>
    );
}

export default Products;
