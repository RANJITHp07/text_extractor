import axios from "axios"

export const userRegistration=async(username,email,password)=>{
  try{
      const res=await axios.post("http://localhost:5500/user/signup",{username,email,password})
      return res
  }catch(err){
    throw err
  }
}

export const userLogin=async(email,password)=>{
    try{
        const res=await axios.post("http://localhost:5500/user/login",{email,password})
        return res
    }catch(err){
      throw err
    }
  }