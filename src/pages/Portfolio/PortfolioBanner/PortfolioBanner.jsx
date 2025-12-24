import  "./PortfolioBanner.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const portfolioGif = `${process.env.REACT_APP_API_URL}/assests/portfolio/Portfolio.gif`;

const PortfolioBanner = () => {
    return(
        <div className="portfolio_banner_section section-padding no-bottom-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="portfolio_banner_flex">
                            <div className="portfolio_left_cols">
                                <h1 className="heading_main">Our Success Stories: <br/><span className="gradient">Real Solution, Real Result</span> Increase Revenue.</h1>
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