import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import './Paginate.css'

const Paginate = () => {
  const apiURL="https://jsonplaceholder.typicode.com/comments"
  const [allComments, setAllComments] = useState([])
  const[currentPage, setCurrentPage] = useState(0)
  
  useEffect(()=>{
    console.log("Paginate component loaded")
    //We will be calling the api when components is loaded
    const fetchAllComment=async()=>{
      try {
        let response=await axios.get(apiURL)
        console.log(response.data)
        setAllComments(response.data)
      } catch (error) {
        console.log("Error occured"+error.message)
      }
    }
    fetchAllComment()
  },[])

  const itemsPerPage = 5;
  const offSet=currentPage* itemsPerPage;
  const currentComments = allComments.slice(offSet, offSet + itemsPerPage);
  const pageCount = Math.ceil(allComments.length / itemsPerPage);
  const handleLinkClick=(event)=>{
    console.log(event.selected)
    setCurrentPage(event.selected)
  }

  return (
    <div>
      <h2>Pagination </h2>
      {currentComments.length>0 && (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Name:</th>
                <th>Email</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentComments.map((cObj,index)=>(
                <tr key={index}>
                  <td>{cObj.name}</td>
                  <td>{cObj.email}</td>
                  <td>{cObj.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
         {/*ReactPaginate Component initialized from react-paginate lib */}
        <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handleLinkClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  )
}

export default Paginate
