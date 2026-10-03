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
        title: "Strategic Mobile App Planning",
        features: [
            "Turning Vision into Velocity Every successful app begins with a blueprint. As a leading mobile development partner, we dive deep into your business goals to transform your vision into a technical reality. We dedicate extensive time to research, discovery, and roadmap planning to deliver a solution that doesn't just work, but wins.",
        ]
    },
    {
        icon: ux,
        title: "Interface & Experience Design (UI/UX)",
        features: [
            "Designed for Engagement, Built for Retention Our design team crafts prototype-driven solutions that solve complex user challenges. We focus on intuitive layouts that boost app downloads and user retention, turning your abstract ideas into impactful, high-fidelity mobile experiences.",
        ]
    },
    {
        icon: appdevelopment,
        title: "End-to-End App Development",
        features: [
            "Precision Engineering for Every Platform Developing a world-class app requires technical mastery. Our skilled engineers utilize modern frameworks to build seamless experiences that ensure total customer satisfaction. With a portfolio of 300+ successful launches, we are the top choice for robust Android and iOS development.",
        ]
    },
    {
        icon: testing,
        title: "Rigorous Quality Assurance (Testing)",
        features: [
            "Zero Compromise on Performance Before your app reaches a single user, our dedicated QA team subjects it to exhaustive stress tests. We evaluate functionality, cross-device performance, and usability to identify and resolve every bottleneck, ensuring you launch a flawless, market-ready product.",
        ]
    },
    {
        icon: launch,
        title: "Seamless Market Launch",
        features: [
            "Global Deployment Ready We handle the complexities of the App Store and Play Store submission process for you. From installation guides and comprehensive test cases to user manuals, we ensure your deployment is seamless—making us the trusted partner for stress-free digital launches.",
        ]
    },
    {
        icon: hours,
        title: "Dedicated Post-Launch Support",
        features: [
            "24/7 Performance Monitoring Our relationship doesn't end at launch. We provide round-the-clock maintenance to ensure your app stays updated, secure, and optimized as mobile OS standards evolve. Our team is always on standby to assist with updates and continuous improvements.",
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
                        <h2 className="heading_main split">From Concept to Launch: Our Development Lifecycle</h2>
                        <p className="FontSize18">Whether you are validating a startup idea or scaling an enterprise platform, our structured approach ensures a high-quality cross-platform experience from day one.</p>
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