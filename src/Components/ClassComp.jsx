import React, { Component } from 'react'

 class ClassComp extends Component {
    constructor(){
        super()
    
    }
  render() {
    // console.log(this.props.course);
    const {course,Duration}=this.props
    
    return (
      <div>
        <h2>ClassComp</h2>
        <h2>course :{course}</h2>
        <h2>Duration:{Duration}</h2>
      </div>
    )
  }
}

export default ClassComp