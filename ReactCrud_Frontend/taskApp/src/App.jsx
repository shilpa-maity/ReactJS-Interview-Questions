import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import Tasks from './components/Tasks'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <br/><br/>
    <Header/>
    
      {/*We will define the routes */}
      <Routes>
        <Route path='' element={<Users/>}/>
        <Route path='users' element={<Users/>}/>
        {/*After LoggedIn only this routes will gets opened up depends on the value of localStorage */}
        <Route path="tasks" element={localStorage.user_id ? <Tasks/> :<Users/> }/>
      </Routes>
    <Footer/>
  
    </>

  
  )
}

export default App
