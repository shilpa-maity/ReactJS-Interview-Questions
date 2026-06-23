//Arrow Function Component
import React from 'react';
//Destructring of Props in React
const Great3_01=({id,name,age})=>{
  return(
     <div className='card p-3 m-3'>
        <h2 className='modal-header'>Greet3 Functional Child Component :</h2>
        <p className='alert alert-success'>Data from AppComponent  {id} {name} {age}</p>
    </div>
  )
}
export default Great3_01