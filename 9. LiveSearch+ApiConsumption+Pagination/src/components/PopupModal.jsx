//Implementing bootstrap-4 Modal as a child componenets

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PopupModal = ({commentId}) => {
  const[comment,setComment]=useState({})
  useEffect(()=>{
    console.log("Modal appears");

    const fetchSingleComments=async()=>{
      try {
          let response =  await axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
        setComment(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchSingleComments()
  },[commentId])
  return (
    <>
         {/*Bootstrap Modal will be copy paste */}
      <div id='modal1' className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{comment.name}'s Info:</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Name : {comment.name}</p>
        <p><strong>Description:</strong>{comment.body}</p>
        <p>Email : {comment.email}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
       </div>
    </div>
  </div>
</div>
     </>
  )
}

export default PopupModal
