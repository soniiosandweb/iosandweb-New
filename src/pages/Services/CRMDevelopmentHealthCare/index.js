import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faHandshake, faNewspaper, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faTasks, faHospitalUser, faHandshakeAngle, faUser, faHospitalWide, faUserDoctor, faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// Relationship management section images
const streamlineProcess = `${process.env.REACT_APP_API_URL}/assests/images/services/crm-development-healthcare/streamlining-process.webp`;
const betterCareDelivery = `${process.env.REACT_APP_API_URL}/assests/images/services/crm-development-healthcare/better-care-delivery.webp`;
const betterCarePatients = `${process.env.REACT_APP_API_URL}/assests/images/services/crm-development-healthcare/better-care-patients.webp`;

// final reflection images
const softwareDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/software-development.png`;
const webDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/app-development.png`;
const magento = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/magento.png`;
const shopify = `${process.env.REACT_APP_API_URL}/assests/images/services/software-development/shopify.png`;

function CRMDevelopmentHealthCare(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={" CRM Development For Healthcare Industry - IosAndWeb Technologies"}
                description={"CRM Development for Healthcare Industry. Streamline patient management, improve care, and boost efficiency with secure, scalable CRM solutions."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* CRM Development HealthCare Banner */}
            <div className="crm-development-healthcare-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">CRM Development</span> for Healthcare Industry</h1>
                                <div className="heading5">Costs may be reduced, services can be provided with more excellent durability, and fantastic healthcare customer relationship management can be achieved by implementing a tailor-made customer relationship management system for the healthcare industry.</div>
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
                            <h2 className="heading2 text-center">How CRM improves Healthcare Practice?</h2>
                            <div className="heading5 text-center">Patients' top concern, according to surveys, is the standard of their individualized medical care. Most healthcare facilities are satisfied with just dispensing medications and conducting routine checks on their patient.</div>

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
                                <h2>Consider how quickly the hospital staff becomes divided amongst their numerous roles</h2>
                            </div>
                            <div className="leadsubtxt">
                                Patient Relationship Management (PRM), another name for a Healthcare CRM, facilitates this shift in emphasis. <b>CRM</b> software development for healthcare industry can help healthcare enterprises provide more concrete benefits to their clients, just like any other type of business.
                            </div>
                            <div className="leadsubtxt">
                                In terms of saving time, the most prominent example is provided by the ability to update and integrate patient electronic health data automatically. Keeping their businesses afloat in today's cutthroat market is no easy feat. Still, healthcare CRM aids in enhancing the quality of care, decreasing expenses, and better use of patient information.
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
                            <h2 className="heading2 text-center">What a customer relationship management system can do for healthcare?</h2>
                            <div className="heading5 text-center">By integrating patient data from several sources, custom software company for CRM developmenthelps medical facilities better serve their patients. Here are some advantages that healthcare organizations can enjoy when implementing CRMs.</div>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-5">
                        <Col lg={6}>
                            <img src={streamlineProcess} alt="Streamlined processes" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="heading3">Streamlined processes and automated routines</h2>
                            <p className="paragraph">A customer relationship management system (CRM) is a consolidated database and communication hub for healthcare providers and patients. All the information on a patient that walks into a clinic can be shown on one screen, making it easier for nurses to attend to their requirements quickly.</p>
                            <p className="paragraph">Customer relationship management systems also provide many helpful features for automating invoicing, scheduling appointments, and sending out reminders to patients management system. Another way that CRMs can reduce the frequency of missed or late appointments is by reminding patients of impending ones.</p>
                            <p className="paragraph">Automation tools lower the likelihood of human error and free medical personnel to focus on more crucial responsibilities.</p>
                        </Col>
                    </Row>

                    <Row className="align-items-center mt-3">
                        <Col lg={6}>
                            <h2 className="heading3">Better care delivery</h2>
                            <p className="paragraph">Clinics can better serve patients by adapting to their unique requirements by consolidating data and a birds-eye perspective of all patient interactions. Using a customer relationship management system, the health records of nurses, doctors, and other staff members may be kept in sync, allowing for a faster and more accurate response to patients' questions and concerns.</p>
                            <p className="paragraph">Likewise, CRMs aid doctors in providing more prompt diagnoses, spotting patterns in patient care, and treating problems before they even become acute. Integrating CRMs with wearable devices for remote patient monitoring and automated reminders for checkups and routine tests helps clinics provide better care for patients with chronic health conditions.</p>
                        </Col>
                        <Col lg={6}>
                            <img src={betterCareDelivery} alt="Better care delivery" className="responsive-img"/>
                        </Col>
                    </Row>

                    <Row className="align-items-center row-reverse-mobile mt-3">
                        <Col lg={6}>
                            <img src={betterCarePatients} alt="Better care for patients" className="responsive-img" />
                        </Col>
                        <Col lg={6}>
                            <h2 className="heading3">Better care for patients</h2>
                            <p className="paragraph">A customer relationship management system can keep your administrative processes running smoothly and your patient information organized. Each patient's profile includes their contact details, medical history, treatment, and scheduled appointments. CRM software creates patient profiles using pre-configured templates, reducing the likelihood of incomplete data or incorrect entries.</p>
                            <p className="paragraph">With a CRM, medical professionals consistently access the most up-to-date patient information because records are automatically updated in real-time. Additionally, most CRMs are designed to work in tandem with EHR platforms, which allows for the unified and consistent storage of patient information.</p>
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* Specification section */}
            <div className="sepcification-section text-white section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">The development of CRM software for the healthcare industry</h2>
                            <div className="heading5 text-center">Integrating electronic medical records (EMR), electronic health records (EHR), and other databases with healthcare CRM allows for the safe storage and long-term preservation of any information about clients and workers. Data relating to patients, medical programs, contacts,billing, document management, and the business's back office can all be housed in a centralized location.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                                <h4 className="heading4">Modern customer relationship management systems can aid healthcare firms in several ways.</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHospitalUser}></FontAwesomeIcon>
                                <h4 className="heading4">Foster meaningful connections with current patients and turn every interaction with a customer into a potential health partnership.</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHandshakeAngle}></FontAwesomeIcon>
                                <h4 className="heading4">Care coordination between doctors and outside stakeholders should be coordinated.</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                <h4 className="heading4">Individualized care</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHospitalWide}></FontAwesomeIcon>
                                <h4 className="heading4">Enhance the effectiveness of your organization's operations as a whole.</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faUserDoctor}></FontAwesomeIcon>
                                <h4 className="heading4">The medical system should be unified.</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faBriefcaseClock}></FontAwesomeIcon>
                                <h4 className="heading4">Save as much money and time as possible.</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Designing services section */}
            <div className="designing-services-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Exactly How We Can Assist</h2>
                            <div className="heading5 text-center">Our best developer for CRM development understand the healthcare industry and know how to maximize the benefits of CRM while remaining mindful of costs and deadlines.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                                <h4 className="heading4">Capabilities across the entirety of the product life cycle</h4>
                                <p className="paragraph">To begin, we provide free CRM consultancy and a proof-of-concept to ensure that your needs and goals are met. Then, with little to no input from you, we guide you through each project phase, from Business Analysis through Follow-Up.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                                <h4 className="heading4">Customer Relationship Management Systems That Work Across Multiple Platforms</h4>
                                <p className="paragraph">We can supply healthcare CRM solutions on all major computing platforms, from personal computers to mobile devices to the cloud.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
                                <h4 className="heading4">Integration</h4>
                                <p className="paragraph">We connect customer relationship management solutions to healthcare infrastructure components like electronic health records, pharmaceutical management systems, radiology information systems, and patient care centers (online appointment booking, patient portals, live chat, call center).</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                                <h4 className="heading4">Personalization of Web Content</h4>
                                <p className="paragraph">We work with you to ensure that visitors to your website receive only the most relevant information. Each site visitor or registered patient can have their custom landing page; promotions, services, and instructional materials are chosen just for them based on their own experiences.</p>
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
                            <h2 className="heading2">Get Healthcare CRM with the Help of IosAndWeb!</h2>
                            <div className="heading5">To give your patients individualized care of the highest quality and increase patient satisfaction, the staff at IosAndWeb will assist you in selecting and customizing a customer relationship management system.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/custom-software-development-company">
                                            <img src={softwareDevelopment} className="services-bottom-front-image" alt="Software Development" />
                                            <h4 className="heading4">Software Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/web-development-services">
                                            <img src={webDevelopment} className="services-bottom-front-image" alt="Web Development" />
                                            <h4 className="heading4">Web Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/magento-development-services">    
                                            <img src={magento} className="services-bottom-front-image" alt="Magento Development" />
                                            <h4 className="heading4">Magento Development Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/shopify-development-services">    
                                            <img src={shopify} className="services-bottom-front-image" alt="Shopify Development" />
                                            <h4 className="heading4">Shopify Development</h4>
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

export default CRMDevelopmentHealthCare