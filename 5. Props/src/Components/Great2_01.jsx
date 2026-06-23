
import React, { Component } from 'react'

export class Great2_01 extends Component {
  render() {
    return (
      <div className='card p-3 m-3'>
          <h2 className='modal-header'>Great2 Child Component of Great1</h2>
          <p className='alert alert-danger'>Value from Parent : {this.props.message2}</p>
          <p className='alert alert-info'>Average of x & y is {Number(Number(this.props.x)+Number(this.props.y))/2}</p>
      </div>
    )
  }
}

export default Great2_01