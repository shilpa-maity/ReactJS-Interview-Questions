import React, { useState } from 'react'
import axios from 'axios';
const Posts_01 = () => {
    const apiUrl=`https://jsonplaceholder.typicode.com/posts`;
    const [posts,setPosts] = useState([]);
    const loadAllPosts = async()=>{
            // let response = await fetch(apiUrl);
            // let posts = await response.json();
            // console.log(posts);
            //using axios
            try{
            let response = await  axios.get(apiUrl);
            let posts    = await response.data;
            console.log(posts);
            setPosts(posts);
            }
            catch(error){
                if(error)
                 console.log(error);
            }
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

       { posts.length>0 && (
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
                        posts.map((postObj,index)=>(
                         <tr key={index}>
                        <td><input type="radio" name={index++}  onChange={()=>handleRadio(postObj.id)}/></td>
                        <td>{postObj.title}</td>
                        <td>{postObj.body}</td>
                         </tr>
                        ))
                    }
                   
                </tbody>
            </table>
            </div>

       )}
    </div>
  )
}

export default Posts_01