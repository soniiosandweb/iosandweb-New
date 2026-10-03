import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLineChart, faGears, faMobileAlt, faShoppingBag, faExchange, faRefresh } from "@fortawesome/free-solid-svg-icons";

// Reasons section images
const mobileOptimizing = `${process.env.REACT_APP_API_URL}/assests/images/services/shopify-development/mobile-optimizing.png`;
const paymentSecurity = `${process.env.REACT_APP_API_URL}/assests/images/services/shopify-development/payment-security.png`;
const monetarySystem = `${process.env.REACT_APP_API_URL}/assests/images/services/shopify-development/monetary-system.png`;
const clientAssistance = `${process.env.REACT_APP_API_URL}/assests/images/services/shopify-development/client-assistance.png`;
const productImage = `${process.env.REACT_APP_API_URL}/assests/images/services/shopify-development/3d-product.png`;

// final reflection images
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/software-development.png`;
const webDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/app-development.png`;
const crmDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/crm-development.png`;
const magentoDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/magento.png`;

function ShopifyDevelopment(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Get Shopify Development Services in USA - IosAndWeb Technologies"}
                description={"Shopify Development Services in USA to build fast, secure, and scalable eCommerce stores. Boost sales with custom design, apps, and seamless user experience."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Shopify Development Banner */}
            <div className="shopify-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Shopify</span> Development Services</h1>
                                <div className="heading5">Anywhere in the world can make payments for your online store. No need to be concerned about obtaining domains through resellers, hosting, or coding. Is this a fairy tale of online shopping? In no way. This essay will discuss our experience utilizing the Shopify platform and compare it to our knowledge of the subject matter.Shopify is made to be a flexible assistant that develops along with you.</div>
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
                            <h2 className="heading2 text-center">Shopify Development Company</h2>
                            <div className="heading5 text-center">With the aid of the Shopify App Store and APIs, it is possible to create an online site from the start, migrate from another platform, or enhance and personalize your already-existing store.</div>
                            <div className="heading5 text-center">Since its debut in 2006, Shopify has multiplied, evolving from a modest startup to the top online commerce platform. According to research by Statista, among the top 10 E-commerce platforms in 2021, Custom Shopify development is ranked third for business growth. By gaining new clients daily, you can scale your firm and quickly recover these costs.</div>

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
                                <h2>Shopify Development Services</h2>
                            </div>
                            <div className="leadsubtxt">
                                Shopify, which offers high-quality hosting and is simple to set up and operate, ensures high-speed performance for your store. You can have a customized E-commerce website and a simple design from a <b>Shopify store development</b> with experience creating Shopify stores in 1-3 days. An essential website with all the products and information is completed in 3-4 days. This process will take longer for some designs. For instance, it can take a month to three weeks to create an E-store from scratch based on a client's design needs. Selecting the wrong program settings is the only thing that can make you slower.
                            </div>
                            <div className="leadsubtxt">
                                Additionally, Shopify offers a 14-day free trial. The tools' necessity can be tested. Everything is evident when you utilize the Shopify store administration panel's interface, which is simple and easy to use.
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

            {/* Reasons to choose section */}
            <div className="reasons-to-choose framework-sections section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Shopify Development Services</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={mobileOptimizing} alt="Optimizing For Mobile" className="reasons-content-icon" /> Optimizing For Mobile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={paymentSecurity} alt="Payment And Use Security" className="reasons-content-icon" /> Payment And Use Security</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={monetarySystem} alt="Own Monetary System" className="reasons-content-icon" /> Own Monetary System</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><img src={clientAssistance} alt="24/7 Client Assistance" className="reasons-content-icon" /> 24/7 Client Assistance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><img src={productImage} alt="3d Product Images" className="reasons-content-icon" /> Having Access To 3d Product Images</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Optimizing For Mobile</h3>
                                            <p className="paragraph">Mobile apps drive sales; the typical customer uses Shopify for more than 3 minutes and visits over three stores to compare selections and prices. In other words, do you only have a little time to wow the user? Every <b>Shopify development company</b> works with some particular theme that is optimized for mobile. It implies that every page will appropriately display and function on every device. Images and text are accurately presented, intelligible, and do not overlap. You can save time on redesigning or making the sites look appealing to customers.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Payment And Use Security</h3>
                                            <p className="paragraph">Shopify is able to encrypt data and send it via a secure connection using any <a href="https://www.gogetssl.com/wiki/ssl-basics/what-is-ssl-tls/" target="_blank" rel="noreferrer"><b>SSL certificate</b></a>. The platform complies with the PCI Standard, which specifies the data protection needed when handling credit card transactions. The standard guards against problems that could occur during the payment process and safeguards the client's funds:
                                            <ul>
                                                <li>rigorous access control measures are put in place</li>
                                                <li>personal data leaks are controlled</li>
                                                <li>safety is guaranteed throughout the entire money transfer and crediting process.</li>
                                            </ul>
                                            On Shopify, all client data, including credit card information, is kept private. To keep your store and cart accessible and guarantee quick page loading, the platform will take care of maintenance and server updates.
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Own Monetary System</h3>
                                            <p className="paragraph">The platform features a different payment method as well. If you choose to use Shopify Payments, you will be able to process store orders and payments promptly, manage product returns and exchanges and combine all of your financial activities into a single personal account.
                                            <br /><u>Shopify app development</u> has integrations with Stripe-based payment processors. Calculations using alternative payment systems may be possible depending on which gateways are accessible in the nation. The link will take you to actual payment information broken down by location.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">24/7 Client Assistance</h3>
                                            <p className="paragraph">The Shopify staff is available around-the-clock and responds to queries immediately, so you'll always have information and feedback. More than 800 000 businesses participate in Shopify's community, responding quickly to inquiries about the particulars of your industry. The platform's help center also offers topical forums about using the site.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Having Access To 3d Product Images</h3>
                                            <p className="paragraph">Shopify is the leader in online commerce and employs every feature imaginable to raise sales and customer engagement.
                                            <br />On Shopify, 3D product photos and video visualization could boost conversion rates by up to 250%. Display your winning item from all sides. Customers will become more familiar with the specifics of the product's features and feel more pressure to buy. </p>
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
                            <h2 className="heading2 text-center">Six Common Shopify Development Service Types</h2>
                            <div className="heading5 text-center">Problem-solving of variable complexity is required at various phases of business development. You can scale your online business, migrate, and personalize functionality using <u>Shopify website development services.</u></div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faLineChart}></FontAwesomeIcon>
                                <h4 className="heading4">Growth And Personalization Of Themes</h4>
                                <p className="paragraph">Shopify offers a vast selection of themes and extensive UI/UX design customization, which we may adjust to meet your needs.Here is a way to introduce the brand's identity because the future theme will be the store's original layout.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faGears}></FontAwesomeIcon>
                                <h4 className="heading4">Setting Up And Customizing A Store</h4>
                                <p className="paragraph">Shopify developers update all Shopify pages to improve cross-conversion rates when creating turnkey stores or landing pages from scratch. Setting up sales within the context of long-term planning, creating turnkey stores from the start, or creating landing pages would be beneficial.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                                <h4 className="heading4">App Creation</h4>
                                <p className="paragraph">With improvements to the Shopify App Store, we could make a new customized app for you, increase the capabilities of the Shopify App, and connect it to other third-party apps. With the help of our Shopify App Development Service, our clients may boost the effectiveness of their online stores and add more crucial features to their websites.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faExchange}></FontAwesomeIcon>
                                <h4 className="heading4">Migration</h4>
                                <p className="paragraph">We can assist you if you want to move from any other e-commerce platform to Shopify. We guarantee data migration from any platform is quick and secure.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                                <h4 className="heading4">Updating And Maintaining The Store</h4>
                                <p className="paragraph">The engineering team of Iosandweb is prepared to assist you with any request, including those for data optimization, updating the back-end, or correcting hiccups or problems.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
                                <h4 className="heading4">Shopify Plus Business Solutions</h4>
                                <p className="paragraph">Hire Shopify developers who can customize solutions who can create and integrate and sync with ERP and CRM systems. For your company, we will offer integration and assistance.</p>
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
                            <h2 className="heading2">Conclusion</h2>
                            <div className="heading5">Despite the knowledge that Shopify is one of the best e-commerce networks currently on the market, store owners are continuously working to create something distinctive, exceptional, and unique to match their customers' growing demands. Shopify developers near me are needed as a result.</div>

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
                                        <a href="/magento-development-services">    
                                            <img src={magentoDevelopment} className="services-bottom-front-image" alt="Magento Development" />
                                            <h4 className="heading4">Magento Development Services</h4>
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

export default ShopifyDevelopment;