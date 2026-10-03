import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faHandshake, faSignal, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

// Services includes images
const nothingHidden = `${process.env.REACT_APP_API_URL}/assests/images/services/social-media-marketing/nothing-hidden.png`;
const lowRiskContracts = `${process.env.REACT_APP_API_URL}/assests/images/services/social-media-marketing/low-risk-contracts.png`;
const moreMoney = `${process.env.REACT_APP_API_URL}/assests/images/services/social-media-marketing/more-money.png`;

// Final Reflection images
const SEOIcon = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/seo-icon.png`;
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;

function SocialMediaMarketing(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"Best Social Media Marketing Services | Built Customer Trust"}
                description={"We help you to build s good reputation of your business with Social media marketing services. Get lead generation services in London."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Social Media Marketing Banner */}
            <div className="social-media-marketing-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>SMM-<span className="text-highlight"> Social Media Marketing</span> Services</h1>
                                <div className="heading5">Build your brand with the most reliable method of marketing i.e. social media marketing.</div>
                                <div className="heading5"><a href="/"><b>IosAndWeb Technologies</b></a> is here to provide you social media marketing services through which you can achieve your marketing objectives and goals.</div>
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
                            <h2 className="heading2 text-center">Social Media Marketing Company</h2>
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
                                <h2>Social Media Marketing Services</h2>
                            </div>
                            <div className="leadsubtxt">
                            Many large scale companies who know the power of social media are advertising their business through social media campaigns and earning lots of profits.<br /><br /></div>
                            <div className="leadsubtxt">Enhance your business or brand with social media marketing or <b>Lead generation campaign services</b> and achieve your goals.
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>

            {/* Designing services section */}
            <div className="designing-services-section background-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Get our Social Media Marketing Services</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                                <h4 className="heading4">Build brand awareness</h4>
                                <p className="paragraph">Develop your brand's awareness among people on social media which will increase your organic followers. Building and growing your business or brand on social media will let you increase the word of mouth and referrals. Experts at Iosandweb will ensure that your followers should match your brand's interests, demographics, and behaviour with <b>Lead generation campaign services</b>. Among many Social media platform <u>Facebook and Instagram campaign specialist</u> advise make your business globally promote.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                                <h4 className="heading4">Engage more people</h4>
                                <p className="paragraph">Develop a strong relationship with your followers through the engagement, so they love to purchase from your brand. IosAndWeb Technologies is <u>best agency for lead generation</u> here to assist you to get more engagement from people through likes and comments on your social media profiles. More engagement signifies a strong relationship with the audience.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faSignal}></FontAwesomeIcon>
                                <h4 className="heading4">Increasing website traffic</h4>
                                <p className="paragraph">Increase your sales and leads by getting more traffic to your website. Social media expert at IosAndweb will develop social media advertising campaigns for your brand for <a href="/b2b-lead-generation-campaign-services"><b>lead generation</b></a> to get get more traffic and sales. Retargeting is also a great option with you can show your ads to the recent viewers of your site. <b><u>Digital marketing services near me</u></b>.</p>
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
                            <h2 className="heading2 text-center">Our Social Media Marketing Process</h2>
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
                                        <h4 className="card-title">A dedicated social media manager will be assigned</h4>
                                        <p className="card-text">Iosandweb will assign you a dedicated social media manager who will develop the plan and execute it. The project manager will study your business deeply and will be your primary contact.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Build a strategy as per the requirement of your business</h4>
                                        <p className="card-text">Before starting a social media advertising campaign, the manager and the team will do research and build a strategy. The research includes a <a href="https://blog.hubspot.com/marketing/competitive-analysis-kit" target="_blank" rel="noreferrer"><b>competitive analysis</b></a>, development of customer's persona and defining the effective content strategy. To get a roadmap to the great success we'll build advertising strategies and plans for the campaign. <u>Advertisement company near me</u>.</p>
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
                                        <h4 className="card-title">Make content calendars and advertisements</h4>
                                        <p className="card-text">Once the strategy gets approved by the client, we will execute it. Our team of <b><u>Social media campaign expert</u></b> will build unique advertisements and the content as per the business. To check and approve the quality, one calendar month will be allowed to develop the content. We will give a chance to the clients to check, review and approve everything.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Growth optimization and daily maintenance</h4>
                                        <p className="card-text">We give growth optimization and daily maintenance services in our social media marketing services. The staff of <b><u>online ads company</u></b> will daily monitor your social media activities i.e. likes, comments, messages, and views and respond to them in 24 hours. We also use hashtags, following, contests, events, etc. to increase your organic following. </p>
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
                                        <h4 className="card-title">Reporting and Communication</h4>
                                        <p className="card-text">The assigned social media manager will provide you monthly reports of the project to review. As per your convenience, we can also arrange face to face meetings on a weekly, biweekly and monthly basis to discuss the progress of the project. </p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                    </div>

                </Container>
            </div>

            {/* Specification section */}
            <div className="sepcification-section text-white section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Social Media Marketing Services</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                <h4 className="heading4">Facebook Marketing Services</h4>
                                <p className="paragraph">Facebook is the leading social media platform through which you can generate more traffic to your website and grow your business with help of our <b><u>Facebook ads specialist</u></b>. More than 2 billion people are using Facebook monthly and you can reach your desired audience.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                <h4 className="heading4">Instagram Marketing Services</h4>
                                <p className="paragraph">Instagram is the most trending social media network in youngsters and 60% of people search over any new things over Instagram. Start Discovering your audience today.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                <h4 className="heading4">Twitter Marketing Services</h4>
                                <p className="paragraph">Twitter will give your brand recognition because 330 million people are using it on a daily basis. Develop customer relationships and trust with the most trusted platform.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
                                <h4 className="heading4">Pinterest Marketing Services</h4>
                                <p className="paragraph">Use Pinterest marketing services to sell your brand's products and you can also reach 400 million users via Pinterest. If you are a eCommerce business then you should know latest updates on <a href="https://whoppingseo.com/how-to-use-pinterest-for-ecommerce-business/" target="_blank" rel="noreferrer"><b>Pinterest marketing for eCommerce business</b></a>.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <h4 className="heading4">LinkedIn Marketing Services</h4>
                                <p className="paragraph">LinkedIn is the most popular social media platform among 500 million professionals and decision-makers. You can target the educated audience of over 25 years old under the instruction of <b><u>Linkedin campaign specialist</u></b>.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services includes */}
            <div className="section-why-choose services-includes-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Why IosAndWeb Best For Social Media Marketing Services</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={nothingHidden} alt="Nothing Hidden" className="why-choose-icon" />
                                <h3 className="heading4">Nothing Hidden</h3>
                                <p className="paragraph">IosAndWeb Technologies <b>Online marketing company</b> will provide you with transparency in the project. You will see the developed strategy and after your approval, the work will be started. You will be fond of our working manner and you just need to put your little efforts by your side.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={lowRiskContracts} alt="Low-risk contracts" className="why-choose-icon" />
                                <h3 className="heading4">Low-risk contracts</h3>
                                <p className="paragraph">Invest your time and money in social media marketing services of Iosandweb and let us provide you great work and win your trust. </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={moreMoney} alt="Cost Saving" className="why-choose-icon" />
                                <h3 className="heading4">Get more for your money</h3>
                                <p className="paragraph">Do not spend your whole budget on one Internet marketing company, it will be like buying a car without gas. We will charge you adequate cost for our services and spend a little amount of your budget on advertising.</p>
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
                            <h2 className="heading2">Final Reflection</h2>
                            <div className="heading5">Being a best <b>Digital marketing company near me</b> award-winning company, IosAndWeb Technologies provides you full transparency about the work we do on your project and you get daily updates about the progress.</div>

                            <div className="services-bottom-flex">

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services">
                                            <img src={SEOIcon} className="services-bottom-front-image" alt="SEO Service" />
                                            <h4 className="heading4">SEO Service</h4>
                                        </a>
                                    </div>
                                </div>

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

export default SocialMediaMarketing;