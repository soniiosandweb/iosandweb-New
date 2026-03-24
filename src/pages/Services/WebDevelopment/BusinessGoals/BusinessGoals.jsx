import { Col, Container, Row } from "react-bootstrap";
import "./BusinessGoals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const checkIcon = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const businessPocess = `${process.env.REACT_APP_API_URL}/assests/services/software-development/business_pocess.webp`;
const scalability = `${process.env.REACT_APP_API_URL}/assests/services/software-development/scalability.webp`;
const basePath = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment`;
const achievement = `${basePath}/achievement.webp`;
const webDevelopment = `${basePath}/web-development.webp`;
const rocket = `${basePath}/rocket.webp`;
const graphicdesign = `${basePath}/graphic-design.webp`;

const goalsLists = [
    {
        icon: businessPocess,
        title: "Discovery & Requirement Analysis",
        features: [
            "Armed with insights, we architect your solution. Technology selection, timeline mapping, resource allocation, and milestone definition—every detail planned to minimize risk and maximize efficiency.",
            "Deliverable: Complete project roadmap and execution plan",
        ]
    },
    {
        icon: scalability,
        title: "Strategy & Planning",
        features: [
            "We start by listening. Through in-depth consultations, we uncover your business goals, audience needs, and technical requirements—building a comprehensive understanding that shapes every decision moving forward.",
            "Deliverable: Detailed project brief and strategic foundation",
        ]
    },
    {
        icon: graphicdesign,
        title: "Development & Implementation",
        features: [
            "Approved designs become functional reality. Our developers write clean, scalable code using industry best practices—building robust platforms that perform flawlessly and stand the test of time.",
            "Deliverable: Fully functional, feature-complete platform",
        ]
    },
    {
        icon: webDevelopment,
        title: "Designing the Experience",
        features: [
            "Before you see it, we stress-test everything. Cross-browser compatibility, mobile responsiveness, security vulnerabilities, performance bottlenecks—we catch issues before they become problems.",
            "Deliverable: Tested, validated, production-ready solution",
        ]
    },
    {
        icon: achievement,
        title: "Designing the Experience",
        features: [
            "Launch is just the beginning. We monitor performance, implement updates, patch security vulnerabilities, and optimize continuously—ensuring your platform evolves with your business.",
            "Deliverable: Ongoing peace of mind and peak performance",
        ]
    },
    {
        icon: rocket,
        title: "Designing the Experience",
        features: [
            "Our designers transform strategy into stunning visuals. User-centric interfaces, intuitive navigation, and compelling interactions—designed to engage visitors and drive conversions while reflecting your brand identity.",
            "Deliverable: High-fidelity mockups and interactive prototypes",
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
                        <h2 className="heading_main split">Our Proven Process for Delivering High-Performance Websites</h2>
                        <p className="FontSize18">From concept to launch and beyond, our structured approach ensures your project stays on track, on budget, and aligned with your vision.</p>
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