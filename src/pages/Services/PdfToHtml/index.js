import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCogs, faHandshake, faNewspaper, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// final reflection images
const webDesigning = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/web-designing.png`;
const graphicDesign = `${process.env.REACT_APP_API_URL}/assests/images/services/web-designing/graphic-design.png`;

function PdfToHtml(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"Get PDF to HTML Conversion Services - IosAndWeb Technologies"}
                description={"We offer advanced PDF to HTML conversion services. Our team of HTML conversion will help you to convert your Pdf file into Html version."}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* PDF to HTML Banner */}
            <div className="pdf-to-html-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1><span className="text-highlight">PDF to HTML</span> Designing Services</h1>
                                <div className="heading5">With IosAndWeb, a suite of services, you may have your PDF documents converted into markup optimized for search engines using HTML/XHTML/CSS. Our <b><u>pdf to html converter</u></b> make it easy for consumers to acquire the required papers by pdf to html document conversion. </div>
                                <div className="heading5">This is made possible by our specialists' extensive knowledge in this area.</div>
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
                            <h2 className="heading2 text-center">PDF to HTML Designing Company</h2>
                            <div className="heading5 text-center">We offer <b>pdf to html conversion</b> services, which you can outsource to us, and we will assist you in the creation of pixel-perfect, hand-coded layouts that are compatible with a wide variety of browsers and have a loading time as short as possible. We providing pdf to html designing services with complete accuracy.</div>

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
                                <h2>Why is IosAndWeb the best PDF-to- HTML conversion service available when so many other options exist?</h2>
                            </div>
                            <div className="leadsubtxt">
                                The IosAndWeb Team has been officially acknowledged as one of the Top pdf to html designing services provider. IosAndWeb is widely regarded as one of the world's most successful pdf to html convert online companies. This is mainly attributable to its concentration on converting and sensibly stacking your Portable Document Format into fully mobile responsive, W3C valid HTML5/CS3 codes, as well as the expertise of its front-end developers. We can provide better PDF to responsive HTML conversion services because we accept files in various designs and formats. Some of these designs and structures include but are not limited to PDF, PSD, JPG, PNG, and AI, amongst others.
                            </div>
                        </Col>
                        {/* <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project.
                            </div>
                            <ContactForm />
                        </Col> */}
                    </Row>
                </Container>
            </div>

            {/* Designing services section */}
            <div className="designing-services-section background-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Get PDF to HTML Designing Services</h2>
                            <div className="heading5">Our ability to successfully manage large pdf to html converter projects is ensured by a committed team of professionals with expertise in HTML, XHTML, CSS, and jQuery, as well as other cutting-edge technologies. It is feasible for us to convert your PDF files into HTML, allowing them to be easily distributed and retrieved via the internet.</div>
                            <div className="heading5">Using cutting-edge methodologies, unstructured data can be successfully converted into HTML markup cross-browser compliant and legitimate.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
                                <h4 className="heading4">Compatibility with Multiple Browsers</h4>
                                <p className="paragraph">Experts in quality assurance check to see that your <a href="/">website</a> appears and functions appropriately on the most popular browsers currently in use.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                                <h4 className="heading4">SEO-Friendly</h4>
                                <p className="paragraph">Our pdf to html css converter use coding formats that are structured and friendly to search engines.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
                                <h4 className="heading4">Manual Coding</h4>
                                <p className="paragraph">In our pdf to html conversion services,when we write our markup, we never use any other method except hand-coded markup.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                                <h4 className="heading4">Integration of the CMS is a simple process</h4>
                                <p className="paragraph">The HTML markup on your website can be applied using a variety of Content Management Systems, including Magento, Drupal, Joomla, and WordPress, amongst others.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
                                <h4 className="heading4">PDF to HTML conversion services by Skilled Individuals</h4>
                                <p className="paragraph">The in-house Design Team at IosAndWeb can design html page from pdf, maintaining the look and feel of your print magazine while creating reusable templates for subsequent issues. This hands-off approach gives all of the advantages that our Automated Service does, with a delivery time of fewer than two weeks and rates starting at $15 per PDF page, based on page size and <a href="/web-designing-services"><b>design</b></a> complexity.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Development process section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Instructions that is detailed and Step-by-Step</h2>
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
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Estimate</h4>
                                        <p className="card-text">In return for sending us a copy of your PDF, we will offer you a rough estimate of the delivery cost and a date by which it should be completed.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Constituting</h4>
                                        <p className="card-text">IosAndWeb will first construct templates that can be utilized in subsequent publication versions before converting your pdf to html convert online.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
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
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Review</h4>
                                        <p className="card-text">The feedback provided by the publisher is incorporated into the final pdf to html document designing during the post-conversion phase of the process.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Monthly or Annual Subscription</h4>
                                        <p className="card-text">IosAndWeb, best agency for pdf to html provides a content development service that may be adapted to meet the requirements of any individual client. There is a possibility that you could qualify for a <a href="https://en.wikipedia.org/wiki/Discounting" target="_blank" rel="noreferrer"><b>discount</b></a> on the price of your orders if they are more substantial, more complicated, or more frequent.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

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
                            <h2 className="heading2">Conversion from PDF to responsive HTML performed by an Experienced Staff</h2>
                            <div className="heading5">The code that HTML Specialist developers write is pixel flawless, table-free, handwritten in its entirety, and W3C-validated. The IosAndWeb team comprises some of the industry's most talented front-end programmers and designers. They have a deep-seated dedication to their work and consistently make it a priority to deliver the highest quality outcomes they are capable of. If we work together, we will be able to ensure that the process of converting your PDF to HTML is both satisfying and fruitful.</div>
                            <div className="heading5">The technology platforms and tools RCSL has built well-known for providing high-quality outsourced services. When it comes to the cost of our pdf to html designer services, we will never, under any circumstances, skimp on the quality or the originality of those services. We have a staff of highly skilled and extensively educated pdf to html expert to cater to the particular requirements of your company. We can assist you with transferring the papers you have on paper into an electronic version. Standard procedures and coding are utilized throughout the development of HTML pages. We have no trouble dealing with titles, colors, tags, headers, footers, tables, and other elements that require HTML. You can also use our staff's assistance with hyper-linking, cross-linking, and other services. To supply our clients with the highest possible level of service and results, RCSL makes use of the most cutting-edge technological infrastructure available.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/graphic-designing-services">
                                            <img src={graphicDesign} className="services-bottom-front-image" alt="Graphic Design" />
                                            <h4 className="heading4">Graphic Design</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/web-designing-services">    
                                            <img src={webDesigning} className="services-bottom-front-image" alt="Web Designing" />
                                            <h4 className="heading4">Web Designing</h4>
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

export default PdfToHtml;