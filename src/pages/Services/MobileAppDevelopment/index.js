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
import { faAnglesRight, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";


// reasons to choose images

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
const men = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/man.webp`;
const MobiledevVd = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/Mobile_App_Development_Video_SVG.mp4`;




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
            text: "At IosAndWeb Technologies, we develop all three types—native apps (for Android and iOS), hybrid apps, and cross-platform apps using frameworks like Flutter,<a href='https://iosandweb.net/blog/top-10-react-native-app-development-trends-in-2025'> React Native</a>, and Xamarin. We recommend the best approach based on your budget, timeline, and scalability needs.",
        },
        {
            title: "Do you provide support and maintenance after the app is launched?",
            text: "Yes, we offer 24/7 support and maintenance even after your app is live. Our team handles updates, performance improvements, bug fixes, and scaling as your user base grows—ensuring your app stays relevant and efficient.",
        },
        {
            title: "What is the benefit of cross-platform mobile app development?",
            text: "Cross-platform app development allows your app to run seamlessly on both Android and iOS using a single codebase. This saves time, reduces cost, and speeds up time-to-market—while maintaining high performance and native-like experience.",
        },
        {
            title: "How much does mobile app development cost at IosAndWeb Technologies?",
            text: "The cost depends on several factors like app complexity, features, platform(s), and timeline. We offer custom quotes based on your specific requirements. Contact us to discuss your project and receive a detailed estimate.",
        },
        {
            title: "How do you ensure the quality and performance of the mobile apps?",
            text: "Our QA team runs rigorous manual and automated tests to ensure functionality, performance, security, and user experience. We test apps on multiple devices and operating systems to guarantee smooth operation before the final launch."
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
         


            <div className="black VideoSection less-top-padding">
            <Container>
                <Row>
                <Col>
                        <div className="VideoSectionDev textaliginCenter ">
                             <h2 className="heading_main split">Your Vision, Engineered for Every Screen</h2>
                             <p className="FontSize25 bold">Leading Mobile App Development Experts – Trusted for Excellence</p>
                             <p className="subHeading">At iosAndWeb Technologies, we don’t just build apps; we architect digital experiences that captivate users and drive enterprise growth. As a premier mobile development firm, we deliver high-performance Android and iOS solutions tailored to thrive in the modern marketplace.</p>
                             
                             <div className="videoContiner padding">
                        <video poster={MobiledevVd} autoPlay={true} muted={true} loop={true}>
                            <source src={MobiledevVd} type="video/mp4"></source>
                        </video>
                             </div>

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
                    <h2 className="heading_main split">Let's Build Something Extraordinary</h2>
                    <p className="FontSize18">Join the hundreds of businesses that have transformed their digital presence into a sustainable revenue engine.</p>
                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>

                 </div>
                </Col>
                <Col lg="4">                
                <img className="letsBuldTogetherImg" src={men} alt="" /> 
                </Col>
                </Row>
            </Container>               
            </div>


                      {/* what set us oart */}
                        <div className="what_set_us_part black section-padding text-white ">
                            <Container>
                                <Row className="align-items-center textaliginCenter">
                                    <Col>
                                        <div className=''>
                                            {/* <h1 ref={goalsRef} className='split'>What We Deliver Through Our Web Development Expertise</h1> */}
                                            <div>
                                                <span>
                                                Transforming business challenges into digital opportunities with scalable, secure web solutions that drive measurable results.Every</span>
        
                                                <span>
                                                   project we undertake is built on three pillars: Performance, Security, and Scalability. Whether you're launching a startup MVP or transforming enterprise operations, we deliver web solutions engineered for success across every industry
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