import React, { useState } from 'react'
import ChildComp from './ChildComp';

const ParentComp = (props) => {
  const [myData,setMyData]=useState("");
  const greetParent=(data)=>{
    alert('Hello Parent ,how are you\n'+data);
    setMyData(data);
  }
  return (
    <div>
      <h1>This is Parent Component</h1>
      {myData.name && <p>Value from child component is id:{myData.id} ,Name:{myData.name} ,Age:{myData.age} Gender:{myData.gender}</p>}
      {
        myData && <table>
          <thead>
            <tr>
              <th>id:</th>
              <th>Name:</th>
              <th>Age:</th>
              <th>Gender:</th>
            </tr>
            <tr>
              <td>{myData.id}</td>
              <td>{myData.name}</td>
              <td>{myData.age}</td>
              <td>{myData.gender}</td>
            </tr>
          </thead>
        </table>
      }
      <ChildComp greetHandler={greetParent}/>
    </div>
  )
}

export default ParentComp
