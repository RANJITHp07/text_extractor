import axios from "axios"

export const textFunction=async(file)=>{
  try{
      const res=await axios.post("http://localhost:5500/image_extractor",file)
      return res
  }catch(err){
    throw err
  }
}


export const getAlltext=async(id)=>{
  try{
      const res=await axios.post(`http://localhost:5500/image_extractor/${id}`)
      return res
  }catch(err){
    throw err
  }
}

