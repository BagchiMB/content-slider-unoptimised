import React from 'react';


import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import side from '../../src/side.png';

import Logo from '../assets/img/Logo.png'
import '../App.css';


const Footer =()=>{
  return (
      <div>
         
            <Container>
                <Row className="mt50" >
                    
                <Col sm={4}>
                    <div>
                    <img className="  footerlogo" src={Logo}></img>    
                    <p className="fp">When you build on <b>Lunavolabs</b>, you’re joining 25,000+ serious experts, entrepreneurs and
                     influencers around the world — you know, people like you.</p>

                    </div>
                </Col>
                <Col sm={2}>
                    <div className="txt-center">
                        <h2 className="footerh">Company</h2>
                        <ul className="footerul">
                            <li><a>How it works?</a></li>
                            <li><a>About us</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>Blogs</a></li>
                        </ul>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className="txt-center">
                        <h2 className="footerh">Help Center</h2>
                        <ul className="footerul">
                            <li><a>Lunavolabs Status</a></li>
                            <li><a>Privacy Policy</a> </li>
                            <li><a>Disclaimer</a></li>
                        </ul>
                    </div> 



                </Col>
                <Col sm={2}>
                    <div className="txt-center">
                        <h2 className="footerh">Resources</h2>
                        <ul className="footerul">
                            <li><a>Library</a></li>
                            <li><a>Articles</a></li>
                            <li><a>Interviewss</a></li>
                            <li><a>Webinars</a></li>
                        </ul>
                    </div>
                    



                </Col>
                <Col sm={2}>
                    <div className="txt-center">
                        <h2 className="footerh">Our Services</h2>
                        <ul className="footerul">
                            <li><a>Web Application</a> </li>
                            <li><a>Android and iOS App</a></li>
                            <li><a>Web E-commerce</a></li>
                            <li><a>Mobile and Web App</a></li>
                        </ul>
                    </div>
                </Col>
               



                </Row>
            </Container>
      </div>
  )  
}

export default Footer