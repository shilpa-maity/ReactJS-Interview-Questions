import React, { useEffect, useState } from 'react'
import CompA from './components/CompA'
import CompC from './components/CompC';
import CompB from './components/CompB';
import axios from 'axios';
import {myProvider,postProvider} from './context/AppContext';

const App = () => {

  const [user,setUser] = useState({});
   const [posts,setPosts]=useState([]);
   //Only Once at the load time.
   useEffect(()=>{
       const fetchPosts = async()=>{
          let response= await axios.get("https://jsonplaceholder.typicode.com/posts");
          setPosts(response.data);
          console.log(response.data);
        }
       fetchPosts();
   },[]);

   const handleChange =(event)=>{
      const {name,value} = event.target;
      setUser({...user,[name]:value});
   }
   const submit =(event)=>{
    event.preventDefault();
    console.log(user);
    //we are saving the data into Browser WebStorage --> localStorage
    //This is not a React Property it is a browser Property
    sessionStorage.setItem("USER",JSON.stringify(user));
    console.log("Saved to Storage");
       
   }
   // console.log(fullName);
  return (
    <div>
      <h2>This is The ParentComp:</h2>
      <form onSubmit={submit}>
      <p>FirstName : <input type="text" onChange={handleChange} name="fname"/></p>
      <p>LastName : <input type="text" onChange={handleChange} name="lname" /></p>
      <p>Gender :
                 <input type="radio" name="r1" onChange={handleChange} value="Male" />Male
                 <input type="radio" name="r1" onChange={handleChange} value="Female" />Female
      </p>
      <p><button>Submit</button></p>
      </form>
      <CompA/>
      {/*Creating the contextProvider */}
      <myProvider.Provider value={user}>
         
        <CompC/>
      </myProvider.Provider>

      {/*create a provider for sending all users to ComponentB */}
      <postProvider.Provider value={posts}>
        <CompB/>
      </postProvider.Provider>
    </div>
  )
}

export default App
