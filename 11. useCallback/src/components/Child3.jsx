import React from 'react'

const Child3 = ({handleClick,children}) => {
    console.log("Child3 renders");
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default  React.memo(Child3)