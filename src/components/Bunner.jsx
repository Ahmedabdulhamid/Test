import React from 'react'
import groupImage from '../images/Group 1.png'; 
import { CiPhone } from "react-icons/ci";
export const Bunner = () => {
  return (
    <div style={{backgroundColor:"#0F2013"}}>
      <div className="container mt-2 py-2">
        <div className="d-flex justify-content-between">
           <img src={groupImage} alt="" srcset="" />
           <div className="mydiv text-light">
           <span style={{textTransform:"uppercase",fontFamily: 'Cairo, sans-serif'}} >hotline number</span>
             <CiPhone style={{color:"#00E300"}} className='fs-3'/>
             <p style={{color:"#00E300"}}>  9200 35 406</p>
           </div>
           
        </div>
      </div>
    </div>
  )
}
