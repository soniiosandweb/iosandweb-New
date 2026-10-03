import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav, Accordion } from "react-bootstrap";
import SEO from "../../../components/SEO";
import OwlCarousel from "react-owl-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faChevronRight, faCheckDouble, faFilter, faMapMarkerAlt, faVrCardboard, faHome, faSearch, faBrain, faCalculator, faStar, faHouseMedical, faListCheck, faLineChart, faCode, faFileAlt, faPaintBrush, faRocket, faCog, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import BusinessGoals from "./BusinessGoals";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid";
import ServicesLists from "./ServicesLists/ServicesLists";

const realEstateBanner = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/real-estate-banner-new.webp`;

// reasons to choose images
const mobileConsultation = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/mobile-consultation.png`;
const realEstateAppDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/real-estate-app-development.png`;
const enterpriseRealEstate = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/enterprise-real-estate.png`;
const realEstateWebApplication = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/real-estate-web-application.png`;

// capabilities section images
const qualifiedLeads = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/qualified-leads.webp`;
const globalBuyers = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/global-buyers.webp`;
const managementLarge = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/management-large.webp`;
const advancedTechnologies = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/advanced-technologies.webp`;

// industries requirement images
const realEstateBuyers = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/real-estate-buyers.webp`;

// Advanced technologies images
const aiMLIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/ai-ml.png`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/blockchain.png`;
const metaverse = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/metaverse.png`;
const dataAnalytics = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/data-analytics.png`;
const arVR = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/ar-vr.png`;

// Tools and technologies images
const java = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/java.webp`;
const react = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/react.webp`;
const flutter = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/flutter.webp`;
const kotlin = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/kotlin.webp`;
const realm = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/realm-icon.webp`;
const sqlLite = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/Sql-lite.webp`;
const firebase = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/firebase_icon.webp`;
const database = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/database.webp`;
const fastlane = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/fastlane-icon.webp`;
const figma = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/figma-icon.webp`;


function RealEstate(){

    const location = useLocation();

    const changeNumber=(event) =>{
        if (event.item) {
            var count = event.item.count;
            var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;

            if (current > count) {
                current = 1;
            }
            
            if(current === 0) {
                current = event.item.count;
            }

            document.getElementById('slide_number').innerHTML = current;
            document.getElementById('slide_total_number').innerHTML = count;
           
        }
    }

    const changeNumberProcess=(event) =>{
        if (event.item) {
            var count = event.item.count;
            var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;

            if (current > count) {
                current = 1;
            }
            
            if(current === 0) {
                current = event.item.count;
            }

            document.getElementById('slide_number_process').innerHTML = current;
            document.getElementById('slide_total_number_process').innerHTML = count;
           
        }
    }

    return (
        <>
            <SEO
                title={"Real Estate App Development Services | IosAndWeb Technologies"}
                description={"IosAndWeb Technologies offers custom real estate app development solutions with property listings, advanced search, maps integration, and seamless user experience."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <Banner></Banner>
            
            <BusinessGoals></BusinessGoals>

             <div className="padding black">
                            <Container>
                                <Row>
                                    <Col>
                                     <h1 className="heading_main split textaliginCenter">A Proven Foundation for Your Real Estate Vision</h1>
                                     <div className="numberGridMobileDev textaliginCenter padding"><NumbersGrid /></div>
            
                                    </Col>
                                </Row>
                            </Container>
                            </div>
                    <ServicesLists/>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose industries-reasons-tab section-padding no-bottom-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">Our Complete Suite of Real Estate App Development Services</h2>
                            <div className="heading5 max-width-70">Our full suite of real estate app development services makes it possible for the buyer to purchase a home they adore, and the agent to close the deal at light speed.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Mobile App Consultation</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Real Estate App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Enterprise Real Estate Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Real Estate Web Application Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={mobileConsultation} alt="Mobile App Consultation" className="reasons-content-icon" />
                                            <h3 className="heading3">Mobile App Consultation</h3>
                                            <p className="paragraph">Benefit from expert guidance on the profitability and viability of your real estate app idea from our veteran team of real estate software experts. This value-added consultancy will allow you to determine the potential of your app and what steps you must take to turn your app into a box office success.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={realEstateAppDevelopment} alt="Real Estate App Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Real Estate App Development</h3>
                                            <p className="paragraph">Being a top real estate software development firm, we have vast experience in developing robust real estate apps for the real estate industry. We possess skilled real estate app developers who deliver complete real estate app development services and solutions that meet all your future and existing stakeholders' needs.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={enterpriseRealEstate} alt="Enterprise Real Estate Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Enterprise Real Estate Development</h3>
                                            <p className="paragraph">Our enterprise real estate solutions address the unique needs of large businesses. From sophisticated analytics to seamless process integration, our enterprise development solutions enable organizations to automate functions, enhance the decision-making process, and empower them to realize strategic real estate goals.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={realEstateWebApplication} alt="Real Estate Web Application" className="reasons-content-icon" />
                                            <h3 className="heading3">Real Estate Web Application Development</h3>
                                            <p className="paragraph">Our real estate web application development solutions provide customized features for convenient property searching, listings, and selling. We also design simple interfaces and secure payment gateways to provide an easy experience for the clients.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Industries Numbers section */}
            <div className="industries-numbers-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="industries-numbers">
                                <div className="industries-numbers-left">
                                    <h2 className="heading2">Build a strong foundation to develop your Real Estate app idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Tech Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">100+</span>
                                            <span className="industries-numbers-text">Successful Projects Delivered</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Happy Clients</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* services section */}
            <div className="designing-services-section industries-services-section section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">Transform Your Real Estate Business with Our Tailor-Made App Solutions</h2>
                            <div className="heading5 max-width-70">Our real estate mobile app developers create bespoke solutions according to your specific business needs. From lead management to property listing, our solutions offer a complete set of features to stand out in the real estate industry.</div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Online Property Booking Solutions</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Property Management Apps</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Home Search Solution</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Brokerage Application</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Centralized Realtor Solution</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Apartment-For-Rent Applications</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Land-For-Sale Applications</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Lead Management Solutions</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries Capabilities section */}
            <div className="what-software-section industries-capabilities-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt max-width-70">
                                <h2>Why Choose IosAndWeb Your Real Estate App Development Company?</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                            With a real estate software development company like ours, you not only get the advantage of an operational mobile app for your stakeholders; you receive a million other advantages as well.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="capabilities-tab-div">
                                <Tab.Container id="capabilities-tab" defaultActiveKey="cpfirst">
                                    <div className="capabilities-tab-left capabilities-tab-cols">
                                        <Nav variant="pills" className="capabilities-tab flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfirst"><FontAwesomeIcon icon={faCircle} /> Qualified Leads</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond"><FontAwesomeIcon icon={faCircle} /> Access for Global Buyers</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird"><FontAwesomeIcon icon={faCircle} /> Large Inventory Management</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfourth"><FontAwesomeIcon icon={faCircle} /> Technology Integrated Offerings</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={qualifiedLeads} className="responsive-img" alt="Qualified Leads" />
                                                    </div>
                                                    <p className="paragraph">Increased cell phone usage = higher number of leads = higher odds of conversion = increased top-line growth. Development with a methodologies focus brings you one step higher towards warm leads.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={globalBuyers} className="responsive-img" alt="Global Buyers Access" />
                                                    </div>
                                                    <p className="paragraph">We help you connect clients and agents from any corner of the world. This connection with international clients widens your exposure while enriching your portfolio.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={managementLarge} className="responsive-img" alt="Management of Large Inventory" />
                                                    </div>
                                                    <p className="paragraph">We are a real estate mobile app development company that helps you maintain large inventory from multiple agents and brokers. We help your real estate marketplace contain and manage an inventory made of a variety of home sizes, costs, neighborhoods, and amenities.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfourth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={advancedTechnologies} className="responsive-img" alt="Technology Infused Offering" />
                                                    </div>
                                                    <p className="paragraph">We infuse advanced technologies such as AR/VR, Blockchain, IoT, and AI that offer seamless functionalities to your real estate mobile applications. This addresses the requirements of your tech-savvy stakeholders and enhances your app's value proposition.</p>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries features slider */}
            <div className="industries-process-slider industries-features-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">Features that Differentiate Real Estate Apps</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">Being the visionaries in the real estate app development space, we create apps that scale easily with amazing features that enhance the user experience and optimize business functionality.</div>

                            <div className="industries-slider-block">

                                <div className="industries-slider-numbers">
                                    <span className="slide_number" id="slide_number"></span>
                                    <span className="slide_dash"></span>
                                    <span className="slide_total_number" id="slide_total_number"></span>
                                </div>

                                <OwlCarousel className="owl-theme industries-process" loop autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true} margin={0} nav={true} dots={false} onInitialized={changeNumber} onTranslated={changeNumber} responsive={
                                    {
                                        '0': {
                                            items: 1,
                                        },
                                        '768': {
                                            items: 2,
                                        },
                                        '992': {
                                            items: 3.5,
                                        },
                                        '1200': {
                                            items: 4.5,
                                        }
                                    }
                                }>
                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faFilter} /></span>
                                            <h4 className="heading4">Advanced Search Filters</h4>
                                            <p className="paragraph">This feature offers customized search filters like location, price of the property, type of the property, amenities, etc. to allow users to find suitable properties with ease.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                            <h4 className="heading4">Property Listing Maps</h4>
                                            <p className="paragraph">This property map listing feature allows users to locate the most suitable properties, facilities near them, and information about the area under search.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faVrCardboard} /></span>
                                            <h4 className="heading4">AR/VR Tour</h4>
                                            <p className="paragraph">This innovative feature allows virtual property tours using augmented and virtual reality to allow users to virtually tour properties remotely and in depth.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faHome} /></span>
                                            <h4 className="heading4">Property Comparison</h4>
                                            <p className="paragraph">The property comparison feature allows the customers to compare different properties side by side with major features such as features and prices so that they can be able to make highly well-informed decisions.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faSearch} /></span>
                                            <h4 className="heading4">Save Searches</h4>
                                            <p className="paragraph">Bookmarks and New Listing Alerts <br/> Subscribers are allowed to save searches and receive notices when there are new listings matching them so that they would never miss out on any real estate opportunity.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faBrain} /></span>
                                            <h4 className="heading4">AI-Based Recommendations</h4>
                                            <p className="paragraph">The app employs artificial intelligence to discover the behavior and taste of the users and provide them with customized real estate recommendations.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCalculator} /></span>
                                            <h4 className="heading4">Mortgage Calculator</h4>
                                            <p className="paragraph">The mortgage calculator feature in real estate apps allows users to determine monthly payments by inputting the cost of a home, interest rate, and down payment.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faHouseMedical} /></span>
                                            <h4 className="heading4">Property Management</h4>
                                            <p className="paragraph">The property management feature allows users to organize property listings, tenant applications, rent payments, and maintenance requests.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faStar} /></span>
                                            <h4 className="heading4">User Reviews and Ratings</h4>
                                            <p className="paragraph">This feature allows users to examine properties and agents to create transparency and trust between app users.</p>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries requirement section */}
            <div className="industries-requirement-section background-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">Whatever Your Stakeholders' Needs Are, We Have Got You Covered</h2>
                            <div className="heading5 max-width-70">We are a mobile app company that specializes in real estate mobile apps which bring together all your stakeholders - agents, buyers, and sellers onto one platform. Whatever the stakeholders' needs are, we are there for you.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={6}>
                            <div className="industries-requirement-block">
                                <div className="industries-requirement-item">
                                    <h4 className="heading4">Real Estate Buyers</h4>
                                    <p className="paragraph">Our real estate application development solutions are for property purchasing requirements of property purchasers, providing them with a simple and convenient way of navigating the process of purchasing a property. Our customized solutions provide users with location map viewing functionality and virtual tours of properties with the use of the Metaverse and AR/VR technology.</p>
                                </div>
                                <div className="industries-requirement-item">
                                    <h4 className="heading4">Real Estate Companies or Owners</h4>
                                    <p className="paragraph">By our property services, business organizations are able to easily search for licenses, records, and credit reports of potential buyers. This enables effective analysis of prospective buyers and secure and smooth execution of the transaction process.</p>
                                </div>
                                <div className="industries-requirement-item">
                                    <h4 className="heading4">Real Estate Aggregators</h4>
                                    <p className="paragraph">The process that we follow while developing the app for real estate applications makes it easy to integrate with your website. We offer different services to the real estate aggregators like - rendering property images/videos, uploading the property listings, and payment processing per unit.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="industries-requirement-image">
                                <img src={realEstateBuyers} className="responsive-img" alt="Real Estate" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Advanced technologies section */}
            <div className="advanced-technologies section-padding">
                <Container>
                    <Row>
                        <Col md={6} lg={7}>
                            <div className="sticky-div">
                                <h2 className="heading2">Advanced Technologies That We Use in Real Estate Mobile Application Development</h2>
                                <div className="heading5">We leverage the synergistic power of advanced technologies to create robust real estate solutions. We construct robust solutions by implementing many advanced technologies, innovate richer user experiences, automate, and deliver unprecedented benefits to the real estate industry.</div>
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <div className="advanced-technologies-blocks">

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={aiMLIcon} className="responsive-img" alt="AI/ML" />
                                        </span>
                                        <h4 className="heading4">AI/ML</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a leading real estate development firm, we utilize AI technology for massive data analysis for forecasting property price, value, and trends. Further, chatbots with AI give instant feedback, and ML gives personalized suggestions.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={blockchainIcon} className="responsive-img" alt="Blockchain" />
                                        </span>
                                        <h4 className="heading4">Blockchain</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a leading real estate software development company, our experts use blockchain technology to offer an open and safe book for tamper-evident property registers. It also helps in less fraud and simplified transfer.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={arVR} className="responsive-img" alt="AR & VR" />
                                        </span>
                                        <h4 className="heading4">AR & VR</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Our AR/VR specialists add a dash of experiential excitement to your real estate solutions. AR overlays virtual images over actual spaces to present possible designs, while VR offers complete virtual tours of the property, thus enabling virtual walkthrough.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={metaverse} className="responsive-img" alt="Metaverse" />
                                        </span>
                                        <h4 className="heading4">Metaverse</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Our technology-based metaverse real estate applications bring the experience to new locales outside of reality. Property viewers can walk through the properties virtually, take virtual open house tours, and interact with agents in life-like scenarios.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={dataAnalytics} className="responsive-img" alt="Data analytics" />
                                        </span>
                                        <h4 className="heading4">IoT and Data Analysis</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">IoT and data analysis allow us to empower property management and inform home buyers about the state of a home and other things and thus redefine real estate.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Tools and languages section */}
            <div className="tools-languages-section section-padding text-white text-center bg-black">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70 mx-auto">Tech Stack That We Use to Design Compliant Real Estate Apps</h2>
                            <div className="heading5 max-width-70 mx-auto">As a prominent real estate mobile app development organization, we develop loaded apps employing various modern-day real estate mobile app software development frameworks and languages. Our staff of real estate mobile app developers employs the proper technology stack which allows you to achieve greater interaction.</div>

                            <div className="tools-languages-tab-div max-width-70 mx-auto">
                                <div className="tools-icon-grid-block">
                                    <div className="tools-icon-panel">
                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={kotlin} className="responsive-img" alt="Kotlin" />
                                            </div>
                                            <p className="paragraph">Kotlin</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={flutter} className="responsive-img" alt="Flutter" />
                                            </div>
                                             <p className="paragraph">Flutter</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={realm} className="responsive-img" alt="Realm" />
                                            </div>
                                            <p className="paragraph">Realm</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={java} className="responsive-img" alt="Java" />
                                            </div>
                                            <p className="paragraph">Java</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={sqlLite} className="responsive-img" alt="SQL Lite" />
                                            </div>
                                            <p className="paragraph">SQL Lite</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={firebase} className="responsive-img" alt="Firebase" />
                                            </div>
                                            <p className="paragraph">Firebase</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={react} className="responsive-img" alt="React Native" />
                                            </div>
                                            <p className="paragraph">React Native</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={database} className="responsive-img" alt="Room Database" />
                                            </div>
                                            <p className="paragraph">Room Database</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={fastlane} className="responsive-img" alt="Fastlane" />
                                            </div>
                                            <p className="paragraph">Fastlane</p>
                                        </div>

                                        <div className="tools-icon-grid">
                                            <div className="tools-icon-img">
                                                <img src={figma} className="responsive-img" alt="Figma" />
                                            </div>
                                            <p className="paragraph">Figma</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>     
            </div>

            {/* Industries process slider */}
            <div className="industries-process-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">We Follow an Agile Real Estate Mobile Application Development Process</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">A real estate mobile application development firm like us, follows agile methodology to develop real estate app development solutions. As per the agile philosophy, we are adaptable with changing requirements, interact extensively with stakeholders, and deliver projects on time.</div>

                            <div className="industries-slider-block">

                                <div className="industries-slider-numbers">
                                    <span className="slide_number" id="slide_number_process"></span>
                                    <span className="slide_dash"></span>
                                    <span className="slide_total_number" id="slide_total_number_process"></span>
                                </div>

                                <OwlCarousel className="owl-theme industries-process" loop autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true} margin={15} nav={true} dots={false} items={4} onInitialized={changeNumberProcess} onTranslated={changeNumberProcess} responsive={
                                    {
                                        '0': {
                                            items: 1,
                                        },
                                        '768': {
                                            items: 2,
                                        },
                                        '992': {
                                            items: 2.5,
                                        },
                                        '1200': {
                                            items: 3.5,
                                        }
                                    }
                                }>
                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faListCheck} /></span>
                                            <h4 className="heading4">Idea Generation and Planning</h4>
                                            <p className="paragraph">Our talented team of real estate mobile app developers first identifies the goal, target market, and essential unique selling features of the app by investigating real estate market trends.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faLineChart} /></span>
                                            <h4 className="heading4">Market Analysis</h4>
                                            <p className="paragraph">Next, our real estate software development team examines the market gaps, consumer preferences, and rivals and finds areas where you can innovate and stand out.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faPaintBrush} /></span>
                                            <h4 className="heading4">Designing and Wireframing</h4>
                                            <p className="paragraph">In order to visualize the app's layout and user experience, our designers create wireframes and mockups that complement the user experience and branding of the app.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCode} /></span>
                                            <h4 className="heading4">Frontend and Backend Development</h4>
                                            <p className="paragraph">Our team of real estate software developers then creates the frontend interface, integrating designs and ensuring the user experience is seamless. They simultaneously build the server architecture, databases, APIs, and backend logic.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faFileAlt} /></span>
                                            <h4 className="heading4">Testing</h4>
                                            <p className="paragraph">Our QA experts thoroughly check and test the app's performance, security, usability, and compatibility with a range of hardware and operating systems.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faRocket} /></span>
                                            <h4 className="heading4">Deployment and Launch</h4>
                                            <p className="paragraph">Our real estate application development experts then deploy the real estate app to the app stores (for Android & iOS), ensuring it complies with all policies and rules.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCog} /></span>
                                            <h4 className="heading4">Maintenance and Support</h4>
                                            <p className="paragraph">Post-launch, our real estate mobile application development experts constantly monitor user involvement and feedback. To guarantee a great user experience, we update the app frequently with new features, enhancements, and bug fixes.</p>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            {/* FAQ section */}
            <div className="faq-panel section-padding less-top-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is the cost of developing a real estate app? </Accordion.Header>
                                        <Accordion.Body>
                                            <p>On average, the development of a real estate app can cost between $30,000 and $300,000. The real estate mobile application development cost estimation varies depending on the app's complexity, UI/UX design, the development team's size, and the development agency's location.</p>
                                            <p>For a precise cost estimation for your next real estate app project, <a href="/contact-us">connect with our experts</a> now.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How long does it take to build a real estate app?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The time taken to build a real estate app is around 4-18 months, depending on the complexities of your application, the choice of the technology stack, the number of features integrated, platform choice and other factors.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Why choose IosAndWeb Technologies as your real estate software development services partner?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>As one of the globally renowned real estate app development companies, IosAndWeb has made a track record of delivering premium applications that have helped clients to grow their businesses. Let us check out some of the top reasons for hiring IosAndWeb Technologies as your trusted real estate mobile app development company:</p>
                                            <ul>
                                                <li>Agile development approach</li>
                                                <li>Extensive client support</li>
                                                <li>Utilization of advanced technologies</li>
                                                <li>Personalized mobile app development for the real estate industry</li>
                                                <li>Flexibility and scalability</li>
                                                <li>Award-winning solutions delivered till date</li>
                                                <li>Experienced and skilled team of real estate app developers</li>
                                            </ul>
                                            <p><a href="/contact-us">Connect with our experts</a> to share your project idea and get a quotation.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </div>
                               
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What are some of the top monetization strategies for a real estate app?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Implementing tactics that produce income while giving consumers value is necessary for monetizing a real estate app. The following are some profitable app monetization techniques that can be implemented during mobile app development for the real estate industry:</p>
                                            <ul>
                                                <li><b>Membership Packages</b> Introduce premium membership packages that give customers access to a range of special features, deals, or services.</li>
                                                <li><b>Freemium Model</b> Offer a basic, feature-limited version of the app for free while charging for a more advanced, feature-rich edition with more tools and functionality.</li>
                                                <li><b>Featured Listing Fees</b> Charge real estate agents, property owners, or both a fee to display their properties on your app. You can go for either one-time charge or a subscription-based system.</li>
                                                <li><b>In-App Advertising</b> Display tailored ads from firms that deal with real estate, such as mortgage lenders, interior designers, or relocation services. Make sure the app's design smoothly incorporates adverts that are both relevant to users and effective.</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What are the top features of a real estate app?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>As a pioneering real estate app development company, we implement the best features that make your app fully functional and high-performing. Few of the top features we incorporate as per the requirements of your project include:</p>
                                            <ul>
                                                <li>Advanced Search Filters</li>
                                                <li>Interactive Maps</li>
                                                <li>Virtual Tours (VR/AR)</li>
                                                <li>Property Comparisons</li>
                                                <li>Saved Searches and Alerts</li>
                                                <li>Secure Transactions</li>
                                                <li>User Profiles</li>
                                                <li>Real-Time Messaging</li>
                                                <li>Property Analytics</li>
                                                <li>Neighborhood Insights</li>
                                                <li>Mortgage Calculator</li>
                                                <li>Language and Currency Support</li>
                                                <li>Property Management Tools</li>
                                                <li>User Reviews and Ratings</li>
                                                <li>Integration with IoT Devices</li>
                                                <li>Scheduling and Reminders</li>
                                                <li>AI-Powered Recommendations</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default RealEstate