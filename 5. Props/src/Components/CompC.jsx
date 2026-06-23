//Component Chaining : CompA,CompB,CompC
// This component is a child component of CompB and a parent component for CompC
import React from 'react'

const CompC = (props) => {
  return (
    <div>
      <h1>This is CompC</h1>
      <p>Value from CompB is {props.message2}</p>
    </div>
  )
}

export default CompC
