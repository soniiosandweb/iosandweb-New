import React from "react";
import './style.css';
import { Container, Row, Col, Nav, Tab, Accordion } from "react-bootstrap";
import SEO from "../../../components/SEO";
import OwlCarousel from "react-owl-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faChevronRight, faPencilRuler, faListSquares, faCode, faRocket, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const eCommerceBanner = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/ecommerce-banner-new.webp`;

// reasons to choose images
const microservices = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/microservices.png`;
const backendFrontend = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/backend-frontend.png`;
const payment = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/payment-gateway.png`;
const pwaEcommerce = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/pwa-ecommerce.png`;
const marketplaces = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/marketplace.png`;
const portals = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/portals.png`;

// capabilities section images
const awardTeam = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/award-team.webp`;
const developmentPractices = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/development-practice.webp`;
const paramount = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/paramount.webp`;

// Advanced technologies images
const aiMLIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/ai-ml.png`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/blockchain.png`;
const metaverse = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/metaverse.png`;
const dataAnalytics = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/data-analytics.png`;
const cloudComputing = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/cloud-computing.png`;

// Tools and technologies images
const nodejs = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/nodejs.webp`;
const typescript = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/typescript.webp`;
const dotNet = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/dot-net.webp`;
const java = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/java.webp`;
const python = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/python.webp`;
const rubyRails = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/Ruby-on-Rails.webp`;
const react = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/react.webp`;
const angular = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/angular.webp`;
const vueJs = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/vue-js.webp`;
const flutter = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/flutter.webp`;
const swift = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/swift.webp`;
const kotlin = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/kotlin.webp`;


function Ecommerce(){

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

    
    return (
        <>
            <SEO
                title={"Ecommerce App Development Services | IosAndWeb Technologies"}
                description={"Get powerful ecommerce app development services from IosAndWeb Technologies. Build scalable mobile shopping apps with secure payments and seamless user experience."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">eCommerce</span> App Development Services</h1>
                                <div className="heading5">We don't just build apps, we engineer experiences!</div>

                                <div className="btn-section">
                                    <a href="/contact-us" className="btn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>

                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={eCommerceBanner} alt="eCommerce" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose industries-reasons-tab section-padding no-bottom-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">We Develop Everything eCommerce</h2>
                            <div className="heading5 max-width-70">As one of the top-tiered eCommerce app development companies, we develop a unified digital experience with a robust backend and frontend that lowers abandonment rates and boosts conversions, loyalty, and customer satisfaction.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Microservices-based eCommerce web and app development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Backend, frontend, & CRM development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Payment gateways</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> PWA eCommerce</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Marketplaces</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Aggregator portals</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={microservices} alt="Microservices" className="reasons-content-icon" />
                                            <h3 className="heading3">Microservices-based eCommerce web and app development</h3>
                                            <p className="paragraph">Offering an omnichannel multi-platform experience, we develop intuitive user journeys that integrate engagement into every element and promote conversions with our eCommerce development services. We integrate the cart, the gateway, and the store with the APIs as we develop.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={backendFrontend} alt="Backend, frontend" className="reasons-content-icon" />
                                            <h3 className="heading3">Backend, frontend, & CRM development</h3>
                                            <p className="paragraph">We also develop eCommerce stores and apps that elevate the shopping experience for customers across the globe by offering a robust backend architecture (most probably on the cloud) and an intuitive frontend that promotes curiosity, engagement, and retention. As a top-notch eCommerce app development company, we also develop CRM software to scale your marketing and sales initiatives.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={payment} alt="Payment gateways" className="reasons-content-icon" />
                                            <h3 className="heading3">Payment gateways</h3>
                                            <p className="paragraph">We develop custom payment gateways that we integrate into your marketplace app or website. We develop PCI-DSS complaint portals safeguarding the data of your consumers. We develop user interfaces that promote checkout.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={pwaEcommerce} alt="PWA eCommerce" className="reasons-content-icon" />
                                            <h3 className="heading3">PWA eCommerce</h3>
                                            <p className="paragraph">Our dedicated eCommerce app developers design and develop intricate progressive web apps that redefine the shopping experience for your customers without ever having to download an app.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={marketplaces} alt="Marketplaces" className="reasons-content-icon" />
                                            <h3 className="heading3">Marketplaces</h3>
                                            <p className="paragraph">We design architectures that can support numerous buyers and sellers on a single platform operationalizing the free market for as many businesses as possible. We integrate all this into a functional and thoughtful marketplace portal on the web or mobile.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={portals} alt="Aggregator portals" className="reasons-content-icon" />
                                            <h3 className="heading3">Aggregator portals</h3>
                                            <p className="paragraph">Being a leading custom eCommerce software development company we build aggregator apps and portals that you can use to list vendors of a particular product or service in an area connecting the consumers and service providers while you get a fee.</p>
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
                                    <h2 className="heading2">Build a strong ground to grow your eCommerce app idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Ecommerce Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">10+</span>
                                            <span className="industries-numbers-text">Years of experience</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Clients Stay With Us</span>
                                        </li>
                                    </ul>
                                </div>
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
                                <h2>Capabilities that assure industry-best eCommerce application development services</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                            Our team of highly skilled eCommerce app developers have a varied background in software development, AI/ML, cloud computing, and data security, and with this expertise, the team offers top-class eCommerce app development services helping us become the best eCommerce app development company.
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
                                                <Nav.Link eventKey="cpfirst"><FontAwesomeIcon icon={faCircle} /> Award-winning team</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond"><FontAwesomeIcon icon={faCircle} /> Best development practices</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird"><FontAwesomeIcon icon={faCircle} /> Transparency is paramount</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={awardTeam} className="responsive-img" alt="Award-winning team" />
                                                    </div>
                                                    <p className="paragraph">As a premium eCommerce mobile app development company, our expertise is reflected in the digital products and apps developed by our eCommerce app developers that have bagged prestigious awards year-on-year.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={developmentPractices} className="responsive-img" alt="Best development practices" />
                                                    </div>
                                                    <p className="paragraph">Using DevOps and Agile methodologies, we quickly and efficiently cater to our client's needs, closing gaps and delivering seamless shopping experiences.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={paramount} className="responsive-img" alt="Transparency is paramount" />
                                                    </div>
                                                    <p className="paragraph">Being the best-in-class eCommerce app development company, we believe that an open communication channel translates into more productive and efficient eCommerce app development services. Therefore, we keep our clients updated about the development at all stages.</p>
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

            {/* Industries process slider */}
            <div className="industries-process-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">A time-tested development process our services include</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">We combine our technical expertise with our client's innovative ideas to deliver the best possible mobile eCommerce app development solutions.</div>

                            <div className="industries-slider-block">

                                <div className="industries-slider-numbers">
                                    <span className="slide_number" id="slide_number"></span>
                                    <span className="slide_dash"></span>
                                    <span className="slide_total_number" id="slide_total_number"></span>
                                </div>

                                <OwlCarousel className="owl-theme industries-process" loop autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true} margin={15} nav={true} dots={false} items={4} onInitialized={changeNumber} onTranslated={changeNumber} responsive={
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
                                            <span className="process-icon"><FontAwesomeIcon icon={faListSquares} /></span>
                                            <h4 className="heading4">Discovery</h4>
                                            <p className="paragraph">Being a top-rated eCommerce application development company, our development process begins with discovering the market fit of your eCommerce app idea. We thoughtfully study the landscape for similar offerings and develop the best technology to satisfy your specific requirements.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faPencilRuler} /></span>
                                            <h4 className="heading4">Ideation and Consulting</h4>
                                            <p className="paragraph">The next step in our online shopping app development process has us ideating and suggesting the possible solutions through expert IT consulting. In this step, we also zero in on the best possible UX/UI elements to cater to your audience and design thoughtful user journeys that increase conversions.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCode} /></span>
                                            <h4 className="heading4">Development and testing</h4>
                                            <p className="paragraph">In this stage of the development process we develop the apps, create the necessary components and APIs and seamlessly connect the parts together that come alive as a beautiful and engaging eCommerce app.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faRocket} /></span>
                                            <h4 className="heading4">Deployment and maintenance</h4>
                                            <p className="paragraph">As part of our eCommerce software development services, we deploy the app or software on its intended platform and based on the feedback from focus groups and general users alike, we update and maintain the app for the best results.</p>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Advanced technologies section */}
            <div className="advanced-technologies section-padding less-top-padding">
                <Container>
                    <Row>
                        <Col md={6} lg={7}>
                            <div className="sticky-div">
                                <h2 className="heading2">Advanced technologies we employ in our eCommerce app development services</h2>
                                <div className="heading5">Being a top eCommerce application development company, we use advanced technologies to unlock potential revenue streams for our clients while maximizing the business prospect of their app or product. These advanced technologies have propelled us to become the preferred custom eCommerce software development company.</div>
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
                                        <p className="paragraph">Being the foremost eCommerce mobile app development company, we build advanced AI/ML algorithms that automate processes and offer analytics, insights, and visibility into customer behavior from a single dashboard. Using machine learning and computer vision, we develop automated assembly lines and sorting algorithms building the eCommerce platform of the future.</p>
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
                                        <p className="paragraph">Having privacy and security built into the framework, blockchain offers capabilities to build systems that are inherently secure, public, and decentralized offering the control back in the hands of the users.</p>
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
                                        <p className="paragraph">As a top-rated eCommerce mobile app development company we develop immersive metaverse 3d spaces as part of our services and elevate the experience for your users manifold.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={dataAnalytics} className="responsive-img" alt="Data analytics" />
                                        </span>
                                        <h4 className="heading4">Data analytics</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We provide advanced data analytics services offering immense value to your eCommerce business. We develop prediction engines based on customers' shopping data and other features enabled by advanced analytics.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={cloudComputing} className="responsive-img" alt="Cloud computing" />
                                        </span>
                                        <h4 className="heading4">Cloud computing</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Since the days of on-prem servers are over, we as one of the leading eCommerce app development companies, we offer top-of-the-line cloud services including cloud migration, optimization, and cloud-managed services to offer immense value to your data storage requirements.</p>
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
                            <h2 className="heading2">Tools and languages we use</h2>

                            <div className="tools-languages-tab-div">
                                <Tab.Container id="tools-languages-tab" defaultActiveKey="toolfirst">
                                    <div className="tools-languages-tab-top tools-languages-tab-cols">
                                        <Nav variant="pills" className="tools-languages-tab flex-row justify-content-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfirst">Web Technologies</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolsecond">Mobile Technologies</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="tools-languages-tab-bottom tools-languages-tab-cols">
                                        <Tab.Content>

                                            <Tab.Pane eventKey="toolfirst">
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Backend</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={nodejs} className="responsive-img" alt="Node js" />
                                                                </div>
                                                                <p className="paragraph">Node js</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={typescript} className="responsive-img" alt="Typescript" />
                                                                </div>
                                                                <p className="paragraph">Typescript</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={dotNet} className="responsive-img" alt=".Net" />
                                                                </div>
                                                                <p className="paragraph">.Net</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={java} className="responsive-img" alt="Java" />
                                                                </div>
                                                                <p className="paragraph">Java</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={python} className="responsive-img" alt="Python" />
                                                                </div>
                                                                <p className="paragraph">Python</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={rubyRails} className="responsive-img" alt="Ruby" />
                                                                </div>
                                                                <p className="paragraph">Ruby</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Frontend</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={react} className="responsive-img" alt="React Native" />
                                                                </div>
                                                                <p className="paragraph">React Native</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={angular} className="responsive-img" alt="Angular" />
                                                                </div>
                                                                <p className="paragraph">Angular</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={vueJs} className="responsive-img" alt="Vue Js" />
                                                                </div>
                                                                <p className="paragraph">Vue Js</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolsecond">
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">iOS</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={swift} className="responsive-img" alt="Swift" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Cross Platform</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={react} className="responsive-img" alt="React Native" />
                                                                </div>
                                                                <p className="paragraph">React Native</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={flutter} className="responsive-img" alt="Flutter" />
                                                                </div>
                                                                <p className="paragraph">Flutter</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Android</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={kotlin} className="responsive-img" alt="Kotlin" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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

            {/* FAQ section */}
            <div className="faq-panel section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How long does it take to develop an eCommerce app? </Accordion.Header>
                                        <Accordion.Body>
                                            <p>The exact time needed to create an eCommerce app mostly depends on the specifications of the products and other requirements. Your e-commerce app's MVP or initial release could take 3 to 4 months to complete. The project requirements, such as feature implementation, eCommerce app design, the complexity of the app, and others, affect the duration of app development.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What are the main factors to consider when developing an eCommerce website?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>An eCommerce website should have a user-friendly design, secure payment gateways, comprehensive inventory management, responsive mobile optimization, SEO, product categorization, and customer service. To handle future growth and changing client needs, pay particular attention to site speed, user experience, and scalability.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </div>
                               
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is the development process of an eCommerce app?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Here are some of the crucial steps to building an intuitive eCommerce app:</p>
                                            <ul>
                                                <li>Research on the project idea</li>
                                                <li>Setting goals</li>
                                                <li>Identifying the right platform</li>
                                                <li>Defining the feature set</li>
                                                <li>Focus on UI & UX design</li>
                                                <li>Developing MVP</li>
                                                <li>Collecting feedback</li>
                                                <li>Iterating constantly</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Why hire IosAndWeb as your eCommerce mobile app development partner?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Here are a few reasons why we are one of the most trusted eCommerce app development agencies like ours:</p>
                                            <ul>
                                                <li>Experienced and skilled in offering the trendiest mobile shopping solutions.</li>
                                                <li>Adept at putting the appropriate eCommerce strategy into practice.</li>
                                                <li>Providing eCommerce services and solutions in accordance with the needs of our clients' businesses.</li>
                                                <li>Best-in-class support service for immediate assistance.</li>
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

export default Ecommerce;