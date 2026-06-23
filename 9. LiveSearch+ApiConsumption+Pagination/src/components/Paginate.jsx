import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import PopupModal from './PopupModal'

const Paginate = () => {
  const apiURL=`https://jsonplaceholder.typicode.com/comments`
  //to store all api comments we have taken this state variable
  const [allComments,setAllComments]=useState([])
  //to calculate the currentPage we need to take below state variable
  const [currentPage,setCurrentPage]=useState(0)

  useEffect(()=>{
    console.log("Pagination component loaded")
    //we will be calling the api when components loaded
    const fetchAllComments=async()=>{
      try {
        let response=await axios.get(apiURL)
        console.log(response.data)
        setAllComments(response.data)
      } catch (error) {
        console.log("error occured"+error.message);
      }
    }
    fetchAllComments();
  },[]);

  //For pagination these below calculation we have to perform
  const itemsPerPage=5
  const offSet=currentPage*itemsPerPage;
  const CurrentComments=allComments.slice(offSet,offSet+itemsPerPage);
  const PageCount=Math.ceil(allComments.length/itemsPerPage);

  const handleLinkClick=(event)=>{
    setCurrentPage(event.selected);
    console.log(event.selected);
  }

  //want to store live searched comments in the following state variable
  const [searchedComments, setSearchedComments] = useState([]);

  const handleChange=(event)=>{
    console.log(event.target.value)
    //set a threshold limit
    let searchedItem=event.target.value;
    if(searchedItem.length>=3){
      //only then search will begins
      let searchedData=CurrentComments.filter((cObj)=>{
        if(cObj.body.toLowerCase().includes(searchedItem.toLowerCase())|| cObj.name.toLowerCase().includes(searchedItem.toLowerCase())|| cObj.email.toLowerCase().includes(searchedItem.toLowerCase()))
        {return cObj;

        }
      });
      console.log(searchedData);
      //storing into a state variable
      setSearchedComments(searchedData)
    }
  }

  const [commentId,setCommentId]=useState(0);
  const showComment=(id)=>{
    console.log(id);
    setCommentId(id);
  }

  return (
    <div>
      <h2>PaginationComp:</h2>
      <div className="float-right">
        <input type="text" className="form-control" onChange={handleChange} placeholder='search by description or name or email' />
      </div>
      {/* Ading PopupModal as child component*/ }
      <PopupModal commentId={commentId}/>

      {CurrentComments.length>0 && searchedComments.length==0 && (
        <div className="table-responsive">
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Description:</th>
              </tr>
            </thead>
            <tbody>
              {CurrentComments.map((cObj,index)=>(
                <tr key={index}>
                  <td><input data-target='#modal1' data-toggle='modal' name='r1' type="radio" onChange={()=>showComment(cObj.id)} /></td>
                  <td>{cObj.name}</td>
                  <td>{cObj.email}</td>
                  <td>{cObj.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {searchedComments.length>0 &&(
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name:</th>
                <th>Email:</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {searchedComments.map((cObj,index)=>(
                <tr key={index}>
                    <td><input data-target='#modal1' data-toggle='modal' name='r1' type="radio" onChange={()=>showComment(cObj.id)} /></td>
                    <td>{cObj.name}</td>
                    <td>{cObj.email}</td>
                    <td>{cObj.body}</td>

                  </tr>

              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ReactPaginate component initialized  from react-paginate library */}
        <ReactPaginate
          previousLabel={"<----Previous"}
          nextLabel={"Next----->"}
          breakLabel={"..."}
          pageCount={PageCount}
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
