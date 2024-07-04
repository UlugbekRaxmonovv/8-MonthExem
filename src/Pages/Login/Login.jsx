import React, { useState } from 'react';
import './Login.scss'
import { useFormInputValue } from '../../components/Hook/useFormInputValur'; // Corrected import
import { toast } from 'react-toastify';
import { setToken } from '../../components/context/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PiEyeFill, PiEyeSlashFill } from 'react-icons/pi';
import {provider,auth} from '../../components/firebase/index'
import {signInWithPopup} from 'firebase/auth'
import rasm from '../../assets/img/gog.png'
const initialState = {
  UserName: "",
  password: ""
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const { state, setState, handleChange } = useFormInputValue(initialState);

  const handlePopup =() => {
    signInWithPopup(auth,provider)
    .then((res) =>{
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.UserName === "john32" && state.password === "12345678") {
      toast.success("Welcome");
      dispatch(setToken("token123"));
      navigate('/admin');
      setState(initialState);
    } else {
      toast.error("Invalid Username or Password");
    }
  };





  return (
    <div className='container'>
      <div className="login ">
        <form onSubmit={handleSubmit}>
          <div className="login_all">
            <label htmlFor="username">Username</label> <br />
            <div className="login_row">
              <input
                placeholder='UserName'
                value={state.UserName}
                onChange={handleChange}
                name='UserName'
                type="text"
              />
            </div>
            <label htmlFor="password">Password</label> <br />
            <div className="login_hammasi">
              <div className="login_row">
                <input
                
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                  name='password'
                  type={eye ? "text" : "password"}
                />
                <div className="int_a" onClick={() => setEye(prev => !prev)}>
                  {eye ? <PiEyeSlashFill className="eye" /> : <PiEyeFill className="eye" />}
                </div>
              </div>
            </div>
          <div className="login_link_row">
          <div className="login_row1">
              <button>Login</button>
            </div>
            <div className="login_rows">
                <img onClick={handlePopup}  src={rasm} alt="" />

            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
