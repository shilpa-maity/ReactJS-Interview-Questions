
import React, { useContext } from 'react'
import { myProvider } from '../context/AppContext';

const CompC = () => {
    //Consume the provider using the Hooks Named as useContext
    const myObj = useContext(myProvider);
    const myObj2 = JSON.parse(sessionStorage.getItem("USER"));

  return (
    <div>
      <h2>Welcome to CompC</h2>
      <p>Child of Component B</p>
      <p>Displaying through ContextProvider using useContext Hooks.</p>
      {myObj.length!=0 && (
        <>
        <p>Name : {myObj.fname} {myObj.lname}</p>
        <p>Gender : {myObj.r1}</p>
        </>
      )}  
      <p>Displaying Through Browser Session Storage:</p>
       {myObj2 && (
        <>
        <p>Name : {myObj2.fname} {myObj2.lname}</p>
        <p>Gender : {myObj2.r1}</p>
        </>
         
       
      )}
      {/*Clear the sessionStorage after showing data */}
      {sessionStorage.clear()}
    </div>
  )
}

export default CompC