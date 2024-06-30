import React from 'react';
import Main from '../../components/Main/Main';
import Pochemu from '../../components/Pochemu/Pochemu';
import Katalog from '../../components/Katalog/Katalog';
import Products from '../../components/Products/Products';
import Brendlar from '../../components/Brendlar/Brendlar';
import Blog from '../../components/Blog/Blog';
import Production from '../../components/Production/Production';
import Footer from '../../components/Footer/Footer';
import { useGetProductsQuery } from '../../components/context/api/productApi'; 
const Home = () => {
    const { data,isError,isFetching,isLoading,isSuccess } = useGetProductsQuery();
    return (
        <div>
            <Main /> 
            <Katalog/>
            <Pochemu /> 
            <Products title={"Популярные товары "} data={data} isLoading={isLoading} /> 
            <Brendlar />  
            <Blog />  
            <Production />
            <Footer /> 
        </div>
    );
}

export default Home;
