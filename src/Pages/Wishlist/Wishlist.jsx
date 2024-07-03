import React from 'react';
import { useSelector } from 'react-redux';
import Products from '../../components/Products/Products';
import Empty from '../../components/Empty/Empty';
import Footer from '../../components/Footer/Footer';


const Wishlist = () => {
 
    const wishlistItems = useSelector((state) => state.wishlist.value);
    console.log(wishlistItems);
    return (
       <>
        <div className='container'>
            
            {
               wishlistItems.length ? 
             <>
                   <Products title={"Избранные товары"} data={wishlistItems}  />
             </>
               : 
                  <Empty/>
               
            }
       </div>
            <Footer />
       </>
    );
}

export default Wishlist;
