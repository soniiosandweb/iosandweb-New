import "./IndustriesSection.css";
import { Button, Col, Container, Row } from "react-bootstrap"
import SubHeading from "../../../components/SubHeading/SubHeading"
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ecommerce = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/ecommerce-img.webp`;
const ecommerceIcon = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/grocery-store.webp`;
const realestate = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/realestate-img.webp`;
const realestateIcon = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/realestate.webp`;
const artificial = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/artificial-img.webp`;
const artificialIcon = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/artificial-intelligence.webp`;
const healthcare = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/healthcare-img.webp`;
const healthcareIcon = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/healthcare.webp`;
const finance = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/finance-img.webp`;
const financeIcon = `${process.env.REACT_APP_API_URL}/assests/images/home-new/industries/finance.webp`;

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
        title: "Finance",
        lists: [
            "Risk Management",
            "Investment Planning",
            "Financial Analysis",
            "Regulatory Compliance",
        ],
        link: "/",
        image: finance,
        icon: financeIcon,
    }
];

const IndustriesSection = () => {

    const navigate = useNavigate();
    const total = industriesLists.length;
    const [current, setCurrent] = useState(1);

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
        dots: false,
        autoplay: false,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        afterChange: (index) => {
            setCurrent(index + 1);
        },
    };

    const progressWidth = (current / total) * 100;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <div className="industries_section section-padding body-background">
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
                                                <Link to={item.link} className="industries_item_link">
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
                            
                            {/* Progress */}
                            <div className="industries_progress">
                                <div className="progress-bar">
                                    <span style={{ width: `${progressWidth}%` }} />
                                </div>
                            </div>

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