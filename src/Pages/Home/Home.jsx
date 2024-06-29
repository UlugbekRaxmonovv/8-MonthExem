import React from 'react';
import Main from '../../components/Main/Main';
import Pochemu from '../../components/Pochemu/Pochemu';
import Katalog from '../../components/Katalog/Katalog';
import Products from '../../components/Products/Products';
import Brendlar from '../../components/Brendlar/Brendlar';
import Blog from '../../components/Blog/Blog';
import Production from '../../components/Production/Production';
import Footer from '../../components/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Main /> 
            <Katalog/>
            <Pochemu /> 
            <Products /> 
            <Brendlar />  
            <Blog />  
            <Production />
            <Footer /> 
        </div>
    );
}

export default Home;
