import React from 'react'
import line1 from '../images/Line 4.png'
import line2 from '../images/Line 3.png'
import img1 from '../images/Frame (5).png'
import img2 from '../images/Frame (6).png'
import img3 from '../images/Group (1).png'
import img4 from '../images/Frame (7).png'
import img5 from '../images/Group (2).png'
import img6 from '../images/Frame (8).png'
import img7 from '../images/Frame (9).png'
import img8 from '../images/Frame (10).png'
const Section_Six = () => {
  return (
    <div>
      <div className='text-center container my-5'>
        <div className="d-flex justify-content-center my-5">
          <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3'  style={{minWidth:"25px"}} />
          <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} >
            Summary   <span style={{ color: "#00E300" }}> &</span>emphasis </p>
          <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
        </div>
        <div className="row container mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="child1-summary d-flex justify-content-between p-3 my-3 w-100" style={{ height: "128px", background: "#0F2013" }}>
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >service</p>
              <img src={img1} alt="" srcset="" width={'64px'} height={'64px'} />
            </div>
            <div className="child1-summary d-flex justify-content-between p-3 my-3 w-100" style={{ height: "128px", background: "#0F2013" }}>
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >location

                <p className='text-light mt-4 fw-bold'>-</p>
              </p>
              
              <img src={img2} alt="" srcset="" width={'64px'} height={'64px'} />
            </div>
            <div className="child1-summary d-flex justify-content-between p-3 my-3 w-100" style={{ height: "128px", background: "#0F2013" }}>
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >Date and time</p>
              <img src={img3} alt="" srcset="" width={'64px'} height={'64px'} />
            </div>
            <div className="p-3 w-100 my-3" style={{ height: "128px", background: "#0F2013" }}>
              <div className="child1-summary d-flex justify-content-between">
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >Discount code</p>
              
              <img src={img4} alt="" srcset="" width={'64px'} height={'64px'} />
              </div>

             <p style={{textTransform:"capitalize",fontWeight:"700",fontSize:"18px",color:"#00E300"}} className='text-start mx-2'>Discount coupon was not applied</p>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="child1-summary d-flex justify-content-between p-3 my-3" style={{ height: "128px", background: "#0F2013" }}>
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >car size

                <p className='mt-5'style={{fontWeight:"700",fontSize:"18px"}}>Small</p>
              </p>
              <img src={img5} alt="" srcset="" width={'64px'} height={'64px'} />
            </div>
            <div className="child1-summary d-flex justify-content-between p-3 my-3" style={{ height: "128px", background: "#0F2013" }}>
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >Additional services

                
              </p>
              
              <img src={img6} alt="" srcset="" width={'64px'} height={'64px'} />
            </div>
            <div className="child1-summary d-flex justify-content-between p-3 my-3" style={{ height: "128px", background: "#0F2013" }}>
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >Execution time
                <p style={{textTransform:"capitalize",fontWeight:"700",fontSize:"18px",color:"#00E300"}} className='mt-5'>5 hours</p>
              </p>
              <img src={img7} alt="" srcset="" width={'64px'} height={'64px'} />
            </div>
            <div className="p-3  my-3" style={{ height: "128px", background: "#0F2013" }}>
              <div className="child1-summary d-flex justify-content-between">
              <p style={{ textTransform: 'capitalize', color: "#FFFFFF" }} >Total price</p>
              
              <img src={img8} alt="" srcset="" width={'64px'} height={'64px'} />
              </div>

             <p style={{textTransform:"capitalize",fontWeight:"700",fontSize:"18px",color:"#00E300"}} className='text-start mx-2'>5 SAR``</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section_Six
