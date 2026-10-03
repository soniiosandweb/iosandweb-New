import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import { useLocation } from "react-router-dom";

// Reasons section images
const googleAdwards = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/google-adwords.png`;
const bingAds = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/bing-ads.png`;
const youtubeAds = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/youtube-ads.png`;
const facebookAds = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/facebook-ads.png`;
const linkedinAds = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/linkedin-ads.png`;
const twitterAds = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/twitter-ads.png`;

// Services includes images
const professionals = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/professionals.png`;
const knowledge = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/knowledge.png`;
const upgradedResults = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/upgraded-results.png`;
const reporting = `${process.env.REACT_APP_API_URL}/assests/images/services/ppc-services/reporting.png`;

// Final Reflection images
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;

function PayPerClick(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"PPC Services - PPC Lead Generation Campaigns | Start Today"}
                description={"IosAndWeb offer PPC Campaign management by certified team. Driven effective result by PPC Services. Best digital marketing company in UK."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* PPC services Banner */}
            <div className="ppc-service-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">Pay Per Click</span> Services</h1>
                                <div className="heading5">On the off chance that you are on a chase for the correct Pay Per Click Services, <a href="/"><b>IosAndWeb Technologies</b></a> is the unmistakable decision! With long stretches of understanding as the main pay per click promoting organization, IosAndWeb has woven a trust among the worldwide customers.</div>
                                <div className="heading5">You can upgrade your business with our first rate PPC Services that is expected to knock up the business prerequisites for each business. This causes our customers to get the upside of producing natural leads without wasting their valuable time and endeavors. </div>
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
                            <h2 className="heading2 text-center">Pay Per Click Services</h2>
                            <div className="heading5 text-center">Our accomplished PPC specialist agency in Birmingham and many more areas of United Kingdom can control you in getting the most extreme benefits out of the little speculation.</div>

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
                                <h2>IosAndWeb Technologies - PPC Services</h2>
                            </div>
                            <div className="leadsubtxt">
                                We at IosandWeb dependably underline conveying the correct answers for the different customer's needs. Our greatest need as a <b>Digital marketing services</b> is to guarantee that we perform total examination and research about a business at whatever point we are going to serve them the best out of our administrations. As the pioneers in giving the best PPC Services, we ensure that our customers rise as a brand in the worldwide markets. We realize where to focus on the group of spectators for upgraded yield for our customers such that it fits their business.  
                                <br/>We at IosAndWeb dependably underline conveying the correct answers for the different customer's needs. Our greatest need as a <b>Digital marketing services</b> is to guarantee that we perform total examination and research about a business at whatever point we are going to serve them the best out of our administrations. As the pioneers in giving the best PPC Services, we ensure that our customers rise as a brand in the worldwide markets. We realize where to focus on the group of spectators for upgraded yield for our customers such that it fits their business. 
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
                            <h2 className="heading2 text-center">With IosAndWeb's Reliable PPC Services, You can Expect Great Revenues through Organic Leads</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={googleAdwards} alt="Google Adwords" className="reasons-content-icon" /> Google Adwords</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={bingAds} alt="Bing Ads" className="reasons-content-icon" /> Bing Ads</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={youtubeAds} alt="YouTube Ads" className="reasons-content-icon" /> YouTube Ads</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><img src={facebookAds} alt="Facebook Ads" className="reasons-content-icon" /> Facebook Ads</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><img src={linkedinAds} alt="LinkedIn Ads" className="reasons-content-icon" /> LinkedIn Ads</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><img src={twitterAds} alt="Twitter Ads" className="reasons-content-icon" /> Twitter Ads</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Google Adwords</h3>
                                            <p className="paragraph">Regardless of whether you are anticipating great traffic on your site or on a chase for the correct marking administrations through <u>Google adwords campaign services</u>, IosandWeb is the conspicuous decision!</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Bing Ads</h3>
                                            <p className="paragraph">We are the market chiefs with regards to advancing your image on Bing. Our experts hold incredible mastery in making brand mindfulness through <u>PPC ads company.</u></p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">YouTube Ads</h3>
                                            <p className="paragraph">Advance your image on YouTube with our expert YouTube commercial administrations. We are one of the prestigious <u>PPC ads company</u> that offers predictable administrations.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Facebook Ads</h3>
                                            <p className="paragraph">You can generally get the privilege Facebook Ads advancement benefits that let you focus on a particular group of spectators that can upgrade your business incomes.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">LinkedIn Ads</h3>
                                            <p className="paragraph">Presently you can advance your image through our excellent LinkedIn special PPC marketing company. We have a group of committed LinkedIn advertisers that can help you in your business special needs!</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Twitter Ads</h3>
                                            <p className="paragraph">On the off chance that you are looking for the <u>Best agency for PPC services</u> that can deal with your Twitter for brand mindfulness, look none other than IosandWeb! We hold extraordinary skill in conveying Twitter Ads promoting administrations!</p>
                                        </div>
                                    </Tab.Pane>
                                    
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Services includes */}
            <div className="section-why-choose services-includes-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Why Rely on IosandWeb Technologies?</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={professionals} alt="Devoted Professionals" className="why-choose-icon" />
                                <h3 className="heading4">Devoted Professionals</h3>
                                <p className="paragraph">We have energetic showcasing PPC campaign manager specialists that are dependably there to serve you with the first rate PPC administrations that really have any kind of effect. You can generally expect better yield from our side at whatever point you are on a chase for the privilege <u><b>PPC campaign specialist</b></u> co-op.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={knowledge} alt="Extraordinary Knowledge" className="why-choose-icon" />
                                <h3 className="heading4">Extraordinary Knowledge and Strategies</h3>
                                <p className="paragraph">We trust that we can convey the best outcomes by dissecting the customer's genuine needs and afterward checking the market patterns. Our techniques to advance your business totally center around giving the best outcomes inside negligible time.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={upgradedResults} alt="Upgraded Results" className="why-choose-icon" />
                                <h3 className="heading4">Upgraded Results</h3>
                                <p className="paragraph">We guarantee you that you would definitely observe results when you depend on the best Google ads specialist co-op in the town. Contract PPC specialist co-op from IosandWeb to observe a change!</p>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={reporting} alt="Monitoring and Reporting" className="why-choose-icon" />
                                <h3 className="heading4">Monitoring and Reporting</h3>
                                <p className="paragraph">We'll keep a regular check by <u><b>Google AdWords expert</b></u> on your account and provide you timely reports about impressions, clicks, and conversions achieved on your account with ad campaigns. We'll also share PPC Services some other components like where the traffic is coming, locations, customer demographics, mobile devices, etc, to understand your customers and their requirements better.</p>
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
                            <h2 className="heading2">Final Reflections</h2>
                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-page-speed-optimization-services">
                                            <img src={pageSpeed} className="services-bottom-front-image" alt="SEO Page Speed" />
                                            <h4 className="heading4">SEO Page Speed Optimization</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/english-copywriting-and-proofreading-services">    
                                            <img src={proofreading} className="services-bottom-front-image" alt="Proofreading" />
                                            <h4 className="heading4">English Copywriting & Proofreading Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/b2b-lead-generation-campaign-services">    
                                            <img src={b2b} className="services-bottom-front-image" alt="B2B" />
                                            <h4 className="heading4">B2B Lead Generation Campaign Services</h4>
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

export default PayPerClick;