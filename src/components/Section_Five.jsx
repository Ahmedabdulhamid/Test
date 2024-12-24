import React from 'react'
import line1 from '../images/Line 4.png'
import line2 from '../images/Line 3.png'
import img1 from '../images/Group.png'
import img2 from '../images/Frame 3.png'
import img3 from '../images/Morni01-removebg-preview 1.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './component-css/section_five.css'
const Section_Five = () => {
    return (
        <div className="">
            <div className='text-center container my-5'>
                <div className="d-flex justify-content-center my-5">
                    <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3'style={{minWidth:"25px"}} />
                    <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} ><span style={{ color: "#00E300" }}> Choose</span> time <span style={{ color: "#00E300" }}>&</span>branch</p>

                    <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' style={{minWidth:"25px"}} />
                </div>

            </div>

            <Form className='container my-5'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='label'>Choose The Region</Form.Label>
                            <Form.Control className='input' type="text" placeholder="City" />

                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='label'>Choose The Branch</Form.Label>
                            <Form.Control className='input' type="text" placeholder="Choose The Branch" />
                        </Form.Group>
                    </div>
                </div>




            </Form>
            <div className='text-center container my-5'>
                <div className="d-flex justify-content-center my-5">
                    <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3'style={{minWidth:"25px"}}  />
                    <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} ><span style={{ color: "#00E300" }}>BOOKING</span>  information</p>
                    <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3'style={{minWidth:"25px"}}  />
                </div>
                 
            </div>
            <Form className='container my-5'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='label-2' style={{textTransform:"capitalize"}}>first name</Form.Label>
                            <Form.Control className='input-2' type="text" placeholder="City" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='label-2' style={{textTransform:"capitalize"}}>phone number</Form.Label>
                            <Form.Control className='input-2' type="text" inputMode='numeric' placeholder="xxxxxxxxxxx" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='label-2' style={{textTransform:"capitalize"}}>email</Form.Label>
                            <Form.Control className='input-2' type="email" placeholder="Email" />

                        </Form.Group>
                        <Form.Group className="mt-5 last py-4 " controlId="formBasicEmail"style={{width:"90%"}}>
                            <div className="first-one d-flex mx-4 text-center ">
                            <img src={img2} alt="" width={'31px'} height={'31px'} srcset="" />
                                <p style={{textTransform:"capitalize",color:"#FFFFFF",fontWeight:'400',fontSize:'16px'}} className='mx-3'> do you have voucher code?</p>
                                <img src={img1} alt="" width={'29.71px'} height={'22.86px'} srcset="" />
                            </div>
                           
                           
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='label-2'>last name</Form.Label>
                            <Form.Control className='input-2' type="text" placeholder="Choose The Branch" />
                        </Form.Group>
                        <Form.Group className="mt-5" controlId="formBasicPassword">
                            <button style={{background:"#00E300",padding:"8px 40px",outline:"none",cursor:"pointer",borderRadius:"8PX",border:"none"}}>OTP</button>
                        </Form.Group>
                        <Form.Group className="mt-5 d-flex" controlId="formBasicPassword">
                        
                            <Form.Control className='input-2' type="email" placeholder="Discount Coupon" style={{width:"60%"}} />
                           <button className='mx-2 mt-2' type='submit' style={{padding:"8px 40px",color:"#00E300",background:"transparent",border:"1px solid #00E300"}}>Apply</button>
                        </Form.Group>
                        <Form.Group className="mt-5 last py-4" controlId="formBasicEmail">
                            <div className="x first-one d-flex mx-4 text-center">
                            <img src={img2} alt="" width={'31px'} height={'31px'} srcset="" />
                                <p style={{textTransform:"capitalize",color:"#FFFFFF",fontWeight:'400',fontSize:'16px'}} className='mx-3'>  Now it's easy to reach us, Pick the truck type</p>
                                <img src={img3} alt="" width={'80.27px'} height={'41.48px'} srcset="" />
                            </div>
                           
                           
                        </Form.Group>
                    </div>
                </div>




            </Form>
        </div>
    )
}

export default Section_Five