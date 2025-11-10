import React, { Component } from 'react'
import  "./stylings/Externalstyle.css"
import moduleSty from './Stylings/StyleComp.module.css'

 class StyleComp extends Component {
  render() {
    const styles={
        internalstyle:{
        color:'red',
        backgroundColor:'yellow'
     }
    }
    return (
      <div>
        <h2>StyleComp</h2>
        <h4 style={{color:'blue', backgroundColor:'yellow'}}>Inline</h4>
        <h4 style={styles.internalstyle}>Internal</h4>
        <h5>External</h5>
        <h5 className={moduleSty.heading}>Modulecss</h5>
        <h5 className={moduleSty.ele}>Modulecss</h5>
        </div>
    )
  }
}

export default StyleComp