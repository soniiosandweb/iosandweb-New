import { Col, Container, Row } from "react-bootstrap";
import "./HowWeHelp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const linesBg = `${process.env.REACT_APP_API_URL}/assests/services/lines_bg.webp`

const maproute = `${process.env.REACT_APP_API_URL}/assests/services/maproute.webp`;
const aiChatbot = `${process.env.REACT_APP_API_URL}/assests/services/aiChatbot.webp`;
const xrpTrade = `${process.env.REACT_APP_API_URL}/assests/services/xrpTrade.webp`;
const AITranslator = `${process.env.REACT_APP_API_URL}/assests/services/AITranslator.webp`;
const tiara = `${process.env.REACT_APP_API_URL}/assests/services/tiara.webp`;
const surgihealth = `${process.env.REACT_APP_API_URL}/assests/services/surgihealth.webp`;

const howWeHelpLists = [
    {
        image: maproute,
        title: "MAP Route",
        features: [
            {
                percentage: "85%",
                text: "Faster Task & Workflow Analysis",
            },
            {
                percentage: "60%",
                text: "Quicker, Data-Driven Decision Making",
            }
        ],
        imagePadding: false,
    },
    {
        image: aiChatbot,
        title: "Chat Bot",
        features: [
            {
                percentage: "85%",
                text: "Faster Query Resolution",
            },
            {
                percentage: "60%",
                text: "Faster Customer Response Time",
            }
        ],
        imagePadding: false,
    },
    {
        image: xrpTrade,
        title: "XRP Trades",
        features: [
            {
                percentage: "85%",
                text: "Faster Execution Speed",
            },
            {
                percentage: "60%",
                text: "More Efficient Trading Decisions",
            }
        ],
        imagePadding: false,
    },
    {
        image: AITranslator,
        title: "AI Translater",
        features: [
            {
                percentage: "85%",
                text: "Faster Language Processing",
            },
            {
                percentage: "60%",
                text: "Faster Communication Decisions",
            }
        ],
        imagePadding: false,
    },
    {
        image: tiara,
        title: "Tiara Real Estate",
        features: [
            {
                percentage: "85%",
                text: "More Efficient Property Analysis",
            },
            {
                percentage: "60%",
                text: "Faster Closing Timelines",
            }
        ],
        imagePadding: false,
    },
    {
        image: surgihealth,
        title: "Surgi Health",
        features: [
            {
                percentage: "85%",
                text: "Improved Diagnostic Efficiency",
            },
            {
                percentage: "60%",
                text: "Faster Care Delivery Timelines",
            }
        ],
        imagePadding: true,
    }
]

const HowWeHelp = () => {
    return(
        <div className="how_we_help_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <p className="paragraph_content text-center">Proven Results Backed by Powerful Software Solutions</p>
                        <h2 className="heading_main text-center">See how we help organizations accelerate growth through custom-built software.</h2>
                        <div className="how_we_help_grids less-top-padding">
                            {howWeHelpLists.map((item,index) => {
                                const patternIndex = (index % 5) + 1;
                                return (
                                    <div className={`how_we_help_item child-${patternIndex}`} key={index}>
                                        <img src={linesBg} alt="Ready to Build Powerful, Secure & Feature-Rich Software?" className="lines_background" />
                                        <div className="how_we_help_item_flex">
                                            <div className="how_we_help_contents">
                                                <div className="how_we_help_features_div">
                                                    {item.features.map((feature,index) => (
                                                        <div className="how_we_help_features_item" key={index}>
                                                            <h3 className="heading_main">{feature.percentage}</h3>
                                                            <p className="paragraph_content">{feature.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <Link reloadDocument to="/services" className="btn-gradient-blue">Explore More <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                            </div>
                                            <div className={`how_we_help_images ${item.imagePadding && "padding"}`}>
                                                <img src={item.image} alt={item.title} className="how_we_help_img" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowWeHelp