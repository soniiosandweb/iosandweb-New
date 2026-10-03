import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faShoppingCart, faLocationArrow, faRandom, faCodeFork, faFastForward, faUsers, faAward, faTrophy, faCommenting, faCode, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// final reflection images
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/software-development.png`;
const webDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/app-development.png`;
const crmDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/crm-development.png`;
const shopify = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/shopify.png`;

function MagentoDevelopment(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Magento Development Services | Magento Development Agency"}
                description={"Looking for a Magento developer? Hire expert US Magento developers from a top Magento development agency for Magento website & frontend development services."}
                keywords={"Magento Development Services, Magento Development Agency, Magento Website Development, Hire Magento Developer, Frontend Magento Developer, Looking for Magento Developer, Us Magento Developer"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Magento Development Banner */}
            <div className="magento-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Magento</span> Development Services Tailored to Your Business Goals</h1>
                                <div className="heading5">The process of developing an e-commerce platform can be facilitated with the assistance of Magento Development Services, which makes it possible to bring in new customers and offer them a shopping experience that perfectly satisfies their needs. Magento is a well-known and well-liked e-commerce platform.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Leading Magento Development Agency for Scalable eCommerce Solutions</h2>
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
                                <h2>Comprehensive Magento Website Development Services</h2>
                            </div>
                            <div className="leadsubtxt">
                                <b><u>Magento web development</u></b> offers superior benefits for online businesses, such as improved functionality, increased design freedom, and a versatile shopping cart system. These advantages have contributed to Ecommerce magento development services widespread popularity. <a href="/">IosAndWeb Technologies</a>, well-known as a <b>custom Magento development</b> services Company, is home to a team of Magento specialists. 
                                <br />We deal with several different versions of Magento, such as Magento 2.0, so we can provide our customers with reliable storefront models. We can provide a comprehensive range of Magento website design services, including specialized eCommerce solutions, because we are a <b><u>Magento ecommerce development</u></b> company with a team of Magento-certified web developers.
                            </div>
                        </Col>
                        {/* <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project.
                            </div>
                            <ContactForm />
                        </Col> */}
                    </Row>
                </Container>
            </div>

            {/* Advantages section */}
            <div className="designing-services-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">What Are the Advantages of Running Your Online Business with the Magento Platform?</h2>
                            <div className="heading5 text-center">There is no shadow of a doubt that the field of online commerce is seeing a tremendous amount of expansion and transformation. You must be very attentive when selecting a platform or <b><u>Web development company</u></b> that can react appropriately in a circumstance like this.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                                <h4 className="heading4">Build a Giant Retail Establishment</h4>
                                <p className="paragraph">Your client may have multiple stores, which may be managed from a single administrative dashboard. This Goal can be accomplished with the help of <b><u>Website development company.</u></b></p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <h4 className="heading4">Build Sturdy Structures with Ecommerce developer</h4>
                                <p className="paragraph">Because there are fewer dependencies between services in a service-oriented design, it is simpler and easier to understand the benefits.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                                <h4 className="heading4">Organize a Variety of Retail Locations</h4>
                                <p className="paragraph">It can easily handle multiple stores by utilizing a single back-end system with Back end developer.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
                                <h4 className="heading4">Get Access to a variety of APIs</h4>
                                <p className="paragraph">The Magento Application Programming Interface (API) architecture makes it possible to use web services that have an interface with the <b>Magento development</b> system.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCodeFork}></FontAwesomeIcon>
                                <h4 className="heading4">Target Omnichannel</h4>
                                <p className="paragraph">Because it uses a centralized database management system, Magento can compile customer information from various sources.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faFastForward}></FontAwesomeIcon>
                                <h4 className="heading4">Fast Rendering</h4>
                                <p className="paragraph">The use of varnish caching by <b><u>Web development agency</u></b> contributes to the lightning-fast loading times of the pages.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Magento Development Expertise section */}
            <div className="sepcification-section text-white section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Magento Development Expertise — Hire Magento Developer with Confidence</h2>
                            <div className="heading5 text-center">We have our own in-house certified Magento professionals, thanks to the numerous and fruitful Magento development projects we have completed for various clients.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                                <h4 className="heading4">Dedicated Team</h4>
                                <p className="paragraph">Our company is built on design, development, search engine optimization, and online business competence. Our primary mission is to assist you in achieving your electronic commerce (e-commerce) objectives.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                                <h4 className="heading4">Assurance of quality</h4>
                                <p className="paragraph">As an <a href="https://www.meadmetals.com/blog/what-exactly-is-iso-certified-and-what-does-it-mean" target="_blank" rel="noreferrer">ISO-certified</a> company, you can rely on us to provide you with innovative ideas and dependable performance through result-oriented website solutions.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>
                                <h4 className="heading4">Developers Who Have Been Certified</h4>
                                <p className="paragraph">Because we have a staff of expert Magento developers, we can assist you in making the most of the intricacy and high performance offered by the platform.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCommenting}></FontAwesomeIcon>
                                <h4 className="heading4">Assistance to Customers</h4>
                                <p className="paragraph">Our Magento Development Services is committed to offering dependable customer support. If there are any technical problems that you are experiencing with your website, we would be pleased to help you with them.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <h4 className="heading4">Magento Specialized</h4>
                                <p className="paragraph">Using the Magento content management system, we have built and managed Magento websites for several satisfied customers. We have a group of <b><u>Front end developer</u></b> Magento specialists who are ready to lend a hand to you with your project.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Development process section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Magento Development Process — Work with a Trusted US Magento Developer</h2>
                        </Col>
                    </Row>
                    <div className="development-process-blocks mt-4">
                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Requirement Analysis</h4>
                                        <p className="card-text">We do an in-depth examination of your company's requirements and then build and execute a customized Magento eCommerce platform adapted to meet your company's specific needs.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Designing</h4>
                                        <p className="card-text">To organize the design of your website, we will use sitemaps and wireframes. For instance, the structure of a website, as well as its essential components and visual connections, can all be determined with the use of wireframes beacuse we are <b>Web design company.</b></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Development</h4>
                                        <p className="card-text">As soon as the design is approved, our <b>Magento developer in Birmingham</b> and many more areas of United Kingdom begin putting everything together, using the most recent technology and the highest coding standards possible to produce a fully functioning website.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Testing</h4>
                                        <p className="card-text">We thoroughly analyse and provide <b>website Development Services</b> every web page to guarantee the highest possible level of performance. In addition, testing enables us to discover and address any compatibility issues and bugs that may exist before the website is made public.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Deployment</h4>
                                        <p className="card-text">After a series of rigorous tests, your Magento website will be published on a cloud platform like Amazon Web Services, Microsoft Azure, or Google Cloud Platform. The Magento expert we employ maintain a close eye on your company to ensure that everything operates as smoothly as possible.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                    </div>

                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let’s Start Building Web Solutions with a Certified Frontend Magento Developer"
                buttonText="Get Started"
                link="/contact-us"
            />

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">IosAndWeb Technologies – The Go-To Choice for Those Looking for Magento Developer</h2>
                            <div className="heading5">A highly regarded solutions partner and one of the industry's top extension developers for Magento (Adobe Commerce Cloud). When you collaborate with us on the development of Magento, we guarantee the delight of our customers. Your e-commerce firm can be built and grown with the assistance of a Magento development company that has won awards for its work. Build a Magento website that is safe, user-friendly, and scalable with the assistance of IosAndWeb Technologies. We have been able to assist both small enterprises and huge organizations with the design and construction of Magento websites.</div>
                            <div className="heading5">The multi-store capabilities provided by Magento make it much simpler for an online store to expand. We can design and develop a great web store for you with the help of Magento's bespoke design and development capabilities. Magento is a robust and versatile framework for developing websites, and it may be used to construct websites. Your company's administrative processes will be streamlined. As a result, making it much simpler for you to run. Due to the adaptability of Magento, our team can develop individualized user experiences that are compatible with mobile devices. You have the potential to increase your online presence by making use of Magento's search engine optimization (SEO) friendly capabilities.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/custom-software-development-company">
                                            <img src={softwareDevelopment} className="services-bottom-front-image" alt="Software Development" />
                                            <h4 className="heading4">Software Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/web-development-services">
                                            <img src={webDevelopment} className="services-bottom-front-image" alt="Web Development" />
                                            <h4 className="heading4">Web Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/crm-development-for-healthcare-industry">
                                            <img src={crmDevelopment} className="services-bottom-front-image" alt="CRM Development" />
                                            <h4 className="heading4">CRM Development For Healthcare Industry</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/shopify-development-services">    
                                            <img src={shopify} className="services-bottom-front-image" alt="Shopify Development" />
                                            <h4 className="heading4">Shopify Development</h4>
                                        </a>
                                    </div>
                                </div>

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
                                        <Accordion.Header>What makes Magento a good choice for my eCommerce business?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Magento is a powerful and flexible eCommerce platform that supports multi-store functionality, advanced customizations, and seamless integrations. It allows businesses to offer a personalized shopping experience, manage multiple stores from one dashboard, and scale operations efficiently.

                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Do you offer Magento 2.0 development services?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes, we specialize in Magento 2.0 development. Our certified Magento developers have extensive experience building high-performing, secure, and scalable online stores using the latest Magento versions, including Magento 2.0.


                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How long does it take to build a custom Magento website?

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>The development timeline varies depending on your project scope and complexity. Typically, a standard Magento eCommerce store takes 4–8 weeks from requirement analysis to deployment. More complex or customized builds may take longer.

                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>

                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What kind of post-launch support do you offer for Magento websites?

                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <p>We provide 24/7 support and maintenance services even after your website goes live. Our team assists with bug fixes, security updates, performance optimization, and any technical issues to ensure your store runs smoothly.

                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Can you migrate my existing website to Magento without losing SEO rankings or data?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Absolutely. Our Magento development services include seamless migration from other platforms like Shopify, WooCommerce, or custom-built sites. We ensure data integrity and preserve your SEO rankings using proper redirects and technical best practices.</p>

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

export default MagentoDevelopment;