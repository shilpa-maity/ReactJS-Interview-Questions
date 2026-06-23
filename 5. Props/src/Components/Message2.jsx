//Creating state using functional component
import { useState } from "react";
const Message2=()=>{
  var a=10;//local variable stateless
  const [count,setCount]=useState(1);
  const changedValue=()=>{
    setCount(count+1);
    a++;
  }
  return(
    <div>
      <h2>Stateless functional component i.e we used useState to maintain component inside memory</h2>
      <p>Value of count : {count}[keep changing when value gets changed]:{a}[normal variable state is not changing at all]</p>
      <button onClick={()=>changedValue()}>Increase</button>
    </div>
  )
}
export default Message2;