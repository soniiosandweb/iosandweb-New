import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav, Accordion } from "react-bootstrap";
import SEO from "../../../components/SEO";
import OwlCarousel from "react-owl-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircle, faCircleDot, faListCheck, faRocket, faCog, faCubes, faCheckSquare, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const generativeAIBanner = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/generative-ai-banner.webp`;

// reasons to choose images
const modelDevelopment = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/model-development.png`;
const modelReplication = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/model-replication.png`;
const modelDeployment = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/model-deployment.png`;
const maintenance = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/maintenance.png`;
const modelTuning = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/model-tuning.png`;
const modelArchitecting = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/architecting.png`;

// industries images
const healthCare = `${process.env.REACT_APP_API_URL}/assests/images/home/health-care.png`;
const finance = `${process.env.REACT_APP_API_URL}/assests/images/home/finance.png`;
const restaurant = `${process.env.REACT_APP_API_URL}/assests/images/home/restaurant.png`;
const ecommerce = `${process.env.REACT_APP_API_URL}/assests/images/home/ecommerce-indus.svg`;
const realEstate = `${process.env.REACT_APP_API_URL}/assests/images/home/real-estate.png`;
const banking = `${process.env.REACT_APP_API_URL}/assests/images/home/banking.png`;
const travel = `${process.env.REACT_APP_API_URL}/assests/images/home/travel.png`;
const entertainment = `${process.env.REACT_APP_API_URL}/assests/images/home/entertainment.png`;
const onDemand = `${process.env.REACT_APP_API_URL}/assests/images/home/on-demand-indus.svg`;
const socialMedia = `${process.env.REACT_APP_API_URL}/assests/images/home/social-networking-indus.svg`;
const edtech = `${process.env.REACT_APP_API_URL}/assests/images/home/education-indus.svg`;

// capabilities section images
const seasonedExperts = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/expert-teams.webp`;
const collaborate = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/collaborate.webp`;
const innovativeSolutions = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/innovative-solutions.webp`;
const upgradeMaintenance = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/upgrade-maintenance.webp`;

// Advanced technologies images
const gpt = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/gpt.png`;
const dall = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/dall-e.png`;
const whisper = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/whisper.png`;
const midJourney = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/midjourney.png`;
const bard = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/bard.png`;
const diffusion = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/diffusion.png`;

// Tools and technologies images
const tensorFlow = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/tensorflow.png`;
const pyTorch = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/PyTorch.png`;
const keras = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/Keras.png`;
const mxnet = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/mxnet.png`;
const theano = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/theano.png`;
const chainer = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/chainer.png`;
const torch = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/torch.png`;
const chatGPT = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/ChatGPT.png`;
const huggingFace = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/hugging-face.png`;
const deepmindSonnet = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/deepmind-sonnet.png`;
const fastAI = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/fastai.png`;
const gpt4 = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/gpt-4.png`;
const pix2pix = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/pix-2-pix.png`;
const waveGan = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/wavegan.png`;
const deepArt = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/deepart.png`;
const cnnIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/cnn-icon.png`;
const rnnIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/rnn-icon.png`;
const autoencoder = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/autoencoders.png`;
const drlnIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/drln-icon.png`;
const vaeIcon = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/vae-icon.png`;
const alexNet = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/alexnet-icon.png`;
const mobileNet = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/mobilenet-icon.png`;
const googleNet = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/googlenet-icon.png`;
const inception = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/inception-icon.png`;
const squeezeNet = `${process.env.REACT_APP_API_URL}/assests/images/industries/generative-ai/squeezenet-icon.png`;


