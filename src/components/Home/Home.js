import React, { Fragment, useState } from 'react'
import useHome from '../hooks/useHome';

import './Home.css';

const Home=() =>{
  
  const{email,EmailChangeHandler,password,PasswordChangeHandler,SubmitHandler}=useHome();
  return (
    <div className='container'>
        <div className='email'>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={EmailChangeHandler}
            />
        </div>
        <div className='password'>
        <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={PasswordChangeHandler}
            />
        </div>
        <div className='action'>
            <button  onClick={SubmitHandler}><h2>Login</h2></button>
        </div>
        <div className='link'>
        <a href="">Forget Your Password</a> 
        </div>
            
     </div>
  )
}

export default Home