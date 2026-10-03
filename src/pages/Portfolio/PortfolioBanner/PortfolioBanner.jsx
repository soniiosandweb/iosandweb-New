import  "./PortfolioBanner.css";
import { faAnglesRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import gif from "./gif.png"
const portfolioGif = `${process.env.REACT_APP_API_URL}/assests/portfolio/Portfolio.gif`;
const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;

const PortfolioBanner = () => {
    return(
        <div className="portfolio_banner_section section-padding no-bottom-padding">
            {/* <img src={bg} alt="Contact Us" className="portfolio_banner_bg" /> */}
            <Container>
                <Row>
                    <Col>
                        <div className="portfolio_banner_flex">
                           <div className="portfolio_left_cols">
                               <span className="HeadrtopText">SELECTED WORK • 2016—2026</span>
                                <h1 className="heading_main ">We build digital products that move businesses forward.</h1>
                                <p className="paragraph_content">From AI-powered platforms to autonomous agents, workflows and software — we turn complex ideas into experiences built for growt</p>
                                <span className="headerBoldText">Autonomous agents • Human-in-the-loop • Measurable outcomes</span>
                                <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Start a Project <FontAwesomeIcon icon={faCircleArrowRight} /></Link>
                            </div>
                            <div className="portfolio_right_cols">
                                <img src={gif} alt="Real Solution, Real Result" className="portfolio_gif_image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <div className="animated_gradient_portfolio">
                <div className="animated_gradient_track_portfolio">
                    <span>CREATIVE PORTFOLIO</span>
                    <span>CREATIVE PORTFOLIO</span>
                    <span>CREATIVE PORTFOLIO</span>
                    <span>CREATIVE PORTFOLIO</span>
                </div>
            </div> */}
        </div>
    )
}

export default PortfolioBanner