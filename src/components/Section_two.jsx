import React from 'react'
import line1 from '../images/Line 4.png'
import line2 from '../images/Line 3.png'
import carImage from '../images/Frame 42.png'
import './component-css/sectionTwo.css'
import img from '../images/Group 336.png'

const Section_two = () => {
    return (
        <div className="myDiv">
            <div className='text-center container my-5'>
                <div className="d-flex justify-content-center my-5">
                    <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
                    <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} ><span style={{ color: "#00E300" }}>Vehicle</span>  Size</p>
                    <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
                </div>

            </div>
            <div className="row container">
                <div className="col-12 d-flex justify-content-center">
                  <img src={carImage} alt="" srcset=""className='w-75' />
                </div>

            </div>
            <div className="container d-flex justify-content-center my-5 text">
            <img src={img} alt="" srcset="" width={'40.86px'} height={'32.22px'}/>
                <p className='car-text mx-3'>Cars Size Guide</p>
                
            </div>
        </div>

    )
}

export default Section_two