import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight,} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import Banner from "./bannerSection/Banner";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid";
import BussinessGoal from "./BussinessGoals/BussinessGoal";
import BusinessGrowth from "./BusinessGrowth/BusinessGrowth";
import SliderContent from "./Slidercontent/SliderContent";


const ddfMain = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/laptop.webp`;
const img1 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/181959@3x 1.webp`;
const img2 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/593369@3x 1.webp`;
const img3 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/767972@3x 1.webp`;
const img4 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/1623352@3x 1.webp`;
const img5 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/audit 1.webp`;
const img6 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/curriculum-vitae 1.webp`;
const img7 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/no-money 1.webp`;
const img8 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/promotion (1) 1.webp`;
const turest3 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/turest3.webp`;
const turest2 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/turest2.webp`;
const turest1 = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/turest1.webp`;
const men = `${process.env.REACT_APP_API_URL}/assests/services/DigitalMarketing/men.webp`;



function DigitalMarketing(){

    const location = useLocation();
        const featuresPoints = [
    "Powerful Multi-Channel Strategy for Business Growth",
    "Relentlessly Focused on Driving Conversions",
    "High-Impact Mobile App Experiences Powered by Exceptional DesignFrameworks Powering Long-Term Scalable Growth"
]
   

    return(
        <>

            <SEO
                title={"Grab Quality leads with Digital marketing services | Get Quote"}
                description={"Grow your business globally with Digital marketing services and get quality leads with paid PPC Services, SEO Services and SMM services."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <Banner></Banner>
            <FeaturesPointsSection lists={featuresPoints} />
            <div className="padding black" >
            <AnimatedText />
            </div>
            <div className="padding black">
                <Container>
                    <Row>
                        <Col>
                         <h1 className="heading_main split textaliginCenter">Empowering Brands with Data-Driven Digital Marketing</h1>
                         <span className="FontSize18 textaliginCenter">iosAndWeb Technologies designs customized, ROI-focused marketing strategies that accelerate growth, elevate brand visibility, and turn clicks into loyal customers</span>
                         <div className="numberGridMobileDev textaliginCenter padding"><NumbersGrid /></div>
                        <h1 className="heading_main  textaliginCenter">Partner with iosAndWeb Technologies to unlock intelligent, future-ready marketing powered by AI insights, precision targeting, and seamless omnichannel execution</h1>

                        </Col>
                    </Row>
                </Container>
               

            </div>

            <div className="linear-dark-background section-padding DDSSection ChatSection">
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <div className="TowFactorsContent">
                                        <div>

                                          <div className="ChatDiv">
                                            <div className="pinkChart">
                                                <div className="FontSize18">83%</div>
                                                <div className="FontSize16">Increase in Traffic</div>
                                            </div>
                                            <div className="YellowChat">
                                                <div className="FontSize18"># 1</div>
                                                <div className="FontSize16">
                                                    On the Keyword 
                                                    “Mobile app development Company” <br/>
                                                </div>
                                            </div>
                                          </div>
                                          <div className="FontSize16">A leading global provider of information technology, consulting, and business process outsourcing solutions.</div>
                                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Project Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                        </div>
                                        
                                    </div>
                                    </Col>                        
                                    <Col lg={6}>
                                    <div className="ddsMainImg">
                                        <img src={ddfMain} alt="" />
            
                                    </div>
            
                                    </Col>
                                </Row>
                            </Container>
            
                        </div>

                <BussinessGoal/>



                {/*why to parthner with us Section  */}
                <div className="WhyToParthnerSection padding black">
                    <Container>
                        <Row>
                            <Col>
                             <h1 className="heading_main split textaliginCenter">Why Partner With Us?</h1>
                             <p className='fontSize18 lessPadding  textaliginCenter'>Engineering Market Leaders Through Strategy, Not Guesswork</p>

                             <div className='whytochossUsDiv'>
                                <div className='SingleSection'>
                                    <span> 
                                        <img src={img7} alt=""></img> <h3 className="FontSize25">No Set-Up Fee Required</h3>
                                    </span>
                                                                        <span> 
                                        <img src={img5} alt=""></img> <h3 className="FontSize25">Data & Analytics Driven Approach</h3>
                                    </span>
                                                                        <span> 
                                        <img src={img6} alt=""></img> <h3 className="FontSize25">Personal Audit & Competitor Analysis</h3>
                                    </span>
                                                                        <span> 
                                        <img src={img8} alt=""></img> <h3 className="FontSize25">Monthly Marketing Roadmaps</h3>
                                    </span>
                                </div>
                                    <div className='GridSection'>
                                    <div className='GridSectionOuterDiv btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img2} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        100% <br/> Transparency 
                                        </h1>
                                        <p className='FontSize18'>Get to see what you are paying for, as we ensure a complete transparent process with no random promises.</p>
                                        </div>
                                    </div> <div className='GridSectionOuterDiv uno btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img4} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        Campaign Optimization
                                        </h1>
                                        <p className='FontSize18'>Fine-tune your campaigns with biweekly audits & monthly reports to improve customer lifetime value and profitability.</p>
                                        </div>
                                    </div> <div className='GridSectionOuterDiv uno  btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img3} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        Get A Dedicated Manager
                                        </h1>
                                        <p className='FontSize18'>Benefit from personal attention through weekly call with your account manager to keep you up with the strategy & implementation.</p>
                                        </div>
                                    </div> <div className='GridSectionOuterDiv  btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img1} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        Flexible Pricing
                                        </h1>
                                        <p className='FontSize18'>One glove doesn’t fit all nor does the same package or strategy. Get the flexibility to choose packages as per your business needs.</p>
                                        </div>
                                    </div>
                                    </div>
                             </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/*  */}
                <div className="turstedBySection padding black">
                    <Container>
                        <Row>
                            <Col>
                              <div className="TrustedDiv">
                                <span className="btn-gradient-blue btnTrustBtn btn-gradient-border">
                                    <h1 className="FontSize25">We are a Trusted:</h1>
                                </span>
                                 <img src={turest1} alt=""/>
                                 <img src={turest2} alt=""/>
                                 <img src={turest3} alt=""/>

                              </div>
                            
                            </Col>
                        </Row>
                    </Container>
                </div>
            <BusinessGrowth />

            <div className="beyoundClick padding linear-dark-background">
                <Container>
                    <Row>
                        <Col>
                        <div className="beyoundClickDiv">
                          <h1 className="heading_main textaliginCenter">Beyond Clicks: We Forge Enduring Customer Lifecycles</h1>
                          <p className="FontSize18 textaliginCenter">Pioneering Digital Services for Long-Term Growth</p>
                          <div className="beyoundClickSlider">
                            <SliderContent></SliderContent>
                          </div>
                          </div>

                        </Col>
                    </Row>
                </Container>
            </div>
                        <div className="letsBuldTogtherSection  letsPowerBussince black section-padding ">
                        <Container>
                            <Row className="letsBuldTogtherdiv">
                            <Col lg="6">
                             <div className="letsBuldTogthercontent">
                                <h1 className="heading_main split">Let's Empower Your Business to Achieve Peak Success Through Strategic Marketing</h1>
                                <p className="FontSize18">Partner With IosAndWeb Technologies - India's Leading Mobile App Experts Turning Your Ideas Into Reality.</p>
                                <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Let's Build Together <FontAwesomeIcon icon={faAnglesRight} /></Link>
            
                             </div>             
                            <img className="ImgSectionDiv" src={men} alt="" /> 
                            </Col>
                            </Row>
                        </Container>               
                        </div>
        </>
    )
}

export default DigitalMarketing;