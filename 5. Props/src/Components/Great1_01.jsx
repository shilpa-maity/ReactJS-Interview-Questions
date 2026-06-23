import React,{Component} from "react";
import Great2_01 from "./Great2_01";
export class Great1_01 extends Component{
  render(){
    return(

      <div className='card p-3 m-3'>
        <h2 className='modal-header'>This is Great1 ChildComponent :</h2>
         <p className='alert alert-success'> {this.props.message}</p>
           <p className='alert alert-info'>Sum= {Number(this.props.x)+Number(this.props.y)}</p>
            <p className='alert alert-danger'>Sub= {  Number(this.props.x)-Number(this.props.y)}</p>
           <p className='alert alert-warning'>Mult= {  Number(this.props.x)*Number(this.props.y)}</p>
           <p className='alert alert-primary'>Div= {  parseInt(parseInt(this.props.x)/parseInt(this.props.y))}</p>
           <p className='alert alert-dark'>Remainder= {  parseInt(this.props.x)% parseInt(this.props.y)}</p>

           <Great2 message2={this.props.message} x={this.props.x} y={this.props.y}/>
      </div>
    )
  }
}
export default Great1_01;