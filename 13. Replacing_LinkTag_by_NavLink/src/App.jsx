 <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/*We will mentioned the wild card routes at the end of all mentioned routes */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>