function GenerativeAI(){

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
                title={"Generative AI Development Services | IosAndWeb Technologies"}
                description={"IosAndWeb Technologies provides generative AI development services to build smart AI solutions, automate tasks, and create innovative applications for businesses."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">Generative AI</span> Development Services</h1>
                                <div className="heading5">Deploy the revolutionary capabilities of Generative AI to scale your business to a new growth landscape</div>

                                <div className="btn-section">
                                    <a href="/contact-us" className="btn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>

                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={generativeAIBanner} alt="Generative AI" />
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
                            <h2 className="heading2 max-width-70">Capture Global Attention with State-of-the-Art Generative AI Services</h2>
                            <div className="heading5 max-width-70">Our 100+ adept professionals leverage generative artificial intelligence to create intelligent applications unlocking boundless possibilities. By seamlessly integrating generative AI into your digital products, we help you enhance efficiency, streamline processes, and skyrocket your business to new heights.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Generative AI Model Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Generative AI Model Replication</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Model Integration and Deployment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Upgrade and Maintenance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> AI Model Fine Tuning</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> AI Model Architecting</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={modelDevelopment} alt="Model Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Generative AI Model Development</h3>
                                            <p className="paragraph">Our team harnesses the power of machine learning algorithms, including RNNs, Transformers, Markov Chain, GANs, and Autoencoders for developing bespoke generative AI models that meet your specific business requirements. We carefully configure and train these models as per industry standards to ensure high-quality generative AI solutions development.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={modelReplication} alt="Model Replication" className="reasons-content-icon" />
                                            <h3 className="heading3">Generative AI Model Replication</h3>
                                            <p className="paragraph">As a leading generative AI development company, we offer high-end generative AI model replication services that enable businesses to replicate successful models such as ChatGPT and DALL-E, thus accelerating growth and innovation. Our generative AI modeling services help them unlock new growth opportunities and gain a competitive edge in their niche.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={modelDeployment} alt="Model Deployment" className="reasons-content-icon" />
                                            <h3 className="heading3">Model Integration and Deployment</h3>
                                            <p className="paragraph">Our team thoroughly evaluates your business needs to guarantee a secure and efficient integration and deployment of AI models. Our all-inclusive Generative AI development services comprise building the most suitable model, customizing it to meet your specifications, and effectively managing the integration, testing, and deployment process.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={maintenance} alt="Maintenance" className="reasons-content-icon" />
                                            <h3 className="heading3">Upgrade and Maintenance</h3>
                                            <p className="paragraph">Our highest priority is helping our clients stay at the forefront of technology. As a leading generative AI consulting services provider, our skilled developers upgrade and maintain generative AI models, allowing businesses to optimize performance, adapt to evolving requirements, and drive continued growth and innovation.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={modelTuning} alt="Model Tuning" className="reasons-content-icon" />
                                            <h3 className="heading3">AI Model Fine Tuning</h3>
                                            <p className="paragraph">Our AI model fine-tuning service involves optimizing and customizing the previously-trained AI models, allowing them to adapt to changing or domain-specific use cases and data sets. Leveraging the existing AI models and tweaking them finely allows for more accurate predictions and improved decision-making capabilities.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={modelArchitecting} alt="Model Architecting" className="reasons-content-icon" />
                                            <h3 className="heading3">AI Model Architecting</h3>
                                            <p className="paragraph">Our team of artificial intelligence experts is highly equipped to collaborate with you in designing and architecting new or existing AI models, selecting the appropriate neural network architecture and optimizing hyperparameters. As a dedicated Generative AI solutions provider, our unmatched efficiency and proven experience can convert your business vision into functional solutions that effectively addresses real-world problems in real time.</p>
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
                                    <h2 className="heading2">Build a strong ground to grow your Generative AI idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Tech Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">10+</span>
                                            <span className="industries-numbers-text">Years of experience</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Client Satisfaction Rate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* services section */}
            <div className="designing-services-section industries-ai-section section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70 m-auto text-center">Leveraging Artificial Intelligence across Multiple Industrial Domains</h2>
                            <div className="heading5 max-width-70 mx-auto text-center">The rapidly evolving AI technology is transforming the business landscape across various industries. As a dedicated Generative AI development company, we continuously explore innovative use cases to unlock the potential benefits of Generative AI tools for organizations across sectors.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/ecommerce-app-development">
                                    <figure>
                                        <img src={ecommerce} alt="eCommerce" />
                                    </figure>
                                    <h4 className="heading4">eCommerce</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/real-estate-app-development">
                                    <figure>
                                        <img src={realEstate} alt="Real Estate" />
                                    </figure>
                                    <h4 className="heading4">Real Estate</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/healthcare-software-development">
                                    <figure>
                                        <img src={healthCare} alt="Healthcare" />
                                    </figure>
                                    <h4 className="heading4">Healthcare</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={finance} alt="Finance" />
                                    </figure>
                                    <h4 className="heading4">Finance</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={restaurant} alt="Restaurant" />
                                    </figure>
                                    <h4 className="heading4">Restaurant</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={banking} alt="Banking" />
                                    </figure>
                                    <h4 className="heading4">Banking</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={travel} alt="Travel" />
                                    </figure>
                                    <h4 className="heading4">Travel</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={entertainment} alt="Entertainment" />
                                    </figure>
                                    <h4 className="heading4">Entertainment</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={onDemand} alt="On-Demand" />
                                    </figure>
                                    <h4 className="heading4">On-Demand</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={socialMedia} alt="Social Media" />
                                    </figure>
                                    <h4 className="heading4">Social Media</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={edtech} alt="Education" />
                                    </figure>
                                    <h4 className="heading4">Education</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={finance} alt="eCommerce" />
                                    </figure>
                                    <h4 className="heading4">Agriculture</h4>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries Capabilities section */}
            <div className="what-software-section industries-capabilities-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt max-width-70">
                                <h2>Know Why Leaders Make Us Their Go-To Generative AI Development Company</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                            With our custom Generative AI services, we enable businesses to embark on a transformative journey while paving the way to unparalleled growth and innovation.
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
                                                <Nav.Link eventKey="cpfirst"><FontAwesomeIcon icon={faCircle} /> Seasoned Experts</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond"><FontAwesomeIcon icon={faCircle} /> Integrated Collaboration</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird"><FontAwesomeIcon icon={faCircle} /> Innovative Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfourth"><FontAwesomeIcon icon={faCircle} /> Continuous Upgrades and Maintenance</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={seasonedExperts} className="responsive-img" alt="Seasoned Experts" />
                                                    </div>
                                                    <p className="paragraph">Our team comprises experienced machine learning engineers, data scientists, and domain experts specialized in building Generative AI models. As a dedicated generative AI consulting services provider, we harness the power of Generative AI to create dynamic and intelligent solutions custom to your business goals.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={collaborate} className="responsive-img" alt="Integrated Collaboration" />
                                                    </div>
                                                    <p className="paragraph">As a trusted Generative AI development company, we place a high premium on effective communication and collaboration. Our team of experts is dedicated to ensuring seamless collaboration, providing regular updates, and promptly addressing any concerns or questions you may have.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={innovativeSolutions} className="responsive-img" alt="Innovative Solutions" />
                                                    </div>
                                                    <p className="paragraph">Our team of experts combines amplified creativity with the latest tech stack to transform your business using Generative AI models. As a dedicated generative AI development firm, our domain expertise provides unique access and insights into cutting-edge AI technology and base models, resulting in business breakthroughs and innovation.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfourth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={upgradeMaintenance} className="responsive-img" alt="Upgrades and Maintenance" />
                                                    </div>
                                                    <p className="paragraph">Our company provides constant upgrades and maintenance services to ensure that your business solution stays up-to-date with the latest AI trends. Our Generative AI development services also include post-optimization upgrades, fine-tuning, utilization of robust hardware, and development of new algorithms.</p>
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

            {/* Industries process slider */}
            <div className="industries-process-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center max-width-70 mx-auto">Our Seamless Generative AI Software Development Process</h2>
                            <div className="heading5 text-center max-width-70 mx-auto">Our expert Generative AI developers take a comprehensive approach to understanding your organization's objectives and goals. As a dedicated Generative AI development agency, we strive to develop an engaging, user-friendly, and seamless Generative AI solution tailored to your target audience.</div>

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
                                            <span className="process-icon"><FontAwesomeIcon icon={faCubes} /></span>
                                            <h4 className="heading4">Data Gathering</h4>
                                            <p className="paragraph">This stage involves comprehending the client's goals and needs by collecting information on the intended functionality, target audience, and business objectives. This ensures that the generative AI solution aligns with the client's vision.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faListCheck} /></span>
                                            <h4 className="heading4">Data Preparation</h4>
                                            <p className="paragraph"> In the subsequent stage of Generative AI software development, our expert team organizes the essential data to train the generative AI models. This comprises obtaining the datasets, refining and prepping them, and validating their quality and reliability to ensure precise model training.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCheckSquare} /></span>
                                            <h4 className="heading4">Model Training</h4>
                                            <p className="paragraph">Advanced deep learning algorithms are employed to train models during this stage of generative AI application development. These models learn from the provided data, capturing patterns and generating outputs accordingly. Through iterations and fine-tuning, the training process optimizes the model's performance, ensuring it generates the desired output with enhanced accuracy and effectiveness.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCog} /></span>
                                            <h4 className="heading4">Testing and Validation</h4>
                                            <p className="paragraph"> After the generative AI models are trained, they undergo a thorough testing and validation process. This includes evaluating the model's performance, accuracy, reliability, and robustness. Our rigorous testing techniques carried out during generative AI product development identify potential issues or areas for improvement before deploying the solution.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faRocket} /></span>
                                            <h4 className="heading4">Deployment and Integration</h4>
                                            <p className="paragraph"> After the generative AI solution has been successfully tested, it is deployed and integrated into the client's existing systems or applications. The integration process is carefully executed to ensure seamless integration, compatibility, and scalability to support the client's operational needs.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faFileCode} /></span>
                                            <h4 className="heading4">Monitoring and Maintenance</h4>
                                            <p className="paragraph"> Continuous monitoring and maintenance are essential for the optimal performance of the generative AI solution after deployment. This stage of generative AI software development includes monitoring for issues, updating models, and incorporating feedback to improve the solution over time.</p>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Advanced technologies section */}
            <div className="advanced-technologies section-padding">
                <Container>
                    <Row>
                        <Col md={6} lg={7}>
                            <div className="sticky-div">
                                <h2 className="heading2">Innovation Built on Expertise: AI Models We Utilize for Your Business</h2>
                                <div className="heading5">Harnessing the capabilities of AI models, we build efficient and robust business solutions that unlock new possibilities for innovation, automation, and personalization. These AI models have the power to deliver intelligent business tools that can enhance the UX, reinvent engagement, optimize business processes, and much more.</div>
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <div className="advanced-technologies-blocks">

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={gpt} className="responsive-img" alt="GPT" />
                                        </span>
                                        <h4 className="heading4">GPT</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">We help businesses integrate the capabilities of GPT 3, GPT 3.5, and GPT 4 into their applications to enable natural language processing, create conversations, and develop intelligent chatbots.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={dall} className="responsive-img" alt="DALL-E" />
                                        </span>
                                        <h4 className="heading4">DALL-E</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">With our specialized knowledge in DALL-E, we assist businesses in creating and regenerating plausible images. We leverage DALL-E's zero-shot reasoning to create unique and compelling visuals, helping businesses enhance their design processes and explore new possibilities in digital content creation.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={whisper} className="responsive-img" alt="Whisper" />
                                        </span>
                                        <h4 className="heading4">Whisper</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Our experts utilize the power of the adaptable speech recognition model, Whisper to enable businesses to demonstrate exceptional proficiency in functions, including language identification, translation, and multilingual speech recognition.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={midJourney} className="responsive-img" alt="Midjourney" />
                                        </span>
                                        <h4 className="heading4">Midjourney</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">With MidJourney, an AI-powered image generator, we enable businesses to enhance their creative endeavors and bring a unique yet artistic touch to their projects. The model allows them to develop visually appealing and expressive images that resonate with their target audience.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={bard} className="responsive-img" alt="Bard" />
                                        </span>
                                        <h4 className="heading4">Bard</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">By integrating Bard, a cutting-edge AI chatbot powered by LaMDA, into their systems, organizations can enhance the user experience for their valued customers. By leveraging the capabilities of this AI model, they can facilitate personalized and seamless interactions, be it for addressing customer inquiries, providing support, or offering tailored recommendations.</p>
                                    </div>
                                </div>

                                <div className="advanced-technologies-block">
                                    <div className="advanced-technologies-top">
                                        <span className="advanced-technologies-icon">
                                            <img src={diffusion} className="responsive-img" alt="Stable Diffusion" />
                                        </span>
                                        <h4 className="heading4">Stable Diffusion</h4>
                                    </div>
                                    <div className="advanced-technologies-bottom">
                                        <p className="paragraph">Enterprises can effectively leverage Stable Diffusion to optimize their operations and attain superior results. The capabilities of Stable Diffusion allow innovative possibilities in image generation across different disciplines, such as design, marketing, and content creation.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Tools and languages section */}
            <div className="tools-languages-section tools-ai-industries section-padding text-white text-center bg-black">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Tech Stack We Utilize to Transform the Digital Landscape through Generative AI Development Services</h2>
                            <div className="heading5">Our near-decade expertise in developing custom business solutions can strengthen your brand, drive business growth, and help you reach a wider audience. Our skilled developers harness the latest tools, frameworks, and technologies to offer Generative AI development services that help you attain business resilience.</div>

                            <div className="tools-languages-tab-div">
                                <Tab.Container id="tools-languages-tab" defaultActiveKey="toolfirst">
                                    <div className="tools-languages-tab-top tools-languages-tab-cols">
                                        <Nav variant="pills" className="tools-languages-tab flex-row justify-content-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfirst">Deep Learning (DL) Frameworks</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolsecond">Modules/Toolkits</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolthird">Generative AI Models</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfourth">Neural Networks</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolfifth">Libraries</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toolsixth">Image Classification Models</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="tools-languages-tab-bottom tools-languages-tab-cols">
                                        <Tab.Content>

                                            <Tab.Pane eventKey="toolfirst">
                                                <div className="tools-languages-tab-content">

                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={tensorFlow} className="responsive-img" alt="TensorFlow" />
                                                                </div>
                                                                <p className="paragraph">TensorFlow</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={pyTorch} className="responsive-img" alt="PyTorch" />
                                                                </div>
                                                                <p className="paragraph">PyTorch</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={keras} className="responsive-img" alt="Keras" />
                                                                </div>
                                                                <p className="paragraph">Keras</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={mxnet} className="responsive-img" alt="MXNet" />
                                                                </div>
                                                                <p className="paragraph">MXNet</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={theano} className="responsive-img" alt="Theano" />
                                                                </div>
                                                                <p className="paragraph">Theano</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={chainer} className="responsive-img" alt="Chainer" />
                                                                </div>
                                                                <p className="paragraph">Chainer</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={torch} className="responsive-img" alt="Torch" />
                                                                </div>
                                                                <p className="paragraph">Torch</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolsecond">
                                                <div className="tools-languages-tab-content">
                                                    
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={chatGPT} className="responsive-img" alt="OpenAI GPT" />
                                                                </div>
                                                                <p className="paragraph">OpenAI GPT</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={chatGPT} className="responsive-img" alt="OpenAI DALL-E" />
                                                                </div>
                                                                <p className="paragraph">OpenAI DALL-E</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={huggingFace} className="responsive-img" alt="Hugging Face Transformers" />
                                                                </div>
                                                                <p className="paragraph">Hugging Face Transformers</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={deepmindSonnet} className="responsive-img" alt="DeepMind Sonnet" />
                                                                </div>
                                                                <p className="paragraph">DeepMind Sonnet</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={tensorFlow} className="responsive-img" alt="TensorFlow" />
                                                                </div>
                                                                <p className="paragraph">TensorFlow Probability</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={fastAI} className="responsive-img" alt="Fast.ai" />
                                                                </div>
                                                                <p className="paragraph">Fast.ai</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolthird">
                                                <div className="tools-languages-tab-content">

                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={chatGPT} className="responsive-img" alt="GPT-3" />
                                                                </div>
                                                                <p className="paragraph">GPT-3</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={gpt4} className="responsive-img" alt="GPT-4" />
                                                                </div>
                                                                <p className="paragraph">GPT-4</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={chatGPT} className="responsive-img" alt="DALL-E" />
                                                                </div>
                                                                <p className="paragraph">DALL-E</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={pix2pix} className="responsive-img" alt="Pix2Pix" />
                                                                </div>
                                                                <p className="paragraph">Pix2Pix</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={waveGan} className="responsive-img" alt="WaveGAN" />
                                                                </div>
                                                                <p className="paragraph">WaveGAN</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={deepArt} className="responsive-img" alt="DeepArt" />
                                                                </div>
                                                                <p className="paragraph">DeepArt</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolfourth">
                                                <div className="tools-languages-tab-content">
                                                    
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={cnnIcon} className="responsive-img" alt="CNN" />
                                                                </div>
                                                                <p className="paragraph">CNN</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={rnnIcon} className="responsive-img" alt="RNN" />
                                                                </div>
                                                                <p className="paragraph">RNN</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={drlnIcon} className="responsive-img" alt="DRLN" />
                                                                </div>
                                                                <p className="paragraph">DRLN</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={vaeIcon} className="responsive-img" alt="VAE" />
                                                                </div>
                                                                <p className="paragraph">VAE</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={autoencoder} className="responsive-img" alt="Autoencoders" />
                                                                </div>
                                                                <p className="paragraph">Autoencoders</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolfifth">
                                                <div className="tools-languages-tab-content">
                                                    
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={tensorFlow} className="responsive-img" alt="TensorFlow" />
                                                                </div>
                                                                <p className="paragraph">TensorFlow</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={pyTorch} className="responsive-img" alt="PyTorch" />
                                                                </div>
                                                                <p className="paragraph">PyTorch</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={keras} className="responsive-img" alt="Keras" />
                                                                </div>
                                                                <p className="paragraph">Keras</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={mxnet} className="responsive-img" alt="MXNet" />
                                                                </div>
                                                                <p className="paragraph">MXNet</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={fastAI} className="responsive-img" alt="FastAI" />
                                                                </div>
                                                                <p className="paragraph">FastAI</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={theano} className="responsive-img" alt="Theano" />
                                                                </div>
                                                                <p className="paragraph">Theano</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="toolsixth">
                                                <div className="tools-languages-tab-content">
                                                    
                                                    <div className="tools-icon-grid-block">
                                                        <div className="tools-icon-panel">
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={alexNet} className="responsive-img" alt="AlexNet" />
                                                                </div>
                                                                <p className="paragraph">AlexNet</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={mobileNet} className="responsive-img" alt="MobileNet" />
                                                                </div>
                                                                <p className="paragraph">MobileNet</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={googleNet} className="responsive-img" alt="GoogLeNet" />
                                                                </div>
                                                                <p className="paragraph">GoogLeNet</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={inception} className="responsive-img" alt="Inception" />
                                                                </div>
                                                                <p className="paragraph">Inception</p>
                                                            </div>
                                                            <div className="tools-icon-grid">
                                                                <div className="tools-icon-img">
                                                                    <img src={squeezeNet} className="responsive-img" alt="SqueezeNet" />
                                                                </div>
                                                                <p className="paragraph">SqueezeNet</p>
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
            <div className="faq-panel section-padding less-top-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How much does it cost to develop generative AI solutions? </Accordion.Header>
                                        <Accordion.Body>
                                            <p>The cost of developing generative AI solutions like ChatGPT can vary between $100,000 and $500,000. There are several factors that impact the development costs, such as:</p>
                                            <ul>
                                                <li>The complexity of the project</li>
                                                <li>Size and scope of the dataset</li>
                                                <li>Resources required for computation</li>
                                                <li>Timeframe for development</li>
                                                <li>Customization and integration requirements</li>
                                                <li>The expertise of the development team</li>
                                                <li>Support and maintenance requirements</li>
                                                <li>Deployment and infrastructure costs</li>
                                                <li>Licensing and usage fees for third-party tools</li>
                                            </ul>
                                            <p><a href="/contact-us">Get in touch</a> with our generative AI experts to get clear cost estimates.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Why choose IosAndWeb Technologies for Generative AI development services?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Hiring a dedicated Generative AI development company like IosAndWeb Technologies can offer multiple benefits, including increased efficiency, accuracy, and cost savings.</p>
                                            <p>By utilizing multiple advanced AI models, we build technology solutions that allow you to streamline operations and achieve better outcomes. From aiding in task automation to improving the overall decision-making process, our Generative AI solutions offer your business a competitive edge.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </div>
                               
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How much time does it take to build a robust generative AI solution?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>The time frame for generative AI application development varies as per the overall complexity of the project. For instance, a highly complex solution with an extensive feature set can take around 10-18 months, or more. On the other hand, a simple generative AI solution with minimum features can take between 3 to 6 months. A dedicated generative AI consulting services provider like IosAndWeb Technologies can help you with exact time estimates based on your custom business requirements.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What is IosAndWeb Technologies Generative AI integration process?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Here is the Generative AI integration process we follow in order to deliver robust business solutions:</p>
                                            <ul>
                                                <li><b>Evaluation:</b> We carefully study your project requirements and create a well-designed plan to meet them effectively.</li>
                                                <li><b>Exploration:</b> We gather and analyze the necessary data thoroughly to find meaningful patterns and connections related to your requirements.</li>
                                                <li><b>Pilot Project:</b> We conduct small-scale test projects to identify any gaps between the current system and the proposed improvements.</li>
                                                <li><b>Development and Deployment:</b> We build and integrate the generative AI model into your existing app, thoroughly testing it to ensure accurate and reliable results.</li>
                                            </ul>
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

export default GenerativeAI;