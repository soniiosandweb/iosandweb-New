import { useEffect, useRef, useState } from "react";
import "./AIPoweredSection.css";
import { Col, Container, Row } from "react-bootstrap";
import SubHeading from "../../../components/SubHeading/SubHeading";
import dashbord from "../newHomeImage/scrrolScetion/dashbord.png"
import dashbord2 from "../newHomeImage/scrrolScetion/dashbord2.png"
import dashbord3 from "../newHomeImage/scrrolScetion/dashbord3.png"
import dashbord4 from "../newHomeImage/scrrolScetion/dashbord4.png"
import dashbord5 from "../newHomeImage/scrrolScetion/dashbord5.png"
import dashbord6 from "../newHomeImage/scrrolScetion/dashbord6.png"
import dashbord7 from "../newHomeImage/scrrolScetion/dashbord7.png"
import dashbord8 from "../newHomeImage/scrrolScetion/dashbord8.png"
import icon1 from "../newHomeImage/scrrolScetion/icon1.png"
import icon2 from "../newHomeImage/scrrolScetion/icon2.png"
import icon3 from "../newHomeImage/scrrolScetion/icon3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../newHomeImage/scrrolScetion/main/img1.png"
import img2 from "../newHomeImage/scrrolScetion/main/img2.png"
import img3 from "../newHomeImage/scrrolScetion/main/img3.png"
import img4 from "../newHomeImage/scrrolScetion/main/img4.png"
import img5 from "../newHomeImage/scrrolScetion/main/img5.png"
import img6 from "../newHomeImage/scrrolScetion/main/img6.png"
import img7 from "../newHomeImage/scrrolScetion/main/img7.png"
import img8 from "../newHomeImage/scrrolScetion/main/img8.png"
import { Link } from "react-router-dom";

