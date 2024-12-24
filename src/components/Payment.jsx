import React, { useState } from 'react'
import line1 from '../images/Line 4.png'
import line2 from '../images/Line 3.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import img1 from '../images/Frame (11).png'
import img2 from '../images/8b1297b3-5055-4cd2-bd57-3c845ca3aa21.png'
import img3 from '../images/387896.png'
import { styled } from '@mui/material/styles';
import img4 from '../images/Frame (12).png'
const CustomRadio = styled(Radio)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        border: '2px solid #FCFEFC',
        fontSize: '2.5rem',// Set the border color
        borderRadius: '50%', // Ensure it's circular
    },
    '&.Mui-checked .MuiSvgIcon-root': {
        // Change border when checked
    },
}));
const Payment = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
            <div className='text-center container my-5'>
                <div className="d-flex justify-content-center my-5">
                    <img src={line1} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
                    <p className='text-light mb-5' style={{ fontWeight: "700", fontSize: "40px", lineHeight: "74.96px", textTransform: "uppercase" }} >payment <span style={{ color: "#00E300" }}>method</span></p>
                    <img src={line2} alt="" srcset="" height={'5px'} className='w-25 mt-5 mx-3' />
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 p-2 my-3 d-flex justify-content-between " style={{ backgroundColor: "#0F2013" }}>
                    <RadioGroup value={selectedValue} onChange={handleChange}>
                        <FormControl className='container'>

                            <RadioGroup
                                value={selectedValue} onChange={handleChange}
                            >
                                <FormControlLabel value="MasterCard / Visa / Apply Pay" control={<CustomRadio />} label="MasterCard / Visa / Apply Pay" style={{ color: "#FCFEFC", fontWeight: "700" }} />

                            </RadioGroup>
                        </FormControl>
                        </RadioGroup>
                        <img src={img1} alt="" srcset="" width={'56px'} height={'56px'} />

                    </div>


                </div>
                <div className="row">
                    <div className="col-12 p-2 my-3 d-flex justify-content-between "style={{ backgroundColor: "#0F2013" }}>
                    <RadioGroup value={selectedValue} onChange={handleChange}>
                        <FormControl className='container'>

                            <RadioGroup
                                value={selectedValue} onChange={handleChange}
                            >
                                <FormControlLabel value="Tabby" control={<CustomRadio />} label="Tabby" style={{ color: "#FCFEFC" }} />

                            </RadioGroup>
                        </FormControl>
                        </RadioGroup>
                    
                    <img src={img2} alt="" srcset="" width={'56px'} height={'56px'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-2 my-3 d-flex justify-content-between "style={{ backgroundColor: "#0F2013" }}>
                    <RadioGroup value={selectedValue} onChange={handleChange}>
                        <FormControl className='container'>

                            <RadioGroup
                                value={selectedValue} onChange={handleChange}
                            >
                                <FormControlLabel value="Tamara" control={<CustomRadio />} label="Tamara" style={{ color: "#FCFEFC" }} />
                            </RadioGroup>
                        </FormControl>
                        </RadioGroup>
                    
                    <img src={img3} alt="" srcset="" width={'56px'} height={'56px'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-2 my-3 d-flex justify-content-between "style={{ backgroundColor: "#0F2013" }}>
                    <RadioGroup value={selectedValue} onChange={handleChange}>
                        <FormControl className='container'>

                            <RadioGroup
                                value={selectedValue} onChange={handleChange}
                            >
                               < FormControlLabel value="Payment At The Branch" control={<CustomRadio />} label="Payment At The Branch" style={{ color: "#FCFEFC" }} />
                            </RadioGroup>
                        </FormControl>
                        </RadioGroup>
                    
                    <img src={img4} alt="" srcset="" width={'56px'} height={'56px'} />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Payment