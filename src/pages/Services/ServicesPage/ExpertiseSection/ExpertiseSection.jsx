import { Link } from "react-router-dom";
import "./ExpertiseSection.css";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
    faGear,
    faMobileScreenButton,
    faCube,
    faLink,
    faArrowsRotate,
    faFileContract,
    faCircleNodes,
    faPenRuler
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../newImagesServiecesPage/expertiesSection/img1.png"
import img2 from "../newImagesServiecesPage/expertiesSection/img2.png"
import img3 from "../newImagesServiecesPage/expertiesSection/img3.png"
import img4 from "../newImagesServiecesPage/expertiesSection/img4.png"
import img5 from "../newImagesServiecesPage/expertiesSection/img5.png"
import img6 from "../newImagesServiecesPage/expertiesSection/img6.png"
import leftbg from "../newImagesServiecesPage/expertiesSection/leftbg.png"


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
const expertiseServices = [
    { icon: faGear, title: "Web Development" },
    { icon: faMobileScreenButton, title: "Mobile App Development" },
    { icon: faCube, title: "Magento Development" },
    { icon: faLink, title: "Blockchain Development" },
    { icon: faArrowsRotate, title: "Digital Transformation" },
    { icon: faFileContract, title: "AI & Smart Contract" },
    { icon: faCircleNodes, title: "Development of POC & ICO" },
    { icon: faPenRuler, title: "Ideation & Design Strategy" }
];
    return(
        <div className="services_expertise_section  no-bottom-padding " ref={expertiseRef}>
            <Container>
                <Row>
                    <Col className="">
                      
                       <div className="expertiseSection">
    <Container>
        <Row className="align-items-center">

            {/* LEFT IMAGE */}
            <Col lg={6} md={12} className="ImageDiv">
                <div className="expertiseImage">
                    <img src={leftbg} alt="Our Expertise" />
                </div>
            </Col>

            {/* RIGHT CONTENT */}
            <Col lg={6} md={12}>
                <div className="expertiseContent">
                     <span className="topSectionExpertise">                    <span className="expertiseTag">
                       Core Services
                    </span>

                    <h2>
                       One Technology Partner

                        <span >An Intelligent Digital Stack</span>
                    </h2>

                    <p>
From AI agents to cloud infrastructure, we bring the technologies behind modern digital businesses together.                    </p>
</span>
                    <div className="expertiseServices">

                        <div className="expertiseService">
                            <span className="serviceIcon">
                                <img src={img1} alt=" " />
                            </span>
                            <span>AI Agents & Agentic System</span>
                        </div>

                        <div className="expertiseService">
                            <span className="serviceIcon">
                         <img src={img2} alt=" " />
                            </span>
                            <span>AI-Native Software</span>
                        </div>

                        <div className="expertiseService">
                            <span className="serviceIcon"><img src={img3} alt=" " /></span>
                            <span>Web & App Engineering</span>
                        </div>

                        <div className="expertiseService">
                            <span className="serviceIcon"><img src={img4} alt=" " /></span>
                            <span>Cloud & AI Infrastructure</span>
                        </div>

                        <div className="expertiseService">
                            <span className="serviceIcon"><img src={img5} alt=" " /></span>
                            <span>AI Security & Cybersecurity</span>
                        </div>

                        <div className="expertiseService">
                            <span className="serviceIcon"><img src={img6} alt=" " /></span>
                            <span>Data & Intelligence</span>
                        </div>


                    </div>

                    <Link
                        to="/contact-us"
                        reloadDocument
                        className="expertiseButton"
                    >
                        Let's Get Started
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </Link>

                </div>
            </Col>

        </Row>
    </Container>
</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExpertiseSection