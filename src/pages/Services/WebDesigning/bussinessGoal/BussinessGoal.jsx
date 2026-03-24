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
        title: "Develop and maintain an individual website",
        features: [
            "Custom Website Engineering & Optimization A successful website loads quickly, is very beautiful, and very easy to navigate. Our design team specializes in designing and optimizing internet platforms that work seamlessly on desktop computers, tablets, and other mobile devices to maximize the generation of leads.",
        ]
    },
    {
        icon: ux,
        title: "Content & Copywriting",
        features: [
            "Strategic Content & Professional Copywriting Custom content makes your brand more relatable and increases your search engine rankings. Our in-house staff of professional copywriters provides your company with seamless coverage of all your online needs in one stop.",
        ]
    },
    {
        icon: appdevelopment,
        title: "Optimizing websites for search engines (SEO)",
        features: [
            "Result-Driven Search Engine Optimization Visibility: This is vital to high-intent customer attainment. Our SEO team, with effective keyword planning, maximizes organic traffic and search rankings to drive growth in numbers without burning a hole in your pocket compared to paying-per-click.",
        ]
    },
    {
        icon: testing,
        title: "Social Media Marketing",
        features: [
            "Social media marketing is really important for your business. Do not let it fail. It is time to make social media work for you. You can use these platforms to make people like your business and keep them as customers. Social media marketing can be a way to get more people to like your business and keep them coming back.",
        ]
    },
    {
        icon: launch,
        title: "PPC ADS",
        features: [
            "Precision Targeted PPC Advertising Instant Visibility Instant Visibility is an SEO tactic where you use advertisements to position your business at the top of search engine listings. Instant Visibility gives you a chance to benefit from very effective, well-structured, and targeted online advertising campaigns that have excellent ROI outcomes.",
        ]
    },]

const BussinessGoal = () => {

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
                        <h2 className="heading_main split">Beyond Design: We Architect Digital Experiences That Connect</h2>
                        <p className="FontSize">At iosAndWeb Technologies, we believe a website should do more than just look stunning, it must perform as your most powerful sales and engagement tool. By merging aesthetic excellence with technical rigor, we ensure every visitor interaction moves your business forward.</p>
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

export default BussinessGoal