import "./ServicesSection.css";
import { Col, Container, Row } from "react-bootstrap"
import SubHeading from "../../../components/SubHeading/SubHeading"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import Slider from "react-slick";
import { useEffect, useState } from "react";

const servicesBG = `${process.env.REACT_APP_API_URL}/assests/images/home/services/services_bg.webp`;
const artificialIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/services/artificial-intelligence.svg`;
const aiIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/services/aii.svg`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/services/blockchain.svg`;
const dataIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/services/data-science.svg`;
const analysisIcon = `${process.env.REACT_APP_API_URL}/assests/images/home/services/analysis.svg`;

const serviceSlider = [
    {
        title: "Artificial Intelligence",
        content: "Architect intelligent systems that elevate decision-making capabilities and drive operational excellence at scale.",
        icon: artificialIcon,
    },
    {
        title: "Gen AI",
        content: "Deploy cutting-edge AI solutions that revolutionize content creation and redefine user engagement benchmarks.",
        icon: aiIcon,
    },
    {
        title: "Blockchain",
        content: "Build immutable digital infrastructures that ensure enterprise-grade security and transparent operations.",
        icon: blockchainIcon,
    },
    {
        title: "Data Science",
        content: "Convert complex data patterns into actionable strategies that accelerate market leadership.",
        icon: dataIcon,
    },
    {
        title: "Business Analytics",
        content: "Unlock hidden operational insights that drive competitive advantage and fuel strategic growth.",
        icon: analysisIcon,
    }
]

const ServicesSection = () => {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isLessSer = windowWidth < 480;
    const isSmallSer = windowWidth < 768;
    const isMobileSer = windowWidth < 992;
    
    const servicesSettings = {
        slidesToShow: isSmallSer ? 1 :isMobileSer ? 2 : 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        centerPadding: isLessSer ? "30px" : "50px",
        centerMode: isSmallSer ? true : false,
    };
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="services_section section-padding no-bottom-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="services_section_flex">
                            <div className="services_flex_left">
                                <SubHeading text={"Service"} />
                                <h2 className="heading_main">We build innovative solutions and upgrade existing systems using next-gen technologies to future-proof your business.</h2>
                                <p className="paragraph_content">We build innovative digital solutions and modernize outdated systems using cutting-edge, next-generation technologies to ensure your business stays future-ready. Our approach focuses on enhancing performance, improving scalability, and integrating intelligent automation to help you stay competitive in an evolving digital landscape. Whether you need a completely new product or a smarter version of what you already have, we deliver solutions that are secure, efficient, and designed for long-term success.</p>
                            </div>
                            <div className="services_flex_right">
                                <img src={servicesBG} alt="Services BG" className="services_bg" />
                                <div className="services_scale_content">
                                    <p className="struggling_text">Is Your Business Struggling with Tech Roadblocks?</p>
                                    <h2 className="heading_main">Scale Your Business While We Power Your Technology Evolution.</h2>
                                    <Link reloadDocument to="/contact-us" className="btn-gradient-blue">Schedule a 30-Minute Executive Strategy Consultation <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="servics_slider_block section-padding no-bottom-padding">
                            <Slider 
                                {...servicesSettings}
                            >
                                {serviceSlider.map((item, i) => (
                                    <div className="services_slider_item" key={i}>
                                        <div className="services_item_content">
                                            <img src={item.icon} alt={item.icon} className="services_item_icon" />
                                            <h3 className="services_item_title">{item.title}</h3>
                                        </div>
                                            
                                        <p className="services_item_text">{item.content}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesSection