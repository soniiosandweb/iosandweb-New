import { useLocation } from "react-router-dom"
import SEO from "../../../../components/SEO";
import { Col, Container, Row } from "react-bootstrap";
import './style.css';
import NumbersCards from "../../../../components/NumbersCards";
import ContactForm from "../../../../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faLink, faTimeline } from "@fortawesome/free-solid-svg-icons";
import GetStarted from "../../../../components/GetStarted";

const inboundTraffic = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/inbound-traffic.webp`;

// SEO Services images
const seoService = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/seo-service.webp`;
const seoService1 = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/seo-service-1.webp`;
const seoService2 = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/seo-service-2.webp`;

// Guideline icons
const businessAccount = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/business-account.png`;
const citation = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/citation.png`;
const localization = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-peterborough/localization.png`;

// summary section images
const pagespeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;

function SEOServicePeterborough(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"SEO Services in Peterborough | Internet Marketing | IosandWeb"}
                description={"Ensure your website rank high with SEO services in Peterborough. We help you to get more and sustain quality leads. Contact our expert Now."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* SEO Peterborough banner */}
            <div className="seo-service-peterborough-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="header-wrapper full-width">
                                <h1>SEO services in <span className="text-highlight">Peterborough</span></h1>
                                <div className="heading5">The very approach for optimizing a website's content (like photographs or videos) for search engine results is known as search engine optimization or SEO. This is especially true when using an affordable SEO services in Peterborough  (SERPs).</div>
                                <div className="heading5">The main advantage of optimizing your website with a SEO company is that it helps you increase your website's high-quality organic traffic. However, optimizing a website for search engines takes time. Therefore, it is a better idea to outsource your website's SEO to a company that specializes in providing SEO services.</div>
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
                            <h2 className="heading2 text-center">Low-cost SEO services in Peterborough Build Brand Awareness</h2>
                            <div className="heading5 text-center">One of the core benefits of Affordable SEO Services in Peterborough is that you can do this for a lower cost. Your potential clients will begin to trust your brand as your website starts to rank higher in search engine results, and they will eventually choose you over your competition.</div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Quality SEO section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt">
                                <h2>Quality SEO Services Will Ensure a Good User Experience</h2>
                            </div>
                            <div className="leadsubtxt">Above all, you want your potential clients to enjoy their experience on your website since it will encourage them to visit it again and again anytime they need services or goods that are similar to your offerings. Google prioritizes user experience as one of the main elements when ranking web pages. To get the most out of Seo Optimisation, you must, however, make sure that your website is mobile-friendly. The majority of Indian SEO businesses also offer responsive website design services to help you enhance your user experience.</div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

            {/* Affordable SEO section */}
            <div className="section-developemnt-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center heading2">Affordable SEO Company in Peterborough Can Help You Stay Ahead of the Competition</h2>
                            <div className="heading5 text-center">The website that ranks top on Google obtains 42% more clicks than the page that ranks second, which gets 11% fewer clicks. It can help you remain ahead of the competition and increase the revenue of your business when you optimize your website with an Affordable SEO Company in Peterborough to rank at the top of SERPs.</div>
                            <div className="heading5 text-center">The top three SEO facts to know are therefore provided in this section.</div>
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
                                    <span className="badge badge-pill bg-light-border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Using Multiple Strategies</h4>
                                        <p className="card-text">A firm can use several strategies, collectively referred to as SEO, to improve its online presence and draw more visitors to its website. Copywriting, online design, blogging, link building, site coding, and other activities are all part of SEO.</p>
                                        <p className="card-text">As SEO has many facets, it may be divided up to fit any organization's budget. Even a start-up business may occasionally afford to create blog entries or use title tags with lots of keywords. This is SEO in action, which is a great option if money is tight.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Simple Approach</h4>
                                        <p className="card-text">Many people talk about SEO as if it were a myth, their achievement being a one-off occurrence that will never happen to you. This is not true in any way. Anyone may benefit from SEO because it is easy to implement.</p>
                                        <p className="card-text">You will comprehend how straightforward the procedures are as you study more about SEO, whether from your research or through other sources. The benefit of SEO services over in-house management is that you obtain expert-level expertise without the time commitment.</p>
                                        <p className="card-text">Giving a fantastic user experience, using keywords, and creating title tags simply require a few minutes of your time.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light-border"><FontAwesomeIcon icon={faCircle} /></span>
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
                                    <span className="badge badge-pill bg-light-border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Using too many keywords in SEO</h4>
                                        <div className="card-text">It used to be that stuffing a page with keywords would improve its SEO. To provide customers with a better experience than your competitors, modern SEO requires examining, evaluating, and interpreting the search terms they use to reach your organization.</div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>

            {/* Inbound traffic section */}
            <div className="inbound-traffic-section section-padding background-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="heading2">Enhancing Inbound Traffic with SEO Services from the Best SEO Services Provider Company</h2>
                            <p className="paragraph">The prime objective of every business is to increase sales and to achieve so, you need to use SEO services to attract more high-quality traffic. Ads may end up being pricey, especially if your firm is just getting off the ground.</p>
                        </Col>
                        <Col lg={6}>
                            <img src={inboundTraffic} alt="Inbound Traffic" className="responsive-img" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Get SEO service section */}
            <div className="get-seo-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Get SEO services in Peterborough | IosAndWeb Technologies</h2>
                            <div className="heading-5 text-center">Presently, we'll get familiar with the numerous sorts of connections and how significant they are for Website optimization. Are you ecstatic and eager to learn? Excellent, that's the mindset we desire! Are you looking for SEO services in Peterborough then stay tuned review our working strategies below:</div>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-5 pt-3">
                        <Col lg={6}>
                            <img src={seoService} alt="SEO Service" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <p className="paragraph">To figure out which site ought to be positioned first and at the highest point of the page, search engines sincerely look at the connections on sites. Only one of the numerous factors web indexes consider while examining a webpage. Through joins, a search engine might decide the nature of a site with the help of <i>Seo Expert in Peterborough</i>.</p>
                            <p className="paragraph">Links are known as “link juice” because they move assets and equity through one page to another. The trustworthiness, topic relevance, value, and authoritativeness of a page are the major metrics used to determine how effective a link is.</p>
                            <p className="paragraph">When Google originally began, a website's quality was previously assessed based on the quantity of links it received. However, many people used it and produced a list of sites that link to their own primary domain with the help of Seo Services in Peterborough.</p>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-3">
                        <Col lg={6}>
                            <p className="paragraph">These people attempted to trick Google into believing that their websites are significant, well-known, and pertinent. You guessed correctly. Consequently, the majority of them received first-page Search Engine Result Page rankings (SERP).</p>
                            <p className="paragraph">Things aren't the same as they used to be nowadays. In February 2011, the Google search engine unveiled Google Panda. The goal was to elevate higher-quality sites to the top of the page and eliminate low-quality sites from it. Search engines now assess a website's quality comprehensively utilising a variety of parameters with the guidance of <i>professional Seo in Peterborough</i>.</p>
                            <p className="paragraph">If you don't already know, the blue-underlined “here” is an external link. You ask, “What is an external link?” Continue reading to learn how we've got you covered.</p>
                            <p className="paragraph">You will know more about the many kinds of links that are found on and off of websites at the end of this article, as well as how to use each one with the Best Seo Company in Peterborough.</p>
                        </Col>
                        <Col lg={6}>
                            <img src={seoService1} alt="SEO Service" className="responsive-img" />
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-3">
                        <Col lg={6}>
                            <img src={seoService2} alt="SEO Service" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <p className="paragraph">Let's look at some further SEO benefits and how inexpensive SEO services in Peterborough can help you grow your business.</p>
                            <p className="paragraph">Small business owners can employ SEO to create speedy, reliable, and user-friendly websites that perform better in search results. For the ultimate customers are attracted, and conversion rates go up.</p>
                            <p className="paragraph">A site that shows up on the principal page of Seo Optimisation results pages (SERPs) is bound to be relied upon by the ultimate users that belong to more than any business entity. Along these lines, successful Search engine optimization upholds the development of your organization's memorability. By assisting you in building a strong online presence and eluding rivals, SEO may help small business owners attract new customers and grow their enterprises.</p>
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* How link works section */}
            <div className="link-works-section background-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">How do links work?</h2>
                            <div className="heading5">The relationship between two objects, or in this example, pages, is called a link. It is the mechanism that links web pages together. It might take the shape of text, an image, or even a video.</div>
                            <div className="heading5">There are two types of links on your website: inner links and outbound connections.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faLink} />
                                <h4 className="heading4">An internal link</h4>
                                <p className="paragraph">Link Building is a process that takes you to another web page within the same domain known as internal links. As they are moved elsewhere on your website page SEO via these links, visitors might stay on your page for longer. As a result, it raises the authority of your website, which helps with ranking.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faTimeline} />
                                <h4 className="heading4">An external link</h4>
                                <p className="paragraph">Backlinks, or what we like to call “outbound links,” are links that take you away from the website you are now on and to another one. This kind of link is typically utilised to give readers access to further explanations created by other site owners with the Seo Company in Peterborough.</p>
                                <p className="paragraph">The most significant ranking factor is thought to be an external link. Why is a third-party link important? External links are thought to be immune to unjust control.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <div className="heading5">A purposeful, data-driven strategy called SEO can improve the effectiveness of your company's digital marketing and its presence online. The upsides of Web optimization can help your organisation, so concentrating on research is advantageous. SEO requires extensive analytical planning. It is a difficult, dynamic practice with the help of Best Seo Agency in Peterborough.</div>
                            <div className="heading5">SEO also develops and changes when new technology does. SEO immediately affects user experience, increases traffic, promotes your business, and engages customers with Seo Agency in  Peterborough. An essential part of your company's best digital marketing is SEO. Iosandweb is a house of all types of digital marketing solutions for their clients. They have strong experience of years in SEO marketing. They offer customised services according to the needs of the clients and help them to boost their business. So reach today and take a free consultation. </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Guideline section */}
            <div className="section-why-choose services-includes-section guideline-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Three Guidelines to Improve Local SEO</h2>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={businessAccount} alt="Business account" className="why-choose-icon" />
                                <h3 className="heading4">Make a Google My Business account and edit it</h3>
                                <p className="paragraph">By doing this, you establish a free online presence. Google Maps will also display your company.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item change-bg">
                                <img src={citation} alt="Citation" className="why-choose-icon" />
                                <h3 className="heading4">Citation constructing</h3>
                                <p className="paragraph">Citations show a business's distinctive online footprint, making it easier for potential customers to learn more about you. Search engines typically employ NAP consistency to pinpoint your location and provide users with accurate results. Make sure internet citation sites and business directories list your website. A thorough citation on citation websites will include the name, address, contact information, and website address of your business. Adding extra details to company directories will raise your search engine ranking.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className="why-choose-col">
                            <div className="why-choose-list-item">
                                <img src={localization} alt="Localization" className="why-choose-icon" />
                                <h3 className="heading4">Website localization should be released and optimized.</h3>
                                <p className="paragraph">If your company only has one location, develop an “About Us” page that emphasizes pertinent, local information. For example, in the event that you run a beauty parlor, you ought to make sense of on your about us page how you give the hair and cosmetics to the town's display. Try to differentiate the content of each page if you have several places.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Get started section */}
            <GetStarted
                title={"Let's Start Building Web Solutions To Help Achieve Your Business Goals"}
                buttonText={"Get Started"}
                link={"/contact-us"}
            />

            {/* Summary section */}
            <div className="summary-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Summary</h2>
                            <div className="heading5">Considering and utilizing these top six services, along with the tactics that go along with them, will greatly improve your SEO and catapult you to the top of search engine result pages. The good news is that your small business need not spend a lot of money to achieve these success criteria. Today, SEO services may be purchased online for in-house use as well as through specialist marketing companies at an inexpensive price. They can be used in many different ways to fit into a marketing budget and benefit from what they offer.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-page-speed-optimization-services">
                                            <img src={pagespeed} alt="SEO Page Speed" className="services-bottom-front-image" />
                                            <h4 className="heading4">SEO Page Speed Optimization</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/english-copywriting-and-proofreading-services">
                                            <img src={proofreading} alt="Proofreading" className="services-bottom-front-image" />
                                            <h4 className="heading4">English Copywriting & Proofreading Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/b2b-lead-generation-campaign-services">
                                            <img src={b2b} alt="B2B" className="services-bottom-front-image" />
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

export default SEOServicePeterborough