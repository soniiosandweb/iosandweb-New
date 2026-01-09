import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import { Link, useLocation } from "react-router-dom";
import Banner from "./banner/Banner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SmallBanner from "./banner/SamllBanner";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid";
import PoweringSection from "./PoweringSection";
import ReasonChooseSection from "./ReasonToChooseSection";
import BusinessGoals from "./BusinessGoals";
import TabSection from "./TabSection/TabSection";
import ConcludingSection from "./ConcludingSection/ConcludingSection";
import FAQSection from "../../../components/FAQSection/FAQSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";


// reasons to choose images

const basePath = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment`;
const shoppingCart = `${basePath}/close-up-view-shopping-cart-overloaded-with-food-while-background-female-person-choosing-products.webp`;
const locationRoad = `${basePath}/location-symbols-road-with-mountains.webp`;
const medicalBanner = `${basePath}/medical-banner-with-doctor-holding-stethoscope.webp`;
const cleaningWoman = `${basePath}/medium-shot-woman-cleaning-home.webp`;
const onlineShopping = `${basePath}/online-shopping-concept.webp`;
const rightArrow = `${basePath}/right-arrow.webp`;
const uber = `${basePath}/young-uber-driver-car-interior.webp`
const van = `${basePath}/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van.webp`
const designerWork = `${basePath}/set-designer-work-indoors.webp`;
const chickenFood = `${basePath}/side-view-chicken-meatballs-with-greens-ketchup-plate.webp`;
const men = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/man.webp`;



function MobileAppDevelopment() {
    
            const goalsRef = useRef(null);
            
                useEffect(() => {
                    let ctx;
            
                    const initAnimation = () => {
                        ctx = gsap.context(() => {
                        gsap.fromTo(
                            ".goals_boxes",
                            { y: 60, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.6,
                                ease: "power3.out",
                                stagger: 0.2,
                                scrollTrigger: {
                                    trigger: goalsRef.current,
                                    start: "top 75%",
                                    toggleActions: "play reverse play reverse",
                                }
                            }
                        );
                        }, goalsRef);
            
                        ScrollTrigger.refresh();
                    };
            
                    const timeout = setTimeout(initAnimation, 150);
            
                    return () => {
                        clearTimeout(timeout);
                        ctx && ctx.revert();
                    };
                }, []);

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
    const featuresPoints = [
    "Intelligent Mobile App Development Fueled by AI Innovation",
    "Secure, Scalable Mobile Apps Driven by Blockchain Technology",
    "High-Impact Mobile App Experiences Powered by Exceptional Design"
]
    const location = useLocation();

    

    const faqLists = [
        {
            title: "What types of mobile apps do you develop—native, hybrid, or cross-platform?",
            text: "At IosAndWeb Technologies, we develop all three types—native apps (for Android and iOS), hybrid apps, and cross-platform apps using frameworks like Flutter, React Native, and Xamarin. We recommend the best approach based on your budget, timeline, and scalability needs.",
        },
        {
            title: "Do you provide support and maintenance after the app is launched?",
            text: "Custom software is designed to match your exact business processes, which means better performance, higher security, and fewer compromises. Unlike pre-built tools, it adapts to your workflows, reduces human error, automates routine tasks, and lowers long-term operating costs.",
        },
        {
            title: "What is the benefit of cross-platform mobile app development?",
            text: "The development timeline varies depending on the complexity and scale of your project. On average, a fully functional custom software solution can take anywhere from 2 to 6 months. Our team ensures timely delivery while maintaining high-quality standards and performance.",
        },
        {
            title: "How much does mobile app development cost at IosAndWeb Technologies?",
            text: "Absolutely! At IosAndWeb Technologies, we encourage client involvement throughout the development lifecycle. From initial planning to testing and launch, your feedback is essential in shaping a solution that truly fits your business goals.",
        },
        {
            title: "How do you ensure the quality and performance of the mobile apps?",
            text: "Yes, while the initial investment might be higher than generic tools, custom software pays off in the long run. It minimizes recurring licensing fees, reduces inefficiencies, lowers support costs, and ultimately leads to improved productivity and ROI.",
        }
    ]


    return (
        <>
            <SEO
                title={"Mobile App Development Services | IOS mobile development company"}
                description={"Iosandweb is one of the top web and mobile app development companies, offering expert iOS and Android app & software development services for all businesses."}
                keywords={"Mobile App Development Services, Web and mobile app development companies, Ios mobile development company, Mobile app development firms, Android app development companies, Android software development companies"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />




            {/* banner */}
            <Banner></Banner>

            {/* Features Points */}
            <FeaturesPointsSection lists={featuresPoints} />

            {/* Animated Text */}
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

            <div className="black VideoSection section-padding no-top-padding">
            <Container>
                <Row>
                <Col>
                        <div className="VideoSectionDev textaliginCenter ">
                             <h1 className="heading_main">Your Vision, Engineered for Every Screen</h1>
                             <p className="FontSize25 bold">Leading Mobile App Development Experts – Trusted for Excellence</p>
                             <p className="subHeading">At iosAndWeb Technologies, we don’t just build apps; we architect digital experiences that captivate users and drive enterprise growth. As a premier mobile development firm, we deliver high-performance Android and iOS solutions tailored to thrive in the modern marketplace.</p>

                        </div>
                </Col>
                </Row>
            </Container>
            </div>

            <SmallBanner />
            <div className="black">
            <PoweringSection></PoweringSection>
            </div>
            <ReasonChooseSection></ReasonChooseSection>

            <BusinessGoals> </BusinessGoals>

            <TabSection></TabSection>

            <div className="letsBuldTogtherSection black section-padding no-bottom-padding">
            <Container>
                <Row className="letsBuldTogtherdiv">
                <Col lg="6">
                        <div className="letsBuldTogthercontent">
                            <h1 className="heading_main">Let's Build Something Extraordinary</h1>
                            <p className="FontSize18">Join the hundreds of businesses that have transformed their digital presence into a sustainable revenue engine.</p>
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>

                        </div>
                </Col>
                <Col lg="4">                <img className="letsBuldTogetherImg" src={men} alt="" /> 
</Col>
                </Row>
            </Container>               
            </div>


            <div className="what_set_us_part black text-white section-padding no-bottom-padding">
                <Container>
                    <Row className="align-items-center textaliginCenter">
                        <Col>
                        <div className=''>
                         <h1 ref={goalsRef}>What We Deliver Through Our Web Development Expertise</h1>
                            <div>
                              <span>
                                Transforming business challenges into digital opportunities with scalable, secure web solutions that drive measurable results.</span>
        
                              <span>
                                Every project we undertake is built on three pillars: Performance, Security, and Scalability. Whether you're launching a startup MVP or transforming enterprise operations, we deliver web solutions engineered for success across every industry
                                </span>
        
                            </div>
                        <div>
                       <div className="industry-card-wrapper section-padding no-bottom-padding ">
                            {industriesData.map((item, index) => (
                             <div className="industry-card" key={index}>
                               <img src={item.imgUrl} alt={item.title} />
        
                             <div className="industry-card-overlay">
                            <span>
                                    <span className="subHeading">{item.message}</span> <br/>
                                <span>Web Development</span>
                            </span>
                            <span className="arrow-btn"><img src={rightArrow} alt="" /></span>
                            </div>
                        </div> ))}
                        </div>
                    </div>
                </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <ConcludingSection />

            <FAQSection 
                subheading={"Insights"}
                heading={"Frequently Asked Questions"}
                lists={faqLists}
                fullwidth={true}
            />
            </>
    )
}

export default MobileAppDevelopment;