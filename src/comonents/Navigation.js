import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Logo from '../assets/img/Logo.png'
import How from '../comonents/How'
import Features from '../comonents/Features'
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from 'react-router-dom'

const Navigation = () => {
  let location = useLocation();
  console.log(location.pathname);
 let color
 
  if(location.pathname=='/Home'){
    
    color = { color: 'white' };
  }
  else{
    color = { color: 'black' };
  }
  return (
  

    <Navbar className="cNavbar" expand="lg">


      <Navbar.Brand href="#home"> <img src={Logo}></img>  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto " >
          <LinkContainer to="/Home">
            <Nav.Item style={ color }>
              <a >Home</a>

            </Nav.Item>

          </LinkContainer>
          <LinkContainer to="/How">
            <Nav.Item style={ color }>
              <a >How it works?</a>

            </Nav.Item>

          </LinkContainer>
          <LinkContainer to="/Features">
            <Nav.Item style={ color }>
              <a >Features</a>

            </Nav.Item>

          </LinkContainer>
          <LinkContainer to="/work">
            <Nav.Item style={ color }>
              <a >Why Us?</a>

            </Nav.Item>

          </LinkContainer>
          <LinkContainer to="/work">
            <Nav.Item style={ color }>
              <a >Case Study</a>

            </Nav.Item>

          </LinkContainer>

          {/* <Nav.Link href="/staging/mvp/Home" >Home</Nav.Link> */}


          {/* <Nav.Link href="/How">How it works?</Nav.Link> */}
          {/* <Nav.Link href="staging/mvp/Features">Features</Nav.Link> */}
          {/* <Nav.Link ></Nav.Link>
      <Nav.Link></Nav.Link> */}


          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;