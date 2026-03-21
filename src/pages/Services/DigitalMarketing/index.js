import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight,} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import Banner from "./bannerSection/Banner";
import FeaturesPointsSection from "../../../components/FeaturesPointsSection/FeaturesPointsSection";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";
import NumbersGrid from "../../../components/NumbersGrid/NumbersGrid";
import BussinessGoal from "./BussinessGoals/BussinessGoal";
import BusinessGrowth from "./BusinessGrowth/BusinessGrowth";
import SliderContent from "./Slidercontent/SliderContent";
import FAQSection from "../../../components/FAQSection/FAQSection";


const ddfMain = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/laptop.webp`;
const img1 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/181959@3x 1.webp`;
const img2 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/593369@3x 1.webp`;
const img3 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/767972@3x 1.webp`;
const img4 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/1623352@3x 1.webp`;
const img5 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/audit 1.webp`;
const img6 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/curriculum-vitae 1.webp`;
const img7 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/no-money 1.webp`;
const img8 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/promotion (1) 1.webp`;
const turest3 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/turest3.webp`;
const turest2 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/turest2.webp`;
const turest1 = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/turest1.webp`;
const men = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/men.webp`;



function DigitalMarketing(){

    const location = useLocation();
        const featuresPoints = [
    "Powerful Multi-Channel Strategy for Business Growth",
    "Relentlessly Focused on Driving Conversions",
    "High-Impact Mobile App Experiences Powered by Exceptional DesignFrameworks Powering Long-Term Scalable Growth"
]
const faqLists = [
  {
    title: "What kinds of digital marketing help does IosAndWeb Technologies provide?",
    text: "We offer a full range of digital marketing services at IosAndWeb Technologies. These include <a href='https://iosandweb.net/seo-services'> SEO (Search Engine Optimization)</a>, social media marketing, Google Ads, PPC campaigns, content marketing, and online branding. We want to help businesses get more customers and leads online."
  },
  {
    title: "How can digital marketing help my business get bigger?",
    text: "Digital marketing can help your business reach the right people online, get more people to visit your website, and make more sales. You can build brand awareness and keep your business growing with the right plan from <a href='/' >IosAndWeb Technologies.</a>"
  },
  {
    title: "Does IosAndWeb Technologies offer SEO services?",
    text: "Yes, IosAndWeb Technologies is an expert in SEO services, such as on-page SEO, off-page SEO, technical SEO, and keyword optimization. Our main goal is to help your website rank higher in search engines like Google."
  },
  {
    title: "Do you do marketing on social media?",
    text: "Yes, we handle social media sites like Facebook, Instagram, and LinkedIn at IosAndWeb Technologies. We write interesting content, run ads, and help you reach your target audience in the best way possible."
  },
  {
    title: "How long does it take for digital marketing to work?",
    text: "The length of time depends on the service. Paid ads and <a href='https://iosandweb.net/blog/the-power-of-social-media-advertising-for-modern-businesses'>social media campaigns</a>   can get results faster than SEO, which can take a few months to show strong results. IosAndWeb Technologies always thinks about how to grow in the short and long term."
  },
  {
    title: "Can IosAndWeb Technologies handle Google Ads and pay-per-click (PPC) campaigns?",
    text: "Yes, we set up and run Google Ads and PPC campaigns for you to get traffic and leads right away. Our team makes sure that your budget is used in the best way to get the most return on investment."
  },
  {
    title: "Do you offer personalized digital marketing plans?",
    text: "For sure. To get the best results, IosAndWeb Technologies makes custom digital marketing plans based on your business goals, industry, and target audience."
  },
  {
    title: "Is digital marketing a good idea for small businesses?",
    text: "Yes, digital marketing works very well for small businesses. By using cheap marketing strategies, IosAndWeb Technologies helps small businesses compete with bigger brands."
  },
  {
    title: "Do you send out regular reports and updates?",
    text: "Yes, we send you regular performance reports so you can see how your campaign is doing. At IosAndWeb Technologies, being open and honest with each other is very important to us."
  },
  {
    title: "What do I need to do to start using IosAndWeb Technologies' digital marketing services?",
    text: "You can get in touch with IosAndWeb Technologies through their website or by phone to get started. Our team will figure out what you need and come up with a plan that works for your business."
  }
];
   

    return(
        <>

            <SEO
                title={"Grab Quality leads with Digital marketing services | Get Quote"}
                description={"Grow your business globally with Digital marketing services and get quality leads with paid PPC Services, SEO Services and SMM services."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <Banner></Banner>
            <FeaturesPointsSection lists={featuresPoints} />
            <div className="padding black" >
            <AnimatedText />
            </div>
            <div className="padding black">
                <Container>
                    <Row>
                        <Col>
                         <h1 className="heading_main split textaliginCenter">Empowering Brands with Data-Driven Digital Marketing</h1>
                         <span className="FontSize18 textaliginCenter">IosAndWeb Technologies designs customized, ROI-focused marketing strategies that accelerate growth, elevate brand visibility, and turn clicks into loyal customers</span>
                         <div className="numberGridMobileDev textaliginCenter padding"><NumbersGrid /></div>
                        <h1 className="heading_main  textaliginCenter">Partner with IosAndWeb Technologies to unlock intelligent, future-ready marketing powered by AI insights, precision targeting, and seamless omnichannel execution</h1>

                        </Col>
                    </Row>
                </Container>
               

            </div>

            <div className="linear-dark-background section-padding DDSSection ChatSection">
                            <Container>
                                <Row>
                                    <Col lg={6}>
                                        <div className="TowFactorsContent">
                                        <div>

                                          <div className="ChatDiv">
                                            <div className="pinkChart">
                                                <div className="FontSize18">83%</div>
                                                <div className="FontSize16">Increase in Traffic</div>
                                            </div>
                                            <div className="YellowChat">
                                                <div className="FontSize18"># 1</div>
                                                <div className="FontSize16">
                                                    On the Keyword 
                                                    “Mobile app development Company” <br/>
                                                </div>
                                            </div>
                                          </div>
                                          <div className="FontSize16">A leading global provider of information technology, consulting, and business process outsourcing solutions.</div>
                                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Project Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                        </div>
                                        
                                    </div>
                                    </Col>                        
                                    <Col lg={6}>
                                    <div className="ddsMainImg">
                                        <img src={ddfMain} alt="" />
            
                                    </div>
            
                                    </Col>
                                </Row>
                            </Container>
            
                        </div>

                <BussinessGoal/>



                {/*why to parthner with us Section  */}
                <div className="WhyToParthnerSection padding black">
                    <Container>
                        <Row>
                            <Col>
                             <h1 className="heading_main split textaliginCenter">Why Partner With Us?</h1>
                             <p className='fontSize18 lessPadding  textaliginCenter'>Engineering Market Leaders Through Strategy, Not Guesswork</p>

                             <div className='whytochossUsDiv'>
                                <div className='SingleSection'>
                                    <span> 
                                        <img src={img7} alt=""></img> <h3 className="FontSize25">No Set-Up Fee Required</h3>
                                    </span>
                                                                        <span> 
                                        <img src={img5} alt=""></img> <h3 className="FontSize25">Data & Analytics Driven Approach</h3>
                                    </span>
                                                                        <span> 
                                        <img src={img6} alt=""></img> <h3 className="FontSize25">Personal Audit & Competitor Analysis</h3>
                                    </span>
                                                                        <span> 
                                        <img src={img8} alt=""></img> <h3 className="FontSize25">Monthly Marketing Roadmaps</h3>
                                    </span>
                                </div>
                                    <div className='GridSection'>
                                    <div className='GridSectionOuterDiv btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img2} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        100% <br/> Transparency 
                                        </h1>
                                        <p className='FontSize18'>Get to see what you are paying for, as we ensure a complete transparent process with no random promises.</p>
                                        </div>
                                    </div> <div className='GridSectionOuterDiv uno btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img4} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        Campaign Optimization
                                        </h1>
                                        <p className='FontSize18'>Fine-tune your campaigns with biweekly audits & monthly reports to improve customer lifetime value and profitability.</p>
                                        </div>
                                    </div> <div className='GridSectionOuterDiv uno  btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img3} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        Get A Dedicated Manager
                                        </h1>
                                        <p className='FontSize18'>Benefit from personal attention through weekly call with your account manager to keep you up with the strategy & implementation.</p>
                                        </div>
                                    </div> <div className='GridSectionOuterDiv  btn-gradient-border'>
                                    <div className="imgDiWHyToChoose"><img src={img1} alt=""></img></div>
                                    <div className="contentDiv">
                                        <h1 className="FontSize25">
                                        Flexible Pricing
                                        </h1>
                                        <p className='FontSize18'>One glove doesn’t fit all nor does the same package or strategy. Get the flexibility to choose packages as per your business needs.</p>
                                        </div>
                                    </div>
                                    </div>
                             </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/*  */}
                <div className="turstedBySection padding black">
                    <Container>
                        <Row>
                            <Col>
                              <div className="TrustedDiv">
                                <span className="btn-gradient-blue btnTrustBtn btn-gradient-border">
                                    <h1 className="FontSize25">We are a Trusted:</h1>
                                </span>
                                 <img src={turest1} alt=""/>
                                 <img src={turest2} alt=""/>
                                 <img src={turest3} alt=""/>

                              </div>
                            
                            </Col>
                        </Row>
                    </Container>
                </div>
            <BusinessGrowth />

            <div className="beyoundClick padding linear-dark-background">
                <Container>
                    <Row>
                        <Col>
                        <div className="beyoundClickDiv">
                          <h1 className="heading_main textaliginCenter">Beyond Clicks: We Forge Enduring Customer Lifecycles</h1>
                          <p className="FontSize18 textaliginCenter">Pioneering Digital Services for Long-Term Growth</p>
                          <div className="beyoundClickSlider">
                            <SliderContent></SliderContent>
                          </div>
                          </div>

                        </Col>
                    </Row>
                </Container>
            </div>
                        <div className="letsBuldTogtherSection  letsPowerBussince black section-padding ">
                        <Container>
                            <Row className="letsBuldTogtherdiv">
                            <Col lg="6">
                             <div className="letsBuldTogthercontent">
                                <h1 className="heading_main split">Let's Empower Your Business to Achieve Peak Success Through Strategic Marketing</h1>
                                <p className="FontSize18">Partner With IosAndWeb Technologies - India's Leading <a href="mobile-app-development-services"> Mobile App </a> Experts Turning Your Ideas Into Reality.</p>
                                <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Let's Build Together <FontAwesomeIcon icon={faAnglesRight} /></Link>
            
                             </div>             
                            <img className="ImgSectionDiv" src={men} alt="" /> 
                            </Col>
                            </Row>
                        </Container>               
                        </div>
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

export default DigitalMarketing;