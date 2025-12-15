import { useEffect, useRef, useState } from "react";
import "./AIPoweredSection.css";
import { Col, Container, Row } from "react-bootstrap";
import SubHeading from "../../../components/SubHeading/SubHeading";

const technology = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/technology.svg`;
const trending = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/trending.svg`;
const customerService = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/customer-service.svg`;
const seo = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/seo.svg`;
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/software-development.svg`;
const communicationSkills = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/communication-skills.svg`;
const machineLearning = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/machine-learning.svg`;
const chatbot = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/chatbot.svg`;
const projectTeam = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/project-team.svg`;
const digitalTransformation = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/digital-transformation.svg`;
const appStore = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/app-store.svg`;
const android = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/android.svg`;
const fluter = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/fluter.svg`;
const native = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/native.svg`;
const PWA = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/technology.svg`;
// const technology = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/technology.svg`;
// const technology = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/technology.svg`;

const sectionsData = [
    {
        id: "intelligence",
        menu_title: "Intelligence",
        title: "Your Intelligent Tech Partner",
        subheading: "Empowering your business with AI solutions that drive growth, efficiency, and transformation.",
        color: "purple",
        apps: false,
        features: [
            {
                text: "Accelerate Operational Excellence",
                icon: technology,
            },
            {
                text: "Unlock Strategic Data Insights",
                icon: trending,
            },
            {
                text: "Transform Customer Experiences",
                icon: customerService,
            }
        ],
        lists: [
            {
                text: "AI Strategy & Consulting",
                icon: seo,
            },
            {
                text: "AI-Software Development",
                icon: softwareDevelopment,
            },
            {
                text: "Generative AI",
                icon: communicationSkills,
            },
            {
                text: "Machine Learning",
                icon: machineLearning,
            },
            {
                text: "AI Agent & Chat bot",
                icon: chatbot,
            }
        ]
    },
    {
        id: "studio",
        menu_title: "Studio",
        title: "Premier Digital Development Studio",
        subheading: "Driving Sustainable Business Growth Through Superior, Future-Ready Digital Engineering Excellence",
        color: "orange",
        apps: true,
        features: [
            {
                text: "Exclusive 5 Projects Annually",
                icon: projectTeam,
            },
            {
                text: "Direct C-Suite Strategic Oversight",
                icon: seo,
            },
            {
                text: "Top 1% Global Tech Talent",
                icon: digitalTransformation,
            }
        ],
        lists: [
            {
                text: "IOS App",
                icon: appStore,
            },
            {
                text: "Android App",
                icon: android,
            },
            {
                text: "Flutter App",
                icon: fluter,
            },
            {
                text: "React Native App",
                icon: native,
            },
            {
                text: "PWA App",
                icon: PWA,
            }
        ]
    }
];

const AIPoweredSection = () => {

    const [activeId, setActiveId] = useState("intelligence");
    const sectionRefs = useRef({});

    const scrollToSection = (id) => {
        sectionRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <div className="ai_powered_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <SubHeading text={"Solutions"} />
                        <h2 className="heading_main">AI-Powered Solutions <br />Built for Global Impact by IosAndWeb Technologies</h2>

                        <div className="ai_powered_flex_block less-top-padding">
                            <div className="ai_powered_sidebar">
                                {sectionsData.map((item) => (
                                    <div 
                                        key={item.id}
                                        className={`ai_powered_sidebar_items ${
                                            activeId === item.id ? "active" : ""
                                        }`}
                                        onClick={() => scrollToSection(item.id)}
                                    >
                                        <h2 className="heading_main">
                                            <span className={`${item.color}`}>CB</span> 
                                            {item.menu_title}
                                        </h2>
                                        <p className="powered_text">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="ai_powered_contents">
                                {sectionsData.map((item) => (
                                    <div 
                                        className={`powered_content_sections ${
                                            activeId === item.id ? "active" : ""
                                        }`}
                                        key={item.id}
                                        id={item.id}
                                        ref={(el) => (sectionRefs.current[item.id] = el)}
                                    >
                                        <h2 className={`heading_main ${item.color}`}>{item.title}</h2>
                                        <p className="paragraph_content">{item.subheading}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AIPoweredSection