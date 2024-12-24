import React from 'react'
import line1 from '../images/Line 4.png'
import line2 from '../images/Line 3.png'
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import { FaPlus } from "react-icons/fa6";

import Typography from '@mui/material/Typography';
import img1 from '../images/8347db20b6aa06bf7f19a492fe4fd3fd.jpg'
import img2 from '../images/c3f9db7586e14d4585893e50e7859c96.jpg'
import img3 from '../images/4d48e182ca493479989d81baab2d8333.jpg'
import img4 from '../images/f48d6dcb8a3d8c4a1732753e4b8279f9.jpg'
import './component-css/section_three.css';
import { CiClock1 } from "react-icons/ci";
import Button from '@mui/material/Button';
const Section_Four = () => {
    return (
        <div className='text-center  container my-5'>
            <div className="d-flex justify-content-center my-5">
                <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3'style={{minWidth:"25px"}}  />
                <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} ><span style={{ color: "#00E300" }}> Additional</span>  Services</p>
                <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3'style={{minWidth:"25px"}}  />
            </div>
            <div className="grand d-flex justify-content-center">
            <div className="container ">
                <div className="row d-flex justify-content-center ">
                    <div className="col-lg-3 col-md-3 col-sm-12 my-3">
                        <Card sx={{ maxWidth: 248 }} className='position-relative card1' style={{ borderRadius: "25PX" }}>
                            <div className="home-sec">

                            </div>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={img1}
                            />

                            <Typography gutterBottom variant="h5" component="div" className='typography position-absolute top-0 py-3 text-center'style={{zIndex:"3000"}}>


                                <p className='text-center'> Interior Detailing</p>

                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='business_hours 'style={{zIndex:"3000"}}>



                                <span className='text-center position-absolute  business_hours' style={{ top: '25%' ,zIndex:"3000"}}> <CiClock1 /> 8 business hours</span>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='position-absolute   ' style={{ left: "16%", top: "32%",zIndex:"3000" }}>
                                <div className="parent-typo">
                                    <p className='' style={{ fontWeight: "700", fontSize: "20px", lineHeight: "37.48px", color: "#FFFFFF" }}>80 <span style={{ fontWeight: "500", fontSize: "12px", lineHeight: "14.4px" }}>SAR</span></p>
                                    <p style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: "500", lineHeight: "14.4px" }}>Before <p style={{ color: "#AB0F0F", fontWeight: "400", fontSize: "12px", lineHeight: "22.49px", textDecoration: "Strikethrough" }}>1000</p></p>

                                    <Button className='px-4 py-2' endIcon={<FaPlus />} style={{ border: "1px solid #FFFFFF", color: "#FFFFFF" }}>
                                        select service
                                    </Button>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" className=' position-absolute top-100 py-3 text-center'>


                                    <p className='text-center' style={{ color: '#00E300', textTransform: "uppercase" }}>More information</p>

                                </Typography>

                            </Typography>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 my-3">
                        <Card sx={{ maxWidth: 248 }} className='position-relative card1' style={{ borderRadius: "25PX" }}>
                            <div className="home-sec">

                            </div>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={img2}
                            />

                            <Typography gutterBottom variant="h5" component="div" className='typography position-absolute top-0 py-3 text-center'style={{zIndex:"3000"}}>


                                <p className='text-center'> Interior Detailing</p>

                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='business_hours '>



                                <span className='text-center position-absolute  business_hours' style={{ top: '25%',zIndex:"3000" }}> <CiClock1 /> 8 business hours</span>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='position-absolute ' style={{ left: "16%", top: "32%",zIndex:"3000" }}>
                                <div className="parent-typo">
                                    <p className='' style={{ fontWeight: "700", fontSize: "20px", lineHeight: "37.48px", color: "#FFFFFF" }}>80 <span style={{ fontWeight: "500", fontSize: "12px", lineHeight: "14.4px" }}>SAR</span></p>
                                    <p style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: "500", lineHeight: "14.4px" }}>Before <p style={{ color: "#AB0F0F", fontWeight: "400", fontSize: "12px", lineHeight: "22.49px", textDecoration: "Strikethrough" }}>1000</p></p>

                                    <Button className='px-4 py-2' endIcon={<FaPlus />} style={{ border: "1px solid #FFFFFF", color: "#FFFFFF" }}>
                                        select service
                                    </Button>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" className=' position-absolute top-100 py-3 text-center'>


                                    <p className='text-center' style={{ color: '#00E300', textTransform: "uppercase" }}>More information</p>

                                </Typography>

                            </Typography>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 my-3">
                        <Card sx={{ maxWidth: 248 }} className='position-relative card1' style={{ borderRadius: "25PX" }}>
                            <div className="home-sec">

                            </div>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={img3}
                            />

                            <Typography gutterBottom variant="h5" component="div" className='typography position-absolute top-0 py-3 text-center'style={{zIndex:"3000"}}>


                                <p className='text-center'> Interior Detailing</p>

                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='business_hours '>



                                <span className='text-center position-absolute  business_hours' style={{ top: '25%' ,zIndex:"3000"}}> <CiClock1 /> 8 business hours</span>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='position-absolute   ' style={{ left: "16%", top: "32%",zIndex:"3000" }}>
                                <div className="parent-typo">
                                    <p className='' style={{ fontWeight: "700", fontSize: "20px", lineHeight: "37.48px", color: "#FFFFFF" }}>80 <span style={{ fontWeight: "500", fontSize: "12px", lineHeight: "14.4px" }}>SAR</span></p>
                                    <p style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: "500", lineHeight: "14.4px" }}>Before <p style={{ color: "#AB0F0F", fontWeight: "400", fontSize: "12px", lineHeight: "22.49px", textDecoration: "Strikethrough" }}>1000</p></p>

                                    <Button className='px-4 py-2' endIcon={<FaPlus />} style={{ border: "1px solid #FFFFFF", color: "#FFFFFF" }}>
                                        select service
                                    </Button>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" className=' position-absolute top-100 py-3 text-center'>


                                    <p className='text-center' style={{ color: '#00E300', textTransform: "uppercase" }}>More information</p>

                                </Typography>

                            </Typography>
                        </Card>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 my-3 ">
                        <Card sx={{ maxWidth: 248 }} className='position-relative card1' style={{ borderRadius: "25PX" }} >
                            <div className="home-sec">

                            </div>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="300"
                                image={img4}
                            />

                            <Typography gutterBottom variant="h5" component="div" className='typography position-absolute top-0 py-3 text-center'style={{zIndex:"3000"}}>


                                <p className='text-center'> Interior Detailing</p>

                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='business_hours '>



                                <span className='text-center position-absolute  business_hours' style={{ top: '25%',zIndex:"3000" }}> <CiClock1 /> 8 business hours</span>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" className='position-absolute  ' style={{ left: "16%", top: "32%",zIndex:"3000" }}>
                                <div className="parent-typo">
                                    <p className='' style={{ fontWeight: "700", fontSize: "20px", lineHeight: "37.48px", color: "#FFFFFF" }}>80 <span style={{ fontWeight: "500", fontSize: "12px", lineHeight: "14.4px" }}>SAR</span></p>
                                    <p style={{ color: "#FFFFFF", fontSize: "12px", fontWeight: "500", lineHeight: "14.4px" }}>Before <p style={{ color: "#AB0F0F", fontWeight: "400", fontSize: "12px", lineHeight: "22.49px", textDecoration: "Strikethrough" }}>1000</p></p>

                                    <Button className='px-4 py-2' endIcon={<FaPlus />} style={{ border: "1px solid #FFFFFF", color: "#FFFFFF" }}>
                                        select service
                                    </Button>
                                </div>
                                <Typography gutterBottom variant="h5" component="div" className=' position-absolute top-100 py-3 text-center'>


                                    <p className='text-center' style={{ color: '#00E300', textTransform: "uppercase" }}>More information</p>

                                </Typography>

                            </Typography>
                        </Card>
                    </div>
                </div>
                <p style={{fontWeight:"400",fontSize:"24px",lineHeight:"33.6px",color:"#FFFFFF"}} className='my-3'><span style={{color:"#00E300"}}>*</span> Autopia undertakes that all prices of the services provided on our website are identical to the prices of the branches and any seasonal discounts are automatically added to our website</p>
            </div>
            </div>
          

        </div>
    )
}

export default Section_Four