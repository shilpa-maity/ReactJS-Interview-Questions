//import React, { StrictMode } from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <div>
      <h2>Welcome to CompA</h2>
      <p>Child of App Comp</p>
      {/* <StrictMode> */}
      <CompB/>
      {/* </StrictMode> */}
    </div>
  )
}

export default CompA