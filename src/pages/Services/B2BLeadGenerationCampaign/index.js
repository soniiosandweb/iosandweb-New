import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCog, faRefresh, faWrench } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Relationship management section images
const contactWithUsers = `${process.env.REACT_APP_API_URL}/assests/images/services/b2b-lead-generation/contact-with-users.webp`;
const verifyEffectiveness = `${process.env.REACT_APP_API_URL}/assests/images/services/b2b-lead-generation/verify-effectiveness.webp`;
const shareInformation = `${process.env.REACT_APP_API_URL}/assests/images/services/b2b-lead-generation/share-information.webp`;

// Final Reflection images
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/social-media-marketing.png`;
const SEOIcon = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/seo-icon.png`;
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;

function B2BLeadGenerationCampaign(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"B2B Lead Generation Campaign Services | IosAndWeb Tech"}
                description={"Grow your customer base nationaly and globally with B2B Lead Generation Campaign Services and get quality leads with advanced methods."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* B2B Lead Generation Campaign Banner */}
            <div className="b2b-lead-generation-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>B2B <span className="text-highlight">Lead Generation Campaign</span> Services</h1>
                                <div className="heading5">Lead generation is “creating prospective customers” and is the first phase of a company's new <b>customer lead generation services</b> acquisition activities as B2B lead generation campaign services. There are many competing companies, so it's not so easy to get in touch with potential customers.
                                </div>
                                <div className="heading5">In recent years, due to the influence of coronavirus infections, many B2B companies have also begun to focus on <b>online lead generation services</b>.</div>
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
                            <h2 className="heading2 text-center">B2B Lead Generation Campaign Company</h2>
                            <div className="heading5 text-center">In the first place, in business, it is said that <b>online campaign for lead generation</b> first leads to an increase in transactions. This is to make the most of the leads you get from various channels and bring them to the next stage of lead nurturing.</div>

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
                                <h2>Why is b2b lead generation campaign services vital for companies?</h2>
                            </div>
                            <div className="leadsubtxt">
                            Anyway, increasing the denominator will lead to business opportunities, so <u>Lead generation ads expert</u> will cherish customers who are even slightly interested and have them become fans of your company and always want to know how to generate lead for business.
                            <br /><br/>
                            For over a decade, we have been serving with our web development services in UK and in all over the world. While developing your website, our team uses the latest techniques like ultra-clean and bold styles for the standard-based markup codes of the websites that help in improving the position in SERPs and increase conversions. As a web development company, we know that it is important to have a great website for a good online presence and it leaves the first impression on your website visitors. Some people consider a website just as a virtual representation of their company but it is not only that. Your website is the reflector of your business objectives and goals. That's why having an appealing, attractive, informative website is necessary for a great online presence.
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            {/* Relationship management section */}
            <div className="how-we-work-process relationship-management-section section-less-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Points of B2B lead generation campaign services</h2>
                            <div className="heading5 text-center">Below are some points to keep in mind.</div>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-5">
                        <Col lg={6} xl={5}>
                            <img src={contactWithUsers} alt="Contact with users" className="responsive-img" />
                        </Col>
                        <Col lg={6} xl={7}>
                            <h2 className="heading3">Have many points of contact with users</h2>
                            <p className="paragraph">First and foremost, The key to successful business Lead generation is having lots of contact points with your leads. Let's create contact points with leads through various measures such as lead generation websites and advertisement distribution. You can't create a lead without a contact.</p>
                            <p className="paragraph">If it is a website, first of all, SEO measures are taken so that the target users can visit the site. Present the information that users want on your site, and let them deepen their understanding of your product or service by extending their stay. In addition, there is a method of communicating with visitors using a chat tool as a mechanism to have contact points and a method of having them enter basic information so that they can continue to approach them and view white papers.</p>
                            <p className="paragraph">It is also effective to display advertisements that encourage users to revisit the site even after leaving the site.</p>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-5">
                        <Col lg={6} xl={7}>
                            <h2 className="heading3">Don't forget to verify the effectiveness</h2>
                            <p className="paragraph">Verify results after lead generation. In order to make a judgment, you may track the performance at each contact point and verify the effect.</p>
                            <p className="paragraph">In verification, it is important that related departments work together. By having each department check and turn the PDCA cycle, cooperation between departments will be smooth.</p>
                            <p className="paragraph">Validation allows you to track which contact points generate leads and at what stage the lead is in the buying stage. In addition to lead generation, it is also important to verify the effectiveness of lead nurturing and improve accuracy.</p>
                            <p className="paragraph">It is important to circulate the PDCA cycle constantly. Repeatedly verifying the effectiveness and improving the accuracy of lead generation will lead to results. To buy leads online more <u>Facebook lead generation ads</u> is one affordable as well users are more on Facebook. </p>
                        </Col>
                        <Col lg={6} xl={5}>
                            <img src={verifyEffectiveness} alt="Verify Effectiveness" className="responsive-img"/>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-5">
                        <Col lg={6} xl={5}>
                            <img src={shareInformation} alt="Share Information" className="responsive-img" />
                        </Col>
                        <Col lg={6} xl={7}>
                            <h2 className="heading3">Share information</h2>
                            <p className="paragraph">The era of individual sales is coming to an end, and the modern era of team sales has arrived. <b>Lead generation campaign online</b> is essential for teams to achieve their goals.</p>
                            <p className="paragraph">Traditionally, an individual sales person managed their own customers and opportunities. If there are only a few cases to handle, there will be no trouble. However, as the number of cases increases, it becomes impossible to manage them by individual management ability. Also, even if there is a lack of response, there is no chance to notice it, and there are many cases where sales opportunities are lost without noticing.</p>
                            <p className="paragraph">Therefore, by organizing and recording lead information as a team rather than as an individual, it is possible to accurately grasp the schedule management and progress of projects, making it easier to achieve the sales target <b>lead generation expert</b>.</p>
                            <p className="paragraph">It would be good to record the information to be shared about what kind of behavior the prospective customer took, when and who approached what kind of approach, what was heard in the interview, and the characteristics of the prospective customer. </p>
                        </Col>
                    </Row>

                </Container>
            </div>


            {/* Designing services section */}
            <div className="designing-services-section background-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">How to approach lead generation?</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon>
                                <h4 className="heading4">Self-manage and appeal</h4>
                                <p className="paragraph">Collecting prospective customers, managing them, and motivating them to buy, this is the method of attracting customers that many companies have cultivated so far. However, this is a completely manual process that takes a lot of time and money. It is an old-fashioned sales style, such as making phone calls one by one while looking at a long list of customers and visiting universities and public research institutes without an appointment.</p>
                                <p className="paragraph">Times are changing. With the shift from manual work to digitalization in all fields, this kind of method takes a lot of time and effort and goes against the recently recommended work style reforms. Why not revisit these methods soon? There is no reason not to think about it.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                                <h4 className="heading4">Get a substitute</h4>
                                <p className="paragraph">There is a way to have other companies take over the discovery, organization, and data conversion of these prospective customers, inquiries, and business negotiations. Introduce easy-to-use business software to your company, use a business card reader to digitize information on business cards, collect information on companies you want to contact, etc. Have other companies do these things for you.</p>
                                <p className="paragraph">By outsourcing and automating lead generation, a list of leads can be completed in no time. This is a system worth considering.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
                                <h4 className="heading4">Use the tool</h4>
                                <p className="paragraph">Recently, it has become possible to entrust business cards, questionnaires from customers collected at exhibitions and seminars, etc., to agency companies and have them create lists such as Excel and CSV files.</p>
                                <p className="paragraph">It has also become possible to scan paper customer lists and create a database.</p>
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
                            <div className="heading5">In order to actively utilize these tools and conduct efficient sales activities, it is recommended to leave it to a specialized company. Why don't you consider these specialists as one of your best strategy for lead generation online?</div>

                            <div className="services-bottom-flex">

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/social-media-marketing-services">
                                            <img src={socialMediaMarketing} className="services-bottom-front-image" alt="Social Media Marketing" />
                                            <h4 className="heading4">Social Media Marketing</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services">
                                            <img src={SEOIcon} className="services-bottom-front-image" alt="SEO Services" />
                                            <h4 className="heading4">SEO Services</h4>
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

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default B2BLeadGenerationCampaign;