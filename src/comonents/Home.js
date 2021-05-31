import React from 'react';

import Footer from './Footer'
import Navigation from './Navigation'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Side from '../assets/img/Side.png'
import side2 from '../assets/img/side2.png'
import lenovo from '../assets/img/lenovo.png'
import paypal from '../assets/img/paypal.png'
import amazon from '../assets/img/amazon.png'
import air from '../assets/img/air.png'
import side3 from '../assets/img/advance_mockup.svg'
import google from '../assets/img/google.png'
import daimond from '../assets/img/daimond.png'
import rangoli from '../assets/img/rangoli.png'
import android from '../assets/img/android.png'
import g2 from '../assets/img/g2.png'
import security from '../assets/img/security.png'
import siderart from '../assets/img/siderart.png'

import sideart2 from '../assets/img/sideart2.png'
import art from '../assets/img/art.png'
import imac from '../assets/img/imac.png'
import dots from '../assets/img/dots.png'
import three_dot from '../assets/img/three_dot.png'
import html from '../assets/img/html.png'
import react from '../assets/img/react.png'
import scan from '../assets/img/scan.png'
import tick from '../assets/img/tick.png'
import Background from '../assets/img/Mask.png'
import bigblue from '../assets/img/bigblue.png'
import alice from '../assets/img/alice.png'
import halfred from '../assets/img/halfred.png'
import smalgreen from '../assets/img/smalgreen.png'
import smalllight from '../assets/img/smalllight.png'
import sideblue from '../assets/img/sideblue.png'
import roundred from '../assets/img/roundred.png'
import roundgreen from '../assets/img/roundgreen.png'
import sideaalice from '../assets/img/sideaalice.png'
import homeblue from '../assets/img/homeblue.png'
import homealice from '../assets/img/homealice.png'
import homered from '../assets/img/homered.png'
import green from '../assets/img/green.svg'
import homepink from '../assets/img/homepink.png'
import homegreen from '../assets/img/homegreen.png'
import homelight from '../assets/img/homelight.png'
import icon from '../assets/img/icon.png'

import { Helmet } from "react-helmet";
import '../App.css';
import WOW from "wowjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


