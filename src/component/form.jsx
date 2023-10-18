import React, { useState,useRef } from 'react'
import { CircularProgress } from '@mui/material';
import { userLogin, userRegistration } from '../api/user';
import { useNavigate } from 'react-router-dom'
import { message } from 'antd';

function Form({page}) {
    const [loading,setloading]=useState(false)
    const navigate=useNavigate()
    const username=useRef()
    const email=useRef();
    const password=useRef();
    const confirm_password=useRef()
    

    const handleSignin=async(e)=>{
        try{
            e.preventDefault()
            setloading(true);
            if(username.current && email.current && password.current  && confirm_password.current){
                if(confirm_password.current.value===password.current.value){
                    const res=await userRegistration(username.current.value,email.current.value,password.current.value);
                    if(res.data.success) {
                        message.info(res.data.message);
                        navigate("/")
                        setloading(false)
                    }else{
                        message.info("User already exist")
                        setloading(false)
                    }
                    
                }
            }else{
                message.info("Enter all the fields")
            }
            
        }catch(err){
            new Error("Form submission error");
            setloading(false)
        }
    }

    const handleLogin=async(e)=>{
        try{
            e.preventDefault()
            if(email.current && password.current){
                const res=await userLogin(email.current.value,password.current.value)
                if(res.data.success){
                    message.info("Logged In")
                    localStorage.setItem("token", res.data.token);
                    navigate("/")
                }else{
                    message.info("Wrong password")
                }
            }else{
                message.info("Fill all the fields")
            }
             
        }catch(err){

        }
    }
  return (
    <div className=" mx-3 md:mx-auto md:w-1/2 rounded-lg flex justify-center border-2 items-center my-32 p-5">
        <form className=' '  onSubmit={ page ? handleSignin : handleLogin }>
        <p className='text-center text-xl font-semibold mb-5'>{page ? "Signin into padf_extractor" : "Log In into pdf_extractor" }</p>
       
           {
            page && <input type="text" name="username" placeholder="Enter your  username" className='border-2 rounded-lg p-3 my-3 w-full ' ref={username} required/>
           }
            <input type="email" name="email" placeholder="Enter your email" className='border-2 rounded-lg p-3 my-3 w-full' ref={email} required/>
            <input type="password" name="password" placeholder="Enter your password" className='border-2 rounded-lg p-3 mt-3 w-full' ref={password}  required min={3}/>
            { page && <input type="password" name="password" placeholder="Confirm your password" className='border-2 rounded-lg p-3 my-3 w-full' ref={confirm_password}  required min={3}/>}

            <button type="submit" className='bg-blue-500 text-white w-full p-3 rounded-lg mt-3'>
  {page ? (loading ? <CircularProgress /> : 'Sign In') : (loading ? <CircularProgress /> : 'Log In')}
</button>

        </form>
    </div>
  )
}

export default Form