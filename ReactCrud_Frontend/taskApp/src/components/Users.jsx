import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [user,setUser] = useState({});
  const [loginUser, setLoginUser] = useState({});
   const navigate = useNavigate();
     
  const handleUser =(event)=>{
       const {name,value} = event.target;
       setUser({...user,[name]:value});
   }
   const signup =async(event)=>{
      event.preventDefault();
      console.log(user);
      var dataToSubmit = {
           "name" : user.fname +" "+user.lname,
           "email": user.email,
           "pass1": user.pass1,
           "role": "regular"
      };
      //This is data which will hit the backend apis.
      console.log(dataToSubmit);
      const response = await axios.post("https://faketasksapi.onrender.com/users",dataToSubmit);
      if(response.data){
          alert("SignUp Done");
          navigate("/users");
      }else{
          alert("Unable to signup now");
      }
   }

   const handleLogin=(event)=>{
        const {name,value} = event.target;
        setLoginUser({...loginUser,[name]:value});
   }
   const signin = async(event)=>{
        event.preventDefault();
        console.log(loginUser);
        var dataToLogin = {
            "email":loginUser.email2,
            "pass1":loginUser.passw
        };
        console.log(dataToLogin);
        const response = await axios.get("https://faketasksapi.onrender.com/users");
        const allUsers = await response.data;
        console.log(allUsers);
        const loggedUser= allUsers.find((user)=> user.email == dataToLogin.email && user.pass1 == dataToLogin.pass1);
        console.log(loggedUser);
        if(!loggedUser){
          alert("Invalid username or Password");
        }
        else {
            //We will store the users details in localStorage
            //or apiContext
            localStorage.setItem("user_id",loggedUser.id);
            localStorage.setItem("user",loggedUser.name);
            localStorage.setItem("role",loggedUser.role);
           // navigate("/tasks");
           //client side redirect
           window.location.href='/tasks';
        }
   }
  return (
    <>
    <header className="modal-header">
       <h2>This is User's Panel</h2> 
    </header>
     <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 border-right">
           <header className="modal-header">
            <h4>SIGNUP:</h4>
            </header> 
            <form onSubmit={signup}>
            <div className="form-group">
              <div className="row">
                <div className="col">FirstName : <input type="text" name="fname" required className='form-control' onChange={handleUser} /></div>
                <div className="col">LastName : <input type="text" name="lname" required className='form-control' onChange={handleUser} /></div>
              </div>
            </div>
            <div className="form-group">
                Email : <input type="text" name='email' onChange={handleUser} required className='form-control'/>
            </div>
            <div className="form-group">
                <div className="row">
                  <div className="col">Password : <input type="password" name="pass1" required className='form-control' onChange={handleUser} /></div>
                  <div className="col">Confirm Password : <input type="password" name="pass2" required className='form-control' onChange={handleUser} /></div>

                </div>
            </div>
            <div className="form-group">
              <button className="btn btn-sm btn-outline-dark">Submit</button> |
              <button className="btn btn-sm btn-outline-success" type='reset'>Reset</button>
            </div>
            </form>
        </div>
        <div className="col-lg-6">
            <header className="modal-header">
              <h4>SIGNIN:</h4>
            </header>
            <form onSubmit={signin}>
            <div className="form-group">Email : <input type="text" name="email2" required className='form-control'  onChange={handleLogin}/></div>
            <div className="form-group">Password : <input type="password" name="passw" required className='form-control' onChange={handleLogin} /></div>
            <div className="form-group">
              <button className="btn btn-outline-primary">Login</button> |
              <button className="btn btn-outline-info" type='reset'>Reset</button> 
              
            </div>
            </form>
        </div>
      </div>
     </div> 
    </>
  )
}

export default Users
