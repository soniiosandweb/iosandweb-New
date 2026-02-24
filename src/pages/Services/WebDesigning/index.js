import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import BussinessGoal from "./bussinessGoal/BussinessGoal.jsx";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faPaintBrush, faImage, faBullhorn, faFileText, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Banner from "./banner/banner";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid";
import ConcludingSection from "./ConcludingSection/ConcludingSection.jsx";

// reasons to choose images
const developMaintain = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/develop-maintain.png`;
const copywriting = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/copywriting.png`;
const optimisingSEO = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/optimising-seo.png`;
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/social-media-marketing.png`;
const ppcADS = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/ppc-ads.png`;

// final reflection images
const pdfHTML = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/pdf-html.png`;
const graphicDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/graphic-design.png`;

const Group = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/Group.webp`;
const rating = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/rating.webp`;
const satisfaction = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/satisfaction.webp`;
const ddfMain = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/ddf.webp`;
const menPic = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/imgddf.webp`;
const img1 = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/img1.webp`;
const img2 = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/img2.webp`;
const img3 = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/img3.webp`;
const img4 = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/img4.webp`;
const img5 = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/img5.webp`;
const img6 = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/img6.webp`;

function WebDesigning() {
        const featuresPoints = [
    "AI-Driven Web Design for Smarter Digital Experiences",
    "Secure, Scalable Web Solutions Powered by Blockchain Technology",
    "Exceptional Web Design for High-Performance Digital Experiences"
]

    const location = useLocation();

    return (
        <>
            <SEO
                title={"Web Designing Services | Web Design Agency | Web Designer Near Me"}
                description={"IosAndWeb Tech – A top web design company & agency. Expert web designer near you with 12+ yrs of experience. A trusted website builder near me.."}
                keywords={"Web designing services, Website Design Company, Web Design Company, Web design agency, Website builder near me, Web designer near me"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Web Designing Banner */}
           <Banner></Banner>

        <FeaturesPointsSection lists={featuresPoints} />
        <div className="padding black" >
            <AnimatedText />
        </div>

        <div className="black padding ">   
            <Container>
                <Row>
                <Col>
                        <div className="numberGridMobileDev">
                        <NumbersGrid />
                        </div>
                </Col>
                </Row>
            </Container>
            </div>


            <div className="black section-padding TowFactorsSection">   
            <Container>
                <Row>
                <Col lg={6}>
                <img className="TowFactorsSectionImgGroup" src={Group} alt="" />

                </Col >
                <Col lg={5}>
                <div className="TowFactorsContent">
                    <h1 className="TowFactorsContentHedaing">Two essential factors play a decisive role in your business success</h1>
                     <div>
                        <span className="TowFactorsContentSubhaeding"> <img src={rating}alt="" /> <h2 className="TowFactorsContentsub">Customer Experience</h2> </span>
                        <span className="TowFactorsContentSubhaeding"> <img src={satisfaction} alt="" /> <h2 className="TowFactorsContentsub">Customer Satisfaction</h2> </span>
                        <hr className="Line" />
                        <p className="TowFactorsContentPara">We design optimized customer experiences that drive up to 2× higher customer satisfaction</p>
                          <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>
                     </div>
                    
                </div>
                </Col>
                </Row>
            </Container>
            </div>


            <div className="linear-dark-background section-padding DDSSection">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="TowFactorsContent">
                            <h1 className="TowFactorsContentHedaing">Two essential factors play a decisive role in your business success</h1>
                            <div>
                                <span className="DDSImgHeadding">
                                    <span className="headingSection">
                                    <span className="imgDddsHeading">
                                        <img src={menPic} alt="img" />
                                        </span>
                                    <span className="mainText"> DDS</span>
                                    </span>
                                    <span className="textHeading">
                                       <span className="explanText"> ON DEMAND DELIVERY SOLUTIONS </span>
                                    </span>

                                    </span>
                                    <span className="piontList">
                                        <ul className="ddsList">
                                            <li className="ddlPiont">
                                                <span className="listIcon"> ● </span> The Challenge: To build an undisturbed, real-time tracking interface for drivers and customers across the USA and Canada.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Solution: We developed an optimized customer experience that led to increases in customer satisfaction as high as 2x.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Key Features: Real-time driver tracking, 24/7 instant support communication, and regional optimization for North American markets.
                                            </li>
                                        </ul>
                                    </span>
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

            <BussinessGoal></BussinessGoal>

            <div className="AdditionalSpecialized section-padding no-bottom-padding" >
                <div className="GerySection">
                          <Container>
                        <Row>
                            <Col className="additiionHeadingMean">
                <h2 className="heading_main split">How Our Custom Software Solutions Support Your Business Goals</h2>

                <span className="subHeading">A complete ecosystem of advanced web solutions designed to amplify performance, solidify brand identity, and fuel scalable global growth.</span>
                            </Col>
                            </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col className="rightToLeft">
                            <div className="AdditionalSectionTextDiv">
                                <h1 className="MianHeading">
                                  High-Impact Web Design
                                </h1>
                                <span className="subMainText">Crafting High-Impact Digital Experiences for Modern Businesses</span>
                             <span className="additionalSectionList">
                                <ul>
                                    <li>
                                       Creating Immersive Digital Experiences for the Enterprise -Not satisfied with an out-of-the-box template? We provide tailor-engineered, visually stunning websites that prioritize high-speed performance, and intuitively guided user journeys. Our top designers work on capturing user interest in just a second and converting that interest into better quality leads. 
                                    </li>
                                </ul>

                             </span>
                     <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Project Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        

                            </div>
                            <div className="ADditionalImgSection">
                             <img src={img1} alt="" />
                            </div>

                            </Col> 
                        </Row>
                    </Container>
                    <div className="section-padding no-bottom-padding">
                    <Container className="">
                        <Row>
                            <Col className="leftToright">
                            <div className="AdditionalSectionTextDiv">
                                <h1 className="MianHeading">
                                  Creative Logo & Identity Design
                                </h1>
                                <span className="subMainText">Creative Logo Design That Defines Your Brand</span>
                             <span className="additionalSectionList">
                                <ul>
                                    <li>
                                       Uniquely Designed Branding Solutions, Aligning with Your Market Positioning Your logo is the foundation that ultimately defines and shapes the element of trust and recognition associated with and attributed to your brand as a whole. We provide you with fantastically designed logos that perfectly encapsulate the basic elements associated with your inherent values, thus giving way to a life-long relationship filled with exclusively loyal brands. A niche can be created through a ‘premium’ look that defines dominance in the marketplace.
                                    </li>
                                </ul>

                             </span>
                              <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Define Your Brand <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        

                            </div>
                            <div className="ADditionalImgSection">
                             <img src={img2} alt="" />
                            </div>

                            </Col>
                        </Row>
                    </Container>
                    </div>

                </div>
                <div className="blackSection no-bottom-padding">
                    <Container>
                        <Row>
                            <Col className="rightToLeft">
                            <div className="AdditionalSectionTextDiv">
                                <h1 className="MianHeading">
                                 Advanced Search Engine Optimization
                                </h1>
                                <span className="subMainText">Crafting High-Impact Digital Experiences for Modern Businesses</span>
                             <span className="additionalSectionList">
                                <ul>
                                    <li>
                                       Strategic Visibility to Dominate Global Search Results Achieve #1 rankings with smart optimization strategies that attract your ideal audience and turn clicks into loyal customers. We optimize your site’s technical architecture and content to drive sustainable, high-quality organic traffic that grows with your business. 
                                    </li>
                                </ul>

                             </span>
                     <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Claim Your Ranking <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        

                            </div>
                            <div className="ADditionalImgSection">
                             <img src={img3} alt="" />
                            </div>

                            </Col> 
                        </Row>
                    </Container>
                    <div className="section-padding no-bottom-padding">
                    <Container >
                        <Row>
                            <Col className="leftToright ">
                            <div className="AdditionalSectionTextDiv">
                                <h1 className="MianHeading">
                                  Full-Funnel Digital Marketing
                                </h1>
                                <span className="subMainText">Strategic Digital Marketing Solutions for Sustainable Business Growth</span>
                             <span className="additionalSectionList">
                                <ul>
                                    <li>
                                       Strategic Solutions for Sustainable Revenue Growth We provide performance-focused digital marketing designed to enhance brand visibility and drive measurable actions across all digital channels. From lead acquisition to customer retention, our strategies ensure your brand remains top-of-mind throughout the buyer's journey 
                                    </li>
                                </ul>

                             </span>
                              <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Accelerate Growth <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        

                            </div>
                            <div className="ADditionalImgSection">
                             <img src={img4} alt="" />
                            </div>

                            </Col>
                        </Row>
                    </Container>
                    </div>

                </div>
                <div className="BlueSection ">
                    <Container>
                        <Row>
                            <Col className="rightToLeft">
                            <div className="AdditionalSectionTextDiv">
                                <h1 className="MianHeading">
                                 Expert Copywriting & Content Strategy
                                </h1>
                                <span className="subMainText">Expert Copywriting Services That Engage, Persuade, and Drive Results</span>
                             <span className="additionalSectionList">
                                <ul>
                                    <li>
                                      Persuasive Messaging That Engages, Persuades, and Delivers Words are your most powerful sales tool. Our expert writers craft clear, compelling copy that humanizes your brand while effectively communicating your unique value proposition. We bridge the gap between your brand and your audience through high-converting storytelling
                                    </li>
                                </ul>

                             </span>
                     <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Craft Your Message <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        

                            </div>
                            <div className="ADditionalImgSection">
                             <img src={img5} alt="" />
                            </div>

                            </Col> 
                        </Row>
                    </Container>
                    <div className="section-padding no-bottom-padding">
                    <Container className="">
                        <Row>
                            <Col className="leftToright">
                            <div className="AdditionalSectionTextDiv">
                                <h1 className="MianHeading">
                                  Reliable Website Support & Maintenance
                                </h1>
                                <span className="subMainText">Reliable Website Support & Maintenance for Seamless Performance</span>
                             <span className="additionalSectionList">
                                <ul>
                                    <li>
                                       Compelling Communication That Delivers, Engages, and Converts Words are the best sales tool. Effective authors at our company write inspiring, transparent copy that communicates your value proposition clearly and brings humanity to your brand. We use high-converting storytelling to tie your brand with your audience. 
                                    </li>
                                </ul>

                             </span>
                              <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Secure Your Site <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        

                            </div>
                            <div className="ADditionalImgSection">
                             <img src={img6} alt="" />
                            </div>

                            </Col>
                        </Row>
                    </Container>
                    </div>

                </div>

            </div>

            <div className="black section-padding ReadyToJionus no-bottom-padding">
                <Container>
                    <Row>
                        <Col>
                            <span className="ReadyToJionUsDiv">
                                <h1 className="heading_main split">Ready to Fuel Your Digital Transformation?</h1>
                                <span className="subHeading FontSize25">Empowering businesses to outpace the competition with precision design and intelligent marketing.</span>
                                <p className="FontSize18">Starting a complex digital project can be daunting, but you don't have to navigate it alone. Our growth consultants are ready to discuss your unique requirements and build a technical roadmap to your success</p>
                            </span>
                            <div className="btnDivCenter">
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue ">Start Your Free Consultation <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>

                            {/* what set as apart */}

                            <div className="section-padding SetUsPart no-bottom-padding" >
                                <h1 className="heading_main"> What Sets Us Apart?</h1>
                                <span className="FontSize25 Bold less-bottom-padding">Unlocking Business Expansion with High-Velocity and Performance-Driven Solutions</span>
                                <div className="heading5">We not only run the campaigns, but rather, we can engineer the growth. We do all of this on a platform of absolute clarity.</div>
                                 <span className="piontList margintop">
                                        <ul className="ddsList">
                                            <li className="ddlPiont">
                                                <span className="listIcon"> ● </span> Zero Barrier to Entry: We prove our worth the first day. That is why we have No Setup Fees to get your journey underway.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>100% Radical Transparency: Never wonder where your budget goes. You have full transparency into everything we do through honest reporting, with no "random promises".
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Data & analytics-driven approach: We replace guesswork with evidence. Every strategy is forged from deep-dive analytics and real-time market signals.
                                            </li>                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Consistent Optimisation of Campaign: Your market never rests, and neither do we. We take up bi-weekly audits and provide monthly performance reports to maximize customer lifetime value to bottom-line profitability
                                            </li>                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>Strategic Market Intelligence: Gain a competitive advantage in personalized audits and overall analysis of your competition to make use of market opportunities which were overlooked by your competition
                                            </li>                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Growth Architect: “You're not a ticket number. Enjoy your Growth Architect aligning with you every week to make sure your implementation is in perfect sync with your strategic vision.”
                                            </li>                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Agile & Scalable Pricing: With the growing nature of your business, your activities will definitely be change-oriented. We can make our pricing flexible as per your business.
                                            </li>                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> Precision Execution: Our weekly marketing execution plan is the roadmap of scaling.
                                            </li>
                                        </ul>
                                    </span>
                               <h1 className="heading_main">Beyond Clicks: We Architect Enduring Brand Loyalty</h1>
                                <span className="FontSize25 Bold less-bottom-padding">Pioneering Digital Services for the Modern Lifecycle</span>


                                <h1 className="heading_main margintop">Emerging & High-Tech Solutions</h1>
                                <span className="heading5 Bold less-bottom-padding">Stay ahead of the curve with cutting-edge engagement strategies.</span>
                                
                                 <span className="piontList margintop">
                                        <ul className="ddsList">
                                            <li className="ddlPiont">
                                                <span className="listIcon"> ● </span>  Influencer Marketing: Humanize your brand through trusted industry voices.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>AI-Driven Automation: Scale your operations with intelligent, automated marketing workflows.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>  Growth Marketing: Deploy aggressive, performance-led strategies designed for rapid expansion.

                                            </li>                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>   Reputation Management (ORM): Proactively protect and polish your digital footprint
                                            </li>                                           
                                        </ul>
                                    </span> 
                                    
                                 <h1 className="heading_main margintop">eCommerce-Focused Growth</h1>
                                <span className="heading5 Bold less-bottom-padding">Transform your digital storefront into a high-conversion revenue engine.</span>
                                
                                 <span className="piontList margintop">
                                        <ul className="ddsList">
                                            <li className="ddlPiont">
                                                <span className="listIcon"> ● </span>  Influencer Marketing: Humanize your brand through trusted industry voices.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span> AI-Driven Automation: Scale your operations with intelligent, automated marketing workflows.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>   Growth Marketing: Deploy aggressive, performance-led strategies designed for rapid expansion.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>    Reputation Management (ORM): Proactively protect and polish your digital footprint
                                            </li>                                           
                                        </ul>
                                    </span>

                                    <h1 className="heading_main margintop">Creative & Brand Strategy</h1>
                                <span className="heading5 Bold less-bottom-padding">Design that doesn't just look good—it performs</span>
                                
                                 <span className="piontList margintop">
                                        <ul className="ddsList">
                                            <li className="ddlPiont">
                                                <span className="listIcon"> ● </span> Brand Evolution: Comprehensive strategy development to define your market position.
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>High-Impact Creative Production: Graphic design and visual assets that capture attention instantly
                                            </li>                                            
                                            <li className="ddlPiont">
                                               <span className="listIcon"> ● </span>UX/UI Optimization: Intuitive interface design focused on reducing friction and boosting engagement.
                                            </li>                                            
                                      
                                        </ul>
                                    </span>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>


            {/* {} */}
            <ConcludingSection/>

        </>
    )
}

export default WebDesigning;