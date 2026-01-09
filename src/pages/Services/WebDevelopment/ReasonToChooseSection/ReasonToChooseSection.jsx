import "./ReasonToChooseSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const basePath = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment`;
const stepabove = `${basePath}/step-above.webp`;
const routinetasks = `${basePath}/routine-tasks.webp`;
const secure = `${basePath}/more-secure.webp`;
const lowercosts = `${basePath}/lower-costs.webp`;


const reasonsLists = [
    {
        icon: secure,
        title: "Website Security",
        content1: "Systematic planning from concept to deploymentExpert",
        content2:'Expert frontend and backend development',
        content3:"Easy to maintain, simple to scale",
        content4:"Future-proof design that evolves with your business",
    },    {
        icon: routinetasks,
        title: "Smart Application Architecture",
        content1: "Systematic planning from concept to deploymentExpert",
        content2:'Expert frontend and backend development',
        content3:"Easy to maintain, simple to scale",
        content4:"Future-proof design that evolves with your business",
    },    {
        icon: lowercosts,
        title: "Long Term Cost Saving",
        content1: "Flexible, future-ready code that adapts as you grow",
        content2:'Seamless feature additions and system integrations',
        content3:"Eliminates expensive rebuilds and reduces maintenance costs",
        content4:"Magento-powered e-commerce that scales without major overhauls",
    },    {
        icon: lowercosts,
        title: "Great Support",
        content1: "Eliminates extra hardware costs and licensing fees",
        content2:'Streamlined workflows with stronger ROI',
        content3:"Dedicated long-term partnership beyond launch",
        content4:"Swift issue resolution and continuous optimization",
    },    {
        icon: stepabove,
        title: "A step above the opposition",
        content1: "Custom solutions vs. generic competitor tools",
        content2:'Unique processes that create differentiation',
        content3:"Enhanced service quality and operational excellence",
        content4:"Competitive capabilities others can't replicate",
    }
]

const ReasonChooseSection = () => {

    const reasonsRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".reasons_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: reasonsRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, reasonsRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);
    
    return(
        <div className="reason_choose_section section-padding body-background no-bottom-padding">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">Why Choose IosAndWeb Tech</h2>
                        <p className="paragraph_content text-center">With years of expertise, we craft tailored tech solutions for startups to enterprises. Our team excels in end-to-end development, ensuring scalability, security, and results-driven outcomes.</p> 
                        <div className="reasons_lists_grid less-top-padding" ref={reasonsRef}>
                            {reasonsLists.map((item,i) => (
                                <div className="reasons_lists_item reasons_boxes" key={i}>
                                    <div className="reasons_item_top">
                                        <img src={item.icon} alt={item.title} className="reasons_item_icon" />
                                        <h3 className="reasons_title_text">{item.title}</h3>
                                    </div>
                                    <div className="reasons_item_bottom">
                                        <ul className="reasons_item_list">
                                            <li className="reasons_item_text">{item.content1}</li>
                                            <li className="reasons_item_text">{item.content2}</li>
                                            <li className="reasons_item_text">{item.content3}</li>
                                            <li className="reasons_item_text">{item.content4}</li>
                                        </ul>
                                        <p className="reasons_item_text">{item.content}</p>
                                        <img src={item.icon} alt={item.title} className="reasons_icon" />
                                        <span className="reasons_arrow_icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h1 className="heading_main textaliginCenter section-padding less-bottom-padding ">Technology Solutions Engineered for Results</h1>

                        <h1 className="FontSize18 textaliginCenter">We build what works. Period.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReasonChooseSection