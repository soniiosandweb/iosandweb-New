import { Link } from "react-router-dom";
import "./InnovativeSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const innovativeImg = `${process.env.REACT_APP_API_URL}/assests/home/innovative/imnnovative-img.webp`;
const innovativeBg = `${process.env.REACT_APP_API_URL}/assests/home/innovative/innovative-bg.webp`;
const softwareIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/software.webp`;
const designIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/ui-design.webp`;
const codingIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/coding.webp`;
const pocIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/poc.webp`;
const digitalIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/digital.webp`;
const payIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/pay.webp`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/blockchain.webp`;
const targetIcon = `${process.env.REACT_APP_API_URL}/assests/home/innovative/target.webp`;

const innovativeLists = [
    {
        text: "Software Development",
        icon: softwareIcon,
        link: "/custom-software-development-company",
        blank: false,
    },
    {
        text: "Mobile App Development",
        icon: designIcon,
        link: "/mobile-app-development-services",
        blank: false,
    },
    {
        text: "Web Development",
        icon: codingIcon,
        link: "/web-development-services",
        blank: false,
    },
    {
        text: "Development of POC & ICO",
        icon: pocIcon,
        link: "https://www.blockchain77.com/services/",
        blank: true,
    },
    {
        text: "Digital Transformation",
        icon: digitalIcon,
        link: "/digital-marketing-services",
        blank: false,
    },
    {
        text: "Pay Per Click Service",
        icon: payIcon,
        link: "/ppc-services",
        blank: false,
    },
    {
        text: "Blockchain Service",
        icon: blockchainIcon,
        link: "https://www.blockchain77.com/services/",
        blank: true,
    },
    {
        text: "Ideation & Design Strategy",
        icon: targetIcon,
        link: "/web-designing-services",
        blank: false,
    }
]

const innovativeItems = [
    {
        title: "Reliability",
        text: "reliability"
    },
    {
        title: "Innovation",
        text: "innovation"
    },
    {
        title: "Growth",
        text: "growth"
    },
    {
        title: "Scalability",
        text: "scalability"
    },
    {
        title: "Security",
        text: "security"
    }
];

const InnovativeSection = () => {

    const innovativeRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".innovative_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: innovativeRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, innovativeRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);
    
    return(
        <div className="innovative_section section-padding bg-black text-white">
            {/* <img src={innovativeBg} alt="Innovative IosAndWeb Technology" className="innovativeBG" /> */}
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main split">Smart Development. Powerful Marketing. Real Growth.</h2>
                        <p className="paragraph_content">At IosAndWeb, we transform ideas into powerful digital products that help businesses grow, innovate, and lead in a competitive market. With 8+ years of expertise in web development, mobile apps, AI solutions, custom software, and digital marketing, we deliver scalable, user-focused solutions designed to drive measurable business success.</p>

                        <p className="paragraph_content ">Driven by innovation and powered by emerging technologies, we develop intelligent digital experiences that combine AI, automation, and user-centric design to maximise business impact. Every solution we create is optimised for performance, search visibility, security, and scalability, ensuring your business stays ahead in an ever-evolving digital landscape. Whether you're launching a new venture or expanding an established brand, we deliver technology that transforms ambition into measurable success.</p>

                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InnovativeSection