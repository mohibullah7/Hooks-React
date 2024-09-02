import React from 'react'

function Child1() {
  return (
    <div>
       <div className="w-48 h-62 bg-zinc-100 rounded-md  flex flex-col  overflow-hidden">
        <div className="w-full  h-40   bg-zinc-200">
          <img
            className=" w-full h-full object-cover object-center"
            src={`${image}`}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-sm font-bold px-3 mt-2">{name}</h1>
          <h2 className="text-xs px-3 font-semibold">{job}</h2>
          <button onClick={()=>chnageOnclick(index)}
           className={`px-4 py-[2px]  ms-3 mt-2 mb-2 ${friend === true ?'bg-blue-500':'bg-gray-500'} rounded-md text-white text-sm`}>{friend === true ? 'Friend':"Cancel Request"}
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Child1
