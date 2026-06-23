
//Q)React component to demonstrate state and normal variable usage
import React, { Component } from 'react'

export default class Child2 extends Component {
  xyz=200;
  constructor(){
    super();
    this.state={
      "x":100
    }
  }
  increaseCounter=()=>{
    this.setState({x:this.state.x+1});
    this.xyz++;
  }
  decreaseCounter=()=>{
    this.setState({x:this.state.x-1});
    this.xyz--;
  }
  resetCounter=()=>{
    this.setState({x:100});
    this.xyz=200;
  }
  render() {
    return (
      <div>
        <p>State variable value is :{this.state.x}</p>
        <p>Normal variable value :{this.xyz}</p>
        <p>Value from parent is :{this.props.message1}</p>
        <button onClick={()=>this.increaseCounter()}>Increse</button>
        <button onClick={()=>this.decreaseCounter()}>decrese</button>
        <button onClick={()=>this.resetCounter()}>REset</button>
      </div>
    )
  }
}