const Home = () => {
    return (

        <div>
            <Helmet>
        <title> Lunavo MVP Home</title>
        <meta name="description" content="Busines app" />
      </Helmet>
            <Container fluid>
            <Navigation></Navigation>
                <Row className="animated animatedFadeInUp fadeInUp">
                    <div className="lefttside mtb animated animatedFadeInUp fadeInUp">
                    <img className="largeblue" src={bigblue}></img>
                    <img className="alice "  src={alice}></img>
                    <img  className="smallred"   src={halfred}></img>
                    <img   className="samllblue"  src={smalgreen}></img>
                    <img   className="smalllight"   src={smalllight}></img>
                    
                    </div>
                    
                    <Col sm={4}>
                        <div className="bannertext animated animatedFadeInUp fadeInUp">
                            <h2>We are the future of remote offshore software creation</h2>
                          
                            <p>Our platform revolutionizes how you onboard and manage your remote resources</p>
                            {/* <button className="cbutton ">Get started</button> */}
                            <Link className="btn btn-border-3" to='/Onboarding'>Get Started</Link>
                        </div>

                    </Col>
                    <Col sm={8}>
                        <div className="mobile_hide">
                        <img className="blue"    src={homeblue}></img>
                        <img className="homealice"    src={homealice}></img>
                         <img className="homered"    src={homered}></img>
                        <img className="homepink"    src={homepink}></img> 
                        <img className="homegreen"    src={homegreen}></img> 
                        <img className="homelight"    src={homelight}></img> 
                        
                        </div>
                        <div className="bannerimg animated animatedFadeInUp fadeInUp"> <img src={imac} /></div>


                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt50">

                    <Col sm={12}>
                        <div className="txt-center">
                            <h2 className="txt-center">The Team Mangment Platform</h2>
                            <p className="txt-center">140+ oranizaions trust lunavolabs for their company</p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="txt-center mb20 animated animatedFadeInUp fadeInUp">
                            <img className="logo_img" src={lenovo} />
                            <img className="logo_img" src={paypal} />
                            <img className="logo_img" src={air} />
                            <img className="logo_img" src={google} />
                            <img className="logo_img" src={amazon} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                    {/* <img className="rigtside mt" src={siderart}></img> */}
                    <div className="rigtside mt">
                      
                    <img className="sideaalice" src={sideaalice}></img> 
                    <img className="sideblue" src={sideblue}></img>
                    <img className="roundred" src={roundred}></img>
                    <img className="roundgreen" src={roundgreen}></img>
                    
                    </div>
                    <Col sm={6}>
                        <div className="pading_top50 pd20">
                            <p className="p3"><b>Project Status</b></p>
                            <h2>Transparency & True Project Status</h2>
                            <p>
                                We track and monitor resources to provide total project transparency and true project status


                            </p>
                            <p>
                                We use a communication of a custom dev ops pipeline and VPN network with built in scanners to pull productivity and code quality metrics.
                            </p>
                            <p className="p2"><b>Try it, get your project done now!</b></p>
                            {/* <button className="cbutton">Get started</button> */}
                            <a className="btn btn-border-3" href="">Get started</a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="animated animatedFadeInUp fadeInUp">
                            <img src={Side} />

                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                <div className="lefttside mtb animated animatedFadeInUp fadeInUp">
                    <img className="largeblue" src={bigblue}></img>
                    <img className="alice "  src={alice}></img>
                    <img  className="smallred"   src={halfred}></img>
                    <img   className="samllblue"  src={smalgreen}></img>
                    <img   className="smalllight"   src={smalllight}></img>
                    
                    </div>
                    <Col sm={6}>
                        <div>
                            <img src={side2} />

                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="pading_top50 pd20">
                            <p className="p3">Easy Communication</p>
                            <h2>Communication & Dedicated Manager</h2>
                            <p>
                                Connect with your resource team instantly through out secure chat system or set up a call with your dedicated
                                project manager to address tickets and issues.


                            </p>
                            <p>
                                We provide advanced communication by assigning a US based project manager to work solely on your product.
                                We create instant communication through our platform.
                            </p>
                            <p className="p2">Everything organized based on your need.</p>
                            {/* <button className="cbutton">Get started</button> */}
                            <a className="btn btn-border-3" href="">Get started</a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                    {/* <img className="rigtside mt" src={siderart}></img> */}
                    <div className="rigtside mt">
                      
                    <img className="sideaalice" src={sideaalice}></img> 
                    <img className="sideblue" src={sideblue}></img>
                    <img className="roundred" src={roundred}></img>
                    <img className="roundgreen" src={roundgreen}></img>
                    
                    </div>
                    <Col sm={6}>
                        <div className="pading_top50 pd20">
                            <p className="p3">Platform</p>
                            <h2>Advanced Talent vetting and simplified onboarding</h2>

                            <p>
                                Advanced talent vetting and simple on boarding. Find the ideal
                                resource for your project through our Machine Learning matching model and simple resource onboarding
                                our platform
                            </p>
                            <p className="p2">We manage the platform to easy to use.</p>
                            {/* <button className="cbutton">Get started</button> */}
                            <a className="btn btn-border-3" href="">Get started</a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div>
                            <img src={side3} />

                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="ccontaoner mt50" style={{ backgroundImage: `url(${Background})` }}>
                <Row className="">
                    <Col sm={3}>
                        <div className="pading_left100 ">
                            <div className="avatar">
                                <img className="width_100" src={daimond}></img>
                            </div>
                            <div className="rangolidiv mt10 avatar2">

                                <img className="width_75 " src={rangoli}></img>


                            </div>
                            <div className=" mt10 avatar3">
                                <img className="width_60 " src={g2}></img>
                            </div>
                            <div className="rangolidiv mt10 avatar4">
                                <img className="width_60 " src={android}></img>
                            </div>



                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="pading_top50 txt-center">
                            <p className="txt-center p3"><b>our tools</b></p>
                            <h2 className="txt-center">Indsutry Standard Software Development Life Cycle</h2>
                            <p className="txt-center">We use industry leading agile design and development to create products that breathe innovation for a fraction of the cost.</p>
                           <div className="sh">
                           <a className="ca">Explore now</a> <img className="dp" src={icon}></img>
                           </div>
                            

                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="pdl60">
                            <div className="responsive">
                                <div className="avatar">
                                    <img className="width_60 rangolidiv " src={three_dot}></img>


                                </div>
                                <div className=" mt10 avatar2">

                                    <img className="width_100 " src={dots}></img>


                                </div>
                                <div className=" mt10 avatar3">
                                    <img className="width_75 rangolidiv" src={react}></img>

                                </div>
                                <div className=" mt10 avatar4">
                                    <img className=" width_60 " src={html}></img>
                                </div>



                            </div>

                        </div>
                    </Col>
                </Row>

            </Container>

            <Container>
                <Row className="mt50">
                    {/* <img className="rigtside" src={siderart}></img> */}
                    <div className="rigtside .mt55">
                      
                    <img className="sideaalice" src={sideaalice}></img> 
                    <img className="sideblue" src={sideblue}></img>
                    <img className="roundred" src={roundred}></img>
                    <img className="roundgreen" src={roundgreen}></img>
                    
                    </div>
                    <Col sm={12}>
                        <div className="txt-center">

                            <h2 className="txt-center">Guaranteed Security and </h2>
                            <h2 className="txt-center">Quality Assurance</h2>

                            <p></p>

                        </div>
                    </Col>
                </Row>

                <Row className="mt50">

                    <Col sm={4}>
                        <div className="cutom_card">

                            <img className="securityimg" src={security}></img>
                            <p >We use code scanners and dedicated Quality assurance experts to guarantee quality on all products.</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="cutom_card">

                            <img className="securityimg2" src={scan}></img>
                            <p >We use code scanners and dedicated Quality assurance experts to guarantee quality on all products..</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="cutom_card">

                            <img className="securityimg3" src={tick}></img>
                            <p >We use Quality assurance checks and balances to guarantee quality and
                           security at all levels of the process.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt50 crow"  style={{ backgroundImage: `url(${art})` }}>
              
                
                    <Col sm={12}>
                   
                        <div className="txt-center pdr">


                            <h2 className="txt-center">Lunavolabs is everything you need,</h2>
                            <h2 className="txt-center"> Let’s get your project done today!</h2>
                            <p className="txt-center ">(But if you just can’t let go of your favorite tools, we play nice with them, too. 😊)</p>
                            {/* <button className="cbutton">Get started</button> */}
                            <a class="btn btn-border-3" href="">Get started</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>

    )
}

export default Home;