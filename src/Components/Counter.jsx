import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        // this.state={
        //     Count:0
        // }
    }
    state={
        count:0
    }
    Increamenthandler=()=>{
        this.setState({count:this.state.count+1})
        this.setState((preState)=>({count:preState.count+1}))
    }
     IncreamentByFivehandler=()=>{
        // this.setState({count:this.state.count+1})
        this.setState((preState)=>({count:preState.count+1}))
        this.setState((preState)=>({count:preState.count+1}))
        this.setState((preState)=>({count:preState.count+1}))
        this.setState((preState)=>({count:preState.count+1}))
        this.setState((preState)=>({count:preState.count+1}))
    }
    Decreamenthandler=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    console.log(this.state.count);
    
    return (
      <div>
        <h2>Counter :{this.state.count}</h2>
        <button className='btn btn-primary 'onClick={this.Increamenthandler}>Increament</button>
        <button className='btn btn-success me-1'onClick={this.IncreamentByFivehandler}>Increament 5</button>
        <button className='btn btn-success me-1' onClick={this.Decreamenthandler}>Decreament</button>
        <button className='btn btn-danger me-1' onClick={()=>{this.setState({count:0})}}>Reset</button>
         </div>
    )
  }
}

export default Counter