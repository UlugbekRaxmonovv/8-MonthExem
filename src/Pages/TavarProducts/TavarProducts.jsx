import React from 'react';
import { VscArrowRight } from 'react-icons/vsc';
import {useLocation } from 'react-router-dom';
// import Products from '../../components/Products/Products';
import { useGetProductsQuery } from '../../components/context/api/productApi';
import Loading from '../../components/Loading/Loading';
import { IoCartOutline } from 'react-icons/io5';
import ProductTop from '../../components/ProductTop'
import Footer from '../../components/Footer/Footer';

const TavarProducts = () => {
    const { data:data1,isError,isFetching,isLoading,isSuccess } = useGetProductsQuery();
    let {pathname} = useLocation();
    if(pathname.includes('/wishlist') ){
        return <></>;
    }
    let links = data1?.map((users) =>(
        <div className="card" key={users.id}>
        <div className="img">
         <div className="img_row">
           <img src={users.url[0]} alt=""/>
         </div>
        </div>
        <h1>{users.title}</h1>
        <h5>7 000₽</h5>
      <div className="card_alt">
         <div className="card_all">
             <h6>{users.price}</h6>
         </div>
         <div className="card_all_all">
        <IoCartOutline onClick={() =>dispatch(addToCart(users))}/>
         </div>

      </div>
     </div>
    ))
    return (
     <>
            <ProductTop/>
        <div className='container'>
                <div className="katalog">
                <div className="katalog_item">
                    <h1>Популярные товары</h1>
                </div>
            
         
            </div>
            {
                isLoading ?
                 <Loading count={8} /> : 
                 <></>
            }
            <div className="wrapper">
              {links}
            </div>

           
        </div>
            <Footer />
     </>
    );
}

export default TavarProducts;
