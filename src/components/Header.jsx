import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './component-css/header.css';
const Header = () => {
  return (
    <div className='text-light' style={{background:"transparent"}}>
        <Navbar expand="lg " >
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-light" style={{color:"white"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home"className='nav-link' >OUR STORY</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>services</Nav.Link>
            <Nav.Link href="#home"className='nav-link' >booking online</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Franchise</Nav.Link>
            <Nav.Link href="#home"className='nav-link' >Media Center</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>FAQ</Nav.Link>
            <Nav.Link href="#home"className='nav-link' >contact us</Nav.Link>
            
            <Nav.Link href="#home"className='nav-link mx-5' >ع</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header