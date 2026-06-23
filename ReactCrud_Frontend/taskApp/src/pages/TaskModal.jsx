import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskModal = ({ task_id }) => {
  const [task, setTask] = useState({});
  const [taskObj,setTaskObj] = useState({});
  const navigate = useNavigate();
  const currentDate = ()=>{
    let dt = new Date();
    return dt.getDate()+"-"+(dt.getMonth()+1)+"-"+dt.getFullYear();

  }
  useEffect(() => {
    if(!task_id) return ;
    console.log(task_id);
    const getTaskById = async () => {
      try {
        const response = await axios.get("https://faketasksapi.onrender.com/tasks/" + task_id);
        console.log(response.data);
        setTask(response.data);
        titleRef.current.value = response.data.task_title;
        descRef.current.value =  response.data.task_desc;
      } catch (error) {
        console.log(error);
      }
    };
    getTaskById(); // ✅ no need to pass task_id
  }, [task_id]); // ✅ include dependency if it might change

  const titleRef= useRef("");
  const descRef = useRef("");

  const handleModalChange =(event)=>{
       const {name,value} = event.target;
       setTaskObj({...taskObj,[name]:value});
  }
  const handleModalSubmit =async(event)=>{
       event.preventDefault();
       console.log(taskObj);
       const dataToUpdate = {"task_title": taskObj.title,"task_desc":taskObj.desc,"created":currentDate()};
       console.log(dataToUpdate);
       const response =  await axios.patch("https://faketasksapi.onrender.com/tasks/"+task_id,dataToUpdate);
       if(response.data){
        alert("One Task has been updated successfully");
        //navigate("/tasks");
        //Client side redirection.
        window.location.href="/tasks"; 
      } else{
         alert("Something went wrong");

       }
      }

      const deleteTask = async()=>{
        var r = confirm("Do You want to Delete This Task ?");
        if(r){
         const response =  await axios.delete("https://faketasksapi.onrender.com/tasks/"+task_id);
         if(response.data){
             alert("One Task has been deleted successfully");
             window.location.href='/tasks';
            }else{
            alert("Unble to Delete Tasks");

         }
        }
      }
  return (
    <>
      <div id="taskModal" className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Show Task:</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleModalSubmit}>
              <div className="form-group">Title: <input type="text" name="title" ref={titleRef} onChange={handleModalChange} className='form-control'/></div>
              <div className="form-group">Description: <textarea name="desc" ref={descRef} id="desc" cols="30" rows="10" onChange={handleModalChange} className='form-control'></textarea></div>
              <div className="form-group">Created: {task.created}</div>
              <div className="form-group">
                <button className="btn btn-sm btn-outline-primary">UPDATE</button> |
                <button type='button' className="btn btn-sm btn-outline-danger" onClick={deleteTask}>DELETE</button>
              
              </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskModal;
