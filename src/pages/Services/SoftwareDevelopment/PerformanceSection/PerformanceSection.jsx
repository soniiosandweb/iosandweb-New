import { Col, Container, Row } from "react-bootstrap";
import "./PerformanceSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const businessPerformance = `${process.env.REACT_APP_API_URL}/assests/services/software-development/business_performance.webp`;

const botIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/bot-icon.svg`;
const technologyIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/technology-icon.svg`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/blockchain-icon.svg`;
const artificialIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/artificial-intelligence-icon.svg`;
const bigdataIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/bigdata-icon.svg`;
const dataScienceIcon = `${process.env.REACT_APP_API_URL}/assests/services/software-development/data-science-icon.svg`;

const performanceLists = [
    {
        icon: botIcon,
        title: "Business-Focused Generative AI"
    },
    {
        icon: technologyIcon,
        title: "(IOT) Internet of Things"
    },
    {
        icon: blockchainIcon,
        title: "Blockchain & Decentralization"
    },
    {
        icon: artificialIcon,
        title: "Artificial Intelligence & ML"
    },
    {
        icon: bigdataIcon,
        title: "Big Data Analytics"
    },
    {
        icon: dataScienceIcon,
        title: "Data Science"
    }
]

const PerformanceSection = () => {
    return(
        <div className="performance_section section-padding no-top-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="performance_section_flex">
                            <div className="performance_cols">
                                <h2 className="heading_main">Are Legacy Systems Limiting Your Business Performance?</h2>
                            </div>
                            <div className="performance_cols">
                                <p className="performance_text">
                                    Leverage Next-Generation Technologies to Future-Proof Your Busines
                                    <span className="triangle-down"></span>
                                </p>
                            </div>
                        </div>
                        <div className="performance_section_flex bottom_flex">
                            <div className="performance_cols">
                                <img src={businessPerformance} alt="Business Performance" className="business_performance_image" />
                                <p className="performance_text">
                                    Leverage Next-Generation Technologies to Future-Proof Your Busines
                                    <span className="triangle-down"></span>
                                </p>
                            </div>
                            <div className="performance_cols performance_lists_grid">
                                {performanceLists.map((item,i) => (
                                    <div className="performance_lists_item" key={i}>
                                        <div className="performance_icon_block">
                                            <img src={item.icon} alt={item.title} className="performance_icon" />
                                            <span className="performance_arrow_icon">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                        <p className="performance_title">{item.title}</p>
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

export default PerformanceSection