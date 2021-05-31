
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


import files_and_folder from '../assets/img/files_and_folder.png'
import coding from '../assets/img/coding.png'
import completed_task from '../assets/img/completed_task.png'
import report_analysis from '../assets/img/report_analysis.png'
import web_developer from '../assets/img/web_developer.png'
import imac from '../assets/img/imac.png'
import howbanner from '../assets/img/inner_page_hero-bg.svg'
import report_analysis2 from '../assets/img/report_analysis2.png'
import bigblue from '../assets/img/bigblue.png'
import alice from '../assets/img/alice.png'
import halfred from '../assets/img/halfred.png'
import smalgreen from '../assets/img/smalgreen.png'
import smalllight from '../assets/img/smalllight.png'
import sideblue from '../assets/img/sideblue.png'
import roundred from '../assets/img/roundred.png'
import roundgreen from '../assets/img/roundgreen.png'
import sideaalice from '../assets/img/sideaalice.png'
import dashboard from '../assets/img/dashboard.png'
import dashboard2 from '../assets/img/dashboard2.png'
import inner_page_bubbles2 from '../assets/img/inner_page_bubbles2.svg'

import herogreen from '../assets/img/herogreen.png'
import heroblue1 from '../assets/img/heroblue1.png'
import herored1 from '../assets/img/herored1.png'
import wireframe from '../assets/img/wireframe.png'
import { Helmet } from "react-helmet";
import '../App.css';
const How =()=>{
    return(
       
        <div>
              <Helmet>
        <title>How It Works ? / Lunavo MVP </title>
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
             <Container>
             <Row className="mt50 alighn-center">
                {/* <img className=" lefttside mt" src={sideart3}></img> */}
                <div className="lefttside mtb animated animatedFadeInUp fadeInUp">
                    <img className="largeblue" src={bigblue}></img>
                    <img className="alice "  src={alice}></img>
                    <img  className="smallred"   src={halfred}></img>
                    <img   className="samllblue"  src={smalgreen}></img>
                    <img   className="smalllight"   src={smalllight}></img>
                    
                    </div>
                    <Col sm={6}>
                    <div className="pading_top50 pd20">
                            <p className="p2">#01</p>
                            <h1>Sign & NDA Protection</h1>
                            <p>
                            Start by filling out the basics of your project and sign and NDA protecting your intel 


                            </p>
                           
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div>
                        <img src={dashboard}  />

                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                {/* <img className="rigtside mt" src={siderart}></img> */}
                <div className="rigtside .mt55">
                      
                      <img className="sideaalice" src={sideaalice}></img> 
                      <img className="sideblue" src={sideblue}></img>
                      <img className="roundred" src={roundred}></img>
                      <img className="roundgreen" src={roundgreen}></img>
                      
                      </div>
                    <Col sm={6}>
                        <div>
                        <img src={dashboard2}  />

                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="pading_top50 pd20">
                        <p className="p2">#02</p>
                            <h1>Organized your team</h1>
                            <p>
                            Our platform will determine your team size and team dynamic based on your feedback


                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                {/* <img className=" lefttside mt" src={sideart2}></img> */}
                <div className="lefttside mtb animated animatedFadeInUp fadeInUp">
                    <img className="largeblue" src={bigblue}></img>
                    <img className="alice "  src={alice}></img>
                    <img  className="smallred"   src={halfred}></img>
                    <img   className="samllblue"  src={smalgreen}></img>
                    <img   className="smalllight"   src={smalllight}></img>
                    
                    </div>
                    <Col sm={6}>
                    <div className="pading_top50 pd20">
                            <p className="p2">#03</p>
                            <h1>Matching your resources</h1>
                            <p>
                            Our machine learning model instantly matches you with resources who fit your ideal team size


                            </p>
                           
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="text-center">
                        <img src={scrum_board}  />

                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                
                    <Col sm={6}>
                        <div>
                        <img src={wireframe}  />

                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="pading_top50 pd20">
                        <p className="p2">#05</p>
                            <h1>Add resumes & examples</h1>
                            <p>
                            You can view complete resumes and work examples and add them to your roster in real time


                            </p>
                        </div>
                    </Col>
                </Row>
                
                <Row className="mt50 alighn-center">
                {/* <img className=" rigtside mt" src={siderart}></img> */}
                <div className="rigtside .mt55">
                      
                      <img className="sideaalice" src={sideaalice}></img> 
                      <img className="sideblue" src={sideblue}></img>
                      <img className="roundred" src={roundred}></img>
                      <img className="roundgreen" src={roundgreen}></img>
                      
                      </div>
                    <Col sm={6}>
                    <div className="pading_top50 pd20">
                            <p className="p2">#04</p>
                            <h1>Project requirements</h1>
                            <p>
                            Once you pick your team, you can choose to start filling out project requirements or a project manager will reach out to begin making industry leading documentation in accordance to agile design and development


                            </p>
                           
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="text-center">
                        <img src={note_taking}  />

                        </div>
                    </Col>
                </Row>
                <Row className="mt50 alighn-center">
                
                    <Col sm={6}>
                        <div>
                        <img src={files_and_folder}  />

                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="pading_top50 pd20">
                        <p className="p2">#05</p>
                            <h1>Documentation</h1>
                            <p>
                            All our documentation is peer reviewed by experts
                             and a Business requirements document is created for complete project transparency


                            </p>
                        </div>
                    </Col>
                </Row>
                {/* project */}
                <Row className="mt50 alighn-center">
                <Col sm={6}>
                    <div className="pading_top50 pd20">
                    <p className="p2">#06</p>
                        <h1>Project begins</h1>
                        <p>
                        Once the documentation is confirmed the project begins and each design and development 
                        deliverable is tracked in real time through the project dashboard


                        </p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                    <img src={coding}  />

                    </div>
                </Col>
              
            </Row>
                {/* track */}
                <Row className="mt50 alighn-center">
                {/* <img className=" lefttside mt" src={sideart2}></img> */}
                <div className="lefttside mtb animated animatedFadeInUp fadeInUp">
                    <img className="largeblue" src={bigblue}></img>
                    <img className="alice "  src={alice}></img>
                    <img  className="smallred"   src={halfred}></img>
                    <img   className="samllblue"  src={smalgreen}></img>
                    <img   className="smalllight"   src={smalllight}></img>
                    
                    </div>
                <Col sm={6}>
                    <div>
                    <img src={report_analysis2}  />

                    </div>
                </Col>
                <Col sm={6}>
                    <div className="pading_top50 pd20">
                    <p className="p2">#07</p>
                        <h1>Project tracking</h1>
                        <p>
                        Once the documentation is confirmed the project begins and each design and development 
                        Understand true project status and project quality 24/7 and conduct optional weekly 
                        meetings with your product manager to ensure the vision is being executed


                        </p>
                    </div>
                </Col>
            </Row>
           
           {/* review */}
           <Row className="mt50 alighn-center">
                <Col sm={6}>
                    <div className="pading_top50 pd20">
                    <p className="p2">#08</p>
                        <h1>Review milestone</h1>
                        <p>
                        Review and access each software milestone in real time and make revisions through 
                        our platform


                        </p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                    <img src={completed_task}  />

                    </div>
                </Col>
              </Row>
            
            {/* documentation */}
            <Row className="mt50 alighn-center">
                {/* <img className=" rigtside mt235" src={siderart}></img> */}
                <div className="rigtside .mt55">
                      
                      <img className="sideaalice" src={sideaalice}></img> 
                      <img className="sideblue" src={sideblue}></img>
                      <img className="roundred" src={roundred}></img>
                      <img className="roundgreen" src={roundgreen}></img>
                      
                      </div>
                <Col sm={6}>
                    <div>
                    <img src={report_analysis}  />

                    </div>
                </Col>
                <Col sm={6}>
                    <div className="pading_top50 pd20">
                    <p className="p2">#09</p>
                        <h1>Receive a documentation</h1>
                        <p>
                        Once project is complete you will receive proper documentation and expandability documents so that at 
                        any point new talent can come in and understand your product


                        </p>
                    </div>
                </Col>
            </Row>
            {/* mainranence */}
            <Row className="mt50 alighn-center">
                <Col sm={6}>
                    <div className="pading_top50 pd20">
                    <p className="p2">#10</p>
                        <h1> Maintenance package</h1>
                        <p>
                        Set up maintenance packages or extend your product to the next phases knowing
                         you have remote team members you can count  on

                        </p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                    <img src={web_developer}  />

                    </div>
                </Col>
              </Row>
            
             </Container>
          <Footer></Footer>
             </div>
    )
}

export default  How