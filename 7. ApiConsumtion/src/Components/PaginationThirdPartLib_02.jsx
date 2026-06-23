
//Adding Pagination in React using Third Party Library REact-Paginate
//npm install react-paginate

import React, { useEffect, useState } from 'react'
//for Pagination purpose
import ReactPaginate from 'react-paginate';
//import './Paginate.css';
import axios from 'axios';
const PaginationThirdPartLib_02 = () => {
    const apiUrl=`https://jsonplaceholder.typicode.com/posts`;
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
   
   
   

    //for pagination purpose
    const itemsPerPage = 5;
    const [currentItems,setCurrentItems] = useState([]);
    const [offset,setOffset] = useState(0);
    const [pageCount,setPageCount]=useState(0);
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
     setOffset(newOffset);
     
  };
  //Hooks will run whenever there will be change in offset value.
  useEffect(()=>{
    //at the component loaded.
      const endOffset = offset + itemsPerPage;
      setCurrentItems(posts.slice(offset, endOffset));
      setPageCount(Math.ceil(posts.length / itemsPerPage));
 
  },[offset,posts]);
    const loadAllPosts = async()=>{
            // let response = await fetch(apiUrl);
            // let posts = await response.json();
            // console.log(posts);
            //using axios
            setLoading(true);
            setTimeout(async()=>{
            try{
            let response = await  axios.get(apiUrl);
            let postsData    = await response.data;
           
            setPosts(postsData);
            console.log(postsData);
            const endOffset = offset + itemsPerPage;
            setCurrentItems(posts.slice(offset, endOffset));
            setPageCount(Math.ceil(posts.length / itemsPerPage));
            setLoading(false);
            }
            catch(error){
                if(error)
                 console.log(error);
                setLoading(false);
            }
            },3000);
             
    }

    const handleRadio = async(postid)=>{
          console.log(postid);
          let response = await axios.get(`${apiUrl}/${postid}`)
          let singlePost = await response.data;
          console.log(singlePost);
          if(singlePost)
          alert("Title "+singlePost.title +"\nBody:"+singlePost.body+"\nUser "+singlePost.userId);
          else {
            alert("No Post available right now");
          }
        }
  return (
    <div>
       <h2>This is PostComponent</h2>
       <div align="center">
       <button onClick={loadAllPosts} className='btn btn-sm btn-outline-primary'>Show All</button>
       </div>

       { loading && posts.length==0 ?
       <p align='center'>Please wait ...<img src="./images/preloader.gif" height='200px' width='330px'/></p>
       :
       (
          <div className="table-responsive">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title:</th>
                        <th>Body:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map((postObj,index)=>(
                         <tr key={index}>
                        <td><input type="radio" name="r1"  onChange={()=>handleRadio(postObj.id)}/></td>
                        <td>{postObj.title}</td>
                        <td>{postObj.body}</td>
                         </tr>
                        ))
                    }
                   
                </tbody>
            </table>
              {/* Pagination UI */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next →"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="← Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName="page"
        nextClassName="page"
        pageClassName="page"
        breakClassName="page"
      />
            </div>

         

       )}
    </div>
  )
}

export default PaginationThirdPartLib_02