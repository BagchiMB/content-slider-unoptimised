
import React from 'react';


import Navigation from './Navigation'
import Footer from './Footer'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import side from '../../src/side.png';
import Side from '../assets/img/Side.png'
import side2 from '../assets/img/side2.png'

import siderart from '../assets/img/siderart.png'
import sideart2 from '../assets/img/sideart2.png'
import sideart3 from '../assets/img/sideart3.png'
import sideart4 from '../assets/img/sideart4.png'
import scrum_board from '../assets/img/scrum_board.png'
import note_taking from '../assets/img/note_taking.png'


import herogreen from '../assets/img/herogreen.png'
import heroblue1 from '../assets/img/heroblue1.png'
import herored1 from '../assets/img/herored1.png'
import wireframe from '../assets/img/wireframe.png'
import files_and_folder from '../assets/img/files_and_folder.png'
import coding from '../assets/img/coding.png'
import completed_task from '../assets/img/completed_task.png'
import report_analysis from '../assets/img/report_analysis.png'
import web_developer from '../assets/img/web_developer.png'
import imac from '../assets/img/imac.png'
import howbanner from '../assets/img/inner_page_hero-bg.svg'
import dual from '../assets/img/dual.png'
import avatar from '../assets/img/avatar.png'
import google from '../assets/img/google.png'
import daimond from '../assets/img/daimond.png'
import rangoli from '../assets/img/rangoli.png'
import android from '../assets/img/android.png'
import g2 from '../assets/img/g2.png'
import security from '../assets/img/security.png'
import '../App.css';

