import { Link } from "react-router-dom";
import "./ExpertiseSection.css";
import { Col, Container, Row } from "react-bootstrap";

const webDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/services-page/web-development.svg`;
const mobileAppDevelop = `${process.env.REACT_APP_API_URL}/assests/services/services-page/mobile-app-develop.svg`;
const magento = `${process.env.REACT_APP_API_URL}/assests/services/services-page/magento.svg`;
const blockchain = `${process.env.REACT_APP_API_URL}/assests/services/services-page/blockchain.svg`;
const digitalTransformation = `${process.env.REACT_APP_API_URL}/assests/services/services-page/digital-transformation.svg`;
const algorand = `${process.env.REACT_APP_API_URL}/assests/services/services-page/algorand.svg`;
const POCICO = `${process.env.REACT_APP_API_URL}/assests/services/services-page/POC-ICO.svg`;
const ideation = `${process.env.REACT_APP_API_URL}/assests/services/services-page/ideation.svg`;

const servicesLists = [
    {
        icon: webDevelopment,
        link: "/web-development-services",
        title: "Web Development",
        content: "Fast, scalable, conversion-focused websites",
    },
    {
        icon: mobileAppDevelop,
        link: "/mobile-app-development-services",
        title: "Mobile App Development",
        content: "IOS & Android experiences users love",
    },
    {
        icon: magento,
        link: "/magento-development-services",
        title: "Magento Development",
        content: "Development demands strong planning, design, content, and execution—and IosAndWeb expertly manages every aspect",
    },
    {
        icon: blockchain,
        link: "https://www.blockchain77.com/services/",
        title: "Blockchain Development",
        content: "Secure, innovative Web3 solutions",
    },
    {
        icon: digitalTransformation,
        link: "/digital-marketing-services",
        title: "Digital Transformation",
        content: "Smart automation & modernization",
    },
    {
        icon: algorand,
        link: "https://www.blockchain77.com/services/",
        title: "Algorand Smart Contract",
        content: "We develop smart contracts that simplify execution and support Hyperledger Fabric and Ethereum ecosystems",
    },
    {
        icon: POCICO,
        link: "https://www.blockchain77.com/services/",
        title: "Development of POC & ICO",
        content: "Validated concepts & token launches",
    },
    {
        icon: ideation,
        link: "/web-designing-services",
        title: "Ideation & Design Strategy",
        content: "We transform ideas into interactive digital experiences that boost engagement, usability, and long-term growth",
    },
]

const ExpertiseSection = () => {
    return(
        <div className="services_expertise_section section-padding no-bottom-padding body-background">
            <Container>
                <Row>
                    <Col className="less-top-padding">
                        <h2 className="heading_main text-center split">Our Expertise</h2>
                        <p className="paragraph_content text-center">Comprehensive Digital Solutions, Delivered With Precision</p>
                        <div className="services_expertise_grid less-top-padding">
                            {servicesLists.map((item,i) => (
                                <Link reloadDocument to={item.link} className="services_expertise_item" key={i}>
                                    <div className="services_expertise_icon_box">
                                        <img src={item.icon} alt={item.title} className="services_expertise_icon" />
                                    </div>
                                    <p className="paragraph_content">{item.title}</p>
                                    <p className="services_expertise_text">{item.content}</p>
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExpertiseSection