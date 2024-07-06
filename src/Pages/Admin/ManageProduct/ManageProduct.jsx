import React, { useEffect } from 'react';
import { useFormInputValue } from '../../../components/Hook/useFormInputValur';
import {useCreateCategoryMutation } from '../../../components/context/api/productApi'
import { toast } from 'react-toastify';
const initialState ={
    title:''
}
const ManageProduct = () => {
    const {setState,state,handleChange}= useFormInputValue(initialState);
    const [usePost,{isLoading,isSuccess}] = useCreateCategoryMutation();
    useEffect(() =>{
        if(isSuccess){
            setState(initialState);
           toast.success('User created')
        }
        if(isLoading){
           toast.info('Loading...')
        }
        },[isSuccess])
    const handelSubmit=(e)=>{
        e.preventDefault();
        const product = {
            title: state.title,
          };
          usePost(product);
          console.log(product);
    }
    return (
        <div>
              <div className="CreateProduct" >
            <div className="CreateProduct_all">
                <form action="" onSubmit={handelSubmit}>
                    <label htmlFor="">Title</label>
                <input type="text" placeholder='Title' required value={state.title} onChange={handleChange} name='title' />
                  <button style={{width:'100px',height:'40px',
                  marginTop:'20px',border:'none',
                  backgroundColor:'black',borderRadius:'4px',
                  color:'white',fontSize:'15px'}}>Submit</button>
                </form>
                
            </div>
          </div>
        </div>
    );
}

export default ManageProduct;
