import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

// reasons to choose images
const printDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/print-design.png`;
const infographics = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/infographic.png`;
const logoDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/logo-design.png`;
const promotionalDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/promotional-design.png`;
const posterDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/poster-design.png`;
const corporateIdentity = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/corporate-identity.png`;
const motionGraphics = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/motion-graphic.png`;
const powerpointPresentation = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/powerpoint-presentation.png`;
const tradeShow = `${process.env.REACT_APP_API_URL}/assests/images/services/graphic-design/trade-show.png`;

// final reflection images
const pdfHTML = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/pdf-html.png`;
const webDesigning = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/web-designing.png`;

function GraphicDesign(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Get Best Graphic Designing Services in UK | Contact Now"}
                description={"IosAndWeb has a talented team of Best graphic designing services in many areas of UK. We Web designing company. Get quote for your project."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Graphic Design Banner */}
            <div className="graphic-design-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Graphic</span> Designing Services</h1>
                                <div className="heading5">Your Marketing Strategies Need Innovation Through Graphic Designing. <a href="/">IosAndWeb Technologies</a> is the right choice if you want to strengthen your marketing strategies and stand out in this competitive market.</div>
                                <div className="heading5">Give your brand more strength with our <b>web graphic designing services</b>.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-40"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Graphic Design Company</h2>
                            <div className="heading5 text-center">We offers customized business solutions to meet their business goals.</div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what is Software section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt">
                                <h2>Graphic Designing Services</h2>
                            </div>
                            <div className="leadsubtxt">
                                IosAndWeb Technologies is an Graphic and <b>Web designing services in London</b> and many more areas of United Kingdom based Graphic designing company that invests its creativity, ideas, and technology at the command of its graphic designers that aim at working towards achieving the graphic design objectives of its clients. <br /> <br />
                            </div>
                            <div className="leadsubtxt">
                                Our <b><u>Graphic designer expert</u></b> will bring your brand vision and objectives through graphic designs, utilizing simple & sophisticated graphic design tools and technologies.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Graphic Designing Services Include</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Print Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Infographics</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Logo Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Promotional Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Poster Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Brand and Corporate Identity</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> Motion Graphics</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eight"><FontAwesomeIcon icon={faCircleDot} /> Powerpoint Presentation</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ninth"><FontAwesomeIcon icon={faCircleDot} /> Trade show Graphics</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={printDesign} alt="Print Design" className="reasons-content-icon" />
                                            <h3 className="heading3">Print Design</h3>
                                            <p className="paragraph">Our company's <u>Creative graphic designer</u> creates billboards, labels, merchandise, magazines, banners, flyers, and marketing materials.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={infographics} alt="Infographics" className="reasons-content-icon" />
                                            <h3 className="heading3">Infographics</h3>
                                            <p className="paragraph">Our <u>Photoshop designer</u> make infographics which express your story of business campaigns, scientists, academics and data analysts through colorful layouts.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={logoDesign} alt="Logo Design" className="reasons-content-icon" />
                                            <h3 className="heading3">Logo Design</h3>
                                            <p className="paragraph">Get your company recognized and represent it by just a single icon. This icon will be concrete your branding image and make a place in the market with <u>Graphic designing company near me</u>.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={promotionalDesign} alt="Promotional Design" className="reasons-content-icon" />
                                            <h3 className="heading3">Promotional Design</h3>
                                            <p className="paragraph">With the help of our promotional designs, you can attract more customers and have a huge presence on different promotional channels like social media, public exhibitions, and many other marketing channels with our <u>Graphic expert for <a href="/social-media-marketing-services">social media campaign</a></u>.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={posterDesign} alt="Poster Design" className="reasons-content-icon" />
                                            <h3 className="heading3">Poster Design</h3>
                                            <p className="paragraph">Get a unique poster design by our <u>Social media designer</u> expert to present your business strategies in a creative way through different colors, fonts, and designs.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={corporateIdentity} alt="Corporate Identity" className="reasons-content-icon" />
                                            <h3 className="heading3">Brand and Corporate Identity</h3>
                                            <p className="paragraph">Through our graphic designing services, we can create a unique identity of your brand through specialized individual product elements and its <a href="https://www.geektonight.com/what-is-packaging/" target="_blank" rel="noreferrer">packaging</a>.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="reasons-tab-content">
                                            <img src={motionGraphics} alt="Motion Graphics" className="reasons-content-icon" />
                                            <h3 className="heading3">Motion Graphics</h3>
                                            <p className="paragraph">Through our <u>Illustrator designer</u>, we can create a unique identity of your brand through specialized individual product elements and its packaging.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eight">
                                        <div className="reasons-tab-content">
                                            <img src={powerpointPresentation} alt="Powerpoint Presentation" className="reasons-content-icon" />
                                            <h3 className="heading3">Powerpoint Presentation</h3>
                                            <p className="paragraph">Visual tools are more effective at the time of decision making. Get your statistical data to visualize through customized and comfortable to use PPT and make your decision making way easier.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ninth">
                                        <div className="reasons-tab-content">
                                            <img src={tradeShow} alt="Trade show Graphics" className="reasons-content-icon" />
                                            <h3 className="heading3">Trade show Graphics</h3>
                                            <p className="paragraph">Our <u>Campaign graphic designer</u> has great experience in designing trade shows and exhibitions boots. Get your display elements designed by our company.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact-us"
            />

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">The Core of Graphic Design And Business Success</h2>
                            <div className="heading5">IosAndWeb Technologies graphic production is a robust connection between mockup designer, graphic design and business development. Graphic designers give a separate identity to a brand and set it apart from competitors by providing a powerful logo, symbol, icon or image.</div>
                            <div className="heading5">Before designing the graphics of your company, our Social media banner designer conduct a study on your business in which they analyze and find the answers for the questions like how what, why and who of your business and then convert the core values into the graphic designs. Many factors like culture, trends, business initiatives are determined to bring more clarity into the strategies of graphic designing and improve the user experience.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/pdf-to-html-designing-services">
                                            <img src={pdfHTML} className="services-bottom-front-image" alt="PDF to HTML" />
                                            <h4 className="heading4">PDF to HTML Designing Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/web-designing-services">    
                                            <img src={webDesigning} className="services-bottom-front-image" alt="Web Designing" />
                                            <h4 className="heading4">Web Designing</h4>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default GraphicDesign;