import checklist from '../assets/img/checklist.png'
import reminder_note from '../assets/img/reminder_note.png'
import startup from '../assets/img/startup.png'
import dots from '../assets/img/dots.png'
import three_dot from '../assets/img/three_dot.png'
import html from '../assets/img/html.png'
import react from '../assets/img/react.png'
import scan from '../assets/img/scan.png'
import tick from '../assets/img/tick.png'
import Background from '../assets/img/Mask.png'
import art from '../assets/img/art.png'
import av2 from '../assets/img/av2.png'
import av3 from '../assets/img/av3.png'
import av4 from '../assets/img/av4.png'
import { Helmet } from "react-helmet";
const Features =()=>{
    return(
       
        <div>
           
           <Helmet>
        <title>Features / Lunavo MVP </title>
        <meta name="description" content="Busines app" />
      </Helmet>
           <Container fluid className="bgattach"  style={{backgroundImage: `url(${howbanner})`}}>
             <Navigation></Navigation>
             <Row className="mt20">
                 <div className="hero1">
                 <img className="heroblue1" src={heroblue1}></img>
                 <img className="herogreen" src={herogreen}></img>
                 <img className="herored1" src={herored1}></img>
                 
                 
                 </div>
                 <div className="hero2">
                 <img className="heroblue2" src={heroblue1}></img>
                 <img className="herogreen2" src={herogreen}></img>
                 <img className="herored2" src={herored1}></img>
                 
                 
                 </div>
                 
             <Col sm={12}>
                        <div className="txt-center mb10">
                            <h2 className="txt-center">How it works?</h2>
                            <p className="txt-center">Our platform revolutionizes how you onboard and manage your 
                            remote resources
                            </p>
                        </div>
                    </Col>
             </Row>
                <Row className="animated animatedFadeInUp fadeInUp">
                {/* <img className="lefttside mtb animated animatedFadeInUp fadeInUp" src={sideart2}></img> */}
                
                <Col sm={12}>
                    <div className="bannerimg animated animatedFadeInUp fadeInUp text-center"> <img  src={imac}  /></div>

               
                </Col>
                </Row>
                </Container>
             {/* range */}
             <Container>
                 <Row className="mt50 alighn-center">
                     <Col sm={5}>
                         <div>
                             <h2>Range of dynamic talent profiles that fit our perfect project mold</h2>
                             <p>Prevetted resources of all talents</p>
                         </div>
                     </Col>
                     <Col sm={7}>
                         <div className="text-center">
                         <img  src={dual}></img>
                         </div>
                    

                     
                     </Col>
                 </Row>
                 <Row>
                     <Col sm={3}>
                         <div className="ccard">
                              <div>
                              <img className="cimg"  src={avatar}></img>
                              </div>
                              <div className="pd10">
                                  <h5>Cahrlie</h5>
                                  <p>Ui Designer</p>
                              </div>
                              <div className="pd10">
                              <p>Charlie Bates is a is simply dummy text of the printing and typesetting industry</p>
                              </div>
                              
                         </div>
                     </Col>
                     <Col sm={3}>
                         <div className="ccard">
                              <div>
                              <img className="cimg"  src={av2}></img>
                              </div>
                              <div className="pd10">
                                  <h5>Howard Richardson</h5>
                                  <p>Developer</p>
                              </div>
                              <div className="pd10">
                              <p>Charlie Bates is a highly eficient and reliable professional who 
                                  processed a board skill set for web application development.</p>
                              </div>
                              
                         </div>
                     </Col>
                     <Col sm={3}>
                         <div className="ccard">
                              <div>
                              <img className="cimg"  src={av3}></img>
                              </div>
                              <div className="pd10">
                                  <h5>Jacob Wells</h5>
                                  <p>Ux Designer</p>
                              </div>
                              <div className="pd10">
                              <p>Charlie Bates is a highly eficient and reliable professional who processed 
                                  a board skill set for web application development.</p>
                              </div>
                              
                         </div>
                     </Col>
                     <Col sm={3}>
                         <div className="ccard">
                              <div>
                              <img className="cimg"  src={av4}></img>
                              </div>
                              <div className="pd10">
                                  <h5>Barry Turner</h5>
                                  <p>Project Manager</p>
                              </div>
                              <div className="pd10">
                              <p>Charlie Bates is a highly eficient and reliable professional who processed a 
                                  board skill set for web application development.</p>
                              </div>
                              
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
                            <p className="txt-center"><b>our tools</b></p>
                            <h2 className="txt-center">Indsutry Standard Software Development Life Cycle</h2>
                            <p className="txt-center">We use industry leading agile design and development to create products that breathe innovation for a fraction of the cost.</p>
                            
                            <img className=" resimg" src={  startup}></img>
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
                    
                <Col sm={12}>
                    <div className="txt-center">
                    <h2 className="txt-center">Problem and market testing though lean methodology </h2>
                    <p className="txt-center">140+ oranizaions trust lunavolabs for their company</p>
                    </div>
                </Col>
                <Col sm={12}>
                    <Row className="txt-center">
                    <Col sm={6}>
                    <div className="fltdiv">
                        <img src={reminder_note}></img>
                        <p  >Understand what your problem is an all solutions to your product</p>
                    </div>
                    </Col>
                    <Col sm={6}>
                    <div className="fltdiv">
                    <img src={checklist}></img>
                        <p>Validate your problem by talking to real customers to get key insight to create a perfect market fit</p>
                    </div>
                    </Col>
                    </Row>

                
                </Col>
                </Row>
                <Row className="mt50 crow"  style={{ backgroundImage: `url(${art})` }}>
              
                
              <Col sm={12}>
             
                  <div className="txt-center pdr">


                      <h2 className="txt-center">Lunavolabs is everything you need,</h2>
                      <h2 className="txt-center"> Let’s get your project done today!</h2>
                      <p className="txt-center ">(But if you just can’t let go of your favorite tools, we play nice with them, too. 😊)</p>
                      {/* <button className="cbutton">Get started</button> */}
                      <a className="btn btn-border-3" href="">Get started</a>
                  </div>
              </Col>
          </Row>
                </Container>
                <Footer></Footer>
        </div>
    )}

    export default Features