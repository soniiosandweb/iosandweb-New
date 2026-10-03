import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import JoinOurTeam from "../../components/JoinOurTeam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faChevronRight, faCode, faCogs, faDesktop, faFileAlt, faLongArrowRight, faPaintBrush, faShoppingCart, faUserCog, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Banner from './Banner/Banner.jsx'
import TabSection from './TabSection.jsx'
// import IndustriesWeTransform from './IndustriesWeTransform/IndustriesWeTransform'


// its iamges are in Carwwe page 
const careerBanner = `${process.env.REACT_APP_API_URL}/assests/images/career/career-banner-image.webp`;

// Reasons to join images

const basePath = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment`;
const shoppingCart = `${basePath}/close-up-view-shopping-cart-overloaded-with-food-while-background-female-person-choosing-products.webp`;
const locationRoad = `${basePath}/location-symbols-road-with-mountains.webp`;
const medicalBanner = `${basePath}/medical-banner-with-doctor-holding-stethoscope.webp`;
const cleaningWoman = `${basePath}/medium-shot-woman-cleaning-home.webp`;
const onlineShopping = `${basePath}/online-shopping-concept.webp`;
// const rightArrow = `${basePath}/right-arrow.webp`;
const uber = `${basePath}/young-uber-driver-car-interior.webp`
const van = `${basePath}/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van.webp`
const designerWork = `${basePath}/set-designer-work-indoors.webp`;
const chickenFood = `${basePath}/side-view-chicken-meatballs-with-greens-ketchup-plate.webp`;

const careerImage = `${process.env.REACT_APP_API_URL}/assests/images/career/career-image.webp`;
const checkBlue = `${process.env.REACT_APP_API_URL}/assests/images/career/checkBlue.webp`;
const checkPink = `${process.env.REACT_APP_API_URL}/assests/images/career/checkPink.webp`;
const point1 = `${process.env.REACT_APP_API_URL}/assests/images/career/point1.webp`;
const point2 = `${process.env.REACT_APP_API_URL}/assests/images/career/point2.webp`;
const point3 = `${process.env.REACT_APP_API_URL}/assests/images/career/point3.webp`;
const point4 = `${process.env.REACT_APP_API_URL}/assests/images/career/point4.webp`;
const point5 = `${process.env.REACT_APP_API_URL}/assests/images/career/point5.webp`;

const supportAdvisor = `${process.env.REACT_APP_API_URL}/assests/images/career/support-advisor.webp`;
const advisor = `${process.env.REACT_APP_API_URL}/assests/images/career/advisor.png`;
const experts = `${process.env.REACT_APP_API_URL}/assests/images/career/experts.png`;
const wellness = `${process.env.REACT_APP_API_URL}/assests/images/career/wellness.png`;

const life = `${process.env.REACT_APP_API_URL}/assests/images/career/life.webp`;
const experience = `${process.env.REACT_APP_API_URL}/assests/images/career/experience.png`;
const diversity = `${process.env.REACT_APP_API_URL}/assests/images/career/diversity.png`;
const foundation = `${process.env.REACT_APP_API_URL}/assests/images/career/society.png`;

function Career(){

    const location = useLocation();
    const industriesData = [
        {
            imgUrl: chickenFood,
            message: "Food & Restaurant",
        },
        {
            imgUrl: shoppingCart,
            message: "ON Demand",
        },
        {
            imgUrl: medicalBanner,
            message: "Healthcare",
        },
        {
            imgUrl:onlineShopping ,
            message: "eCommerce",
        },
        {
            imgUrl: designerWork,
            message: "Real Estate",
        },
        {
            imgUrl: cleaningWoman,
            message: "Home Service",
        },
        {
            imgUrl: van,
            message: "Delivery Logistic",
        },
        {
            imgUrl: uber,
            message: "Taxi & Transportation",
        },
        {
            imgUrl: locationRoad,
            message: "Route Map",
        },
        ];
    
    return(
        <>
            <SEO
                title={"How We Work | IosAndWeb Technologies Development Process"}
                description={"Discover how IosAndWeb Technologies works with a structured process for web development, mobile apps, and digital marketing to deliver reliable and scalable solutions."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <Banner></Banner>
            {/* Our Core Values */}
            <div className="how-we-work-Values  section-padding black">
               <Container>
                <Row>
                    <Col>
                    <div className="How_we_work_Values_section ">
                        <div className="TopSectionHowWeWorkSection">
                            <div className="topSectionDiv">
                                <img src={checkBlue} alt="" />
                                <p className="FontSize18">Client-First, Transparent Work Culture </p>
                            </div>                            
                            <div className="topSectionDiv">
                                <img src={checkBlue} alt="" />
                                <p className="FontSize18">Experienced Developers & designers </p>
                            </div>                            
                            <div className="topSectionDiv">
                                <img src={checkBlue} alt="" />
                                <p className="FontSize18">Agile, result-oriented delivery model </p>
                            </div>                            
                            <div className="topSectionDiv">
                                <img src={checkBlue} alt="" />
                                <p className="FontSize18">On-time project completion </p>
                            </div>
                        </div>
                        <h1 className="heading_main textaliginCenter">Our Core Values</h1>
                        <p className="heading_main textaliginCenter">Driven by Innovation. Powered by Trust.</p>

                        <div className="DownsectionHowWeWork">
                            <div className="BottomSecitionDiv">
                                <p className="FontSize18 bold">Innovation</p>
                                <p className="FontSize14">Adopting Modern technologies to build future-ready solutions.</p>
                            </div>
                            <div className="BottomSecitionDiv">
                                <p className="FontSize18 bold">Transparency</p>
                                <p className="FontSize14">Clear Communication at every stage of Development</p>
                            </div>
                            <div className="BottomSecitionDiv">
                                <p className="FontSize18 bold">Quality</p>
                                <p className="FontSize14">Strict Coding Standards and Multi-level testing.</p>
                            </div>
                            <div className="BottomSecitionDiv">
                                <p className="FontSize18 bold">Commitmentx</p>
                                <p className="FontSize14">Long-term partnership, not just project delivery.</p>
                            </div>
                        </div>
                        

                    </div>
                    </Col>
                </Row>
               </Container>
            </div>

                                   <div className="what_set_us_part black section-padding no-top-padding text-white ">
                                       <Container>
                                           <Row className="align-items-center textaliginCenter">
                                               <Col>
                                                   <div className=''>
                                                       <h1  className='split padding'>Tailored Digital Solutions  
                                                           <span className="text-highlight split"> Across Industries</span> </h1>
                                                       <div>
                   
                                                           <span>
                                                             We Deliver Custom Web and Mobile Solutions For Businesses across diverse domains, ensuring specific industry needs are met with precisions.
                                                           </span>
                   
                                                       </div>
                                                       <div>
                                                           <div className="industries_transform_grid padding">
                                                           {industriesData.map((item, i) => (
                                                   <Link reloadDocument to={item.link} key={i} className="industries_transform_item industries_boxes">
                                                       <img src={item.imgUrl} alt={item.imgUrl} className="industries_transform_image" />
                                                       <div className="industries_transform_contents">
                                                           <div className="industries_transform_left">
                                                               <h3 className="industries_transform_title textalignleft">{item.message}</h3>
                                                               <p className="industries_transform_text textalignleft">Web Development</p>
                                                           </div>
                                                           <div className="industries_transform_arrow">
                                                               <FontAwesomeIcon icon={faLongArrowRight} />
                                                           </div>
                                                       </div>
                                                   </Link>
                                                           ))}
                                                           </div>
                   
                                                       </div>
                   
                                                   </div>
                                               </Col>
                                           </Row>
                                       </Container>
                                   </div>
                        <TabSection></TabSection>
                        
                        <div className='howWEWorkProcess black section-padding no-top-padding textaliginCenter'>
                            <Container >
                                <Row>
                                    <Col>
                                        <div className="Process1HowWeWork">
                                           <div className="processStepHowWeWrok">
                                            <h1 className="noOfPoint">01</h1>
                                            <h1 className="FontSize25 ">Discovery & Briefing</h1>
                                            <div className='FontSize18 bold' >Understanding Your Business Vision</div>
                                            <p className="FontSize14 textalignleft">We Begin by thoroughly analyzing your business ideas, goals, and requirements to propose the most effective digital solutions tailored to your brand.</p>

                                            <div className="PointListProcess">
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">One-on-one consultation with industry experts</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Strategic Planning and accurate Project estimation</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">In-Depth market and competitor research to keep you ahead</p>
                                                </span>
                                            </div>
                                            </div> 
                                           <img className='ProcessHowWeWorkImg' src={point1} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className='howWEWorkProcess black section-padding no-top-padding textaliginCenter'>
                            <Container >
                                <Row>
                                    <Col>
                                        <div className="Process1HowWeWork PINKUNO">
                                        <img className='ProcessHowWeWorkImg' src={point2} alt="" />
                                           <div className="processStepHowWeWrok">
                                            <h1 className="noOfPoint">02</h1>
                                            <h1 className="FontSize25 blue ">Research & Architecture</h1>
                                            <div className='FontSize18 bold' >Building a strong & technical foundation</div>
                                            <p className="FontSize14 textalignleft">Our team explore the latest technologies and framework to design a robust, scalable, and customized architecture for your business needs.</p>

                                            <div className="PointListProcess">
                                                <span className='listPiont'>
                                                    <img src={checkPink} alt="" />
                                                    <p className="FontSize14 bold">Selection of the right tech stack</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkPink} alt="" />
                                                    <p className="FontSize14 bold">Fully Customized Solution architecture</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkPink} alt="" />
                                                    <p className="FontSize14 bold">User-Centric UI/UX design for superior customer experience</p>
                                                </span>
                                            </div>
                                            </div> 
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className='howWEWorkProcess black section-padding no-top-padding textaliginCenter'>
                            <Container >
                                <Row>
                                    <Col>
                                        <div className="Process1HowWeWork">
                                           <div className="processStepHowWeWrok">
                                            <h1 className="noOfPoint">03</h1>
                                            <h1 className="FontSize25 ">Design & Development</h1>
                                            <div className='FontSize18 bold' >Transforming Ideas into roducts</div>
                                            <p className="FontSize14 textalignleft">We Convert approves Designs into Secure, Clean, and High-Performance code while integrating advanced feature and seamless functionality.</p>

                                            <div className="PointListProcess">
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Intuitive and visually appealing interface design </p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Core Functionality Development with modern Frameworks</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Performance-optimized and future-ready development</p>
                                                </span>
                                            </div>
                                            </div> 
                                           <img className='ProcessHowWeWorkImg' src={point3} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                         <div className='howWEWorkProcess black section-padding no-top-padding textaliginCenter'>
                            <Container >
                                <Row>
                                    <Col>
                                        <div className="Process1HowWeWork PINKUNO">
                                        <img className='ProcessHowWeWorkImg' src={point4} alt="" />
                                           <div className="processStepHowWeWrok">
                                            <h1 className="noOfPoint">04</h1>
                                            <h1 className="FontSize25 blue ">Testing & QA</h1>
                                            <div className='FontSize18 bold' >Delivering Bug-Free Solutions</div>
                                            <p className="FontSize14 textalignleft">Our team explore the latest technologies and framework to design a robust, scalable, and customized architecture for your business needs.</p>

                                            <div className="PointListProcess">
                                                <span className='listPiont'>
                                                    <img src={checkPink} alt="" />
                                                    <p className="FontSize14 bold">Selection of the right tech stack</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkPink} alt="" />
                                                    <p className="FontSize14 bold">Fully Customized Solution architecture</p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkPink} alt="" />
                                                    <p className="FontSize14 bold">User-Centric UI/UX design for superior customer experience</p>
                                                </span>
                                            </div>
                                            </div> 
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                         <div className='howWEWorkProcess black section-padding no-top-padding textaliginCenter'>
                            <Container >
                                <Row>
                                    <Col>
                                        <div className="Process1HowWeWork">
                                        
                                           <div className="processStepHowWeWrok">
                                            <h1 className="noOfPoint">05</h1>
                                            <h1 className="FontSize25 ">Launch & Growth</h1>
                                            <div className='FontSize18 bold' >Wrapping Up for Success</div>
                                            <p className="FontSize14 textalignleft">We ensure a smooth and successful product launch while supporting your business with result-oriented strategies for sustained growth.</p>

                                            <div className="PointListProcess">
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Hassle-Free deployment with </p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Ongoing Performance Monitoring </p>
                                                </span>
                                                <span className='listPiont'>
                                                    <img src={checkBlue} alt="" />
                                                    <p className="FontSize14 bold">Strategic Promotion to maximize reach and ROI</p>
                                                </span>
                                            </div>
                                            </div> 
                                            <img className='ProcessHowWeWorkImg' src={point5} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        
            

        </>
    )
}

export default Career;