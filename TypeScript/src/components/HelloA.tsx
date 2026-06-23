import React, { useState } from 'react'
import axios from 'axios'
const HelloA = () => {
    type User={
        fname:string,
        lname:string,
        age:number
    }
     
    const [user,setUser] = useState<User>({fname:"John",lname:"Doe",age:33})
    const [myUser , setMyUser]= useState<any>([]);
    const handleChange =(event:any)=>{
          setUser({...user,[event.target.name]:event.target.value});
    }
    const handleSubmit =(event:any)=>{
        event.preventDefault();
        console.log(user);
        alert("Hii "+user.fname+" "+user.lname);
    }
    const loadUsers=async()=>{
        try{
           const response = await axios.get("https://jsonplaceholder.typicode.com/users");
           setMyUser(response.data);
        }
        catch(error:any){
            alert(error);
        }
    }
    console.log(myUser);
    const [counter,setCounter]=useState<number>(0);
  return (
    <div>
           <h2>CounterApp:</h2>
           <p>Counter Value :{counter}</p>
           <button onClick={()=>setCounter(counter+1)}>Increase</button>
           <button onClick={()=>setCounter(counter-1)}>Decrease</button>
           <button onClick={()=>setCounter(0)}>Reset</button>

           <form onSubmit={handleSubmit}>
              firstName : <input type="text" name="fname" onChange={handleChange} required/>
              LastName  : <input type="text" name='lname' onChange={handleChange} required/>
              Age       : <input type="number" name='age' onChange={handleChange} required/>
              <button type='submit'>Submit</button>
              <button type='reset'>Reset</button>
           </form>

           <h4>API Data Consumption</h4>
           <button onClick={loadUsers}>Show Users:</button>
            {myUser.length>0 && (
                  <table>
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>UserName:</th>
                            <th>email:</th>
                            <th>Address:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myUser.map((user:any,index:number)=>(
                           <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>City :{user.address.city}</td>
                        </tr>
                        ))}
                       
                    </tbody>
                  </table>
                     

            )}            
    </div>
  )
}

export default HelloA