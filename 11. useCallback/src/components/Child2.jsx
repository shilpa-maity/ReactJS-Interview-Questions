import React from 'react'

const Child2 = ({text,count}) => {
    console.log("Child2 renders");
  return (
    <div>
      <h2>Child2:</h2>
      <h4>{text} -- {count}</h4>
    </div>
  )
}

export default  React.memo(Child2)