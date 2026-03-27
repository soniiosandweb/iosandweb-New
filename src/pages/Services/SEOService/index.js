import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";
import { Accordion } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Reasons section images
const localSeo = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/local-seo.png`;
const ecommerceSeo = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/ecommerce-seo.png`;
const bingSeo = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/bing-seo.png`;
const keywardResearch = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/keywords-research.png`;
const competitiveAnalysis = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/competitive-analysi.png`;
const auditOptimization = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/website-audit-optimization.png`;
const analyticsResearch = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/analytics-research.png`;
const trafficGeneration = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/traffic-generation.png`;
const contentMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/content-marketing.png`;
const technicalSeo = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/technical-seo.png`;
const reporting = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/reporting.png`;
const penaltyRecoery = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/penalty-recovery.png`;

// Final Reflection images
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/social-media-marketing.png`;
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;
const birmingham = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/seo-service.png`;
const peterborough = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/seo-service1.png`;
const sheffield = `${process.env.REACT_APP_API_URL}/assests/images/services/seo/seo-service2.png`;

function SEOService(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"SEO Services At Affordable Prices | Get Free SEO Analysis Report"}
                description={"IosAndWeb Technologies is the best Digital Marketing Agency in providing SEO services by certified experts at reasonable prices. Get quote."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* SEO Service Banner */}
            <div className="seo-service-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">SEO</span> Services</h1>
                                <div className="heading5"><b>IosAndWeb Technologies</b>  provides one of the top of the line Organic <b>SEO Services in London</b> and many more areas of United Kingdom that has been giving traffic through natural sources to its significant customers for more than 10+ years.</div>
                                <div className="heading5">Contact our SEO experts for straightforward, quantifiable and top tier website streamlining administrations that help you turning into the pioneer of your industry. 
                                </div>
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
                            <h2 className="heading2 text-center">SEO Agency</h2>
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
                        <Col >
                            <div className="leadtxt">
                                <h2>Advanced SEO Services To Get Better Ranking</h2>
                            </div>
                            <div className="leadsubtxt">
                            With powerful and demonstrated strategies especially focused to achieve your clients, our White Hat techniques guarantee that your site is showing signs of improvement naturally as time passes, which is why we are known to be the providers of best SEO Services in London,Birmingham and many areas of United Kingdom. We focus on most recent Google  updates and following every one of their rules to ensure that whatever we are doing is according to Google's rules. 
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
                            <h2 className="heading2 text-center">We Offers Advanced SEO Services</h2>
                            <div className="heading5 text-center"><u>Website SEO company</u> focus on most recent Google calculation updates and following every one of their rules to ensure that whatever we are doing is according to Google's rules.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Local SEO</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> ECommerce SEO</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Bing SEO Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Keywords Research</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Competitive Analysis</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Website Audit And Optimization</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> Analytics Research</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eight"><FontAwesomeIcon icon={faCircleDot} /> Traffic Generation</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ninth"><FontAwesomeIcon icon={faCircleDot} /> Content Marketing</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tenth"><FontAwesomeIcon icon={faCircleDot} /> Technical SEO</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eleventh"><FontAwesomeIcon icon={faCircleDot} /> Reporting</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="twelvth"><FontAwesomeIcon icon={faCircleDot} /> Search Engine Penalty Recovery</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={localSeo} alt="Local SEO" className="reasons-content-icon" />
                                            <h3 className="heading3">Local SEO</h3>
                                            <p className="paragraph">Our local <u>SEO Expert</u> help you positioning your business on top position of Google Local search result inside your targeted area.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={ecommerceSeo} alt="ECommerce SEO" className="reasons-content-icon" />
                                            <h3 className="heading3">ECommerce SEO</h3>
                                            <p className="paragraph">Our web based business SEO expert aides your web based business locales ranking contract on stock and nonexclusive item related pursuit queries.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={bingSeo} alt="Bing SEO" className="reasons-content-icon" />
                                            <h3 className="heading3">Bing SEO Services</h3>
                                            <p className="paragraph">This is no shrouded reality that Bing is second biggest search engine after Google and we can get a large number of guests from Bing too.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={keywardResearch} alt="Keywords Research" className="reasons-content-icon" />
                                            <h3 className="heading3">Keywords Research</h3>
                                            <p className="paragraph">Utilizing the correct keywords is the way to a fruitful and Best Organic SEO campaign as it is the intensity of these keywords that drives your search positioning. We use grouped online tools to look inclining keywords that are probably going to take your website to the top with the help of <u>On page seo</u>. We ensure that these are lined up with the most recent Google updates so traffic comes streaming.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={competitiveAnalysis} alt="Competitive Analysis" className="reasons-content-icon" />
                                            <h3 className="heading3">Competitive Analysis</h3>
                                            <p className="paragraph">Competitive analysis is part of <u>Off page seo services</u> which helps to imperative to comprehend the qualities and shortcomings of online competitors and utilizing them as opportunities. Our digital marketing experts lead an On page and Off page SEO examination of the keywords utilized by contenders and help you pick the ones that beat them to remain ahead.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={auditOptimization} alt="Website Audit And Optimization" className="reasons-content-icon" />
                                            <h3 className="heading3">Website Audit And Optimization</h3>
                                            <p className="paragraph">Search engine optimization audits and optimization are basic for keeping up the online positioning of the site. IosAndWeb is leading in <u>Digital marketing agency</u> and We help you distinguish the flaws that can bring down the positioning of your sites and set them right. We unite the methodologies of Link building services, SEO labeling, content improvement, and more to yield online accomplishment for your website.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="reasons-tab-content">
                                            <img src={analyticsResearch} alt="Analytics Research" className="reasons-content-icon" />
                                            <h3 className="heading3">Analytics Research</h3>
                                            <p className="paragraph">Search engine optimization services are not limited to bringing traffic on your site but rather includes its investigation as well. We have the ability in Google Analytics, which empowers us to consider all the basic measurements identified with the searches, guests, and trends. In view of the precise analytics research, we make and execute successful digital systems to build traffic and conversions. We recommend you to know more about <a href="/blog/introduction-to-google-analytics-4"><b>Google Analytics 4</b></a>.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eight">
                                        <div className="reasons-tab-content">
                                            <img src={trafficGeneration} alt="Traffic Generation" className="reasons-content-icon" />
                                            <h3 className="heading3">Traffic Generation</h3>
                                            <p className="paragraph">Online traffic generation is an unpredictable procedure that relies on an assortment of channels. Our SEO experts have the expertise to mix an assortment of advertising tools to produce high traffic for your site. These incorporate social media life, PR and branding, multimedia SEO, mobile SEO, local and worldwide search Optimization, and many more.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ninth">
                                        <div className="reasons-tab-content">
                                            <img src={contentMarketing} alt="Content Marketing" className="reasons-content-icon" />
                                            <h3 className="heading3">Content Marketing</h3>
                                            <p className="paragraph">High-quality, one of a kind content has the ability to get your site the top search rankings. At IosAndWeb Technologies <u>Internet marketing company</u> we convey start to finish services, directly from serving quality content to upgrading it and marketing it. We have proficient content writers who group with the SEO specialists to convey rich content that lifts your rankings just as engages your clients.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tenth">
                                        <div className="reasons-tab-content">
                                            <img src={technicalSeo} alt="Technical SEO" className="reasons-content-icon" />
                                            <h3 className="heading3">Technical SEO</h3>
                                            <p className="paragraph">Technical SEO takes regular Search Engine Optimization a step higher as it expects to improve creeping and content indexing. We expand propelled specialized SEO support and services that help the improvement group for the execution of fixes. These services spread creep analysis, technical duplication, copy content, page speed, structured information, picture Optimization, error pages, and <u>Backlinks creation services</u> or more.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eleventh">
                                        <div className="reasons-tab-content">
                                            <img src={reporting} alt="Reporting" className="reasons-content-icon" />
                                            <h3 className="heading3">Reporting</h3>
                                            <p className="paragraph">The adventure of SEO campaigns goes beyond traffic generation, client engagement, and analysis. Great <u>Advertisement company near me</u> incorporate reporting as well. Our SEO group offers interpretable reports to the customers with the goal that they can check the advantages of the campaign. We likewise give conference services to help you in changing over these measurements into unmistakable results for the business.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="twelvth">
                                        <div className="reasons-tab-content">
                                            <img src={penaltyRecoery} alt="Penalty Recovery" className="reasons-content-icon" />
                                            <h3 className="heading3">Search Engine Penalty Recovery</h3>
                                            <p className="paragraph">Search engine penalty can be a major issue for your site as it can harm your online perceivability to an impressive extent. We stretch out help to manage a wide range of circumstances to recover pages that have been reasonably or basically penalized. We gave the imperative <u>On page seo services</u> and build up backend subsequent follow-ups to keep your site ready for action.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

             {/* FAQ section */}
             <div className="faq-panel seo-service-faq section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What does SEO stand for? </Accordion.Header>
                                        <Accordion.Body>
                                            <p>SEO stands for “Search Engine Optimization”. SEO is a technique to increase the visibility of the website on the Search engines. SEO will help to improve the website ranking and you will get more and relevant users/customers on a website.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is On-page SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>On-page SEO refers to strategies used on or inside a page to help it in positioning higher ranking in the Search engine. On-site SEO optimization will improve the Search engine and User experience. If any website on-page SEO will be strong. Google will give priority to your website.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is Off-page SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Off-page SEO refers to strategies used outside the website. In this, we link the website with reputed, relevant and high authority websites. Off-site customization will help to increase the authority that can boost the ranking on Search engines.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What is a “Search Engine Friendly” Design?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Web design is the most important factor in the success of any business. According to today's era, almost 60% to 70% of users using the internet on mobile. Google algorithm also recommends designing the website responsiveness.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>When should I begin seeing improvements in my Ranking?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Improvements can be seen after a few days, weeks or even months. There are many factors which we need to research before starting SEO such as the current website audit report. Every website's result is different. According to the website, niche keywords competition can give us an idea of estimated time to deliver the ranking.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>How to select the keywords for SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>First of all, we need to understand the service/product of the website and requirements which one country targets to get ranking on the search engines. There are many tools help us to get effective metrics for finalizing the keywords, check competition, monthly searches, etc.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Why choose IosAndWeb Technologies?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>IosAndWeb- As a digital marketing agency, we strive to understand our client's business goals first and then all decisions are made with those goals in mind.</p>
                                            <p>Because:</p>
                                            <ul>
                                                <li>We Value In tegrity</li>
                                                <li>We Know SEO</li>
                                                <li>We Quantify Our Success</li>
                                                <li>We Deliver On Time</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Can smart SEO give me the result I need?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our past work portfolio speaks itself. Our strong experience to deliver a good ranking as per the commitment. We work hard for all of our clients to make sure you can get what you are looking for. So, yes we will get the results that you need!</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                               
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header>How many types of SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>There are three types of SEO. White hat, Grey hat, and Black hat SEO. We are working in the White hat SEO, in this method we follow all the policies of the Search engine to website perform better. Both Grey and Black hat SEO are against Search engine. People use this technique for any event, for example, someone wants to target any festival to rank the website for a short time.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header>Which tools required for SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>There are a lot of tools for SEO of the website, which tells us about the experience between website, search engine and provides the report of user experience.</p>
                                            <p>Following mentioned the required tools for SEO:</p>
                                            <p><b>Keyword planner</b> for finalizing the keywords, check competition, monthly searches, etc.</p>
                                            <p><b>Google Search Console:</b> It provides the complete experience between website and search engine like Indexing issues, overview performance of the website, coverage issues, etc.</p>
                                            <p><b>Google Analytics:</b> It helps us to get a report of the experience between website and visitors. For example Number of users visit on the website, sessions, new users, conversion goal and many more matrices can be tracked with this tool.</p>
                                            <p><b>SEO screaming frog:</b> These tools tell us all technical issues with the website in detail such as On-page SEO factors, response code errors, development, and design issues.</p>
                                            <p><b>Google page insights:</b> It helps us to tell all development and design issues to improve the website loading time.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header>What is the keyword in SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Keywords are thoughts and subjects that define what your website's content is about. As far as SEO, they're the words and expressions that searchers go into Google, likewise called “Search Term”.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="12">
                                        <Accordion.Header>Who will be working on my website?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our experts are highly skilled and they will do all work related to the SEO or ORM- Online reputation management. If your website requires design changes, we will assist you with our qualified in-house Web Designers.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header>When do I receive reports?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We are reporting every week. In this report, we provide two types of results.</p>
                                            <p>a) Google search console: Track the experience between website and search engine.</p>
                                            <p>b) Google analytics: In this report, we track the experience between website and user.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="14">
                                        <Accordion.Header>Why do I need SEO for Website?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Everybody wants to rank the site on the first page of the Search engine yet it is difficult without Strategy. IosAndWeb Technologies help you to increase website visibility and rank better in the search engine organically.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="15">
                                        <Accordion.Header>What kind of research or audit before implementing the SEO?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We will understand your business requirements. What service or product you want to promote? What are the specific locations?</p>
                                            <ul>
                                                <li>We will research the whole targeted demographics.</li>
                                                <li>Complete SEO audit of your website.</li>
                                                <li>Finalize all development/designing issues to improve search engine and user experience.</li>
                                                <li>Create a weekly and monthly calendar of SEO working factors.</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </div>
                            </Accordion>
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
                            <h2 className="heading2">Our Value Preposition</h2>
                            <div className="heading5">IosAndWeb is known as top SEO agency and SEO is the center of digital marketing technique as it goes far in upgrading the online presence of your business. It attempts to improve your site and take it up on Google rankings with the goal that you become searchable in spite of colossal competition. A sound digital procedure tries to boost sales and in the meantime, limit customer procurement cost. </div>
                            <div className="heading5">As the leading Organic SEO Company in London,Birmingham and many areas of United Kingdom, we bring a total scope of <b>Digital marketing expert</b> for your business. Our point of view goes beyond online marketing for your business as we have confidence in developing brands. Improve your rankings in google organically, we optimize to improve your website SERP. Be seen by customers who are searching for your product/offerings. We ensure that your business site makes it to the primary page of Google by utilizing all the attempted and tried SEO techniques.</div>

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

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services-in-birmingham">    
                                            <img src={birmingham} className="services-bottom-front-image" alt="Birmingham" />
                                            <h4 className="heading4">Seo Services in Birmingham</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services-in-peterborough">    
                                            <img src={peterborough} className="services-bottom-front-image" alt="peterborough" />
                                            <h4 className="heading4">Seo Services in Peterborough</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services-in-sheffield">    
                                            <img src={sheffield} className="services-bottom-front-image" alt="Sheffield" />
                                            <h4 className="heading4">Seo Services in Sheffield</h4>
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

export default SEOService;