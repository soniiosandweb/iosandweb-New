import React from "react";
import './style.css';
import {Container, Row, Col, Tab, Nav, Accordion} from "react-bootstrap";
import SEO from "../../../components/SEO";
import OwlCarousel from "react-owl-carousel"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleDot, faCheckDouble, faCircle, faPencilRuler, faPaintBrush, faFileAlt, faRocket, faCog } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

const healthcareBanner = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/healthcare-banner.webp`;

// reasons to choose images
const healthcareSoftware = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/healthcare-software.png`;
const LIMS = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/LIMS.png`;
const mHealthApp = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/mhealth-app.png`;
const electronicHealth = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/electronic-records.png`;
const telemedicineApp = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/telemedicine-app.png`;
const pharmacySystem = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/pharmacy-system.png`;
const hippaCompliant = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/hippa-compliant.png`;
const medicalDevice = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/medical-device.png`;

// capabilities section images
const healthcareApp = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/healthcare-app-developer.webp`;
const flexibleModels = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/flexible-models.webp`;
const agileProcesses = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/agile-processes.webp`;
const innovativeSolutions = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/innovative-solutions.webp`;
const logicallyDesigned = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/logically-designed.webp`;
const qualityCode = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/code-quality.webp`;

// Advanced technologies images
const aiMLIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/ai-ml.png`;
const blockchainIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/blockchain.png`;
const dataAnalytics = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/data-analytics.png`;
const arVR = `${process.env.REACT_APP_API_URL}/assests/images/industries/real-estate/ar-vr.png`;
const iotIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/IoT-icon.png`;
const generativeAi = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/generative-ai.png`;
const businessIntelligence = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/business-intelligence.png`;


// Tools and technologies images
const htmlIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/html-logo.png`;
const cssIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/CSS-Logo.png`;
const jsIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/JavaScript-Logo.png`;
const react = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/react.webp`;
const angular = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/angular.webp`;
const vueJs = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/vue-js.webp`;
const emberIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/Ember-logo.png`;
const nextJS = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/next-js-logo.png`;

const nodejs = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/nodejs.webp`;
const java = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/java.webp`;
const dotNet = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/dot-net.webp`;
const python = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/python.webp`;
const phpIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/php-logo.png`;
const goIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/Go-Logo.png`;

const android = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/android-logo.png`;
const flutter = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/flutter.webp`;
const iOSIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/apple-ios.png`;
const xamarin = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/xamarin-logo.png`;
const cordova = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/cordova-logo.png`;

const cPlusIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/Cplus-Logo.png`;
const cSharp = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/c-sharp.png`;
const swiftIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/eCommerce/swift.webp`;
const objCIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/objective-c.png`;

const amazonDocumentDB = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/amazon-documentdb.png`;
const amazonDynamodb = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/aws-dynamodb.png`;
const amazonRDS = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/amazon-rds.webp`;
const amazonRedshift = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/Amazon-redshift.png`;

const googleCloudDatastore = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/google-cloud-datastore.png`;
const googleCloudSQL = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/cloud-SQL.png`;

const azureBlobStorage = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/Azure-blob-storage.png`;
const azureCosmosDB = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/Azure-cosmos-DB.png`;
const azureSQL = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/azure_sql_database.png`;
const azureSynapseAnalytics = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/AzureSynapseAnalytics.png`;

const mesosIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/mesos.png`;
const docker = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/docker.webp`;
const kubernetes = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/kubernetes-icon.png`;
const openShift = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/OpenShift.png`;

const awsDeveloperTools = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/aws-developer-tools.png`;
const azureDevops = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/azure-devops.png`;
const googleDeveloper = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/google-developers.png`;
const gitlabCI = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/gitlab-ci-cd.png`;
const teamCity = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/TeamCity_Icon.png`;

const saltstack = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/SaltStack.png`;
const hashiCorpPacker = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/hashicrop-packer.png`;
const terraform = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/terraform-icon.png`;
const puppet = `${process.env.REACT_APP_API_URL}/assests/images/industries/healthcare/puppet_logo.png`;


