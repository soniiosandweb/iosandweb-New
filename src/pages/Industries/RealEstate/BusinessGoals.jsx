import { Col, Container, Row } from "react-bootstrap";
import "./BusinessGoals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const checkIcon = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const businessPocess = `${process.env.REACT_APP_API_URL}/assests/services/software-development/business_pocess.webp`;
const basePath = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment`;

const hours = `${basePath}/24-hours.webp`;
const appdevelopment = `${basePath}/app-development.webp`;
const launch = `${basePath}/launch.webp`;
const testing = `${basePath}/testing.webp`;
const ux = `${basePath}/ux.webp`;


const goalsLists = [
    {
        icon: businessPocess,
        title: "Strategic Mobile Consultation",
        features: [
            "Validate your vision with a data-backed roadmap. Our consultants analyze market viability and technical feasibility to ensure your mobile application delivers a measurable competitive advantage from day one.",
        ]
    },
    {
        icon: ux,
        title: "Custom App Development",
        features: [
            "We build feature-rich, high-performance mobile apps tailored to the unique workflows of the real estate industry—from intuitive search interfaces to secure, end-to-end transaction management.",
        ]
    },
    {
        icon: testing,
        title: "Enterprise PropTech Systems",
        features: [
            "Scalable infrastructure for global enterprises. We integrate sophisticated analytics, automated process management, and legacy system synchronization to help large-scale firms drive operational efficiency.",
        ]
    },
    {
        icon: launch,
        title: "High-Conversion Web Platforms",
        features: [
            "Transform your online presence with custom web applications designed for maximum engagement. We prioritize lightning-fast property listings, immersive UI/UX, and secure payment gateways to convert visitors into leads.",
        ]
    },
    {
        icon: hours,
        title: "AI-Driven Real Estate Insights",
        features: [
            "Harness the power of Intelligent Automation. Our AI solutions provide predictive market analytics, personalized property recommendations, and automated lead scoring to help you stay ahead of market trends.",
        ]
    },
    {
        icon: appdevelopment,
        title: "Property Management Suites",
        features: [
            "Streamline your portfolio management with comprehensive software suites. From automated rent collection and maintenance tracking to tenant communication portals, we build the tools that make property management effortless.",
        ]
    }
]

const BusinessGoals = () => {

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

    return (
        <div className="business_goals_section section-padding no-top-padding body-background" ref={goalsRef}>
            <Container>
                <Row>
                    <Col className="BussincessCol">
                        <h2 className="heading_main split">Our Complete Suite of Real Estate App Development Services</h2>
                        <p className="FontSize18 textaliginCenter">Our full suite of real estate app development services makes it possible for the buyer to purchase a home they adore, and the agent to close the deal at light speed.</p>
                        <div className="business_goals_grid less-top-padding">
                            {goalsLists.map((item,index) => (
                                <div className="business_goals_item goals_boxes" key={index}>
                                    <div className="business_goals_header">
                                        <img src={item.icon} alt={item.title} className="goals_item_icon" />
                                        <p className="goals_item_title">{item.title}</p>
                                    </div>
                                    <div className="business_goals_content">
                                        {item.features.map((list,i) => (
                                            <div className="goals_features_list" key={i}>
                                                <img src={checkIcon} alt="check" className="goals_features_icon" />
                                                <p className="goals_features_title">{list}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BusinessGoals