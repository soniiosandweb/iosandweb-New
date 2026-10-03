import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../../components/SEO";
import NumbersCards from "../../../../components/NumbersCards";
import ContactForm from "../../../../components/ContactForm";
import GetStarted from "../../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Reasons section images
const keywordSearch = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/digital-marketing-bristol/keyword.png`;
const internalLink = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/digital-marketing-bristol/internal-link.png`;
const anchorText = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/digital-marketing-bristol/anchor.png`;
const metaDescription = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/digital-marketing-bristol/meta-description.png`;
const titleConcise = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/digital-marketing-bristol/title.png`;

// Final Reflection images
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;

function DigitalMarketingBristol(){

    const location = useLocation();

    return(
        <>

            <SEO
                title={"Digital Marketing Services in Bristol - IosAndWeb Technologies"}
                description={"Here explore Advanced Information Regarding Business Market. Useful Tips To Promote Your Business With Digital Marketing Services in Bristol."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Digital Marketing Banner */}
            <div className="digital-marketing-bristol-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>Digital Marketing Services in <span className="text-highlight">Bristol</span></h1>
                                <div className="heading5">A website is optimised for search results through search engine optimization to elevate the footfall on websites. It's an online marketing strategy that increases the visibility of your website. Your chances of grabbing the attention of the clients to buy your goods or use your services increase with the prominence of your website.So how can it work? It can work only with <b>Digital marketing services in Bristol</b>
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
                            <h2 className="heading2 text-center">Digital Marketing Services in Bristol</h2>
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
                                <h2>Why Should We Give Digital marketing company in Bristol Any Thought?</h2>
                            </div>
                            <div className="leadsubtxt">
                                Bots are basically taken by essential web search tools like Google and Bing to slither sites. These bots visit <b>website SEO company near me,</b> collecting the data on each page and then adding it to an index. Then, algorithms are developed to keep a check of the index and choose which sites should display in each search query while keeping in mind other points and criteria.
                            </div>
                            <div className="leadsubtxt">
                                In the first place, it entitles you to widen your crowd and draw for all the expected business proposals. These clients could be those who reside in unapproachable areas that are not much approachable for basic marketing strategies.
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
                            <h2 className="heading2 text-center">Top Most Best Practices to Boost the Researchability for Your Web Page</h2>
                            <div className="heading5 text-center">The significance of SEO is not new as the key point is to list down your own ecommerce website to make intense engagement with the help of <i>Digital marketing agency in Bristol</i>. Instead of just bringing potential buyers to your website's homepage, which probably need to have what they want, it draws them to your site and guides them directly to the product pages they are looking for.There are countless SEO best practices to follow, but these will help you stay on track and ensure that your webpage looks on the top of the search engine results.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Do A Proper Accurate Keyword Research</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Internally link is part of SEO services in Bristol</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Make good use of anchor text</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Improve the meta description by SEO services in Bristol</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Keep your titles concise and precise</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={keywordSearch} alt="Keyword Research" className="reasons-content-icon" />
                                            <h3 className="heading3">Do A Proper Accurate Keyword Research</h3>
                                            <p className="paragraph">To make your ecommerce website more footfall and approachable you better make a comprehensive keyword research. This <a href="https://www.merriam-webster.com/dictionary/entail" target="_blank" rel="noreferrer">entails</a> learning the keywords and phrases that potential customers use while looking for products similar to yours. This research is need in brief because user come with right and accurate usage of keywords by <b><u>SEO specialist in Bristol.</u></b> When you have a list of keywords, you can involve them in your content, meta tags titles and many more.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={internalLink} alt="Internally link" className="reasons-content-icon" />
                                            <h3 className="heading3">Internally link is part of SEO services in Bristol</h3>
                                            <p className="paragraph">By including links, you improve Google's understanding of your website and give your customers a simple way to access similar products. The following are a a few of recommendations for appropriate internal linking:</p>
                                            <ul>
                                                <li>Include links on the homepage to each of your website's other pages.</li>
                                                <li>Have links on your website that direct people to other pertinent areas, such as related products or recently added products.</li>
                                                <li>Make clear, linkable titles for your content, like “Men's Shoes.”</li>
                                                <li>It should include links with keyword phrases (“Women's Running Shoes”)</li>
                                            </ul>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={anchorText} alt="Anchor text" className="reasons-content-icon" />
                                            <h3 className="heading3">Make good use of anchor text</h3>
                                            <p className="paragraph">The visible and clickable text in a hyperlink is called anchor text, and it explains to consumers and search engines where a link will lead them when they click it. In terms of SEO, anchor text is crucial because it informs search engines about your website's subject matter, and Additionally, it may assist you in ranking for particular keywords.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={metaDescription} alt="Meta description" className="reasons-content-icon" />
                                            <h3 className="heading3">Improve the meta description by SEO services in Bristol</h3>
                                            <p className="paragraph">It must optimize meta descriptions if you want your eCommerce site to appear in search engine results pages. The summaries that show beneath each result on a SERP are known as meta descriptions. They provide searchers with a preview of what they will find when they click through to your site. Your page will probably rank appropriate with correctly optimised meta descriptions, and it will also be unlikely that anyone will ever click on it.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={titleConcise} alt="Titles concise" className="reasons-content-icon" />
                                            <h3 className="heading3">Keep your titles concise and precise</h3>
                                            <p className="paragraph">It's no secret that SEO and eCommerce work together. Ensure your eCommerce store is optimised for web search tools in case you maintain that it should find true success. However, what does that include? Well, one of the most important aspects of search engine optimization is ensuring that your titles are short so they appear in Google search results and a user's social media feed. Keep phrases like “Clothes Store: Everything You Need in One Place” in your headings! Huge Assortment of Clothing Store Deals with Low Prices Today Only! for optimal results.</p>
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
                            <h2 className="heading2">In conclusion</h2>
                            <div className="heading5">ECommerce websites need to be search engine optimised. This may result in improved rankings and boosted visitors, which boosts revenues with digital marketing experts in Bristol like IosandWeb, a one-roof solution for all digital services. We are an expert digital marketing service in Bristol.</div>
                            <div className="heading5">No one better to turn to if you want the entire package because we don't skip a beat and look forward to search marketing in general. Our unique approach is detail oriented, allowing us to give great and amazing results for all your SEO and requirements of digital marketing — substantially more than looking for a marketing company. Here we are! While working transparently with you or in a different white-label Search engine optimization affiliate for some sort of strategic agency, You will experience working with experts in all sorts of digital marketing services in Bristol. We are a one-stop with a solo comprehensive goals that is to assist you.</div>

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

export default DigitalMarketingBristol;