import React from 'react'

function Child2({values,indexValue,func}) {
  const {name, profession, image,friend}=values;
  return (
    <div>
   
        <div className="bg-zinc-100 w-60 h-72 rounded-md overflow-hidden ">
          <div className='w-full h-40 '>
            <img className='object-cover h-full w-full bg-slate-600' src={`${image}`} alt="" />
          </div>
          <div className='mt-3 ms-2'>
            <h1 className='text-lg font-bold'>{name}</h1>
            <p className='text-sm mt-1'>{profession}</p>
            <button onClick={()=>func(indexValue)}
             className={`${friend === true ?'bg-blue-500 ':'bg-black'} rounded-md px-3 text-white mt-3`}>{friend === true ? 'Add friend':'Request Send'}</button>
          </div>
        </div>
     
    </div>
  )
}

export default Child2
