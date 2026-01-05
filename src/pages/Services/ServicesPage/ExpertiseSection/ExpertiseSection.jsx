import { Link } from "react-router-dom";
import "./ExpertiseSection.css";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


const webDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/services-page/web-development.svg`;
const mobileAppDevelop = `${process.env.REACT_APP_API_URL}/assests/services/services-page/mobile-app-develop.svg`;
const magento = `${process.env.REACT_APP_API_URL}/assests/services/services-page/magento.svg`;
const blockchain = `${process.env.REACT_APP_API_URL}/assests/services/services-page/blockchain.svg`;
const digitalTransformation = `${process.env.REACT_APP_API_URL}/assests/services/services-page/digital-transformation.svg`;
const algorand = `${process.env.REACT_APP_API_URL}/assests/services/services-page/algorand.svg`;
const POCICO = `${process.env.REACT_APP_API_URL}/assests/services/services-page/POC-ICO.svg`;
const ideation = `${process.env.REACT_APP_API_URL}/assests/services/services-page/ideation.svg`;

const servicesLists = [
    {
        icon: webDevelopment,
        link: "/web-development-services",
        title: "Web Development",
        content: "Fast, scalable, conversion-focused websites",
    },
    {
        icon: mobileAppDevelop,
        link: "/mobile-app-development-services",
        title: "Mobile App Development",
        content: "IOS & Android experiences users love",
    },
    {
        icon: magento,
        link: "/magento-development-services",
        title: "Magento Development",
        content: "End-to-end strategic eCommerce solutions",
    },
    {
        icon: blockchain,
        link: "https://www.blockchain77.com/services/",
        title: "Blockchain Development",
        content: "Secure, innovative Web3 solutions",
    },
    {
        icon: digitalTransformation,
        link: "/digital-marketing-services",
        title: "Digital Transformation",
        content: "Smart automation & modernization",
    },
    {
        icon: algorand,
        link: "https://www.blockchain77.com/services/",
        title: "Algorand Smart Contract",
        content: "High-performance smart contract development",
    },
    {
        icon: POCICO,
        link: "https://www.blockchain77.com/services/",
        title: "Development of POC & ICO",
        content: "Validated concepts & token launches",
    },
    {
        icon: ideation,
        link: "/web-designing-services",
        title: "Ideation & Design Strategy",
        content: "User-centered design driving growth",
    },
]

const ExpertiseSection = () => {

    const expertiseRef = useRef(null);
    
    useEffect(() => {
        let ctx;
    
        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".expertise_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: expertiseRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, expertiseRef);
    
            ScrollTrigger.refresh();
        };
    
        const timeout = setTimeout(initAnimation, 150);
    
        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);

    return(
        <div className="services_expertise_section section-padding no-bottom-padding body-background" ref={expertiseRef}>
            <Container>
                <Row>
                    <Col className="less-top-padding">
                        <h2 className="heading_main text-center split">Our Expertise</h2>
                        <p className="paragraph_content text-center">Comprehensive Digital Solutions, Delivered With Precision</p>
                        <div className="services_expertise_grid less-top-padding">
                            {servicesLists.map((item,i) => (
                                <Link reloadDocument to={item.link} className="services_expertise_item expertise_boxes" key={i}>
                                    <div className="services_expertise_icon_box">
                                        <img src={item.icon} alt={item.title} className="services_expertise_icon" />
                                    </div>
                                    <p className="paragraph_content">{item.title}</p>
                                    <p className="services_expertise_text">{item.content}</p>
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExpertiseSection