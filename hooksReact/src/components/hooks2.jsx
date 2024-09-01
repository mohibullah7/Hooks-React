import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Hooks2() {
  const [val,setval] = useState(true)

  let icons =['FaArrowRight',' FaArrowLeft']
  return (
    <div className='bg-zinc-300 h-screen w-full flex justify-center items-center'>
      <div className='w-72 h-54 bg-zinc-100 overflow-hidden rounded-md  flex relative'>

          <img
           className={`object-cover w-full h-full shrink-0 duration-700  ease-in-out ${val == true ? '-translate-x-[0%]':'-translate-x-[100%]'}`}
           src="https://images.pexels.com/photos/15364852/pexels-photo-15364852/free-photo-of-art-camera-dark-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

          <img
           className={`object-cover w-full h-full shrink-0 duration-700 ease-in-out ${val == false ? '-translate-x-[100%]':'-translate-x-[0%]'} `}           src="https://images.pexels.com/photos/15802450/pexels-photo-15802450/free-photo-of-close-up-of-a-person-holding-a-google-pixel-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
           alt="" />

          <span onClick={()=>setval(()=>!val)} className={`absolute bottom-3 left-32 text-sm bg-zinc-100 opacity-50 rounded-full p-3 cursor-pointer ${val === false ? 'hidden':'inline'}`}>
            <FaArrowRight/>
          </span>
          <span onClick={()=>setval(()=>!val)} className={`absolute bottom-3 left-32 text-sm bg-zinc-100 opacity-50 rounded-full p-3 cursor-pointer ${val === true ? 'hidden':'inline'}`}>
            <FaArrowLeft/>
          </span>
          
          
      </div>
    </div>
  )
}

export default Hooks2