function Healthcare(){

    const location = useLocation();

    const changeNumberProcess=(event) =>{
        if (event.item) {
            var count = event.item.count;
            var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;

            if (current > count) {
                current = 1;
            }
            
            if(current === 0) {
                current = event.item.count;
            }

            document.getElementById('slide_number_process').innerHTML = current;
            document.getElementById('slide_total_number_process').innerHTML = count;
           
        }
    }

    return(
        <>
            <SEO
                title={"Healthcare Software Development | IosAndWeb Technologies"}
                description={"IosAndWeb Technologies offers secure healthcare software development including telemedicine apps, hospital management systems, and patient-centric digital solutions."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">Healthcare</span> Software Development Services</h1>
                                <div className="heading5">Delivering world-class custom healthcare software development services to enable best medical care</div>

                                <div className="btn-section">
                                    <a href="/contact-us" className="btn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                
                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={healthcareBanner} alt="Healthcare" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose industries-reasons-tab section-padding no-bottom-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">Empower Digital Care with Our Innovative Healthcare Software Development Services</h2>
                            <div className="heading5 max-width-70">From optimizing the present administrative process to improving efficiency and lowering operations costs, our healthcare software development services enable innovative disruptions for preventive, predictive, and protective healthcare. 
                            <br />
                            We make your software application the source of the healthcare revolution.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Custom Healthcare Software Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Laboratory Information Management System (LIMS)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Custom mHealth App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Electronic Health Record Software</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Telemedicine App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Pharmacy Management System</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> HIPAA-Compliant Software</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eighth"><FontAwesomeIcon icon={faCircleDot} /> Medical Device Software Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={healthcareSoftware} alt="Healthcare Software" className="reasons-content-icon" />
                                            <h3 className="heading3">Custom Healthcare Software Development</h3>
                                            <p className="paragraph">As a leader in healthcare app development services, we create engaging patient experiences through our custom healthcare solutions. Our team of skilled medical app developers has hands-on experience in building complex healthcare software solutions. Our intuitive medical software development services aim to improve patient care for better medical outcomes.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={LIMS} alt="LIMS" className="reasons-content-icon" />
                                            <h3 className="heading3">Laboratory Information Management System (LIMS)</h3>
                                            <p className="paragraph">As a part of our healthcare solution development services, we create customized healthcare application and software solutions for information management depending on the lab size and their specialties. To monitor laboratory storage and inventory, data integrity, security, and protocol executions, we, as a top-notch healthcare app development company, develop scalable and adaptable LIMS solutions.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={mHealthApp} alt="Custom mHealth App" className="reasons-content-icon" />
                                            <h3 className="heading3">Custom mHealth App Development</h3>
                                            <p className="paragraph">Being an illustrious healthcare app development company, we create mHealth applications that are HL7, HIPAA, and FDA-compliant for remote health monitoring. Our mHealth apps allow healthcare organizations to deliver better care by streamlining workflow and ensuring smoother management of patient health records.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={electronicHealth} alt="Health Record Software" className="reasons-content-icon" />
                                            <h3 className="heading3">Electronic Health Record Software</h3>
                                            <p className="paragraph">Being the best medical app development company, our experts are adept at building robust electronic health record (EHR) software systems with features that enable healthcare professionals to quickly access patient history and other medical data and stay connected to them via patient portals.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={telemedicineApp} alt="Telemedicine App Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Telemedicine App Development</h3>
                                            <p className="paragraph">As a top-notch telehealth app development company, we create end-to-end telemedicine software that enables contactless care and allows patients to communicate with doctors through video calling or instant messaging. Ensure quick and convenient access to patient care at reduced costs with our highly intuitive telemedicine app development services.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={pharmacySystem} alt="Pharmacy Management System" className="reasons-content-icon" />
                                            <h3 className="heading3">Pharmacy Management System</h3>
                                            <p className="paragraph">We, as an illustrious healthcare application development company, add the latest functionalities to your existing pharmacy management software or create one from scratch to support real-time communication, fully integrated payment processing, and workflow automation. This enables the management of multiple stores in your healthcare center with an all-in-one pharmacy management software.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="reasons-tab-content">
                                            <img src={hippaCompliant} alt="HIPAA-Compliant Software" className="reasons-content-icon" />
                                            <h3 className="heading3">HIPAA-Compliant Software</h3>
                                            <p className="paragraph">We are one of the best healthcare mobile app development companies developing HIPAA-compliant healthcare mobility solutions. Our healthcare apps secure the confidentiality of information saved and shared within the ecosystem of patients and other associated stakeholders like hospitals and doctors.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eighth">
                                        <div className="reasons-tab-content">
                                            <img src={medicalDevice} alt="Health Record Software" className="reasons-content-icon" />
                                            <h3 className="heading3">Medical Device Software Development</h3>
                                            <p className="paragraph">Our expert team delivers tailor-made software solutions for medical devices, enhancing efficiency, safety, and patient care, while ensuring full compliance with industry standards like FDA and HIPAA. With a focus on innovation and user experience, we transform your medical devices into advanced tools for healthcare excellence.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Industries Numbers section */}
            <div className="industries-numbers-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="industries-numbers">
                                <div className="industries-numbers-left">
                                    <h2 className="heading2">Build a strong ground to grow your Real Estate app idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Tech Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">75+</span>
                                            <span className="industries-numbers-text">Custom Healthcare Projects Delivered</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Happy Clients</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            
            {/* services section */}
            <div className="designing-services-section industries-services-section section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">We Develop a Wide Range of High-Performing Healthcare Apps</h2>
                            <div className="heading5 max-width-70">Our healthcare application development services make your product an integral element of the complete homecare and healthcare ecosystem. Our extensive exposure to working with doctors, patients, pharmacies, delivery systems, prescription systems, and EHR mechanisms makes customized development easy and error-free. Our healthcare mobile app development services include the development of these types of apps:</div>
                        </Col>
                    </Row>

                    <div className="industries-services-tab-block mt-4">
                        <Tab.Container id="industries-services-tab" defaultActiveKey="firstInd">
                            <div className="industries-services-tab-cols">
                                <Nav variant="pills" className="industries-services-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="firstInd">Apps for Patients</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="secondInd">Apps for Medical Professionals</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="thirdInd">Apps for Healthcare Providers</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="industries-services-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="firstInd">
                                        <Row className="mt-5">
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Appointment Scheduling Applications</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Symptom Checkers</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Patient Engagement Applications</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Medication Reminder Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Healthy Lifestyle App</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Chronic Disease Management App</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Telemedicine Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Doctor On Demand App</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Mental Health Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Urgent Care App</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="secondInd">
                                        <Row className="mt-5">
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Remote Patient Monitoring Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Medical Research Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">EHR Data Aggregation And Analysis Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Hospital Communication Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Practice Management Apps</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thirdInd">
                                        <Row className="mt-5">
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Clinical Assistance Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Medical Device Data Collection Platforms</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Time Table Scheduling Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Wearable Tech Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Billing Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Pharmacy Delivery Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Electronic Health Record (EHR) Systems</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Drug Inventory Tracking Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Population Health Management Software</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Industries Capabilities section */}
            <div className="what-software-section industries-capabilities-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt max-width-70">
                                <h2>We Are Your Trusted Partner for Healthcare App Development Services</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                                From prototyping to design, development, and deployment, we provide end-to-end healthcare application development services. As a renowned healthcare app development company, we integrate user-centric design principles into every stage, fostering intuitive interfaces for both medical practitioners and patients alike.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="capabilities-tab-div">
                                <Tab.Container id="capabilities-tab" defaultActiveKey="cpfirst">
                                    <div className="capabilities-tab-left capabilities-tab-cols">
                                        <Nav variant="pills" className="capabilities-tab flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfirst"><FontAwesomeIcon icon={faCircle} /> Proven mHealth Experience</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond"><FontAwesomeIcon icon={faCircle} /> Flexible Engagement Models</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird"><FontAwesomeIcon icon={faCircle} /> Transparent and Agile Processes</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfourth"><FontAwesomeIcon icon={faCircle} /> Innovative Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfifth"><FontAwesomeIcon icon={faCircle} /> Logically Designed Architecture</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsixth"><FontAwesomeIcon icon={faCircle} /> Superior Code Quality</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={healthcareApp} className="responsive-img" alt="Our healthcare app" />
                                                    </div>
                                                    <p className="paragraph">Our healthcare app developers have deep experience in developing cutting-edge mHealth solutions that allow users to track their diagnostic data, schedule appointments, find doctors, and manage their prescriptions. With our proven experience in mHealth, we bring a digital revolution to the healthcare ecosystem.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={flexibleModels} className="responsive-img" alt="Flexible Models" />
                                                    </div>
                                                    <p className="paragraph">As the finest healthcare software development company, we offer flexible engagement models that are customized to our client's specific needs, ensuring the best results for their healthcare software solutions. We allow our clients to choose their engagement models and delegate the entire project to us.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={agileProcesses} className="responsive-img" alt="Agile Processes" />
                                                    </div>
                                                    <p className="paragraph">Our healthcare app development process is entirely transparent, so our clients are aware of each stage of the development process and can put forth their feedback in real-time. As one of the prominent medical software companies, we use DevOps and agile methodology during our development cycle to ensure that changes are made quickly and efficiently.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfourth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={innovativeSolutions} className="responsive-img" alt="Innovative Solutions" />
                                                    </div>
                                                    <p className="paragraph">As one of the most reputed healthcare software companies, we use the latest technology trends and tools to build innovative medical software solutions that improve patient care and make health management easier. Our experts identify the most functional technology stack and build custom medical software development for healthcare businesses.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfifth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={logicallyDesigned} className="responsive-img" alt="Logically Designed" />
                                                    </div>
                                                    <p className="paragraph">Being one of the esteemed healthcare app development companies, we are aware of the importance of a well-planned architecture in ensuring the security of the solution and saving end users' time. The significance of your end goal to our healthcare software developers can be seen in our decision between monolithic and microservice architectures as per your business needs.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsixth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={qualityCode} className="responsive-img" alt="Quality Code" />
                                                    </div>
                                                    <p className="paragraph">Every design, performance, and security effort we make has an impact on the unmatched quality of our code. As a pioneering healthcare app development company, we understand the need to minimize the number of patches, including increased stability and reduced maintenance requirements.</p>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Advanced technologies section */}
            <div className="advanced-technologies section-padding background-section">
                <Container>
                    <Row>
                        <Col md={6} lg={7}>
                            <div className="sticky-div">
                                <h2 className="heading2">Innovative Technologies That Make Your Healthcare Products Fast and Secure</h2>
                                <div className="heading5">Step into the future of healthcare with our cutting-edge suite of innovative technologies, meticulously crafted to transform the healthcare sector. As a leading healthcare software development company, our team creates advanced healthcare solutions that offer a seamless patient-centric experience.</div>
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <div className="advanced-technologies-blocks">

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={blockchainIcon} className="responsive-img" alt="Blockchain" />
                                        </span>
                                        <h4 className="heading4">Blockchain</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As one of the leading healthcare solutions companies, we ensure the integrity and security of patient data with our state-of-the-art custom blockchain solutions. By leveraging blockchain in healthcare, we help our clients establish immutable and transparent records for all medical transactions.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={aiMLIcon} className="responsive-img" alt="AI/ML" />
                                        </span>
                                        <h4 className="heading4">Artificial Intelligence (AI)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Top-tiered medical software development companies like ours can harness the power of AI in healthcare to develop innovative solutions. Utilizing advanced AI algorithms, we analyze extensive patient data to predict potential health issues and tailor personalized treatment plans, revolutionizing patient care and outcomes.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={dataAnalytics} className="responsive-img" alt="Data Analytics" />
                                        </span>
                                        <h4 className="heading4">Data Analytics</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">By harnessing the power of data analytics in healthcare, our custom healthcare apps unlock the potential to identify emerging trends and patterns within vast datasets. This insight enables healthcare organizations to optimize their operational and management strategies, improving efficiency and patient outcomes.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={arVR} className="responsive-img" alt="AR/VR" />
                                        </span>
                                        <h4 className="heading4">AR/VR</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Being one of the most renowned medical app development companies, we help you revolutionize patient engagement and medical training with our immersive AR/VR solutions. From education to detailed anatomical visualizations, our AR/VR healthcare services not only elevate patient experience but also streamline healthcare operations.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={iotIcon} className="responsive-img" alt="IoT" />
                                        </span>
                                        <h4 className="heading4">IoT</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">By implementing IoT in healthcare, we help our clients seamlessly integrate devices for monitoring patient vitals, tracking their medication adherence, and providing real-time data insights. This IoT-driven approach elevates patient care by enabling remote monitoring and facilitating the early detection of diseases.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={generativeAi} className="responsive-img" alt="Generative AI" />
                                        </span>
                                        <h4 className="heading4">Generative AI</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Our experts harness the transformative power of Generative AI in healthcare to revolutionize medical diagnostics, treatment planning, and patient engagement. Our Generative AI solutions synthesize vast datasets to generate predictive models, personalized treatment options, and innovative medical imaging techniques.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={businessIntelligence} className="responsive-img" alt="Business Intelligence" />
                                        </span>
                                        <h4 className="heading4">Business Intelligence</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">By leveraging our Business Intelligence software in healthcare, we enable organizations to transform complex data into actionable insights, significantly enhancing operational efficiency and patient care with precise, data-driven decision-making.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries process slider */}
            <div className="industries-process-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">Healthcare App Development Process We Follow</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">At IosAndWeb Technologies, we follow an agile healthcare app development process to craft feature-loaded, robust healthcare software and applications. From analyzing the requirements of your project to launching it, our experts work diligently to scale your business.</div>

                            <div className="industries-slider-block">

                                <div className="industries-slider-numbers">
                                    <span className="slide_number" id="slide_number_process"></span>
                                    <span className="slide_dash"></span>
                                    <span className="slide_total_number" id="slide_total_number_process"></span>
                                </div>

                                <OwlCarousel className="owl-theme industries-process" loop autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true} margin={15} nav={true} dots={false} items={4} onInitialized={changeNumberProcess} onTranslated={changeNumberProcess} responsive={
                                    {
                                        '0': {
                                            items: 1,
                                        },
                                        '768': {
                                            items: 2,
                                        },
                                        '992': {
                                            items: 2.5,
                                        },
                                        '1200': {
                                            items: 3.5,
                                        }
                                    }
                                }>
                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faPencilRuler} /></span>
                                            <h4 className="heading4">Project Analysis</h4>
                                            <p className="paragraph">Our experts understand the project's scope and create strategies for efficient healthcare IT consulting services. As one of the best healthcare IT services companies, we conduct thorough market research and competition analysis before initiating your project idea.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faPaintBrush} /></span>
                                            <h4 className="heading4">Design</h4>
                                            <p className="paragraph">At the design stage, our UI/UX experts create an intuitive and user-friendly interface. This includes creating the graphic components through which the user will interact with your healthcare app.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCode} /></span>
                                            <h4 className="heading4">Development</h4>
                                            <p className="paragraph">As a leading IT consulting company, we adhere to the best healthcare app development practices, keeping all security and industry regulations in mind. This stage includes developing frontend and backend infrastructure and integrating the app with third-party APIs.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faFileAlt} /></span>
                                            <h4 className="heading4">Testing</h4>
                                            <p className="paragraph">Our QA team conducts an end-to-end testing to eliminate errors or bugs in the healthcare application. The app undergoes a rigorous testing process for ensuring a seamless functioning, strong security and most importantly, an elevated user experience.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faRocket} /></span>
                                            <h4 className="heading4">Project Launch</h4>
                                            <p className="paragraph">Once your healthcare app has successfully passed the previously mentioned stages, our team of best healthcare app developers finally launches the app on the app stores, thus making it available for users to explore.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCog} /></span>
                                            <h4 className="heading4">Maintenance and Support</h4>
                                            <p className="paragraph">To ensure the flawless performance of your healthcare app, it is crucial that your app gets regular security and functional upgrades. As a part of their IT services for healthcare, we offer continuous post-app launch maintenance and support services for your app to remain fully functional.</p>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries Consult section */}
            <div className="industries-consult-section">
                <Container>
                    <Row>
                        <Col>
                            <div className="industries-consult-div">
                                <div className="industries-consult-content max-width-50 text-white">
                                    <h3 className="heading3">Ensure the confidentiality your patients deserve with unmatched security & real-time flexibility of cloud servers.</h3>
                                    <div className="btn-section mt-5">
                                        <a href="/contact-us" className="btn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Advanced technologies section bottom */}
            <div className="advanced-technologies section-padding">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="sticky-div">
                                <h2 className="heading2">Our Healthcare Mobile App Developers Design Compliance-Friendly Platforms</h2>
                                <div className="heading5">With mass care being at the heart of the digital healthcare processes, the healthcare mobile app developers at IosAndWeb Technologies understand the prerequisites of engineering an international standard-compliant digital solution to ensure unobstructed digital transformation. This is what makes us a leading custom healthcare software development company.</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="advanced-technologies-blocks">

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">HIPAA</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As an exceptional healthcare software development agency, we abide by the highest standards of confidentiality and data security set by HIPAA (Health Insurance Portability and Accountability Act), which also encompasses stringent access control measures and encryption protocols.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">HITECH (Health Information Technology for Economic and Clinical Health)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Every healthcare app that we develop abides by the HITECH Act. They successfully pass all the security audits that are made to ensure strict enforcement of the HITECH-based privacy and security rules.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">SaMD (Software as a Medical Device)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a renowned medical software development company, we follow the concepts and SaMD risk categories detailed by the International Medical Device Regulators Forum for the medical application development industry, ensuring the highest standards of safety and reliability in our applications.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">HL7 (Health Level Seven International)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We follow the set of international standards for sharing, exchanging, integrating, and retrieving healthcare information as dictated by the Health Level 7 organization. Our commitment to adhering to these standards ensures efficiency in healthcare data management.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">GDPR (General Data Protection Regulation)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Our data collection and management process is designed to follow all the stringent GDPR compliance requirements. By adhering to the GDPR rules, we ensure that every data that your application works with is highly secure.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">SOC 2 (Service Organization Control 2)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We abide by SOC 2 compliance, ensuring the greatest levels of security and privacy for your medical records. This framework is centered on protecting client data and guaranteeing the privacy and accuracy of sensitive medical records at every stage.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">Personal Health Information Protection Act (PHIPA)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Complying with PHIPA is paramount for healthcare providers in Ontario to acquire, use, and securely disclose personal health information. We adhere to PHIPA to ensure patient data privacy and confidentiality, which promotes patients' confidence in healthcare services.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">DICOM (Digital Imaging and Communications in Medicine)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We adhere to DICOM compliance to integrate the software with medical imaging systems smoothly. This standard ensures accuracy and interoperability in healthcare diagnosis and treatment planning by facilitating the standardization of medical imaging data interchange and management.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">FHIR (Fast Healthcare Interoperability Resources)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a leading healthcare software development company, we leverage FHIR compliance to embrace compatibility in the healthcare industry, fostering smooth collaboration between various healthcare organizations and enhancing patient care coordination.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">CPT (Current Procedural Terminology)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a part of our healthcare software development services, we comply with CPT to expedite the billing and coding process, ensuring efficient payment for medical services and simplifying documentation for healthcare practitioners.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">GxP Quality Guidelines and Regulations</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We comply with GxP regulations to maintain the highest quality standards in developing healthcare products. The integrity and safety of medications, medical devices, and clinical trials are guaranteed by GxP guidelines, which cover Good Manufacturing Practice (GMP), Good Laboratory Practice (GLP), and Good Clinical Practice (GCP).</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">EU Annex 11</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">EU Annex 11 compliance allows us to navigate the regulatory landscape of Europe confidently. In order to ensure data integrity, security, and compliance with EU rules, this standard lays out standards for using computerized systems in regulated contexts.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">CDISC (Clinical Data Interchange Standards Consortium)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a pioneering provider of healthcare app development services, we adhere to CDISC to improve the interoperability and integrity of clinical research data by maintaining uniformity in data collection, processing, and reporting through adherence to CDISC standards.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">XDS/XDS-I (Cross-Enterprise Document Sharing)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">XDS/XDS-I compliance enables smooth electronic health record sharing amongst healthcare organizations. This standard improves interoperability by fostering effective and safe data interchange and facilitates better decision-making and patient care coordination.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">SSAE (Statement on Standards for Attestation Engagements)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a top provider of healthcare app development services, we strictly adhere to SSAE compliance standards to prioritize the security and legality of your healthcare services, ensuring that your stakeholders receive the highest level of data privacy at every level.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">BYOD (Bring Your Own Device)</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">As a top-tier provider of healthcare mobile app development services, we implement stringent security measures by ensuring that your team can leverage the benefits of BYOD without compromising on the security and integrity of sensitive healthcare information.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <h4 className="heading4">FDA</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We adhere to the strict regulatory standards set by the FDA (Food and Drug Administration) which includes thorough documentation, rigorous testing, and complying with Good Manufacturing Practices (GMP) wherever applicable.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Tools and languages section */}
            <div className="tools-languages-section section-padding text-white text-center bg-black">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Technology Stack That Makes Your Healthcare App Secure and Exceptional</h2>
                            <div className="heading5">As a reputed healthcare mobile app development company, our mobile app development process is guided by a robust technology stack that makes your healthcare products interoperable, robust, fast, and secure. By putting a strong emphasis on innovation, we develop healthcare solutions that not only meet present needs but also foresee potential problems down the road, giving you a forward-thinking, long-term strategy to advance your healthcare business operations.</div>

                            <div className="tools-languages-tab-div">
                                <Tab.Container id="tools-languages-tab" defaultActiveKey="toolfirst">
                                    <div className="tools-languages-tab-top tools-languages-tab-cols">
                                        <Nav variant="pills" className="tools-languages-tab flex-row justify-content-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfirst">Frontend Programming Languages</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolsecond">Backend Programming Languages</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolthird">Mobile</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfourth">Desktop</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfifth">Cloud Databases, Warehouses, and Storage</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolsixth">DevOps</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="tools-languages-tab-bottom tools-languages-tab-cols">
                                        <Tab.Content>

                                            <Tab.Pane eventKey="toolfirst">
                                                <p className="tools-tab-text paragraph max-width-70 mx-auto">To ensure a user-friendly, immersive interface, we employ advanced front-end technologies in our healthcare mobile application development process. Our experts carefully hand-picked to enhance the visual appeal and interactivity of the application, delivering a superior user experience.</p>
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Languages</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={htmlIcon} className="responsive-img" alt="HTML" />
                                                                </div>
                                                                <p className="paragraph">HTML</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={cssIcon} className="responsive-img" alt="CSS" />
                                                                </div>
                                                                <p className="paragraph">CSS</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={jsIcon} className="responsive-img" alt="Javascript" />
                                                                </div>
                                                                <p className="paragraph">Javascript</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Javascript Frameworks</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={react} className="responsive-img" alt="React" />
                                                                </div>
                                                                <p className="paragraph">React</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={angular} className="responsive-img" alt="Angular" />
                                                                </div>
                                                                <p className="paragraph">Angular</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={vueJs} className="responsive-img" alt="Vue Js" />
                                                                </div>
                                                                <p className="paragraph">Vue Js</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={emberIcon} className="responsive-img" alt="Ember" />
                                                                </div>
                                                                <p className="paragraph">Ember</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={nextJS} className="responsive-img" alt="Next Js" />
                                                                </div>
                                                                <p className="paragraph">Next Js</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolsecond">
                                                <p className="tools-tab-text paragraph max-width-70 mx-auto">By considering the performance and reliability, we choose the best backend programming languages that can smoothly support the server side and the overall functionality of the app or website.</p>
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={nodejs} className="responsive-img" alt="Node js" />
                                                                </div>
                                                                <p className="paragraph">Node js</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={java} className="responsive-img" alt="Java" />
                                                                </div>
                                                                <p className="paragraph">Java</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={dotNet} className="responsive-img" alt=".Net" />
                                                                </div>
                                                                <p className="paragraph">.Net</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={python} className="responsive-img" alt="Python" />
                                                                </div>
                                                                <p className="paragraph">Python</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={phpIcon} className="responsive-img" alt="PHP" />
                                                                </div>
                                                                <p className="paragraph">PHP</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={goIcon} className="responsive-img" alt="Golang" />
                                                                </div>
                                                                <p className="paragraph">Golang</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolthird">
                                                <p className="tools-tab-text paragraph max-width-70 mx-auto">We leverage robust programming stacks tailored to the unique needs of various mobile platforms, ensuring optimum functionalities and a seamless user interface on smartphones and tablets.</p>
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={android} className="responsive-img" alt="Android" />
                                                                </div>
                                                                <p className="paragraph">Android</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={flutter} className="responsive-img" alt="Flutter" />
                                                                </div>
                                                                <p className="paragraph">Flutter</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={iOSIcon} className="responsive-img" alt="iOS" />
                                                                </div>
                                                                <p className="paragraph">iOS</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={react} className="responsive-img" alt="React" />
                                                                </div>
                                                                <p className="paragraph">React Native</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={xamarin} className="responsive-img" alt="Xamarin" />
                                                                </div>
                                                                <p className="paragraph">Xamarin</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={cordova} className="responsive-img" alt="Cordova" />
                                                                </div>
                                                                <p className="paragraph">Cordova</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolfourth">
                                                <p className="tools-tab-text paragraph max-width-70 mx-auto">Our hand-picked programming stack is tailored to provide high-performance and feature-rich solutions for desktop apps, giving users a seamless and effective desktop application experience.</p>
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={cPlusIcon} className="responsive-img" alt="C++" />
                                                                </div>
                                                                <p className="paragraph">C++</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={python} className="responsive-img" alt="Python" />
                                                                </div>
                                                                <p className="paragraph">Python</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={cSharp} className="responsive-img" alt="C-Sharp" />
                                                                </div>
                                                                <p className="paragraph">C-Sharp</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={swiftIcon} className="responsive-img" alt="Swift" />
                                                                </div>
                                                                <p className="paragraph">Swift</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={objCIcon} className="responsive-img" alt="OBJ-C" />
                                                                </div>
                                                                <p className="paragraph">OBJ-C</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolfifth">
                                                <p className="tools-tab-text paragraph max-width-70 mx-auto">Scalability, security, and efficiency are the main considerations in our programming stack choices for cloud databases, warehouses, and storage solutions, guaranteeing smooth integration and outstanding performance in cloud environments.</p>
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">AWS</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={amazonDocumentDB} className="responsive-img" alt="Amazon DocumentDB" />
                                                                </div>
                                                                <p className="paragraph">Amazon DocumentDB</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={amazonDynamodb} className="responsive-img" alt="Amazon DynamoDB" />
                                                                </div>
                                                                <p className="paragraph">Amazon DynamoDB</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={amazonRDS} className="responsive-img" alt="Amazon RDS" />
                                                                </div>
                                                                <p className="paragraph">Amazon RDS</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={amazonRedshift} className="responsive-img" alt="Amazon Redshift" />
                                                                </div>
                                                                <p className="paragraph">Amazon Redshift</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Google Cloud Platform</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={googleCloudDatastore} className="responsive-img" alt="Google Cloud Datastore" />
                                                                </div>
                                                                <p className="paragraph">Google Cloud Datastore</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={googleCloudSQL} className="responsive-img" alt="Google Cloud SQL" />
                                                                </div>
                                                                <p className="paragraph">Google Cloud SQL</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Azure</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={azureBlobStorage} className="responsive-img" alt="Azure Blob Storage" />
                                                                </div>
                                                                <p className="paragraph">Azure Blob Storage</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={azureCosmosDB} className="responsive-img" alt="Azure Cosmos DB" />
                                                                </div>
                                                                <p className="paragraph">Azure Cosmos DB</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={azureSQL} className="responsive-img" alt="Azure SQL Database" />
                                                                </div>
                                                                <p className="paragraph">Azure SQL Database</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={azureSynapseAnalytics} className="responsive-img" alt="Azure Synapse Analytics" />
                                                                </div>
                                                                <p className="paragraph">Azure Synapse Analytics</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolsixth">
                                                <p className="tools-tab-text paragraph max-width-70 mx-auto">Our programming stack for DevOps is tailored for streamlined development, testing, and deployment procedures, promoting collaboration and effectiveness across the software development lifecycle.</p>
                                                <div className="tools-languages-tab-content">
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Containerization</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={mesosIcon} className="responsive-img" alt="Mesos" />
                                                                </div>
                                                                <p className="paragraph">Mesos</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={docker} className="responsive-img" alt="Docker" />
                                                                </div>
                                                                <p className="paragraph">Docker</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={kubernetes} className="responsive-img" alt="Kubernetes" />
                                                                </div>
                                                                <p className="paragraph">Kubernetes</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={openShift} className="responsive-img" alt="Openshift" />
                                                                </div>
                                                                <p className="paragraph">Openshift</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">CI/CD Tools</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={awsDeveloperTools} className="responsive-img" alt="Azure Blob Storage" />
                                                                </div>
                                                                <p className="paragraph">AWS Developer Tools</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={azureDevops} className="responsive-img" alt="Azure Devops" />
                                                                </div>
                                                                <p className="paragraph">Azure Devops</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={googleDeveloper} className="responsive-img" alt="Google Developer Tools" />
                                                                </div>
                                                                <p className="paragraph">Google Developer Tools</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={gitlabCI} className="responsive-img" alt="GitLab CI/CD" />
                                                                </div>
                                                                <p className="paragraph">GitLab CI/CD</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={teamCity} className="responsive-img" alt="TeamCity" />
                                                                </div>
                                                                <p className="paragraph">TeamCity</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tools-icon-grid-block">
                                                        <h4 className="heading4">Automation</h4>
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={saltstack} className="responsive-img" alt="SaltStack" />
                                                                </div>
                                                                <p className="paragraph">SaltStack</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={hashiCorpPacker} className="responsive-img" alt="HashiCorp Packer" />
                                                                </div>
                                                                <p className="paragraph">HashiCorp Packer</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={terraform} className="responsive-img" alt="Terraform" />
                                                                </div>
                                                                <p className="paragraph">Terraform</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={puppet} className="responsive-img" alt="Puppet" />
                                                                </div>
                                                                <p className="paragraph">Puppet</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row>
                </Container>     
            </div>

            {/* FAQ section */}
            <div className="faq-panel section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How much does mobile healthcare application development cost?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Getting an estimate of the cost of developing a healthcare app can only be achieved by having a clear understanding of what the application does, what features would it entail, the level of security it would require, and other related factors.</p>
                                            <p>For instance, a doctor appointment app like Zocdoc can cost you around $50,000-$100,000. On the other hand, a full-fledged telemedicine app development cost can even go up to $200,000. And the complete cost of a hospital management system can be around $150,000-$300,000.</p>
                                            <p><a href="/contact-us">Get in touch</a> with our team of healthcare mobile app development service experts now to get an exact estimate for your healthcare software development project.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Will you first create prototypes for testing before moving on to actual app development for healthcare?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Our healthcare app developers construct a prototype to give the clients a realistic sense of the product, as they may expect. Before beginning with the actual development, we change the requirement sets based on the input to produce a final product that fits your expectations.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Do you provide security assurance and HIPAA compliance?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>As the best healthcare app development company, we guarantee that the software designs we develop will be highly secure and meet all HIPAA compliance requirements. Additionally, our healthcare app development service experts perform thorough security testing at regular intervals during the SDLC process, delivering absolutely bug-free software products for clients.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </div>
                               
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What if I return later to request a product improvement?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>As a trusted healthcare app development company, we always welcome our clients with such needs to visit. We would be elated to help you with anything from a UX audit to enhancing the architecture of your software product or including new functionality.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Which is the best platform for healthcare app development?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Your requirements and end goal will determine everything. Choose Android if your user base is spread throughout regions with a higher percentage of Android users, and iOS if it is confined to regions with a higher percentage of iPhone users. If you want to serve the needs of both audiences through custom software development services, you can also go for cross-platform development.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Healthcare