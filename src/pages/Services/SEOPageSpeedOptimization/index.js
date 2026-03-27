import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Reasons section images
const contentDelivery = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/content-delivery-network.png`;
const migrratingHost = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/migrating-new-host.png`;
const minimizeFileSize = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/minimize-file-size.png`;
const reducePlugins = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/reduce-plugins.png`;
const avoidJs = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/avoid-js.png`;
const compression = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/compression.png`;
const reduceRedirects = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/reduce-redirects.png`;
const browserCache = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-page-speed-optimization/browser-cache.png`;

// Final Reflection images
const socialMediaMarketing = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/social-media-marketing.png`;
const SEOIcon = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/seo-icon.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;

function SEOPageSpeedOptimization(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"Get SEO Page Speed Optimization Services | Get Quote"}
                description={"We offer SEO page speed optimization services. Our certified web developer will help you to optimize web page speed. Get SEO audit report."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* SEO page speed optimization Banner */}
            <div className="seo-page-speed-optimization-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>SEO <span className="text-highlight">Page Speed Optimization</span> Services</h1>
                                <div className="heading5">Websites can benefit from <b>seo page speed optimization</b> by reducing load times and increasing performance indicators on desktop and mobile browsers. <u>Website speed optimization</u> time requires work on both the front and back ends of the site. Improving your site's speed allows you to provide a better user experience and adhere more closely to Google's guidelines for page load times. 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-60"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">The seo page speed optimization Is Something We Can Help You With</h2>
                            <div className="heading5 text-center">Your <b><a href="/seo-services">website page seo</a></b> speed doesn't need to be inferior for visitors to get dissatisfied. A website's overall performance data is affected by factors like poor load speed since it can prevent the rendering of some essential sections of the page, thus impacting the user experience. Now that you know what's at stake, you may be asking how to <b>Improve Google page insights speed</b>.</div>

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
                                <h2>Get Help with Page Speed Optimization Services</h2>
                            </div>
                            <div className="leadsubtxt">
                            When you work with IosAndWeb Technologies, we are expertise in <b><u>website speed optimization services</u></b> and your website will load much more quickly. Google offers insights on site speed via a tool, where you'll be assigned a score from 0 (very poor) to 100 (very good), with 85 (very good) being the bare minimum for access to the sites. 
                            </div>
                            <div className="leadsubtxt">
                            According to a Google official, two seconds is the absolute minimum for an e-commerce website to load. Half a second is Google's goal and website speed optimization for seo is one of the leading factor for <b><u>website speed optimization for seo</u></b>. The majority of search engines, not just Google, share this view. Sixty-six percent of users have a two-second threshold for when they expect to see the page they're looking for a load. Most people's patience can only last for two seconds at the most. 
                            </div>
                            <div className="leadsubtxt">
                            If a page doesn't load within three seconds, more than 55 percent of visitors will either leave the site altogether or return later. You risk losing potential customers if your website takes longer than two seconds to load on any device. 
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
                            <h2 className="heading2 text-center">How will IosAndWeb Technologies help you landing page speed optimization?</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Content delivery network</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Migrating to a New Host</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Minimize file size by optimizing pictures</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Reduce plugins</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Avoid using as much JavaScript as possible</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Compression</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> Reduce redirects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eighth"><FontAwesomeIcon icon={faCircleDot} /> Incorporate browser caching</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={contentDelivery} alt="Content delivery network" className="reasons-content-icon" />
                                            <h3 className="heading3">Content delivery network</h3>
                                            <p className="paragraph">Instead of having users send requests to a central server, this network distributes the requested content to users at their specific locations. Because of this outcome, both weight and loading time are reduced. As a bonus, it aids in accelerating load times for websites. IosAndWeb Technologies <b><a href="https://en.wikipedia.org/wiki/Content_delivery_network" target="_blank" rel="noreferrer">content delivery network (CDN)</a></b> will be available at no cost, highly secure, load pages quickly, and cost you less than you'd expect.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={migrratingHost} alt="Migrating to a New Host" className="reasons-content-icon" />
                                            <h3 className="heading3">Migrating to a New Host</h3>
                                            <p className="paragraph">Instead of having multiple users use a single server, we will offer you a Virtual Private Network (VPN). We'll assist you in <u>seo</u> page optimize services by use of a virtual private network (VPN).</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={minimizeFileSize} alt="Minimize file" className="reasons-content-icon" />
                                            <h3 className="heading3">Minimize file size by optimizing pictures</h3>
                                            <p className="paragraph">With the assistance of IosAndWeb Technologies, a <u>website seo speed optimization</u> company you can easily add high-quality photographs to your website. A large image will not positively affect your page's load time. The web pages of your site should use relatively light photos, as suggested by us.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={reducePlugins} alt="Reduce plugins" className="reasons-content-icon" />
                                            <h3 className="heading3">Reduce plugins</h3>
                                            <p className="paragraph">The majority of your visitors likely already know the value of WordPress plugins. We <b><u>website speed development</u></b> agency will supply the necessary resources to ensure the plugins function correctly with your site. Although the plugin may use many resources, it will not speed up the place.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={avoidJs} alt="Avoid JavaScript" className="reasons-content-icon" />
                                            <h3 className="heading3">Avoid using as much JavaScript as possible</h3>
                                            <p className="paragraph">To speed up your site, we Best Seo Agency will assist you in reducing the amount of JavaScript used for things like plugins, which can take a significant amount of time to load because they require many request servers to function. We will assist you in consolidating your items or <b><u>website speed designing</u></b> a complementary set for the nightclub.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={compression} alt="Compression" className="reasons-content-icon" />
                                            <h3 className="heading3">Compression</h3>
                                            <p className="paragraph">If your CSS, HTML, or JavaScript files are over 150 bytes in size, IosAndWeb Technologies your Local Seo Agency can help you compress them. We'll <b><a href="https://en.wikipedia.org/wiki/ZIP_(file_format)" target="_blank" rel="noreferrer">zip</a></b> up the whole thing, so it all comes out once when it's opened. The server's web response time will be sped up as a bonus benefit.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="reasons-tab-content">
                                            <img src={reduceRedirects} alt="Reduce redirects" className="reasons-content-icon" />
                                            <h3 className="heading3">Reduce redirects</h3>
                                            <p className="paragraph">Using Professional Seo Services from IosAndWeb Technologies, you may lessen the number of times your site must reload a page. Your customer won't have to wait too long for HTTP to finish processing their request.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eighth">
                                        <div className="reasons-tab-content">
                                            <img src={browserCache} alt="Incorporate browser caching" className="reasons-content-icon" />
                                            <h3 className="heading3">Incorporate browser caching</h3>
                                            <p className="paragraph">When a website takes advantage of browser caching, the browser saves copies of the site's static files for later use. As a result, your site's visitors won't have to repeatedly retrieve their browser from the server, increasing loading times. Help to check the cache to see if it has an expiration date available from us. With our Seo Specialist assistance in your <u>framework website speed optimization</u>, you can add an expiration date to your cache if one is not already present. To have your content available on search engines for a year is not unreasonable.</p>
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
                            <h2 className="heading2">The IosAndWeb Technologies Is a Success Booster.</h2>
                            <div className="heading5">Increasing the Google website speed optimization as well,  page load times can also be accomplished in many other ways. The specifics of how this is accomplished may change based on the nature of your website, but the basic idea remains unchanged. You'll need to cooperate with us if you want these remedies to affect you. You'll have access to a personal page optimization guru, adjustable speed options tailored to your business's budget and demands, and actionable insights into your site's performance.</div>
                            <div className="heading5">You can save money in the long term by taking advantage of our hourly project rates for seo page speed optimization services. After all, IosAndWeb Technologies the Best Seo Company will not only increase your site's speed but also increase your chances of success.</div>

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

export default SEOPageSpeedOptimization;