
// Here we have a ParentComp.jsx
// which is sending props like age and sal to
// Child2.jsx as well as Child3.jsx
// We also have another child named as Child1.jsx
// When user clicks on the increase age button
// we have seen all components re renders including Child1.jsx
// which has just nothing association with parent props and state.

// for that we have to use React.memo() to make sure only associated child component will renders whose props or state has been changed as a result Child1.jsx gets out.

// As Child3 is having handleClick custom event which are using for both increasing age and sal thats why changing of age re rendered sal also and vice versa.
// Now we have to make sure only related fnctionwill renders
// for that we have use useCallback as a result if we click on age we can see only count and button comp  renders .

// Thus we achieve the most optimized app which run faster than not using React.memo() + useCallBack Hooks.

// Moral of the story :


// To prevent unneseccery renders of component we will be using React.memo()
// to prevent unnecessary renders of functions we need to have useCallback

import React, { useCallback, useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

const ParentComp = () => {
    //we will create 2 state variables
    //one is for age another one is for sal
      const [age,setAge] = useState(18);
      const [sal,setSal] = useState(10000);
     
      //functions are memorized and optimized.
      const increaseAge = useCallback(()=>{
         console.log("age is increased");
         setAge(age+10);
      },[age]);
      //functions are memorized and optimized
      const increaseSal = useCallback(()=>{
          console.log("sal is increased");
          setSal(sal+2000);
      },[sal]);
   
  return (
    <div>
       <h2>ParentComp :</h2>
       {/*Adding all three childcomponents into the Parent */}
       <Child1/>
       <Child2 text="Age" count={age}/>
       <Child3 handleClick={increaseAge}>Increase Age</Child3>
       <Child1/>

       <Child2 text="Sal" count={sal}/>
       <Child3 handleClick={increaseSal}>Increase Sal</Child3>
       
    </div>
  )
}

export default ParentComp