import React, { useEffect, useState } from 'react'
const UseEffectExample_04 = () => {
    var [count,setCount]=useState(0);
    const increaseCount =()=>{
        setCount(count++);
    }
    const decreaseCount =()=>{
        setCount(count--);
    }
    const resetCount =()=>{
        setCount(0);
    }
    //when component initialized or loaded useEffect gets executed
    useEffect(()=>{
        console.log("CounterComp is loaded");
    },[])//[]=>dependency Array it has to be blank when u are loading the component.
   //DA => Dependency Array
    //it can work on side effects
    //when ever there will be a change in value of counter we want to show a popup message counter value changes
    useEffect(()=>{
       // alert("Counter value changed");
     console.log("useEffect triggers");
     console.log(count);
    },[(count>=10)]);
    console.log(count);
  return (
    <div>
        {count && <p>Value :{count}</p> }
                <button onClick={increaseCount}>Increase Counter</button>
        <button onClick={decreaseCount}>Decrease Counter</button>
        <button onClick={resetCount}>Reset Counter</button>
    </div>
  )
}
export default UseEffectExample_04