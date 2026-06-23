import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <div>
      <h2>AppComp: [ParentComp]:</h2>
      {/*Here we will create or configure routes */}
      {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </nav>*/}
      <Navbar/>
      <br/><br/>
      <div className="container-fluid card p-3 m-3">
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>

         <Footer company="EJOBINDIA"/>
     
    </div>

  )
}

export default App