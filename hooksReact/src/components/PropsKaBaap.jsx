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
      name :'Nawaz Sharif',
      job:'Designer ',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/PrimeMinisterNawazSharif.jpg/220px-PrimeMinisterNawazSharif.jpg',
      friend: false 


    },
    {
      name :'Lumber One',
      job:'Plumber',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/General_Asim_Munir_%28Pakistan%29.jpg/220px-General_Asim_Munir_%28Pakistan%29.jpg',
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
      <Props1 chacha={item} index={index}  chnageOnclick={chnageOnclick} ></Props1>

        ))}

      </div>
     
    </div>
  )
}

export default PropsKaBaap
