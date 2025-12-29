import "./IndustriesSection.css";
import { Button, Col, Container, Row } from "react-bootstrap"
import SubHeading from "../../../components/SubHeading/SubHeading"
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ecommerce = `${process.env.REACT_APP_API_URL}/assests/home/industries/ecommerce-img.webp`;
const ecommerceIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/grocery-store.webp`;
const realestate = `${process.env.REACT_APP_API_URL}/assests/home/industries/realestate-img.webp`;
const realestateIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/realestate.webp`;
const artificial = `${process.env.REACT_APP_API_URL}/assests/home/industries/artificial-img.webp`;
const artificialIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/artificial-intelligence.webp`;
const healthcare = `${process.env.REACT_APP_API_URL}/assests/home/industries/healthcare-img.webp`;
const healthcareIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/healthcare.webp`;
const restaurant = `${process.env.REACT_APP_API_URL}/assests/home/industries/restaurant-img.webp`;
const restaurantIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/restaurant.webp`;
const entertainment = `${process.env.REACT_APP_API_URL}/assests/home/industries/entertainment-img.webp`;
const entertainmentIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/entertainment.webp`;
const onDemand = `${process.env.REACT_APP_API_URL}/assests/home/industries/on-demand-img.webp`;
const onDemandIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/on-demand.webp`;
const socialmedia = `${process.env.REACT_APP_API_URL}/assests/home/industries/socialmedia-img.webp`;
const socialmediaIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/socialmedia.webp`;
const logistic = `${process.env.REACT_APP_API_URL}/assests/home/industries/logistic-img.webp`;
const logisticIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/logistic.webp`;
const education = `${process.env.REACT_APP_API_URL}/assests/home/industries/education-img.webp`;
const educationIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/education.webp`;
const travel = `${process.env.REACT_APP_API_URL}/assests/home/industries/travel-img.webp`;
const travelIcon = `${process.env.REACT_APP_API_URL}/assests/home/industries/travel.webp`;

const industriesLists = [
    {
        title: "eCommerce",
        lists: [
            "Online Storefronts",
            "Marketplace",
            "Ai-Based Shopping Experience",
            "Inventory Management",
        ],
        link: "/ecommerce-app-development",
        image: ecommerce,
        icon: ecommerceIcon,
    },
    {
        title: "Real Estate",
        lists: [
            "Property Managment",
            "Virtual Tours",
            "Lead Management",
            "AI-Enhanced Property Valuation",
        ],
        link: "/real-estate-app-development",
        image: realestate,
        icon: realestateIcon,
    },
    {
        title: "Generative AI",
        lists: [
            "Smart Automation",
            "AI Insights",
            "Content Generation",
            "Predictive Intelligence",
        ],
        link: "/generative-ai-development",
        image: artificial,
        icon: artificialIcon,
    },
    {
        title: "Healthcare",
        lists: [
            "AI Based Patient Monitoring",
            "Fraud Detection",
            "Remote Monitoring",
            "Analytics",
        ],
        link: "/healthcare-software-development",
        image: healthcare,
        icon: healthcareIcon,
    },
    {
        title: "Restaurant",
        lists: [
            "AI- Based Menu Insights",
            "Virtual Tours",
            "Lead Management",
            "AI-Enhanced Property Valuation",
        ],
        link: "/",
        image: restaurant,
        icon: restaurantIcon,
    },
    {
        title: "Entertainment",
        lists: [
            "Streaming Platforms",
            "OTT Apps",
            "Content Management",
            "AI-Powered Content Insights",
        ],
        link: "/",
        image: entertainment,
        icon: entertainmentIcon,
    },
    {
        title: "On - Demand",
        lists: [
            "Service Marketplaces",
            "Delivery Management",
            "Payment Solutions",
            "AI-Enhanced Delivery Routing",
        ],
        link: "/",
        image: onDemand,
        icon: onDemandIcon,
    },
    {
        title: "Social Media",
        lists: [
            "Community Platforms",
            "Content Sharing",
            "Messaging Solutions",
            "AI- Enhanced Ad Targeting",
        ],
        link: "/",
        image: socialmedia,
        icon: socialmediaIcon,
    },
    {
        title: "Logistic",
        lists: [
            "Route Optimization",
            "Fleet Management",
            "AI-Driven Demand Forecasting",
            "Tracking Solutions",
        ],
        link: "/",
        image: logistic,
        icon: logisticIcon,
    },
    {
        title: "Education",
        lists: [
            "Education",
            "VR Classrooms",
            "Data-Driven Course Insights",
            "AI-Powered Adaptive Learning",
        ],
        link: "/",
        image: education,
        icon: educationIcon,
    },
    {
        title: "Travel",
        lists: [
            "Booking Platforms",
            "Inventory Management",
            "Loyalty Programs",
            "AI-Powered Travel Assistants",
        ],
        link: "/",
        image: travel,
        icon: travelIcon,
    }
];

const IndustriesSection = () => {

    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isSmallInd = windowWidth < 768;
    const isMobileInd = windowWidth < 992;
    const isTabletInd = windowWidth < 1200;

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const industriesSettings = {
        slidesToShow: isSmallInd ? 1.25 :isMobileInd ? 2.25 : isTabletInd ? 3 : 4,
        slidesToScroll: 1,
        infinite: isMobileInd ? false : true,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 8000,
        pauseOnHover: true,
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className="industries_section section-padding no-bottom-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <SubHeading text={"Industries"} />
                        <h2 className="heading_main">Serving Diverse Industry Needs with Tailored Solutions</h2>
                        <p className="paragraph_content">At IosAndWeb Tech, we understand that each industry comes with its own unique challenges and opportunities. That's why we offer specialized software and digital solutions designed to meet the specific needs of a wide range of sectors:</p>

                        <div className="industries_wrapper less-top-padding">
                            
                            {/* Slider */}
                            <Slider 
                                {...industriesSettings} 
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                            >
                                {industriesLists.map((item, i) => (
                                    <div key={i} className="industries_lists_item">
                                        <img src={item.image} alt={item.title} className="industries_item_img" /> 
                                        <div className="industries_item_content">
                                            <div className="industries_item_title">
                                                <div className="industries_title_block">
                                                    <img src={item.icon} alt={item.title} className="industries_title_icon" />
                                                    <p className="industries_title">{item.title}</p>
                                                </div>
                                                <Link reloadDocument to={item.link} className="industries_item_link">
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </Link>
                                            </div>
                                            <ul className="industries_content_lists">
                                                {item.lists.map((list, i) => (
                                                    <li className="industries_content_lists_item" key={i}>
                                                        {list}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Button className="btn-gradient-blue" onClick={() => navigate(item.link)}>Live Demo <FontAwesomeIcon icon={faAnglesRight} /></Button>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            <div className="slider_prev_next">
                                <button className="button" onClick={previous}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button className="button" onClick={next}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IndustriesSection