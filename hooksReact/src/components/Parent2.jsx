import React, { useState } from 'react'
import Child2 from './Child2'

function Parent2() {
  const userdata = [
    {
      image:'https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name :'John Brow',
      profession:'logo Designer',
      friend:true
    },
    {
      image:'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name :'Mike tyson',
      profession:'Marketing manager',
      friend:true

    },
    {
      image:'https://images.pexels.com/photos/7402883/pexels-photo-7402883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name :'Jinny row',
      profession:'Designer ',
      friend:true

    },
    {
      image:'https://images.pexels.com/photos/7897152/pexels-photo-7897152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name :'Lony Trow',
      profession:'Programmer',
      friend:true

    },
  ]
  const [data,setUservalue]=useState(userdata)

  const chnagebutton=(chnageindex)=>{
    setUservalue((prev)=>{
     return prev.map((item,index)=>{
        if(index === chnageindex)return{...item,friend: !item.friend}
        return item 
      })
    })
  }
  return (
    <div>
       <div className='h-screen w-full flex justify-center items-center bg-zinc-400 gap-10' >
        {data.map((item,index)=>(
      <Child2 values ={item} indexValue ={index} func={chnagebutton}></Child2>

        ))}

      </div>
    </div>
  )
}

export default Parent2
