import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ParallalApiConumption_07 = () => {
     const api1Url=`https://jsonplaceholder.typicode.com/todos`;
     const api2Url=`https://jsonplaceholder.typicode.com/users`;

     const [users,setUsers]= useState([]);
     const [todos,setTodos]= useState([]);
    useEffect(()=>{
        console.log("Component initialized");
        const fetchApiData = async()=>{
            try{
             const [todosInfo,usersInfo]= await Promise.all([
                await axios.get(api1Url),
                await axios.get(api2Url)
             ]);
             const [todos,users]= await Promise.all([
               await todosInfo.data,
               await usersInfo.data
             ])
             setTodos(todos.slice(0,10));
             setUsers(users.slice(0,5));
             console.log(users,todos);
            }catch(error){
                alert(error.message);
                console.log(error.message);
            }
        }

        fetchApiData()
    },[]);
    return (
    <div>
       <h2>API Call in Parallal or Simultaneously</h2>
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

export default ParallalApiConumption_07