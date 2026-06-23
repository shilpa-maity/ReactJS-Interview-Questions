// Description: This is a child component that receives props from its parent and manages its own state.
// Q)React component to demonstrate state and normal variable usage

import React, { useState } from 'react'

const Child = ({message1,message2,message3}) => {
  const initialVal=100;
  var xyz=200;
  const[x,setX]=useState(initialVal);
  const increaseCounter=()=>{
    setX(x=>x+1);
    xyz++;
  }
  const decreaseCounter=()=>{
    setX(x=>x-1);
    xyz--;
  }
  const resetCounter=()=>{
    setX(initialVal);
    xyz=200;
  }
  return (
    <div>
      <h1>Child Component:child</h1>
      <p>Value from parent:{message1},{message2},{message3}</p>
      <p>Initial value is {x} ||| Normal stateless variable :{xyz}</p>
      <button onClick={()=>increaseCounter()}>Increse</button>
       <button onClick={()=>decreaseCounter()}>decrese</button>
        <button onClick={()=>resetCounter()}>REset</button>
    </div>
  )
}

export default Child
