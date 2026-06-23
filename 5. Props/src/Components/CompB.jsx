//Component Chaining : CompA,CompB,CompC
// This component is a child component of CompA and a parent component for CompC
import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  return (
    <div>
      <h1>This is CompB</h1>
      <p>Value from Parent:{props.message1}</p>
      <CompC message2={props.message1}/>
    </div>
  )
}

export default CompB
