import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faFileText, faPencilSquare, faVcard, faCommentDots, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faRefresh, faBook, faClone, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const webCopywriting = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/web-copywriting.webp`;
const proofreadingImage = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/proofreading-image.webp`;

// reasons to choose images
const informationClient = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/information-client.png`;
const analysisTexts = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/analysis-texts.png`;
const writingTexts = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/writing-texts.png`;
const textEditing = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/text-editing.png`;
const coordinating = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/coordinating.png`;

const informationClientWhite = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/information-client-white.png`;
const analysisTextsWhite = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/analysis-texts-white.png`;
const writingTextsWhite = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/writing-texts-white.png`;
const textEditingWhite = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/text-editing-white.png`;
const coordinatingWhite = `${process.env.REACT_APP_API_URL}/assests/images/services/english-copywriting-proofreading/coordinating-white.png`;

// Final Reflection images
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/social-media-marketing.png`;
const SEOIcon = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/seo-icon.png`;
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;


function EnglishCopywritingProofreading(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"English Copywriting Services and Proofreading services"}
                description={"We offer Quality English Copywriting Services and Proofreading services. Discuss with our qualified content writer. Get consultation Today!"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* English Copywriting and Proofreading Banner */}
            <div className="english-copywriting-proofreading-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>English <span className="text-highlight">Copywriting & Proofreading</span> Services</h1>
                                <div className="heading5">The overall impression is the key factor in the quality of your text - and we help you with this by offering <b>english copywriting services</b> and proofreading services. You choose the type of service you want based on your needs. 
                                </div>
                                <div className="heading5">What are you waiting for? Discover our <b>website content services.</b></div>
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
                            <h2 className="heading2 text-center">English Copywriting & Proofreading Service Company</h2>
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
                                <h2>Explore our Copywriting and Proofreading Services</h2>
                            </div>
                            <div className="leadsubtxt">
                            IosAndWeb boasts a high degree of professionalism in the composition of texts in English and in the correction, revision, and editorial care of texts in English; authors and publishers are guaranteed precise and reliable <b>content writing services</b> and proofreading services. The proposed editing and correction service provides for both the revision and the standardization of the texts according to the editorial rules of the publishing house in order to improve the contents and readability. 
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>

            {/* Relationship management section */}
            <div className="how-we-work-process relationship-management-section section-padding">
                <Container>

                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Web & Copywriting</h2>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col md={7}>
                            <p className="paragraph">It may seem trivial, but writing for the web is different and requires specific preparation and experience. The text constitutes a fundamental element of the web interface, performing together with the visual moment an important function of supporting the usability of a site and the ease with which surfers can use its contents.</p>
                            <p className="paragraph">The copy and web writers of IosAndWeb create quality content, making a difference in your company's presence on the web and on the market. Our web writers help create the site environment. Making it pleasant and welcoming, they offer the visitor not only the opportunity to stop but also the pleasure of returning by concretely increasing the chances that a simple click will turn into a business opportunity.</p>
                            <p className="paragraph">In the case of other media (TV, radio, billboards, press), our copy can modulate the message by changing style and rhythm according to the expressive medium used and the final target. They combine creativity, experience, and good taste with an excellent cultural background. Elements that, together with competitive costs, represent the key to the success of your advertising campaign. </p>
                        </Col>
                        <Col md={5}>
                            <img src={webCopywriting} alt="Web and copywriting" className="responsive-img"/>
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* Specification section */}
            <div className="sepcification-section text-white section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">To offer you high-quality seo friendly content writing, we take care of:</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                                <h4 className="heading4">Choose phrases and keywords to insert in the meta tags and text</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faFileText}></FontAwesomeIcon>
                                <h4 className="heading4">Write short, concise, and clear texts</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faPencilSquare}></FontAwesomeIcon>
                                <h4 className="heading4">Format and edit the text</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faVcard}></FontAwesomeIcon>
                                <h4 className="heading4">Integrate/enrich the text with infographics, bullets, colors, etc.</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
                                <h4 className="heading4">Provide support advice for the graphic part</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                                <h4 className="heading4">Create the textual interface (buttons, menus, links)</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Relationship management section */}
            <div className="how-we-work-process relationship-management-section section-padding">
                <Container>

                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Proofreading</h2>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col md={7}>
                            <p className="paragraph">Years of experience in this sector allows us to offer an excellent quality service for the creation of a perfect product from a formal point of view and characterized by a highly effective graphic balance.</p>
                            <p className="paragraph">The proofreading activity carried out by our professionals will be aimed at revising already written texts in order to correct spelling and typographical errors such as classic typos. It is an editorial service available for copywriters, writers, journalists, and publishing houses.</p>
                            <p className="paragraph">The proofreader will professionally read and reread the manuscript in a scrupulous search for spelling, grammatical, syntactic, and semantic errors, and morphological and lexical errors. If requested, the proofreading service will also carry out the stylistic revision of the texts.</p>
                        </Col>
                        <Col md={5}>
                            <img src={proofreadingImage} alt="Proofreading" className="responsive-img"/>
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* Designing services section */}
            <div className="designing-services-section background-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Specifically, we deal with:</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                                <h4 className="heading4">Review and correct the proofs of any type of text, from the manuscript to the blueprint</h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                                <h4 className="heading4">Insert the correct texts on paper and/or in text files</h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
                                <h4 className="heading4">Review, correct and/or rewrite translations</h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                <h4 className="heading4">Review, correct, and, if necessary, optimize texts to and from websites.</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose framework-sections section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">How do we work on texts?</h2>
                            <div className="heading5"> Contact our copywriting expert for a real estimate of spending based on timing and quantity.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={informationClient} alt="Information Client" className="reasons-content-icon" />Obtain information from the client</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={analysisTexts} alt="Analysis Texts" className="reasons-content-icon" />Analysis of the available texts and the competitive landscape</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={writingTexts} alt="Writing Texts" className="reasons-content-icon" />Writing texts</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><img src={textEditing} alt="Text Editing" className="reasons-content-icon" />Text editing and proofreading</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><img src={coordinating} alt="Coordinating" className="reasons-content-icon" />Coordinating and reporting</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={informationClientWhite} alt="Information Client" className="reasons-content-icon" />
                                            <h3 className="heading3">Obtain information from the client</h3>
                                            <p className="paragraph">We complete a summary, receive and analyze referral information, define the client's goals and objectives, and create a picture of the target audience.</p>
                                            <p className="paragraph"><b>Stage result:</b> a complete understanding of who the text is written for and how it should be written.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={analysisTextsWhite} alt="Analysis Texts" className="reasons-content-icon" />
                                            <h3 className="heading3">Analysis of the available texts and the competitive landscape</h3>
                                            <p className="paragraph">As part of seo content writing, we examine competitors and text activity in the top 20 search results to identify the most common errors in the current text.</p>
                                            <p className="paragraph"><b>Stage result:</b> Formed Content Creation Strategy.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={writingTextsWhite} alt="Writing Texts" className="reasons-content-icon" />
                                            <h3 className="heading3">Writing texts</h3>
                                            <p className="paragraph">Our content writing specialistcreates test scripts and selects a larger group of copywriters to work on additional script support for your project.</p>
                                            <p className="paragraph"><b>Stage result:</b> powerful content that can drive sales.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={textEditingWhite} alt="Text Editing" className="reasons-content-icon" />
                                            <h3 className="heading3">Text editing and proofreading</h3>
                                            <p className="paragraph">At this stage, we work to the line in the text to the informative style, maximizing the originality of the text and checking for errors in it.</p>
                                            <p className="paragraph"><b>Stage result:</b> a good text that meets all prerequisites and contains no errors.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={coordinatingWhite} alt="Coordinating" className="reasons-content-icon" />
                                            <h3 className="heading3">Coordinating and reporting</h3>
                                            <p className="paragraph">We send the text to the client for approval, make any corrections and polish the material to perfection.</p>
                                            <p className="paragraph"><b>Stage result:</b> High-quality text that you, your customers, and search engines will love. The list of key stages can be expanded at the customer's request. For example, if you need to set up semantic core and SEO queries for your text, if you need to put finished text on your website or on a reputable external site, if you need to set up custom illustrations, etc., we will help you!</p>
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
                            <h2 className="heading2">What are you waiting for? Contact IosAndWeb for flawless results</h2>
                            <div className="heading5">Convince yourself of the result and rely on our reviewers' many years of experience. Please contact us for technical content writing services and receive a quick and accurate review of your project.</div>

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

export default EnglishCopywritingProofreading;