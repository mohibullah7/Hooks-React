import React, { useState } from 'react'
import Props1 from './Props1'

function PropsKaBaap() {
  const data = [
    {
      name :'Mohib khan',
      job:'Programmer',
      image:'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      friend: false 

    },
    {
      name :'Rahul Gandhi',
      job:'Designer ',
      image:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      friend: false 


    },
    {
      name :'Zardari',
      job:'Plumber',
      image:'https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      friend: false 


    }
  ]
  const [values,Setvalues]=useState(data)

  const chnageOnclick=(changeindex)=>{
    
  
    Setvalues((prev)=>{
      return prev.map((item,index)=>{
        if (index === changeindex) return{...item,friend: !item.friend};
          return item;
        
      })
    })
  }
  return (
    <div>
      <div className="w-full h-screen bg-zinc-300 flex justify-center items-center gap-10">
        {values.map((item,index)=>(
      <Props1 chacha={item} index={index} chnageOnclick={chnageOnclick} ></Props1>

        ))}

      </div>
     
    </div>
  )
}

export default PropsKaBaap
