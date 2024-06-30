import React, { useState,useEffect } from 'react';
import './Products.scss'
import './ProductAll.scss'
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscArrowRight } from 'react-icons/vsc';
import Modul from '../Modul/Modul';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Single from '../Single/Single';
import Loading from '../Loading/Loading';



let Api_Url = "https://667fec3456c2c76b495a8d83.mockapi.io"
const Products = ({data, btn1, btn,isLoading}) => {
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

    let links = data?.map((users) =>(
        <div className="card" key={users.id}>
        <div className="img">
         <div className="img_row">
           <img src={users.url} alt="" onClick={() => setSearchParams({ details: users.id})} />
         </div>
         <div className="img_row">
             <FaRegHeart/>
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
        <IoCartOutline/>
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
                    <h1>Популярные товары</h1>
                </div>
                <div className="btn">
                    <div className="btn1">
                        <p>Все товары</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
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
            <div className="btn_all_list">
                    <div className="btn1">
                        <p>Все товары</p>
                    </div>
                    <div className="btn1">
                    <VscArrowRight />
                    </div>
                </div>
                {productDetails && (
                <Modul btn1={removeProductDetails}>
                    <Single detail={productDetails} />
                </Modul>
            )}
        </div>
    );
}

export default Products;
