import SubHeading from "../../../components/SubHeading/SubHeading";
import "./CaseStudies.css";
import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const maproute = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/maproute.webp`;
const chatbot = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/chatbot.webp`;
const xrpTrade = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/xrp-trade.webp`;
const AITranslator = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/AITranslator.webp`;
const tiara = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/tiara.webp`;
const surgihealth = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/surgihealth.webp`;

const casestudiesBG = `${process.env.REACT_APP_API_URL}/assests/images/home/case-studies/casestudies_bg.webp`;

const caseStudiesLists = [
    {
        navTitle: "MAP Route",
        navSubheading: "Real-Time Visibility",
        title: "MAP Route: Smarter Wayfinding",
        subheading: "Real-time directions, optimized routes, and seamless location intelligence at your fingertips.",
        image: maproute,
        features: [
            {
                percentage: "85%",
                text: "Faster Task & Workflow Analysis",
            },
            {
                percentage: "60%",
                text: "Quicker, Data-Driven Decision Making",
            }
        ]
    },
    {
        navTitle: "Chat Bot",
        navSubheading: "AI-Powered Assistance",
        title: "AI Chatbot: Instant, Intelligent Customer Support",
        subheading: "AI-powered support designed to reduce workload and increase satisfaction.",
        image: chatbot,
        features: [
            {
                percentage: "85%",
                text: "Faster Query Resolution",
            },
            {
                percentage: "60%",
                text: "Faster Customer Response Time",
            }
        ]
    },
    {
        navTitle: "XRP Trades",
        navSubheading: "Fast Crypto Trading",
        title: "Lightning-Fast XRP Trading",
        subheading: "Secure, Low-Fee, High-Speed Crypto Transactions Built for Serious Traders",
        image: xrpTrade,
        features: [
            {
                percentage: "85%",
                text: "Faster Execution Speed",
            },
            {
                percentage: "60%",
                text: "More Efficient Trading Decisions",
            }
        ]
    },
    {
        navTitle: "AI Translater",
        navSubheading: "AI Language Engine",
        title: "AI Translator – Instant Language Intelligence",
        subheading: "Break Language Barriers with Instant, Accurate, AI-Powered Translation",
        image: AITranslator,
        features: [
            {
                percentage: "85%",
                text: "Faster Language Processing",
            },
            {
                percentage: "60%",
                text: "Faster Communication Decisions",
            }
        ]
    },
    {
        navTitle: "Tiara Real Estate",
        navSubheading: "Premium Urban Living",
        title: "Delivering Smarter, Faster Real Estate Decisions",
        subheading: "Reinventing Real Estate Through Smart, Data-Led Insights",
        image: tiara,
        features: [
            {
                percentage: "85%",
                text: "More Efficient Property Analysis",
            },
            {
                percentage: "60%",
                text: "Faster Closing Timelines",
            }
        ]
    },
    {
        navTitle: "Surgi Health",
        navSubheading: "Safe Surgical Services",
        title: "Precision-Driven Health Solutions",
        subheading: "Advanced medical solutions engineered for precision and patient trust.",
        image: surgihealth,
        features: [
            {
                percentage: "85%",
                text: "Improved Diagnostic Efficiency",
            },
            {
                percentage: "60%",
                text: "Faster Care Delivery Timelines",
            }
        ]
    }
]

const CaseStudies = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const navRefs = useRef([]);
    const navContainerRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) =>
            prev === caseStudiesLists.length - 1 ? 0 : prev + 1
            );
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (window.innerWidth > 991) return;

        const container = navContainerRef.current;
        const activeItem = navRefs.current[activeIndex];

        if (!container || !activeItem) return;

        const containerWidth = container.offsetWidth;
        const itemLeft = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;

        // center active item inside container
        const scrollPosition =
            itemLeft - containerWidth / 2 + itemWidth / 2;

        container.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
    }, [activeIndex]);

    return(
        <div className="case_studies_section section-padding">
            <img src={casestudiesBG} alt="Case Studies" className="casestudies_bg" />
            <Container>
                <Row>
                    <Col>
                        <SubHeading text={"Case studies"} />
                        <h2 className="heading_main">Leading the Next Wave of Innovation</h2>
                        <p className="paragraph_content">Experience how ideas evolve into innovation powered by cutting-edge tech.</p>
                        <div className="case_studies_slider less-top-padding">
                            <div className="case_studies_sidebar" ref={navContainerRef}>
                                {caseStudiesLists.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`case_studies_navbar_item ${
                                            activeIndex === i ? "active" : ""
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                        ref={(el) => (navRefs.current[i] = el)}
                                    >
                                        <p className="casestudies_nav_title">{item.navTitle}</p>
                                        <p className="casestudies_nav_subheading">{item.navSubheading}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="case_studies_content">
                                <div
                                    className="case_studies_track"
                                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                >
                                    {caseStudiesLists.map((item, i) => (
                                        <div className="case_studies_slide" key={i}>
                                            <div className="case_studies_content_item">
                                                <div className="case_studies_content_left">
                                                    <h2 className="heading_main">{item.title}</h2>
                                                    <p className="paragraph_content">{item.subheading}</p>
                                                    <div className="studies_features_div">
                                                        {item.features.map((feature,index) => (
                                                            <div className="studies_features_item" key={index}>
                                                                <h3 className="heading_main">{feature.percentage}</h3>
                                                                <p className="paragraph_content">{feature.text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <Link reloadDocument to="/services" className="btn-gradient-blue">Build Your Success Story <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                                </div>
                                                <img src={item.image} alt={item.title} className="case_studies_image" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CaseStudies