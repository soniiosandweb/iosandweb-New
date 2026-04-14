import  "./PortfolioBanner.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const portfolioGif = `${process.env.REACT_APP_API_URL}/assests/portfolio/Portfolio.gif`;
const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;

const PortfolioBanner = () => {
    return(
        <div className="portfolio_banner_section section-padding no-bottom-padding">
            <img src={contactBg} alt="Contact Us" className="portfolio_banner_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="portfolio_banner_flex">
                            <div className="portfolio_left_cols">
                                <h1 style={{
                                    fontSize: "40px",
                                    background: "radial-gradient(50% 50% at 50% 50%, #0011FF 0%, #A600FF 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textShadow: "0 0 2px rgba(198,194,194,0.5)"
                                }}        
                                >
                                Our Success Stories
                                </h1>
                                <h1 className="heading_main split"><span className="gradient"> <br/>Real Solution, Real Result</span> Increase Revenue.</h1>
                                <p className="paragraph_content">Explore How IosAndWeb Technologies Transform Ideas into Powerful Digital Experiences</p>
                                <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Request Professional Expertise <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                            <div className="portfolio_right_cols">
                                <img src={portfolioGif} alt="Real Solution, Real Result" className="portfolio_gif_image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="animated_gradient_portfolio">
                <div className="animated_gradient_track_portfolio">
                    <span>CREATIVE PORTFOLIO</span>
                    <span>CREATIVE PORTFOLIO</span>
                    <span>CREATIVE PORTFOLIO</span>
                    <span>CREATIVE PORTFOLIO</span>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBanner