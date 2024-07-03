import React, { useEffect } from 'react';
import { useUpdateProductMutation } from '../../../../components/context/api/productApi';
import './Edit.scss'
import { toast } from 'react-toastify';
const Edit = ({data,setData}) => {
    const [updateUser,{isLoading,isSuccess}] = useUpdateProductMutation()
  
    useEffect(() => {
    if(isSuccess)
    {
     setData(null)
      toast.success('A new reference has been created')
    }
    },[isSuccess])
     
     const AddCard = (e) => {
         e.preventDefault()
         let links = {
            price: data.price
         }
         updateUser({body: links, id: data.id}) 
     }
    return (
        <div>
            <div  onClick={() => setData(null)} className="overflyAll"></div>
                <form onSubmit={AddCard} className="from_all">
                    <h2>Update Product</h2>
                    <input type="number"
                        value={data.price} 
                        onChange={(e) => setData(prev =>({...prev, price: e.target.value }))}/>
                    <button className='btn2' disabled={isLoading}>{isLoading ? 'loading' : 'Save'}</button>                   
                    <button className='btn1' type='button' onClick={() => setData(null)}>Cancel</button>                   
            </form>
        </div>
    );
}

export default Edit;
