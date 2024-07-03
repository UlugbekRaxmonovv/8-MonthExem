import React, { useState } from 'react';
import Products from '../../../components/Products/Products';
import { useGetProductsQuery } from '../../../components/context/api/productApi';
import './CreateCategory.scss'
import Loading from '../../../components/Loading/Loading';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDeleteProductMutation } from '../../../components/context/api/productApi';
import { toast } from 'react-toastify';
import Modul from '../../../components/Modul/Modul';
import Edit from './Edit/Edit';

const CreateCategory = () => {
    const { data, isLoading, isError } = useGetProductsQuery();
    const [deletUser] = useDeleteProductMutation()
    const [edit,setEdit] = useState(false)

    const handelDeletUser = (id) => {
      deletUser(id)
      toast.success("Product deleted successfully");
      
    }

    let links = data?.map((users) =>(
        <div className="card" key={users.id}>
        <div className="img">
         <div className="img_row">
           <img src={users.url[0]} alt="" onClick={() => setSearchParams({ details: users.id})} />
         </div>
         <div className="img_row">
            <span onClick={() => dispatch(toggleHeart(users))}>
            <FaRegHeart    style={{fontSize:'20px'}}/>
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
         <div className="delet">
         <div className="delet_all">
            <button onClick={() =>handelDeletUser(users.id)}>delet</button>
            </div>
            <div className="delet_alls">
            <button  onClick={() =>setEdit(users)}>Edit</button>
            </div>
           
         </div>
      
        
      </div>

     </div>
    ))
    return (
        <div className='container'>
            <div className="CreateCategory_all">
            {
                isLoading ?
                 <Loading count={8} /> : 
                 <></>
            }
            <div className="wrapper">
              {links}
            </div>
            {
                    edit ? <Edit  data={edit}  setData={setEdit}/>
                        
                        :
                        <></>
                }
            </div>
        </div>
    );
}

export default CreateCategory;
