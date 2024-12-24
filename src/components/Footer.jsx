import React from 'react'
import groupImage from '../images/Group 1.png'; 
import img1 from '../images/fluent_location-16-regular.png'
import { FaTiktok } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
const Footer = () => {
  return (
    <div className='mt-5' style={{background:"#0F2013"}}>
       <div className="row container py-5">
        <div className="col-lg-3 col-md-3 col-sm-12 my-3">
          <img src={groupImage} alt="" />
          <p className='my-3'style={{fontWeight:"400",fontSize:"16px",lineHeight:"25.6px",color:"#FFFFFF"}}>We are a premium 360 auto detailing studio, offering industry  leading services, products, and expertise in car care. </p>
          <div className="group-2 my-3 d-flex">
          <img src={img1} alt="" srcset="" width={'16px'} height={'16px'}/>
              <p className='text-light mx-1'>Location</p>
              
          </div>
          <div className="mt-5 d-flex">
           <FaTiktok className='fs-3 p-1 mx-1' style={{color:'#021407',background:"#00E300",borderRadius:"50%",width:"24px",height:"24px"}}/>
           < CiBellOn className='fs-3 p-1 mx-1' style={{color:'#021407',background:"#00E300",borderRadius:"50%",width:"24px",height:"24px",fontWeight:"700"}}/>
           < FaInstagram className='fs-3 p-1 mx-1' style={{color:'#021407',background:"#00E300",borderRadius:"50%",width:"24px",height:"24px",fontWeight:"700"}}/>
           < FaFacebookF className='fs-3 p-1 mx-1' style={{color:'#021407',background:"#00E300",borderRadius:"50%",width:"24px",height:"24px",fontWeight:"700"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 my-3 ">
         <p className='text-light' style={{fontWeight:"400",fontSize:"24px"}}>Company</p>
         <div>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF" ,lineHeight:"25.6px",cursor:"pointer"}} >Home</li>
         <li className='my-2' style={{ontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >About Us</li>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Services</li>
         <li className='my-2' style={{ontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Booking</li>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Contact Us</li>
         <li className='my-2' style={{ontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Franchise </li>
         </div>
          
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 my-3">
         <p className='text-light' style={{fontWeight:"400",fontSize:"24px"}}>Services</p>
         <div>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF" ,lineHeight:"25.6px",cursor:"pointer"}} >Polishing</li>
         <li className='my-2' style={{ontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Thermal Insulation</li>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Nanoceramics</li>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Paint Protection Films</li>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Other Related Services</li>

         </div>
          
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 my-3">
         <p className='text-light' style={{fontWeight:"400",fontSize:"24px"}}>Help</p>
         <div>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF" ,lineHeight:"25.6px",cursor:"pointer"}} >FQA</li>
         <li className='my-2' style={{ontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Privacy Policy</li>
         <li className='my-2' style={{fontWeight:"400",fontSize:"16px",listStyle:"none",color:"#FFFFFF",lineHeight:"25.6px",cursor:"pointer"}} >Terms & Conditions</li>

         </div>
          
        </div>
       </div>
       <hr className='text-light p3-5 container fs-1'/>
      
       <p className='text-center py-3'style={{color:"#C2BFB8",fontSize:"14px",fontWeight:"400"}}>© 2024 Autopia. All rights reserved.</p>
    </div>
  )
}

export default Footer