import React, { useState } from 'react';
import Main from '../../components/Main/Main';
import Pochemu from '../../components/Pochemu/Pochemu';
import Katalog from '../../components/Katalog/Katalog';
import Products from '../../components/Products/Products';
import Brendlar from '../../components/Brendlar/Brendlar';
import Blog from '../../components/Blog/Blog';
import Production from '../../components/Production/Production';
import Footer from '../../components/Footer/Footer';
import { useGetProductsQuery } from '../../components/context/api/productApi'; 
import ProductTop from '../../components/ProductTop/index'
import Modul from '../../components/Modul/Modul';
const Home = () => {
    const [islogin, setIsLogin] = useState(false);
    document.body.style.overflow =  islogin ? "hidden" : "auto"
    {
        islogin ?    <Modul btn1={setIsLogin}  >
         </Modul>
         :
         <></>
      }
    const { data,isError,isFetching,isLoading,isSuccess } = useGetProductsQuery();
    return (
        <div>
            <ProductTop/>
            <Main /> 
            <Katalog/>
            <Pochemu /> 
            <Products  isAdmin={false}  data={data} isLoading={isLoading} /> 
            <Brendlar />  
            <Blog />  
            <Production />
            <Footer /> 
        </div>
    );
}

export default Home;
