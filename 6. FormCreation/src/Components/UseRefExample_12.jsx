import React, { useRef, useState } from 'react'

const UseRefExample_12 = () => {
    const [user,setUser]= useState({});
    //useRef Hooks.
    const fullName = useRef()
    const age      = useRef();

    const handleChange=(event)=>{
         // console.log("name",event.target.name);
          //console.log("value",event.target.value);
         //const {name,value} = event.target;
         //console.log(name,value);
         //setUser({...user,[name]:value});
           var data = {
            "fullName":fullName.current.value,
            "age"     :age.current.value
           };
          // setUser({...user,data});
           setUser({...user,["fullName"]:fullName.current.value,["age"]:age.current.value});


        }
       
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("Submitted");
        console.log(user);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <p>Name : <input type="text" ref={fullName} defaultValue="John" placeholder='e.g John' name="fullname" onChange={handleChange} /></p>
          <p>Age : <input type="number" ref={age} name='age' defaultValue="18" placeholder='age between 18-60' onChange={handleChange} /></p>
          <p>
            <button>Submit</button>
          </p>
          </form>

    </div>
  )
    }

export default UseRefExample_12;