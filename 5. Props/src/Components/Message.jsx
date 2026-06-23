//Creating State in React using class component


import React, { Component } from 'react'

export default class Message extends Component {
  count2=100;
  constructor(){
    super();
    this.state={
      "message":"This is state in react",
      "count":1
    }
  }
  changedValue(){
    this.setState({
      "message":"State has been changed",
      "count":this.state.count+1
    })
    this.count2++;
  }
  render() {
    return (
      <div>
        <h1>Class Component State Management : Statefull component </h1>
        <p>value of Message :{this.state.message}</p>
        <p>Value of count:{this.state.count}</p>
        <p>Value of count2:{this.count2}</p>
        <button onClick={()=>this.changedValue()}>Increase Counter</button>
      </div>
    )
  }
}
