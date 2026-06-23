import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SequentialAPIConsumption_08 = () => {
    const api1Url=`https://jsonplaceholder.typicode.com/todos`;
    const api2Url=`https://jsonplaceholder.typicode.com/users`;

    const [todos,setTodos]= useState([]);
    const [users,setUsers]= useState([]);
    //useEffect hooks when component gets initialized.
    useEffect(()=>{
       console.log("Component initialized");
       //we have to define async function inside the useEffect Hooks not outside.
       const fetchApiData = async()=>{
         let todosData= await axios.get(api1Url)
         console.log(todosData.data)
         setTodos(todosData.data);

         //calling the 2nd Api.
         let usersData = await axios.get(api2Url);
         console.log(usersData.data);
         setUsers(usersData.data);

       }
       //we have to call within useEffect hooks.
       fetchApiData();
    },[]);

 

  return (
    <div>
      <h2>This is Test1Comp</h2>
      <h4>2 APIS will be called Sequentially or One After Another</h4>
      {
        todos.length>0 && (
            <table>
                <thead>
                <tr>
                    <th>UserId:</th>
                    <th>Title:</th>
                    <th>Status:</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map((todoObj,index)=>(
                       <tr key={index}>
                        <td>{todoObj.userId}</td>
                        <td>{todoObj.title}</td>
                        <td>{ todoObj.completed ? "Completed" : "Pending" }</td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>
        )
      }

       {
        users.length>0 && (
            <table>
                <thead>
                <tr>
                    <th>Name:</th>
                    <th>Organization:</th>
                    <th>Email:</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((userObj,index)=>(
                       <tr key={index}>
                        <td>{userObj.name}</td>
                        <td>{userObj.company.name}</td>
                        <td>{userObj.email}</td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>
        )
      }    
    </div>
  )
}

export default SequentialAPIConsumption_08