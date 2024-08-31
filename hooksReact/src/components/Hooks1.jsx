import React, { useState } from 'react'

function Hooks1() {

  let [val,setval]=useState(false)
  return (
    <div>
      
        <h1>
          {val === false ? 'bahir jao':'mat jao'}
        </h1>
      
      <button onClick={()=>setval(()=>!val)}>click</button>
    </div>
  )
}

export default Hooks1
