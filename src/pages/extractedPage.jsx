import React,{useState,useEffect} from 'react'
import { getAlltext } from '../api/text';

function ExtractedPage() {
    const [history,sethistory]=useState([]);
    const token=localStorage.getItem("token")

    useEffect(()=>{
       const fetchData=async()=>{
        if(token){
            const parsedToken=JSON.parse(token)
            const res=await getAlltext(parsedToken.userId)
            sethistory(res.data.data)
        }
              
       }
    })
  return (
    <div>
        <div className='flex bg-indigo-950 justify-between items-center'>
           <p className='text-2xl p-4 text-white font-bold '>Pdf_extractor</p> 
        </div> 
        
    </div>
  )
}

export default ExtractedPage