import { Col, Container, Row } from "react-bootstrap";
import "./BusinessGoals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const checkIcon = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;
const businessPocess = `${process.env.REACT_APP_API_URL}/assests/services/software-development/business_pocess.webp`;
const scalability = `${process.env.REACT_APP_API_URL}/assests/services/software-development/scalability.webp`;
const expenses = `${process.env.REACT_APP_API_URL}/assests/services/software-development/expenses.webp`;

const goalsLists = [
    {
        icon: businessPocess,
        title: "Business Process Automation",
        features: [
            "Streamline End-to-End Business Operations",
            "Automate Manual & Repetitive Tasks",
            "Boost Operational Efficiency",
        ]
    },
    {
        icon: scalability,
        title: "Enable Business Scalability",
        features: [
            "Scale Effortlessly to Millions of Users",
            "Add Unlimited Features and Functionality",
            "Expand Seamlessly Without Limitations",
        ]
    },
    {
        icon: expenses,
        title: "Minimize Business Expenses",
        features: [
            "Remove Ongoing Monthly Tool Expenses",
            "Optimize Technology Infrastructure Spending",
            "Streamline Operational Costs",
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
                    <Col>
                        <h2 className="heading_main split">How Our Custom Software Solutions Support Your Business Goals</h2>
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