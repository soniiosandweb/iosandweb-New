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
const PWA = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/pwa.svg`;
const encrypted = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/encrypted.svg`;
const smartContract = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/smart-contract.svg`;
const decentralized = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/decentralized.svg`;
const planning = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/planning.svg`;
const office = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/office.svg`;
const uxDesign = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/ux-design.svg`;
const promotion = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/promotion.svg`;
const investment = `${process.env.REACT_APP_API_URL}/assests/images/home-new/aiPowered/investment.svg`;

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
    },
    {
        id: "blockchain",
        menu_title: "Blockchain",
        title: "Powering the Next Era of Decentralization",
        subheading: "Enabling businesses with secure, efficient, and future-ready decentralized technologies",
        color: "green",
        apps: false,
        features: [
            {
                text: "Enterprise-Grade Security Architecture",
                icon: encrypted,
            },
            {
                text: "Future-Ready Smart Contracts",
                icon: smartContract,
            },
            {
                text: "Scalable Decentralized Solutions",
                icon: decentralized,
            }
        ],
        lists: [
            {
                text: "Blockchain Consulting & Development",
                icon: seo,
            },
            {
                text: "Tokenization & NFT Solutions",
                icon: softwareDevelopment,
            },
            {
                text: "Custom Crypto Solutions",
                icon: communicationSkills,
            },
            {
                text: "Smart Contract Design & Auditing",
                icon: machineLearning,
            },
            {
                text: "Metaverse Solutions",
                icon: chatbot,
            }
        ]
    },
    {
        id: "startup",
        menu_title: "Startup",
        title: "A Strategic Launchpad for the Next Big Startups",
        subheading: "Empowering startups to go from idea to impact with expert guidance and advanced technology.",
        color: "yellow",
        apps: false,
        features: [
            {
                text: "User-Centric Design Excellence",
                icon: encrypted,
            },
            {
                text: "AI-Assisted Wireframing & Prototyping",
                icon: smartContract,
            },
            {
                text: "Strategic Brand Architecture",
                icon: decentralized,
            }
        ],
        lists: [
            {
                text: "Business Planning",
                icon: planning,
            },
            {
                text: "Legal Setup",
                icon: office,
            },
            {
                text: "UI/UX Design",
                icon: uxDesign,
            },
            {
                text: "Marketing Strategy",
                icon: promotion,
            },
            {
                text: "Investor Pitch Decks",
                icon: investment,
            }
        ]
    },
    {
        id: "app",
        menu_title: "App",
        title: "AI-Driven App Creation Suite",
        subheading: "Pre-built tech solutions designed for real business use cases—launch faster with zero coding.",
        color: "pink",
        apps: false,
        features: [
            {
                text: "70% Ready Code Architecture",
                icon: encrypted,
            },
            {
                text: "Get It Customized Your Way",
                icon: smartContract,
            },
            {
                text: "Launch MVP in 2 Days",
                icon: decentralized,
            }
        ],
        lists: [
            {
                text: "Ordering & Service Booking",
                icon: planning,
            },
            {
                text: "Delivery Management",
                icon: office,
            },
            {
                text: "Taxi & Mobility Solution",
                icon: uxDesign,
            },
            {
                text: "Online Consultation",
                icon: promotion,
            },
            {
                text: "All-in-one Marketplace",
                icon: investment,
            }
        ]
    }
];

const AIPoweredSection = () => {

    const [activeId, setActiveId] = useState("intelligence");
    const sectionRefs = useRef({});
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const menuRefs = useRef({});

    const scrollToSection = (id) => {
        sectionRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    useEffect(() => {
    if (!isMobile) return;

    const activeMenu = menuRefs.current[activeId];
        if (activeMenu) {
            activeMenu.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
            });
        }
    }, [activeId, isMobile]);

    useEffect(() => {
  if (!isMobile) return;

    const observer = new IntersectionObserver(
        (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            visibleSection = entry.target.id;
            }
        });

        if (visibleSection) {
            setActiveId(visibleSection);
        }
        },
        {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
        }
    );

    Object.values(sectionRefs.current).forEach((section) => {
        observer.observe(section);
    });

    return () => observer.disconnect();
    }, [isMobile]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            let maxRatio = 0;
            let visibleId = activeId;

            entries.forEach((entry) => {
                if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                visibleId = entry.target.id;
                }
            });

            setActiveId(visibleId);
            },
            {
            threshold: [0.25, 0.5, 0.75, 1],
            }
        );

        Object.values(sectionRefs.current).forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, [activeId]);

    return(
        <div className="ai_powered_section section-padding no-bottom-padding body-background">
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
                                        ref={(el) => (menuRefs.current[item.id] = el)}
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
                                        <div className="features_lists less-top-padding less-bottom-padding">
                                            {item.features.map((feature,index) => (
                                                <div className="features_lists_item" key={index}>
                                                    <div className="features_item_icon">
                                                        <img src={feature.icon} alt={feature.text} className="features_icon" />
                                                    </div>
                                                    <p className="features_item_text">{feature.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={`powered_lists_grid ${item.apps && "apps"}`}>
                                            {item.lists.map((list,index) => (
                                                <div className="powered_lists_item" key={index}>
                                                    <div className="powered_item_icon">
                                                        <img src={list.icon} alt={list.text} className="powered_icon" />
                                                    </div>
                                                    <p className="powered_item_text">{list.text}</p>
                                                </div>
                                            ))}
                                        </div>
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