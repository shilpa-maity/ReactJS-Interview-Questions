import React from 'react'

const ChildComp = (props) => {
  const user={
    'id':1001,
    'name':"Shilpa",
    "age":20,
    "gender":"Female"
  }
  return (
    <div>
      <h1>This is child component</h1>
      <button onClick={()=>props.greetHandler(user)}>Send value</button>
    </div>
  )
}

export default ChildComp
