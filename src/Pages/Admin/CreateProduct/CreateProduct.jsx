import React,{ useEffect} from 'react';
import './CreateProduct.scss'
import { useFormInputValue } from '../../../components/Hook/useFormInputValur';
import { useCreateProductMutation, useGetCategoryQuery } from '../../../components/context/api/productApi';
import { toast } from 'react-toastify';

const initialState ={
    title:'',
    price:'',
    url:'',
    category:'',
    desc:''
}
const CreateProduct = () => {
    const {data:category} = useGetCategoryQuery();
    console.log(category);
    const {setState,state,handleChange}= useFormInputValue(initialState);
    const [usePost,{isLoading,isSuccess}] = useCreateProductMutation();
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
            price: +state.price,
            url: state.url.split("\n").filter((i) => i.trim()),
            category: state.category,
            desc: state.desc,
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
                <label htmlFor="">Price</label>
                <input type="number" placeholder='Price' required  value={state.price} onChange={handleChange} name='price' />
                <label htmlFor=""> Desc</label>
                <input type="text"  required value={state.desc}  onChange={handleChange} name='desc'/>
                <label htmlFor="">Category</label>
                {
                 <select  id=""  required  value={state.category} onChange={handleChange} name='category'>
                    <option value="">Tanlang</option>
                    {
                        category?.map((item,index) => {
                            return <option key={index} value={item.title}>{item.title}</option>
                        })
                    }
                      </select>
                }      
                <label htmlFor="">Image-url</label>
                <textarea required id="" cols="30" rows="10" value={state.url} onChange={handleChange}  name='url'  >

                </textarea>
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

export default CreateProduct;
