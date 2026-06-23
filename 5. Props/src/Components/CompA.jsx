//Component Chaining : CompA,CompB,CompC
//// This component is a parent component for CompB
import React from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <div>
      <h1>CompA:Parent comp of CompB</h1>
      <CompB message1="Hello"/>
    </div>
  )
}

export default CompA
