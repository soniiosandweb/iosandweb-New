import { useLocation } from "react-router-dom";
import SEO from "../../../../components/SEO"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import './style.css';
import NumbersCards from "../../../../components/NumbersCards";
import ContactForm from "../../../../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import GetStarted from '../../../../components/GetStarted';

const seoRanking = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/seo-ranking.webp`;

// Maintain transparency images
const siteStructure = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/site-structure.png`;
const strongContent = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/strong-content.png`;
const backlinks = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/backlink.png`;
const advertisement = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/advertisement.png`;
const localSeo = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/local-seo.png`;
const socialEngagement = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/social-engagement.png`;

// Ranking images
const keywordFriendly = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/keyword-friendly.webp`;
const keywordAnalysis = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/keyword-analysis.webp`;
const userExperience = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/user-experience.webp`;
const highQuality = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/high-quality.webp`;
const architecture = `${process.env.REACT_APP_API_URL}/assests/images/services/seo-service-birmingham/architecture.webp`;

// Final words images
const pageSpeed = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/page-speed.png`;
const proofreading = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/proofreading.png`;
const b2b = `${process.env.REACT_APP_API_URL}/assests/images/services/digital-marketing/b2b.png`;


function SEOServiceBirmingham(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"SEO Services in Birmingham at affordable prices | Contact Now"}
                description={"IosAndWeb Technologies is the best Digital Marketing Agency Providing SEO services in Birmingham by certified experts .Contact us for quote."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* SEO Birmingham Banner */}
            <div className="seo-service-birmingham-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="header-wrapper full-width">
                                <h1>SEO Services In <span className="text-highlight">Birmingham</span></h1>
                                <div className="heading5"><b>IosAndWeb Technologies</b> has won many awards for its SEO services in Birmingham. We have experience of so many years in this industry and gain huge success in the field of SEO. We very well know how to get your website at Number 1 position on Google. Our company uses ethical strategies and works in-house.</div>
                                <div className="heading5">From the past 6 years, our <b><i>SEO expert in Birmingham</i></b> have been serving thousands of clients and satisfying them in their own respective fields. We have successfully navigated the <a href="/digital-marketing-services"><b>digital marketing</b></a> and SEO space in several different countries. </div>
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
                            <h2 className="heading2 text-center">How are we different in SEO Services In Birmingham?</h2>
                            <div className="heading5 text-center">The digital world has changed a lot. But there are three things that <a href="/"><b>IosAndWeb</b></a> has kept the same. We assign a dedicated project manager to our clients in order to guide them in various aspects. We build short term contracts with our clients in order to allow our clients to choose the best further. </div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Get SEO service section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col >
                            <div className="leadtxt">
                                <h2>Get SEO Services in Birmingham @ IosAndWeb Technologies</h2>
                            </div>
                            <div className="leadsubtxt">
                                Do you understand what generating money for an online store is most crucial? An online eCommerce business develops to attract customers who use the internet to purchase Link Building with Affordable Seo in Birmingham. But how can you boost an eCommerce site's rankings and conversion rate? You can draw in more clients and increase store traffic by employing realistic techniques.
                            </div>
                            <div className="leadsubtxt">
                                Because the store is accessible online, search engine optimization is essential. This will guarantee a favourable evaluation from the search engines and some targeted visitors. As a company, your sole focus should be on conversion with the help of Seo Expert in Birmingham. 
                            </div>
                            <div className="leadsubtxt">
                                The high level of competition makes it tough to rank an eCommerce website. For retailers to sell their goods online, there are numerous eCommerce systems, including BigCommerce, Shopify, and WooCommerce. This post will discuss how to drive exposure to your eCommerce store. So let's dive in and explore. In the following segment, you will learn the importance of ranking in the SEO market. 
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>

            {/* Maintain Transparency */}
            <div className="maintain-transparency-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center heading2">We maintain transparency in Digital marketing services in Birmingham</h2>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey={"first"}>
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey={"first"}><FontAwesomeIcon icon={faCircleDot} /> Better site structure</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"second"}><FontAwesomeIcon icon={faCircleDot} /> Strong content</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"third"}><FontAwesomeIcon icon={faCircleDot} /> Relevant backlinks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"fourth"}><FontAwesomeIcon icon={faCircleDot} /> Advertisement company near me in Birmingham for Increased Usability</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"fifth"}><FontAwesomeIcon icon={faCircleDot} /> Targeted Local SEO</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"sixth"}><FontAwesomeIcon icon={faCircleDot} /> More social engagement</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey={"first"}>
                                        <div className="reasons-tab-content">
                                            <img src={siteStructure} alt="Site structure" className="reasons-content-icon" />
                                            <h3 className="heading3">Better site structure</h3>
                                            <p className="paragraph">For Google's ranking algorithm, your site structure is very important. It is seen that if people won't find the things they are looking for on Google, they may have stopped using Google. Experts of our company find out top industries searched on Google and help the clients to organize their website in such a way that Google finds their website at the top of the search engines with help of our Digital marketing expert in Birmingham.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"second"}>
                                        <div className="reasons-tab-content">
                                            <img src={strongContent} alt="Strong content" className="reasons-content-icon" />
                                            <h3 className="heading3">Strong content</h3>
                                            <p className="paragraph">Content is the key element of every website to build a strong domain that Google is looking for. You need to put relevant content on your website. Your website should have answers to the questions that Google is getting. The expert team of IosAndWeb works with our clients to understand their business so that they can craft relevant and accurate content for the website which helps to grow traffic on the site.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"third"}>
                                        <div className="reasons-tab-content">
                                            <img src={backlinks} alt="Relevant backlinks" className="reasons-content-icon" />
                                            <h3 className="heading3">Relevant backlinks</h3>
                                            <p className="paragraph">Our company is an expert in building new relationships. We have a broad network of relationships with different sites that allow domain authority. When we link these sites with your website then your website becomes more presentable on the web. <b><u>Link building services in birmingham</u></b> is one of the key factors in <a href="/blog/what-is-googles-new-seo-update/"><b>Google ranking algorithms.</b></a></p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"fourth"}>
                                        <div className="reasons-tab-content">
                                            <img src={advertisement} alt="Advertisement" className="reasons-content-icon" />
                                            <h3 className="heading3">Advertisement company near me in Birmingham for Increased Usability</h3>
                                            <p className="paragraph">There are a number of factors that affect Google placement of your website such as On page seo in Birmingham and Off page seo in Birmingham. These factors include: page speed, page size, number of invisible codes and the ability of your website renders across different devices. With detailed analysis, our expert team suggests different methods that can help you to identify where there is a need to improve your website in the short-term as well as long-term. </p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"fifth"}>
                                        <div className="reasons-tab-content">
                                            <img src={localSeo} alt="Targeted Local SEO" className="reasons-content-icon" />
                                            <h3 className="heading3">Targeted Local SEO</h3>
                                            <p className="paragraph">Google understands the importance of navigational searches. There are a number of searches that depend on local results. IosAndWeb Technologies provides the best SEO services in Birmingham which understands the importance of local SEO. It doesn't matter whether your business is an <a href="https://en.wikipedia.org/wiki/Multinational_corporation" target="_blank" rel="noreferrer"><b>MNC</b></a>, restaurant or a salon, IosAndWeb knows how to keep your business SEO hyper-focused to nearby searches. As a result of this, there is no wastage of effort and money.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"sixth"}>
                                        <div className="reasons-tab-content">
                                            <img src={socialEngagement} alt="Social Engagement" className="reasons-content-icon" />
                                            <h3 className="heading3">More social engagement</h3>
                                            <p className="paragraph">Social networking sites like Facebook, Twitter, LinkedIn, Instagram have a direct effect on the visibility of your content. It also indirectly affects your Google search ranking. Our company provides SEO services in Birmingham and has had huge success in Social media marketing for over a decade. We are ranked at the top from most of our competitors so choosing IosAndWeb is an ideal option for Digital marketing agency in Birmingham.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Ranking in SEO section */}
            <div className="ranking-seo-section section-padding background-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} xl={7}>
                            <h2 className="heading2">Significance of Ranking in Seo marketing</h2>
                            <p className="paragraph">Do you want people visiting your website to search for your online store? To do that, you must rank your e-commerce website on Google's first results page. The top three organic positions on Google's first page, which received 58.4% of all user clicks, are significant for websites to rank. You can take assistance from an expert and Professional Seo Services in Birmingham, who can guide you and optimise your business workings better than ever. </p>
                            <p className="paragraph">According to the study, websites that appear on page one have an overall click-through rate of 36.4 per cent, websites that appear on page two get a CTR of 12.5 per cent, and websites that appear on page three get a CTR of 9.5 per cent. Therefore, make sure the people you hire to help you create a custom eCommerce store adhere to Birmingham's eCommerce website page SEO.</p>
                            <p className="paragraph">To look at it another way, your eCommerce website will lose out on all the extra revenue and clicks if it is not optimized for search engines. You should want to be the top eCommerce store, but you are still safe even if you are between the second and tenth. Now that you know how critical first-page positions are, read on for some actions you can do to make sure your eCommerce website shows up on Google's initial search results page with the Best Seo Company in Birmingham.</p>
                        </Col>
                        <Col lg={6} xl={5}>
                            <img src={seoRanking} alt="Ranking in SEO" className="responsive-img" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Leading ecommerce section */}
            <div className="leading-ecommerce-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Leading E-commerce SEO Techniques to Boost Your Online Store's Ranking</h2>
                        </Col>
                    </Row>
                    <Row className="align-items-center row-reverse-mobile mt-5">
                        <Col lg={6}>
                            <img src={keywordFriendly} alt="Keyword" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h3 className="heading3">Keep your listings and website keyword-friendly.</h3>
                            <p className="paragraph">The first step is optimizing your website pages using highly targeted keywords. Make sure your products and websites are optimized for keywords your intended audience might use before getting too technical with your website. Furthermore, the keywords you use should be those that your industry uses to generate organic traffic from search engine results pages with Seo Link Building. To find some valuable keywords, use the Google Adwords keyword tool with the Best Seo Agency in Birmingham like IosAndWeb.</p>
                            <p className="paragraph">Create a plan to increase the number of keywords you focus on your products and web pages regardless of the technology you use. Include keywords in product titles, category pages, FAQs, and product descriptions. You may also give your eCommerce development business a list of keywords to include on the product page. To avoid losing out on keyword potential when developing product pages, don't go overboard but keep it in mind.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center mt-3">
                        <Col lg={6}>
                            <h3 className="heading3">Perform a keyword competitor analysis</h3>
                            <p className="paragraph">Making what search terms do your rivals value and rank for? When evaluating competitors, take into account any potential websites that are promoting your goods or services. These websites might present a competitive advantage or a venue where you can contribute content in exchange for a brand mention. Unbelievably, keyword research saves you time by making half the effort.</p>
                        </Col>
                        <Col lg={6}>
                            <img src={keywordAnalysis} alt="Keyword Analysis" className="responsive-img" />
                        </Col>
                    </Row>
                    <Row className="align-items-center row-reverse-mobile mt-3">
                        <Col lg={6}>
                            <img src={userExperience} alt="User Experience" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h3 className="heading3">Get a better user experience with your product page</h3>
                            <p className="paragraph">You could wonder if this is an objective eCommerce SEO page speed optimization in Birmingham. It is, indeed. Google has enhanced its search in recent years to showcase the best content near the top of its results, and e-commerce is no exception. To follow Google's E-A-T (Expertise, Authenticity, and Trustworthiness) requirements, always ask your eCommerce development business to do so.</p>
                            <ul>
                                <li>Additionally, you will need to submit numerous photos of the products with various descriptions, sizes, and colours for the <b>Seo Optimisation.</b></li>
                                <li>Description of the product's and the materials' quality with the help of <b>seo page optimise services in Birmingham.</b></li>
                                <li>It ought to have evaluations, ratings, and quotes from actual customers.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="align-items-center mt-3">
                        <Col lg={6}>
                            <h3 className="heading3">Better to use high-quality snippets for enhanced data marking up</h3>
                            <p className="paragraph">It's time to update the eCommerce website's technical features after we enhance the product content. Additionally, it's crucial to integrate organised data markup into your online business with the aid of experts. In other words, this markup informs customers about your products in greater detail before they reach your website. Rich Snippets, a form of Google search feature well-known in the e-commerce sector, also benefits from its ranking with Local Seo Services in Birmingham. Star ratings & feedback counts are significant in SEO pages to optimise services for search results, which increases clicks.</p>
                            <p className="paragraph">In case you are not well aware of the creation of data makeup for an efficient and good e-commerce website. There are actually two ways to include structured data in your eCommerce products with Seo Specialist in Birmingham. One is that you can manually add the code to the website. The second is to include via the app plugin. The markup plugin will add to your products after installation. There are many kinds of schema that can benefit our e-commerce site greatly and aid in Seo Services in Birmingham. Following are a handful of them:</p>
                            <ul>
                                <li>Schema for Product Reviews and Ratings</li>
                                <li>Pricing Model</li>
                                <li>Sitelinks, BreadcrumbList, Search Box, and Schema</li>
                            </ul>
                        </Col>
                        <Col lg={6}>
                            <img src={highQuality} className="responsive-img" alt="High Quality" />
                        </Col>
                    </Row>
                    <Row className="align-items-center row-reverse-mobile mt-3">
                        <Col lg={6}>
                            <img src={architecture} alt="Architecture" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h3 className="heading3">Streamline the site architecture</h3>
                            <p className="paragraph">Every business owner creates a distinctive e-commerce site, as we are aware. Additionally, on average, people visit a website for 10 to 20 seconds before departing. Suppose customers are not attracted to your business within that time frame because your categories are disorganized. For the navigation and structure of a website, SEO is essential. It will enhance SEO and user experience for Seo Company in Birmingham.</p>
                            <p className="paragraph">Using breadcrumbs to enhance navigation is the first step. Users can see where they are in a site's structure using breadcrumb navigation, a sort of site navigation, without having to search the URL. The second is to offer URLs with a clear design. You should try to create a URL structure that is as clear as possible with the help of Link Building Services in Birmingham. By being logical and meaningful, clean URLs improve accessibility and usability for your visitors and Google.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Get Started section */}
            <GetStarted
                title={"Let's Start Building Web Solutions To Help Achieve Your Business Goals"}
                buttonText={"Get Started"}
                link={"/contact-us"}
            />

            {/* Final Words */}
            <div className="final-words-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Final Words</h2>
                            <div className="heading5">There are several free and commercial SEO plugins for Magento 2 websites available. They come with answers for the majority of SEO problems and significantly reduce your workload with only a few clicks with the help of a Seo Agency in Birmingham. Choosing the appropriate SEO plugin for your Magento 2 stores is essential. You should consider the plugin's features, response time for support requests, and money-back guarantee. Providing reviews from other store owners will also help you determine if the plugin is what you're looking for.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-page-speed-optimization-services">
                                            <img src={pageSpeed} alt="SEO Page Speed" className="services-bottom-front-image" />
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

export default SEOServiceBirmingham