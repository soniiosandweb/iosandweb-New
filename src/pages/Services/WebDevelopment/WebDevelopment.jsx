import './WebDevelopment.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO/index.js";
import ReasonToChooseSection from './ReasonToChooseSection/ReasonToChooseSection.jsx';
import { Link, useLocation } from "react-router-dom";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection.jsx";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid.jsx";
import ServicesLists from "./ServicesLists/ServicesLists.jsx";
import MoreThanWebSection from './MoreThanWebSection/MoreThanWebSection.jsx'
import ReadyBuildSection from "./ReadyBuildSection/ReadyBuildSection.jsx";
import HowWeHelp from './howWeHelp/howWeHelp.jsx';
import AnimatedText from "../../../components/AnimatedText/AnimatedText.jsx";
import ConcludingSection from "./ConcludingSection.jsx";
import FAQSection from "../../../components/FAQSection/FAQSection.jsx";
import BusinessGoals from "./BusinessGoals/BusinessGoals.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TabSection from './TabSection/TabSection.jsx';
// import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

// Services includes images
const whytosectionim1 = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment/whytosectionim1.webp`;
const whytosectionim2 = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment/whytosectionim2.webp`;
const whytosectionim3 = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment/whytosectionim3.webp`;
const basePath = `${process.env.REACT_APP_API_URL}/assests/services/webdevlopment`;
const shoppingCart = `${basePath}/close-up-view-shopping-cart-overloaded-with-food-while-background-female-person-choosing-products.webp`;
const locationRoad = `${basePath}/location-symbols-road-with-mountains.webp`;
const medicalBanner = `${basePath}/medical-banner-with-doctor-holding-stethoscope.webp`;
const cleaningWoman = `${basePath}/medium-shot-woman-cleaning-home.webp`;
const onlineShopping = `${basePath}/online-shopping-concept.webp`;
// const rightArrow = `${basePath}/right-arrow.webp`;
const uber = `${basePath}/young-uber-driver-car-interior.webp`
const van = `${basePath}/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van.webp`
const designerWork = `${basePath}/set-designer-work-indoors.webp`;
const chickenFood = `${basePath}/side-view-chicken-meatballs-with-greens-ketchup-plate.webp`;
const webdevBg = `${basePath}/WebDevbg.gif`;
const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;
const bannerArrow = `${basePath}/bannerArrow.webp`;


function WebDevelopment() {

        const goalsRef = useRef(null);
        
            useEffect(() => {
                let ctx;
        
                const initAnimation = () => {
                    ctx = gsap.context(() => {
                    gsap.fromTo(
                        ".goals_boxes",
                        { y: 60, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power3.out",
                            stagger: 0.2,
                            scrollTrigger: {
                                trigger: goalsRef.current,
                                start: "top 75%",
                                toggleActions: "play reverse play reverse",
                            }
                        }
                    );
                    }, goalsRef);
        
                    ScrollTrigger.refresh();
                };
        
                const timeout = setTimeout(initAnimation, 150);
        
                return () => {
                    clearTimeout(timeout);
                    ctx && ctx.revert();
                };
            }, []);

            const industriesData = [
        {
            imgUrl: chickenFood,
            message: "Food & Restaurant",
        },
        {
            imgUrl: shoppingCart,
            message: "ON Demand",
        },
        {
            imgUrl: medicalBanner,
            message: "Healthcare",
        },
        {
            imgUrl:onlineShopping ,
            message: "eCommerce",
        },
        {
            imgUrl: designerWork,
            message: "Real Estate",
        },
        {
            imgUrl: cleaningWoman,
            message: "Home Service",
        },
        {
            imgUrl: van,
            message: "Delivery Logistic",
        },
        {
            imgUrl: uber,
            message: "Taxi & Transportation",
        },
        {
            imgUrl: locationRoad,
            message: "Route Map",
        },
        ];

        const location = useLocation();
        const featuresPoints = [
        {
            title: " ",
            text: "AI-Driven Web Development for the Modern Digital Era",
        },
        {
            title: " ",
            text: "Secure, Scalable Web Development Built on Blockchain Foundations",
        },
        {
            title: " ",
            text: "High-Conversion Web Experiences Powered by Design Excellence"
        }
    ]


    const faqLists = [
        {
            title: "What types of websites do you develop at IosAndWeb Technologies?",
            text: "We build a wide range of websites—from simple business sites and blogs to complex web applications, eCommerce platforms (Magento, WooCommerce, Shopify), and custom CMS solutions. Our team of expert front-end and back-end developers ensures your site meets your unique business needs and goals..",
        },
        {
            title: "Do you provide post-launch support and maintenance?",
            text: "Yes, we offer comprehensive support and maintenance services after your website goes live. From performance monitoring and bug fixing to feature upgrades and security patches, we ensure your website remains up-to-date and efficient.",
        },
        {
            title: "How do you ensure my website is secure?",
            text: "Website security is a top priority for us. We implement SSL, firewalls, data encryption, secure coding practices, and regular updates to protect your website from threats. Our team follows industry-standard security protocols to ensure safe and reliable online experiences.",
        },
        {
            title: "How much does a custom website development project cost?",
            text: "The cost varies depending on your website’s features, complexity, design elements, and technology stack. We provide tailored quotes based on your requirements and offer cost-effective solutions that ensure long-term value and scalability..",
        },
        {
            title: "What platforms and frameworks do you specialize in?",
            text: "Our web development services include PHP frameworks, ASP.NET, WordPress, <a href='/magento-development-services'>Magento</a>, Shopify, Joomla, and Drupal. We choose the most suitable platform based on your project’s complexity, scalability, and customization requirements.",
        }
    ]

const innovativeItems = [
    {
        title: "WordPress",
        text: "reliability",
        icon:bannerArrow
    },
    {
        title: "CSS",
        text: "innovation",
        icon:bannerArrow
    },
    {
        title: "Bootstrap",
        text: "growth",
        icon:bannerArrow
    },
    {
        title: "JavaScript",
        text: "scalability",
        icon:bannerArrow
    },
    {
        title: "Webflow",
        text: "security",
        icon:bannerArrow
    },    {
        title: "PHP",
        text: "dummy",
        icon:bannerArrow
    }
];

    return (
        <>
            <SEO
                title={"Professional Web Development Services | Custom Web Development Services"}
                description={" IosandWeb offers professional web development services, full-stack and custom web solutions by expert website developers for web and app development needs."}
                keywords={"Web development services, Full-stack Development Services, Custom web development services, Professional website developers, Web and app development services"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            {/* Web Development Banner */}
                <div className="portfolio_banner_section section-padding centerAlign webDevlopomentBannerSection ">
                  <div className='bannerImgContanier'>
                  <img src={webdevBg} className="responsiveSectionBannerImage" alt="Portfolio" />
                    <img src={contactBg} alt="Contact Us" className="webDevlopment_banner_bg" />
                 </div>
                     <Container>
                         <Row className="align-items-center">
                             <Col lg={6}>
                                 <div className="heading-wrapper">
                                    <p className="services_banner_subheading">Web Development services</p>
                                     <h1 className="heading_main split">Web Development That Drives Results</h1>
                                     <span className="subHeading">Your vision. Our expertise. Exceptional outcomes.</span>
                                     <div className="heading5">IosAndWeb Technologies transforms ideas into high-performance web solutions. Our full-stack development team builds secure, scalable, and stunning websites that work flawlessly across all devices—from custom web applications to enterprise e-commerce platforms powered by Magento.</div>
                                 </div>
                             </Col>
                             <Col lg={6}>
                               <div></div>
                             </Col>
                         </Row>
                     </Container>
                 </div>

                <FeaturesPointsSection lists={featuresPoints} />
                     

                {/* Services numbers */}
                <div className="services-numbers section-padding black">
                    <Container>
                        <Row>
                            <Col>
                        <div className="What_set_us_part_section">
                            <div className="heading-wrapper"><h1 className="heading_main textaliginCenter">What Sets Us Apart: Full-stack mastery • Enterprise security • Smart architecture • E-commerce specialists • Long-term value • Unwavering support</h1></div>
                            <div className="What_set_us_part_Content">
                                <div className="What_set_us_part_content_rightSide">
                                    <div  className="What_set_us_part_content_rightSide_contantDiv">
                                    <div className="FontSize18">
                                        # Software Development Company
                                    </div>
                                <div className="heading-wrapper ">
                                    <h1 className="heading_main split">Trusted By Leading Brands Worldwide
                                    </h1>
                                </div>
                                </div>

                                    <div className="What_set_us_part_content_liftSide_imgDiv ">
                                        <img src={whytosectionim1} alt="whytosectionim1" />
                                        <img src={whytosectionim2} alt="whytosectionim1" />
                                        <img src={whytosectionim3} alt="whytosectionim1" />

                                    </div>
                                </div>
                                <div className="What_set_us_part_content_liftSide">
                                <div className="What_set_us_part_content_rightSide_imgContanier less-top-padding">
                                    <h1 className="heading_main">10+ Years
                                    </h1>
                                    <h1 className="heading_main">As A Top Web App Development Company
                                    </h1>

                                </div>
                                    <div className="What_set_us_part_content_liftSide_NuberGrid less-top-padding">
                                                                        <NumbersGrid />

                                    </div>

                                </div>
                            </div>
                        </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* what set us oart */}
                <div className="what_set_us_part black section-padding text-white no-top-padding">
                    <Container>
                        <Row className="align-items-center textaliginCenter">
                            <Col>
                                <div className=''>
                                    <h1 ref={goalsRef} className='split'>What We Deliver Through Our Web Development Expertise</h1>
                                    <div>
                                        <span>
                                        Transforming business challenges into digital opportunities with scalable, secure web solutions that drive measurable results.</span>

                                        <span>
                                            Every project we undertake is built on three pillars: Performance, Security, and Scalability. Whether you're launching a startup MVP or transforming enterprise operations, we deliver web solutions engineered for success across every industry
                                        </span>

                                    </div>
                                    <div>
                                        <div className="industries_transform_grid padding">
                                        {industriesData.map((item, i) => (
                                <Link reloadDocument to={item.link} key={i} className="industries_transform_item industries_boxes">
                                    <img src={item.imgUrl} alt={item.imgUrl} className="industries_transform_image" />
                                    <div className="industries_transform_contents">
                                        <div className="industries_transform_left">
                                            <h3 className="industries_transform_title textalignleft">{item.message}</h3>
                                            <p className="industries_transform_text textalignleft">Web Development</p>
                                        </div>
                                        <div className="industries_transform_arrow">
                                            <FontAwesomeIcon icon={faLongArrowRight} />
                                        </div>
                                    </div>
                                </Link>
                                        ))}
                                        </div>

                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* short Banner */}
                <div className="ShortBanner black section-padding no-top-padding">
                    <Container>
                        <Row>
                        <Col>
                        <div className="textaliginCenter   shortBnanerSection">
                            <h1 className="FontSize18 bold">Let's Build Something Extraordinary Together</h1>
                            <h1 className="FontSize25">Join 500+ businesses that have transformed their digital presence with IosAndWeb Technologies. From concept to launch, we're with you every step of the way.</h1>
                            <h1 className="FontSize18 bold">
                                Free project consultation | Custom solution blueprint | Transparent pricing | 30-day launch guarantee

                            </h1>

                            <div className="BtnGroup"><button className="btn-gradient-blue">Start Your Project Today</button>
                            <button className="btn-gradient-border">Talk to Our Experts</button>
                            </div>
                        </div>

                        
                        </Col>
                        </Row>
                    </Container>
                </div>

                {/* reasonToChosse section */}
                <div className="ReasonToChouseUs black   no-top-padding" ref={goalsRef}>
                    <Container>
                        <Row>
                            <Col>
                            <div className="textaliginCenter ReasonToChouseUsDiv" >
                                <span className="heading_main split" >Reasons to Choose Top Web Development Company</span>
                                <span className="FontSize25">Why settle for generic when your business deserves extraordinary?</span>

                                    <span className="FontSize18">Web Development Company creates solutions precisely tailored to your unique business needs—not one-size-fits-all templates. While many organizations hesitate due to perceived costs, the reality is different: custom software is a strategic investment that delivers exponential returns. <br/>
                                    Off-the-shelf solutions force your business to adapt to their limitations. Custom development does the opposite—it adapts to you. When software aligns perfectly with your workflows, processes, and goals, performance skyrockets, efficiency multiplies, and you gain a competitive advantage that generic solutions simply cannot provide. <br/>
                                    The numbers tell the story: Businesses with Web Development solutions report up to 60% faster operations, 40% cost reduction over time, and market differentiation that drives growth. The initial investment pays for itself many times over through increased productivity, reduced manual work, and capabilities your competitors can't match.
                                    </span>

                            </div>
                            
                            </Col>
                        </Row>
                    </Container>
                </div>

            {/* ReasonToChooseSection */}
                <ReasonToChooseSection ></ReasonToChooseSection>
            {/* ServicesLists */}
                <ServicesLists></ServicesLists>

            {/* MoreThanWebSection */}
                <MoreThanWebSection></MoreThanWebSection>

                <BusinessGoals></BusinessGoals>

            {/* ReadyBuildSection */}
                <ReadyBuildSection></ReadyBuildSection>

                <TabSection></TabSection>
            {/* HowWeHelp */}
                <HowWeHelp></HowWeHelp>
            {/*AnimatedText  */}
                <AnimatedText ></AnimatedText>
            {/* ConcludingSection */}
                <ConcludingSection></ConcludingSection>
            {/*FAQSection  */}
                <FAQSection 
                    subheading={"Insights"}
                    heading={"Frequently Asked Questions"}
                    lists={faqLists}
                    fullwidth={true}
                />
        </>
    )
}

export default WebDevelopment;