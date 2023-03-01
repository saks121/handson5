import React from 'react'
import Comp2 from './Comp2'

export default function HOC(props) {
  return (
    <>
    <div style={{backgroundColor:'pink',width:'200px'}}>
        <props.propdata/>
    
    </div>
    <div style={{backgroundColor:'green',width:'200px'}}>
        <props.propdata/>

    </div>


    </>
  )
}
