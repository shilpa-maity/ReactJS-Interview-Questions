import React, { useEffect, useState } from 'react'

const Api_Seniority_Ex_05 = () => {
    const [user,setUser]= useState({});
    const [allUsers,setAllUsers]=useState([]);
    const handleChange =(event)=>{
        console.log(event.target.name,event.target.value);
        if(event.target.name=="nm"){
            setUser({...user,['name']:event.target.value});
        }
        if(event.target.name =="ag"){
            if(event.target.value >=60){
                setUser({...user,["ag"]:event.target.value,['seniroty']:true});

            }else {
                setUser({...user,["ag"]:event.target.value,['seniroty']:false});

            }
        }
       
    }
    const deleteUser =(userObj)=>{
        console.log(userObj);
        var r = confirm("Do You want to delete this record ?");
        if(r){
        const index = allUsers.indexOf(userObj);
        //Deep copy
        const updatedUsers = JSON.parse(JSON.stringify(allUsers));
        updatedUsers.splice(index,1);
        //const updatedUsers = allUsers.filter(user => user.name !== userObj.name);
        setAllUsers(updatedUsers);
        }
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(user);
        setAllUsers([...allUsers,user]);
    }
    //calling another useEffect when senior citizen has been detected
    useEffect(()=>{
        // alert("User is Senior Citizen");
    },[user.seniroty])
    useEffect(()=>{
        console.log("component loaded");
    },[]);
  return (
    <div>
        <form onSubmit={handleSubmit}>

        <p>Name : <input type="text" onChange={handleChange} name='nm' required/></p>
        <p>Age : <input type="number" onChange={handleChange} name="ag" required/></p>
        <p><button>Submit</button></p>
       </form>
       {user.seniroty && (<p>User is Senior CityZen</p>)}

       {allUsers.length>0 && (
           <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name:</th>
                    <th>Age:</th>
                    <th>Seniority:</th>
                </tr>
           </thead>
                <tbody>
                {allUsers.map((userObj,index)=>(
                  <tr key={index}>
                    <td><button onClick={()=>deleteUser(userObj)}>Delete</button></td>
                    <td>{userObj.name}</td>
                    <td>{userObj.ag}</td>
                    <td>{userObj.seniroty ? (<span style={{'color':'red'}}>Senior CityZen</span>) : 'Normal' }</td>
                </tr>
                ))}
                </tbody>
           
           </table>

       )}
    </div>
  )
}

export default Api_Seniority_Ex_05