import axios from 'axios';
import React, { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate';
import './Paginator.css';
import TaskModal from '../pages/TaskModal';
import { useNavigate } from 'react-router-dom';
const Tasks = () => {
    const [tasks,setTasks]= useState([]);
    const [searchedTask,setSearchedTask]= useState([]);
    {/*Pagination code started here */}
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const offset = currentPage * itemsPerPage;
  const currentItems = tasks.slice(offset, offset + itemsPerPage);
  {/* end of Pagination */}


     //on load only
        async function fetchTasks(){
          try{
            if(localStorage.role =="regular"){
            const response  = await axios.get("https://faketasksapi.onrender.com/tasks");
            //setTasks(tasks.data);
            //User specific tasks display and store into the tasks state variable.
            let actualTasks = response.data.filter((taskObj)=> (taskObj.user_id ==localStorage.user_id));
            setTasks(actualTasks);
            }else if(localStorage.role=="admin"){
               const response  = await axios.get("https://faketasksapi.onrender.com/tasks");
               setTasks(response.data);
            
            }

        }
          catch(error){
            console.log(error);
          }
        }
    useEffect(()=>{
        
       fetchTasks(); 
    },[]);//it will execute on load once.
    const [loggedUser,setLoggedUser]= useState("");
    useEffect(()=>{
        //if not loggedIn then redirect to UsersComp.
         
      setLoggedUser(localStorage.user);
        
    },[localStorage.user_id]);//when localStorage will have the value

    const handleSearch = (event)=>{
        let data = event.target.value;
        //console.log(data);
        if(data.length>=3){
            console.log("search will begins");
            console.log(data);
           let data2= tasks.filter((taskObj)=> taskObj.task_title.toLowerCase().includes(data.toLowerCase()));
           setSearchedTask(data2);
           //copy this data to currentItems 
          
        }
    }
    //to see api data has comes or not.
    console.log(tasks);
   //to see search data 
   console.log(searchedTask);
   const [taskId,setTaskId]= useState(0);
   const show = (taskid)=>{
    console.log(taskid);
    setTaskId(taskid);
   }
   function generateDate(){
    let dt = new Date();
    return dt.getDate()+"-"+(dt.getMonth()+1)+"-"+dt.getFullYear();
   }
   const [postTask,setPostTask] = useState({});
   const handleChange =(event)=>{
      const {name,value} = event.target;
      setPostTask({...postTask,[name]:value});
   }
   const handleSubmit =async(event)=>{
    event.preventDefault();
   // setPostTask({...postTask,['created']:generateDate()});
    var dataToSubmit = {
         'task_title':postTask.title,
         "task_desc": postTask.desc,
         "user_id"  : localStorage.user_id,
         "created"  : generateDate() 
    };
    console.log(dataToSubmit);
    try{
         const response =  await axios.post("https://faketasksapi.onrender.com/tasks",dataToSubmit);
         if(response.data){
              alert("One Task successfully added");
         } else{
              alert("Please try again after some times back");
         }
         fetchTasks();  
    }catch(error){
        console.log(error);
    }
   }
     const navigate = useNavigate();
     const logout = ()=>{
         localStorage.clear();
         //navigate("/users");
         window.location.href='/users';
     }
  return (
    <div className='container card p-3 m-3'>
        <div className="float-right">
            Welcome {loggedUser}
            <a href="#" onClick={logout}>Logout</a>
        </div>
        <div className="form-group">
              <input type="text" className='form-control' placeholder='search title' onChange={handleSearch}/>
        </div>
     <div className="row">
        <div className="col">
        {searchedTask.length==0 ? (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title:</th>
                    <th>Description:</th>
                    <th>Created:</th>
                </tr>
            </thead>
            <tbody>
            {currentItems.map((task,index)=>(
              
                <tr key={index}>
                                    <td><input type="radio" data-target="#taskModal" data-toggle="modal" name="r1" onChange={()=>show(task.id)} /></td>
    
                    <td>{task.task_title}</td>
                    <td>{task.task_desc}</td>
                    <td>{task.created}</td>
                </tr>
            ))}
                       </tbody>
            
        </table> 

         
     ): (
          <table className='table table-hover'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title:</th>
                    <th>Description:</th>
                    <th>Created:</th>
                </tr>
            </thead>
            <tbody>
            {searchedTask.map((task,index)=>(
              
                <tr key={index}>
                    <td><input type="radio" name="r1" onChange={()=>show(task.id)}  data-target="#taskModal" data-toggle="modal"/></td>
                    <td>{task.task_title}</td>
                    <td>{task.task_desc}</td>
                    <td>{task.created}</td>
                </tr>
            ))}
                       </tbody>
            
        </table>

     )}

     
       <ReactPaginate
        previousLabel={"← Prev"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={Math.ceil(tasks.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousClassName={"page"}
        nextClassName={"page"}
        pageClassName={"page"}
        breakClassName={"break"}
      />


        </div>
        <div className="col">
            <header className="modal-header">
                <h4>Add Task:</h4>

            </header>
            <form onSubmit={handleSubmit}>
            <div className="form-group">Title : <input type="text" onChange={handleChange} name="title" required className='form-control' /></div>
            <div className="form-group">Description : <textarea name="desc" onChange={handleChange} id="desc" cols="30" rows="10" required className='form-control'></textarea></div>
            <div className="form-group">
                <button className="btn btn-sm btn-outline-primary">Submit</button>
            </div>
            </form>
        </div>
     </div>
        
       <TaskModal task_id={taskId}/>
    </div>



  )
}

export default Tasks
