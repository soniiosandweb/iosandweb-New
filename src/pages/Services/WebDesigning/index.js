import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faPaintBrush, faImage, faBullhorn, faFileText, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import Banner from "./banner/banner";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid";

// reasons to choose images
const developMaintain = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/develop-maintain.png`;
const copywriting = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/copywriting.png`;
const optimisingSEO = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/optimising-seo.png`;
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/social-media-marketing.png`;
const ppcADS = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/ppc-ads.png`;

// final reflection images
const pdfHTML = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/pdf-html.png`;
const graphicDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/graphic-design.png`;

const Group = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/Group.webp`;
const rating = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/rating.webp`;
const satisfaction = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/satisfaction.webp`;

function WebDesigning() {
        const featuresPoints = [
    "AI-Driven Web Design for Smarter Digital Experiences",
    "Secure, Scalable Web Solutions Powered by Blockchain Technology",
    "Exceptional Web Design for High-Performance Digital Experiences"
]

    const location = useLocation();

    return (
        <>
            <SEO
                title={"Web Designing Services | Web Design Agency | Web Designer Near Me"}
                description={"IosAndWeb Tech – A top web design company & agency. Expert web designer near you with 12+ yrs of experience. A trusted website builder near me.."}
                keywords={"Web designing services, Website Design Company, Web Design Company, Web design agency, Website builder near me, Web designer near me"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Web Designing Banner */}
           <Banner></Banner>

        <FeaturesPointsSection lists={featuresPoints} />
        <div className="padding black" >
            <AnimatedText />
        </div>

        <div className="black padding ">   
            <Container>
                <Row>
                <Col>
                        <div className="numberGridMobileDev">
                        <NumbersGrid />
                        </div>
                </Col>
                </Row>
            </Container>
            </div>
                    <div className="black padding TowFactorsSection">   
            <Container>
                <Row>
                <Col lg={6}>
                <img className="TowFactorsSectionImgGroup" src={Group} alt="" />

                </Col >
                <Col lg={5}>
                <div className="TowFactorsContent">
                    <h1 className="TowFactorsContentHedaing">Two essential factors play a decisive role in your business success</h1>
                     <div>
                        <span className="TowFactorsContentSubhaeding"> <img src={rating}alt="" /> <h2 className="TowFactorsContentsub">Customer Experience</h2> </span>
                        <span className="TowFactorsContentSubhaeding"> <img src={satisfaction} alt="" /> <h2 className="TowFactorsContentsub">Customer Satisfaction</h2> </span>
                        <hr className="Line" />
                        <p className="TowFactorsContentPara">We design optimized customer experiences that drive up to 2× higher customer satisfaction</p>
                          <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>
                     </div>
                    
                </div>
                </Col>
                </Row>
            </Container>
            </div>



            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Web Designing Company</h2>
                            <div className="heading5 text-center">Our web designers while focusing on the appearance of the website also construct a strategy to convert the visitors into your customers. Before making any purchase 82% of the customers do online research about the products & services. So make sure that your website is well designed and attractive that can turn those researchers into your customers. </div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what is Software section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="leadtxt">
                                <h2>Get Web Designing Services</h2>
                            </div>
                            <div className="leadsubtxt">
                                Our <u>Website designer</u> can assist you. We are experts in making attractive websites that will help you to bring visitors and convert them into your customers for your small, medium and large scale businesses.
                                <br />
                                Web design will be essential for all businesses of all sizes in 2023 as more customers turn to search engines to find the products and services they need.
                                <br />
                                However, generating results requires more than just having a physically nice website. Your website will rank highly on Google with the use of clever SEO strategies, ensuring that the right viewer understands your brand with Web designing services.
                                <br />
                                A IosAndWeb web design company may accurately direct you through these routes. A team of experts with expertise in fields like SEO, Content, design, and more provide you with the best advice on precisely what your business needs to thrive online.
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project.
                            </div>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose framework-sections section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">The following website services may be anticipated when dealing with a website designer like Iosandweb</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={developMaintain} alt="Develop and maintain" className="reasons-content-icon" />Develop and maintain an individual website</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={copywriting} alt="Copywriting" className="reasons-content-icon" />Content & Copywriting</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={optimisingSEO} alt="Optimising SEO" className="reasons-content-icon" />Optimising websites for search engines (SEO)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><img src={socialMediaMarketing} alt="Social Media Marketing" className="reasons-content-icon" />Social Media Marketing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><img src={ppcADS} alt="PPC ADS" className="reasons-content-icon" />PPC ADS</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Develop and maintain an individual website</h3>
                                            <p className="paragraph">A website must be speedy, aesthetically pleasing, and simple to use in order to maintain visitors' interest and create leads. A web designer is knowledgeable about the various design elements required to do website designing services.
                                                <br />
                                                In addition to helping you create or modify the website, they'll ensure that it is mobile-optimised so that it works properly on tablets and phones.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Content & Copywriting</h3>
                                            <p className="paragraph">Custom content is essential for both increasing SEO and humanising your business. Use original, captivating content in your blog posts and website pages to achieve this.
                                                <br />
                                                Since content must be routinely published yet not everyone is a writer or has the time to, this presents a challenge with software development.
                                                <br />
                                                A web design company with an in-house copywriter is even better because you'll have a competent staff to manage all of your internet demands under one roof.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Optimising websites for search engines (SEO)</h3>
                                            <p className="paragraph">Search engine optimization is yet another crucial strategy to help your website rank on the first page of search results (SEO).
                                                <br />
                                                This is important because consumers who are searching for your services are likely to select a business that shows up in the top 10. The very least SEO does is increase website traffic when doing web designing for online store.
                                                <br />
                                                Planning and keyword research are necessary to push your website to the top of the search results, even if SEO traffic is reasonable compared to PPC, where you pay for each click.
                                                <br />
                                                A SEO expert can monitor your website and determine the best course of action to boost traffic and accomplish your objectives.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Social Media Marketing</h3>
                                            <p className="paragraph">Utilising the immense popularity of websites like Facebook, Twitter, Pinterest, and Instagram, businesses are increasingly adopting social media as their main channel for marketing in an effort to grow their brands and customers.
                                                <br />
                                                Success in social media marketing requires a consistent online presence, but we are also conscious of how momentous it can be when trying to run a business by hiring a web designing agency.
                                                <br />
                                                A social media marketer may help with content organisation management agencies and posting articles that adhere to your business's guiding principles. The most important thing is that they will consistently post at the optimal time each day, when your accounts will see the greatest engagement.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">PPC ADS</h3>
                                            <p className="paragraph">Pay-per-click (PPC) advertising is the practice of “purchasing” clicks rather than acquiring them organically.
                                                <br />
                                                Instead of using SEO tactics to rank on search engines, advertisers will fight for placements on sponsored links on Google's pages.
                                                <br />
                                                Every time the ad is clicked, the user is taken to the website.
                                                <br />
                                                If you are still in doubt or have some, take a step ahead and reach IosAndWeb today for the most amazing and resourceful experience. Iosandweb is a house of experts who deals in best in class custom web designing services. All these services are highly customised according to the needs and the demands of the customers.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Designing services section */}
            <div className="designing-services-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Other Web Designing Services</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>
                                <h4 className="heading4">Web Design</h4>
                                <p className="paragraph">IosAndWeb Technologies will design professional, attractive and pocket-friendly websites for your business. Its our responsibility to <b>hire web designer</b> near me for you.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                                <h4 className="heading4">Logo Design</h4>
                                <p className="paragraph">Build your business brand with IosAndWeb Technologies' logo designing services.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faSearchengin}></FontAwesomeIcon>
                                <h4 className="heading4">SEO</h4>
                                <p className="paragraph">Bring your webpage on the top of the search engine results page and make people see you on the internet.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                                <h4 className="heading4">Digital marketing</h4>
                                <p className="paragraph">Expert digital marketers of IosAndWeb Technologies will start and run the marketing ad campaigns of your brand over social media platforms</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faFileText}></FontAwesomeIcon>
                                <h4 className="heading4">Copywriting</h4>
                                <p className="paragraph">The content of the website contains equal relevance to the photos and designs of the website.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHeadphones}></FontAwesomeIcon>
                                <h4 className="heading4">Website support</h4>
                                <p className="paragraph">IosAndWeb Technologies also provides care and support to your website to make its performance better.</p>
                            </div>
                        </Col>
                    </Row>
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
                            <h2 className="heading2">Professional Web Designing Services by IosAndWeb Technologies</h2>
                            <div className="heading5">A website can be built by clicking and you can get an online presence. But making this online presence attractive and professional over the internet is challenging. Here at Iosandweb Technologies, we will provide you a user-friendly, affordable and professional website that will help you to perform better than your rivals. We know the needs of the customers and the strategies that need to be used to design the websites.</div>
                            <div className="heading5">It's 2020, a website cannot be designed by just uploading a template. A strategically developed and designed website will bring more traffic to your website that will convert them into leads & sales.</div>
                            <div className="heading5">As a leading company of Web designing services in Birmingham, London and many areas of United Kingdom, Iosandweb Technologies provides full-time and a variety of Web designing services or <a href="/graphic-designing-services"><b>Graphic designing services</b></a> to its clients in the field of design and development. If you are not sure about your needs and requirements then consult with our experts and get answers to your every problem. The appointment will be scheduled with your comfort or you can also request us to call you at your specified time. If you're searching <u>Web designing company near me</u> then you are a right place Get quote for your project, Fill the form below.</div>
                            <div className="heading5">Consultants of our company will call you and discuss the whole project. We are here to answer your every question and help you understand the needs and requirements of your business.</div>
                            <div className="heading5">Starting a new website project can be enormous and frightening, that is why we are here to assist you to make the right decisions and grow your business.</div>

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
                                        <a href="/graphic-designing-services">
                                            <img src={graphicDesign} className="services-bottom-front-image" alt="Graphic Design" />
                                            <h4 className="heading4">Graphic Design</h4>
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

export default WebDesigning;