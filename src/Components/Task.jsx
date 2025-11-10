import React, { Component } from 'react'

 class Task extends Component {
    constructor(){
        super()
        this.state={
            count:0
        
        }
    }
    Increament=()=>{
      const New = this.state.count+1;
      this.setState({count:New})
      document.title=`count:${New}`

    }
    Decreament=()=>{
        const New =this.state.count-1;
        this.setState({count:New})
        document.title=`count:${New}`
    }
  render() {
    return (
      <div>
        <h2> count:{this.state.count}</h2>
        <button className="btn btn-primary me-2" onClick={this.Increament}>Increment</button>
        <button className='btn btn-danger me-2' onClick={this.Decreament}>Decreament</button>
        </div>
    )
  }
}

export default Task