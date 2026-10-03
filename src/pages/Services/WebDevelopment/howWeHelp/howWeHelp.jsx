import { Col, Container, Row } from "react-bootstrap";
import "./howWeHelp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

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
        "Map Rout: Streamlining navigation with intuitive mapping solutions, real-time updates, and seamless route optimization."
        ],
        imagePadding: false,
    },
    {
        image: aiChatbot,
        title: "Chat Bot",
        features: ["AI-Powered Chatbot: Delivering real-time, intelligent conversations to enhance customer engagement and streamline support."
        ],
        imagePadding: false,
    },
    {
        image: xrpTrade,
        title: "XRP Trades",
        features: [
          "Blockchain77: Empowering secure, transparent, and decentralized solutions to streamline business processes."
        ],
        imagePadding: false,
    }
]

const HowWeHelp = () => {

    const helpRef = useRef(null);
    
        useEffect(() => {
            let ctx;
    
            const initAnimation = () => {
                ctx = gsap.context(() => {
                gsap.fromTo(
                    ".help_boxes",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: helpRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
                }, helpRef);
    
                ScrollTrigger.refresh();
            };
    
            const timeout = setTimeout(initAnimation, 150);
    
            return () => {
                clearTimeout(timeout);
                ctx && ctx.revert();
            };
        }, []);

    return(
        <div className="how_we_help_section section-padding body-background" ref={helpRef}>
            <Container>
                <Row>
                    <Col>
                        <p className="paragraph_content text-center">Proven Results Backed by Powerful Software Solutions</p>
                        <h2 className="heading_main text-center split">See how we help organizations accelerate growth through custom-built software.</h2>
                        <div className="how_we_help_grids less-top-padding">
                            {howWeHelpLists.map((item,index) => {
                                const patternIndex = (index % 5) + 1;
                                return (
                                    <div className={`how_we_help_item help_boxes child-${patternIndex}`} key={index}>
                                        <img src={linesBg} alt="Ready to Build Powerful, Secure & Feature-Rich Software?" className="lines_background" />
                                        <div className="how_we_help_item_flex">
                                            <div className="how_we_help_contents">
                                                    {item.features.map((feature,index) => (
                                                        <div className="how_we_help_features_item" key={index}>
                                                            <h3 className="heading_main">{feature}
                                                                </h3>
                                                        </div>
                                                    ))}
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