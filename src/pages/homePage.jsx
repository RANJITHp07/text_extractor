import { useState } from "react";
import {message} from "antd"
import { textFunction } from "../api/text";
import { CircularProgress } from '@mui/material';

function HomePage() {
    const token=localStorage.getItem("token")
    const [loading,setloading]=useState(false);
    const [file,setfile]=useState(null)
    const [text,settext]=useState('')

    const handleFile=async()=>{
      if(file){
        setloading(true)
        const formData = new FormData();
        formData.append('file', file);
        const res=await textFunction(formData);
        settext(res.data)
        setloading(false)
        setfile(null)

      }else{
        message.info("Upload file")
      }
    }

  
  
  return (
    <div>
        <div className='flex bg-indigo-950 justify-between items-center'>
           <p className='text-2xl p-4 text-white font-bold '>Pdf_extractor</p> 
           {
            !token &&   <div className='flex text-white'>
            <button className='py-1 my-2 px-2 rounded-md border-2 mx-3'>Login</button>
            <button className='py-1 my-2 px-2 rounded-md border-2 mx-3'>Sign In</button>
           </div>
           }
          
        </div> 
        <div className='md:flex mx-3 md:mx-0'>
        <div className='md:w-1/2 '>
        <label htmlFor='file'>
        <div className='w-full my-9 md:m-9 h-72 border-dotted border-4 border-slate-400 flex justify-center items-center cursor-pointer rounded-md'>
               {
                file ?  <img src={URL.createObjectURL(file)} alt='img' className='my-3 h-72 w-full'/> : <p className='text-4xl font-semibold text-slate-300'>Upload the photo</p>
               } 
            </div>
        </label>
        <input type="file"  accept=".jpg, .jpeg, .png" className="hidden" name="file"  id="file" onChange={(e)=>setfile(e.target.files[0])}  /> 
        <button className='md:mx-9 text-center w-full p-2 bg-indigo-950 text-white rounded-md' onClick={()=>handleFile()}>Submit</button>
        </div>
         <div className='md:w-1/2 text_area border-2 my-9 p-2  md:mx-16  bg-slate-100 border-slate-400 rounded-md overflow-x-auto'>
            {
              loading ? <div className='flex justify-center items-center h-96'>
                <CircularProgress/>
              </div> :  <p>{text}</p>
            }
            
         </div>
        </div>
    </div>
  )
}

export default HomePage