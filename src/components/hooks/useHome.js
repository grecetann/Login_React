import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submit } from '../../redux/actions/submitAction';

const useHome=() =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {value} = useSelector(state => state.submitRed);
    const dispatch = useDispatch();
    const EmailChangeHandler=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
       
    }
    const PasswordChangeHandler=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const SubmitHandler=()=>{
      dispatch(submit(email,password));
    }

  return {email,EmailChangeHandler,password,PasswordChangeHandler,SubmitHandler};
}

export default useHome;