const seo = `${process.env.REACT_APP_API_URL}/assests/home/aiPowered/seo.svg`;
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/home/aiPowered/software-development.svg`;
const communicationSkills = `${process.env.REACT_APP_API_URL}/assests/home/aiPowered/communication-skills.svg`;
const machineLearning = `${process.env.REACT_APP_API_URL}/assests/home/aiPowered/machine-learning.svg`;
const chatbot = `${process.env.REACT_APP_API_URL}/assests/home/aiPowered/chatbot.svg`;


const sectionsData = [
    {
        menu_title: "Agentic AI",
        Mainiocn: img1,
        title: "Agentic AI",
        subheading: "Transform your business with AI agents and intelligent automation built to work, learn, and scale. We develop AI agents, copilots, and autonomous workflows that streamline operations, automate repetitive tasks, improve customer experiences, optimize processes, and unlock smarter, faster, future-ready growth.",
        dashbord: dashbord,
        apps: false,
        features: [
            { text: "AI Agents & Copilots", icon: icon1 },
            { text: "Autonomous Workflow", icon: icon2 },
            { text: "Intelligent Process Automation", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "AI-Powered Software ",
        Mainiocn: img2,
        title: "AI-Powered Software",
        subheading: "Transform conventional software into intelligent platforms with AI-powered features, predictive insights, and automated decision-making. We integrate AI to streamline operations, improve efficiency, enhance user experiences, optimize workflows, and enable smarter, faster, scalable business outcomes built for the future.",
        dashbord: dashbord2,
        apps: false,
        features: [
            { text: "Generative AI Integration", icon: icon1 },
            { text: "Predictive Intelligence", icon: icon2 },
            { text: "AI-Driven Automation", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "Web & App Development",
        Mainiocn: img3,
        title: "Web & App Development",
        subheading: "Create high-performance digital experiences for modern users and evolving businesses. We build scalable websites, web applications, and mobile apps with intelligent features, seamless integrations, robust performance, and future-ready architecture that accelerates growth and delivers exceptional user experiences.",
        apps: false,dashbord: dashbord3,
        features: [
            { text: "Modern Web Applications", icon: icon1 },
            { text: "Modern Web Applications", icon: icon2 },
            { text: "Scalable Digital Platforms", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "Cloud & DevOps",
        Mainiocn: img4,
        title: "Cloud & DevOps",
        subheading: "Build a flexible technology foundation with cloud-native infrastructure, automated deployment, and scalable environments. We help businesses launch faster, improve reliability, optimize performance, and streamline operations through secure, resilient, future-ready cloud solutions that adapt to evolving business needs.",
        apps: false,dashbord: dashbord4,
        features: [
            { text: "Cloud-Native Architecture", icon: icon1 },
            { text: "DevSecOps & CI/CD", icon: icon2 },
            { text: "Scalable Infrastructure", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "Cybersecurity",
        Mainiocn: img5,
        title: "Cybersecurity",
        subheading: "Protect applications, infrastructure, data, and digital identities with security built into every layer. We combine modern security practices, AI-driven monitoring, proactive threat detection, and resilient protection to strengthen digital ecosystems, minimize risks, safeguard critical assets, and ensure secure, reliable business operations.",
        apps: false,dashbord: dashbord5,
        features: [
            { text: "AI-Powered Threat Detection", icon: icon1 },
            { text: "Zero-Trust Security", icon: icon2 },
            { text: "Data & Application Protection", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "Blockchain & Web3",
        Mainiocn: img6,
        title: "Blockchain & Web3",
        subheading: "Unlock new models of ownership, trust, and digital value with blockchain technology. We build secure blockchain solutions spanning smart contracts, tokenization, decentralized applications, and Web3 platforms, helping businesses innovate, streamline transactions, enhance transparency, and create new opportunities in the evolving digital economy.",
        dashbord: dashbord6,
        apps: false,
        features: [
            { text: "Smart Contracts & DApps", icon: icon1 },
            { text: "Tokenization & Digital Assets", icon: icon2 },
            { text: "Web3 Infrastructure", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "Data & Analytics",
        Mainiocn: img7,
        title: "Data & Analytics",
        subheading: "Turn complex business data into actionable intelligence with modern analytics and AI-powered insights. We connect data across systems to help organizations monitor performance, uncover opportunities, predict trends, optimize operations, and make faster, smarter, data-driven decisions that drive measurable growth.",
        dashbord: dashbord7,
        apps: false,
        features: [
            { text: "Real-Time Analytics", icon: icon1 },
            { text: "Real-Time Analytics", icon: icon2 },
            { text: "Predictive Data Intelligence", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },  {
        menu_title: "Digital Transformation",
        Mainiocn: img8,
        title: "Digital Transformation",
        subheading: "Modernize outdated technology with intelligent digital ecosystems that connect your business. We help organizations adopt AI, cloud, automation, and modern architectures to streamline operations, improve agility, accelerate innovation, enhance efficiency, and build future-ready digital capabilities for sustainable growth.",
        dashbord: dashbord8,
        apps: false,
        features: [
            { text: "Legacy Modernization", icon: icon1 },
            { text: "Intelligent Automation", icon: icon2 },
            { text: "Connected Digital Ecosystems", icon: icon3 }
        ],
        lists: [
            { text: "AI Strategy & Consulting", icon: seo },
            { text: "AI-Software Development", icon: softwareDevelopment },
            { text: "Generative AI", icon: communicationSkills },
            { text: "Machine Learning", icon: machineLearning },
            { text: "AI Agent & Chat bot", icon: chatbot }
        ]
    },
];

const AIPoweredSection = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const menuRefs = useRef({});
    const menuContainerRef = useRef(null);

    const isMobile = () =>
        typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    // Only on mobile: slide the clicked/active tab into view within the horizontal strip
    useEffect(() => {
        if (!isMobile()) return;

        const activeMenu = menuRefs.current[activeIndex];
        if (activeMenu) {
            activeMenu.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [activeIndex]);

    const activeItem = sectionsData[activeIndex];

    return(
        <div className="ai_powered_section section-padding ">
            <Container>
                <Row>
                    <Col>
                    <div className="spanInCenter">
                         <div className="sectionHeading">Our Capabilities</div>
                            <h2 className="heading_main ">One Technology Partner. Every Digital Possibility. </h2>
                            <p className="paragraph_content">From AI agents to enterprise software, cloud platforms, automation and cybersecurity—we build the technology your business needs to move faster.</p>
                       </div>
                        <div className="ai_powered_flex_block ">
                            <div className="ai_powered_sidebar" ref={menuContainerRef}>
                                {sectionsData.map((item, index) => (
                                    <div 
                                        key={index}
                                        className={`ai_powered_sidebar_items ${
                                            activeIndex === index ? "active" : ""
                                        }`}
                                        onClick={() => handleTabClick(index)}
                                        ref={(el) => (menuRefs.current[index] = el)}
                                    >
                                        <div className="sidebar_icon_box">
                                            <img src={item.Mainiocn} alt={item.menu_title} className="features_icon" />
                                        </div>
                                        <h2 className="heading_main">
                                            {item.menu_title}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                            <div className="ai_powered_contents">
                                <div key={activeIndex}>
                                    <div className="powered_content_sections active">
                                        <div className="LeftDivAi">
                                            <h2 className="heading_main">{activeItem.title}</h2>
                                            <p className="paragraph_content">{activeItem.subheading}</p>
                                        </div>
                                        <div className="rigthDivAi">
                                            <div className="ImageDivForScrrol">
                                                <img src={activeItem.dashbord} alt="340px" />
                                            </div>
                                           
                                        </div>  
                                    </div>
                                    <div className="features_lists less-bottom-padding ">
                                                {activeItem.features.map((feature, index) => (
                                                    <div className="features_lists_item" key={index}>
                                                        <div className="features_item_icon">
                                                            <img src={feature.icon} alt={feature.text} className="features_icon" />
                                                        </div>
                                                        <p className="features_item_text">{feature.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                    <div className="scrrolSectionMain">
                                         
                                        <div className="scrrolSectionLast">
                                          <h2 className="heading_main">Let's Build Your Next Big Idea</h2>
                                          <p className="paragraph_content">Smart technology. Real business growth.</p>
                                        </div>
                                        <div className="btnDiv">
                                       <Link to="/contact-us" className="caseStudyButton " >
                                            Let’s Get Started
                                            <span>
                                                <FontAwesomeIcon icon={faCircleArrowRight} />
                                            </span>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AIPoweredSection