import React from 'react';
import Main from '../../components/Main/Main';
import Pochemu from '../../components/Pochemu/Pochemu';
import Katalog from '../../components/Katalog/Katalog';
const Home = () => {
    return (
        <div>
            <Main /> 
            <Katalog/>
            <Pochemu />  
        </div>
    );
}

export default Home;
