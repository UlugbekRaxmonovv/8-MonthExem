import React, { useState } from 'react';
import './Login.scss'
import { useFormInputValue } from '../../components/Hook/useFormInputValur';
import { toast } from 'react-toastify';
import { setToken } from '../../components/context/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../../components/context/api/productApi';
import { PiEyeFill, PiEyeSlashFill } from 'react-icons/pi';

const intialstate = {
    UserName:"",
    password: ""
  }
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [eye, setEye] = useState(false);
    const {state,setstate,handelChange} = useFormInputValue(intialstate)
    const {isLoading } = useGetProductsQuery();


    const handelSubmit = (e)=>{
        e.preventDefault();
        if(state.UserName === "john32" && state.password === "12345678"){
           toast.success("Welcome")  
            dispatch(setToken("token123"));
            navigate('/admin')
            setstate(intialstate)

        }
        else{
           toast.error("Invalid Username or Password")
        }
    
    }
    return (
        <div>
             <div className='container'>
             <div className="login container">
           <form action="" onSubmit={handelSubmit}>
           <div className="login_all">
                <label htmlFor="">Username</label> <br />
              <div className="login_row">
              <input placeholder='UserName' value={state.UserName} onChange={handelChange} name='UserName' type="text" />
              </div>
                <label htmlFor="">Password</label> <br />
             <div className="login_hammasi">
             <div className="login_row">
              <input placeholder="password " value={state.password} onChange={handelChange} name='password' type={
                    eye ? "text" : "password" 
                  } />
                          <div className="int_a" onClick={() => setEye(p => !p)} >
                    {
                  eye ?     <PiEyeSlashFill  className="eye"/>
                  : <PiEyeFill   className="eye"/>
                }
                </div>
              </div>
             </div>

              <div className="login_row1">
                <button>
                Login
                </button>
              </div>
              
            </div>
           </form>
          </div> 
         </div>
        </div>
    );
}

export default Login;
