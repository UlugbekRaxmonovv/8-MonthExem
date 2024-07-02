import React from 'react';
import { Outlet ,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Auth = () => {
    let isLogin =  useSelector(state => state.auth.token )
    return  isLogin ? <Outlet/>  :  <Navigate replace to={'/'} />
}

export default Auth;
