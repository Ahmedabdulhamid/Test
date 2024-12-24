import React from 'react'
import line1 from '../images/Line 4.png'
import line2 from '../images/Line 3.png'
import img1 from '../images/Frame.png'
import img2 from '../images/Frame (2).png'
import img3 from '../images/Frame (3).png'
import img4 from '../images/11923454_glue_liquid_bottle_crafts_school_icon (4).png'
import img5 from '../images/mdi_car-2-plus.png'
import img6 from '../images/Frame 3.png'
import img7 from '../images/si_shield-health-safety-line.png'
import img8 from '../images/Frame 1171277574.png'
import { FaPlus } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import './component-css/section_three.css';
import image_card from '../images/ecb1b09bbeadbe99c4f02b7215c721e9.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import img_typography2 from '../images/a47c6bbb69a62e08950e3cd5909dcc44.jpg'
import img_typography3 from '../images/59aa8aa09140a3106b8f60a32b596891.jpg'
import Typography from '@mui/material/Typography';

const Section_three = () => {
    return (
        <div className="container mt-5">
            <div className='text-center container my-5'>
                <div className="d-flex justify-content-center my-5">
                    <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
                    <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} >Packages <span style={{ color: "#00E300" }}>& </span>services</p>
                    <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
                </div>
                <div className="my-3 container">
                    <div className="d-flex justify-content-evenly container over" >
                        <div className="child1 mx-1" >
                            <img src={img1} alt="" srcset="" width={'80px'} />
                            <p className='p-1'>Thermal insulation</p>
                        </div>
                        <div className="child2 mx-1">
                            <img src={img2} alt="" srcset="" width={'80px'} />
                            <p className='p-1'>Polishing</p>
                        </div>
                        <div className="child1 mx-1">
                            <img src={img3} alt="" srcset="" width={'80px'} />
                            <p className='p-1'>paint protection films</p>
                        </div>
                        <div className="child1 mx-1">
                            <img src={img4} alt="" srcset="" width={'80px'} />
                            <p className='p-1'>nanoceramics</p>
                        </div>
                        <div className="child1 mx-1">
                            <img src={img5} alt="" srcset="" width={'80px'} />
                            <p className='p-1'>Packges</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                        <Card sx={{ maxWidth: 336 }} style={{ backgroundColor: "#03210C" }} className='card'>
                            <CardMedia
                                sx={{ height: 324 }}
                                image={image_card}
                                title="green iguana"
                                className='position-relative'
                            >
                                <Typography gutterBottom variant="h5" component="div" className='position-absolute left-0 mx-2'>

                                  <img src={img6} alt=""width={'22px'} height={'22px'} />
                                  

                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" className='business_hours '>



                                    <span className='text-center position-absolute business_hours'> <CiClock1 /> 8 business hours</span>
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" className='typography position-absolute py-3 text-center'>


                                    <p className='text-center'> bright polishing</p>

                                </Typography>
                            </CardMedia>
                            <CardContent>

                                <Typography variant="body2" className='d-flex'  style={{color:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeight:"14.4px"}}>
                                    <img src={img7} alt="" srcset=""width={'24px'} height={'24px'} />
                                <p className='mt-2'>1year warranty or 20000 km whichever first.</p>
                                </Typography>
                                <div className="parent d-flex justify-content-evenly">
                                    <p style={{color:"#FFFFFF",fontSize:"12px",fontWeight:"500",lineHeight:"14.4px"}}>Before <p style={{color:"#AB0F0F",fontWeight:"400",fontSize:"12px",lineHeight:"22.49px",textDecoration:"Strikethrough"}}>800</p></p>
                                    <p style={{color:"#FFFFFF",fontSize:"20px",fontWeight:"700",lineHeight:"37.48px"}}>400 <span style={{color:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeight:"14.4px"}}>SAR</span></p>
                                    <FaPlus className='fw-bold fs-3 ' style={{color:"#FFFFFF"}}/>
                                </div>
                                <div className="parent-2 my-3">
                                    <img src={img8} alt="" srcset="" className='w-50' />
                                </div>
                            </CardContent>
                            <div className="parent-3 text-center">
                             <p style={{textTransform:"uppercase",color:"#00E300"}}>More information</p>
                           </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                        <Card sx={{ maxWidth: 336 }} style={{ backgroundColor: "#03210C" }} className='card'>
                            <CardMedia
                                sx={{ height: 324 }}
                                image={img_typography2}
                                title="green iguana"
                                className='position-relative'
                            >
                                <Typography gutterBottom variant="h5" component="div" className='position-absolute left-0 mx-2'>

                                  <img src={img6} alt=""width={'22px'} height={'22px'} />
                                  

                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" className='business_hours '>



                                    <span className='text-center position-absolute business_hours'> <CiClock1 /> 8 business hours</span>
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" className='typography position-absolute py-3 text-center'>


                                    <p className='text-center'> Autopia Full Polishing</p>

                                </Typography>
                            </CardMedia>
                            <CardContent>

                                <Typography variant="body2" className='d-flex'  style={{color:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeight:"14.4px"}}>
                                    <img src={img7} alt="" srcset=""width={'24px'} height={'24px'} />
                                <p className='mt-2'>1year warranty or 20000 km whichever first.</p>
                                </Typography>
                                <div className="parent d-flex justify-content-evenly">
                                    <p style={{color:"#FFFFFF",fontSize:"12px",fontWeight:"500",lineHeight:"14.4px"}}>Before <p style={{color:"#AB0F0F",fontWeight:"400",fontSize:"12px",lineHeight:"22.49px",textDecoration:"Strikethrough"}}>800</p></p>
                                    <p style={{color:"#FFFFFF",fontSize:"20px",fontWeight:"700",lineHeight:"37.48px"}}>400 <span style={{color:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeight:"14.4px"}}>SAR</span></p>
                                    <FaPlus className='fw-bold fs-3 ' style={{color:"#FFFFFF"}}/>
                                </div>
                                <div className="parent-2 my-3">
                                    <img src={img8} alt="" srcset="" className='w-50' />
                                </div>
                            </CardContent>
                           <div className="parent-3 text-center">
                             <p style={{textTransform:"uppercase",color:"#00E300"}}>More information</p>
                           </div>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 my-3">
                        <Card sx={{ maxWidth: 336 }} style={{ backgroundColor: "#03210C" }} className='card'>
                            <CardMedia
                                sx={{ height: 324 }}
                                image={img_typography3}
                                title="green iguana"
                                className='position-relative'
                            >
                                <Typography gutterBottom variant="h5" component="div" className='position-absolute left-0 mx-2'>

                                  <img src={img6} alt=""width={'22px'} height={'22px'} />
                                  

                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" className='business_hours '>



                                    <span className='text-center position-absolute business_hours'> <CiClock1 /> 8 business hours</span>
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div" className='typography position-absolute py-3 text-center'>


                                    <p className='text-center'> bright polishing</p>

                                </Typography>
                            </CardMedia>
                            <CardContent>

                                <Typography variant="body2" className='d-flex'  style={{color:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeight:"14.4px"}}>
                                    <img src={img7} alt="" srcset=""width={'24px'} height={'24px'} />
                                <p className='mt-2'>1year warranty or 20000 km whichever first.</p>
                                </Typography>
                                <div className="parent d-flex justify-content-evenly">
                                    <p style={{color:"#FFFFFF",fontSize:"12px",fontWeight:"500",lineHeight:"14.4px"}}>Before <p style={{color:"#AB0F0F",fontWeight:"400",fontSize:"12px",lineHeight:"22.49px",textDecoration:"Strikethrough"}}>800</p></p>
                                    <p style={{color:"#FFFFFF",fontSize:"20px",fontWeight:"700",lineHeight:"37.48px"}}>400 <span style={{color:"#FFFFFF",fontWeight:"500",fontSize:"12px",lineHeight:"14.4px"}}>SAR</span></p>
                                    <FaPlus className='fw-bold fs-3 ' style={{color:"#FFFFFF"}}/>
                                </div>
                                <div className="parent-2 my-3">
                                    <img src={img8} alt="" srcset="" className='w-50' />
                                </div>
                            </CardContent>
                            <div className="parent-3 text-center">
                             <p style={{textTransform:"uppercase",color:"#00E300"}}>More information</p>
                           </div>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section_three