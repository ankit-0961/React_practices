import React from 'react'

function FunctionComp(props) {
    
  return (
    <div>
        <h2>FunctionComp</h2>
        <h2>course:{props.courseData.course}</h2>
        <h2>Duration:{props.courseData.Duration}</h2>


    </div>
  )
}

export default FunctionComp