
// import React, { useContext } from 'react'
// import CompC from './CompC'
// import { postProvider } from '../context/AppContext';


// const CompB = () => {
//    const postsData = useContext(postProvider);

//     return (
//     <div>
//       <h2>Welcome to CompB</h2>
//       <p>Child of CompA</p>
//       {postsData.length!=0 && (
//            <table>
//             <thead>
//                 <tr>
//                     <th>Title:</th>
//                     <th>Description:</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {postsData.slice(0,10).map((post,index)=>(
//                 <tr key={index}>
//                 <td>{post.title}</td>
//                 <td>{post.body}</td>
//                 </tr>
//                 ))}
               
//             </tbody>
//            </table>

//       )}
//       <CompC/>
//     </div>
//   )
// }

// export default CompB












import React, { useContext, useState } from 'react'
import CompC from './CompC'
import { postProvider } from '../context/AppContext';

const CompB = () => {
  const postsData = useContext(postProvider);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Live Search Filter
  const filteredPosts = postsData.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle Page Change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <h2>Welcome to CompB</h2>
      <p>Child of CompA</p>

      {/* 🔍 Live Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // reset to page 1 on search
        }}
      />

      {/* 📄 Display Table */}
      {currentPosts.length > 0 ? (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post, index) => (
              <tr key={index}>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matching posts found.</p>
      )}

      {/* ⏩ Pagination Buttons */}
      {totalPages > 1 && (
        <div style={{ marginTop: '10px' }}>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx + 1)}
              style={{
                marginRight: '5px',
                backgroundColor: currentPage === idx + 1 ? '#333' : '#ccc',
                color: currentPage === idx + 1 ? '#fff' : '#000',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}

      <CompC />
    </div>
  );
}

export default CompB;
