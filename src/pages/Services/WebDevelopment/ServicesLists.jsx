import { Col, Container, Row } from "react-bootstrap";
import ServicesGridSection from "../../../components/ServicesGridSection/ServicesGridSection";

const software = `${process.env.REACT_APP_API_URL}/assests/services/software-development/software.webp`;
const mobileApp = `${process.env.REACT_APP_API_URL}/assests/services/software-development/mobile-app.webp`;
const webDevelopemnt = `${process.env.REACT_APP_API_URL}/assests/services/software-development/web-developemnt.webp`;
const POCICO = `${process.env.REACT_APP_API_URL}/assests/services/software-development/POC-ICO.webp`;
const digital = `${process.env.REACT_APP_API_URL}/assests/services/software-development/digital.webp`;
const payPerClick = `${process.env.REACT_APP_API_URL}/assests/services/software-development/pay-per-click.webp`;
const blockchainService = `${process.env.REACT_APP_API_URL}/assests/services/software-development/blockchain-service.webp`;
const designStrategy = `${process.env.REACT_APP_API_URL}/assests/services/software-development/design-strategy.webp`;

const services = [
    {
        title: "Front-End Development",
        link: "/custom-software-development-company",
        icon: software,
        feature: ["Responsive, fast-loading interfaces that convert visitors into customers through intuitive design and flawless cross-device performance. "]
    },
    {
        title: "Custom Web Development",
        link: "/mobile-app-development-services",
        icon: mobileApp,
        feature:[ "Bespoke solutions built to your exact specifications—no templates, no limitations, no compromises on functionality or vision."]
    },
    {
        title: "E-Commerce Development",
        link: "/web-development-services",
        icon: webDevelopemnt,
        feature: ["Revenue-driving online stores powered by Magento and custom platforms—optimized checkout flows, personalized experiences, unlimited scalability."]
    },
    {
        title: "Web Application Frameworks",
        link: "https://www.blockchain77.com/services/",
        icon: POCICO,
        feature: ["PHP-powered applications using Laravel, Symfony, and modern frameworks—secure, maintainable, and built for performance."]
    },
    {
        title: "Open Source Platform Development",
        link: "/digital-marketing-services",
        icon: digital,
        feature:[ "WordPress, Magento, Drupal, Joomla expertise—customized enterprise solutions at a fraction of proprietary software costs."]
    },
    {
        title: "Core Web Development",
        link: "/ppc-services",
        icon: payPerClick,
        feature:[ "Solid foundations with clean code—robust architecture that handles growth, traffic spikes, and complex functionality without breaking."]
    },
    {
        title: "Technology & Architecture",
        link: "https://www.blockchain77.com/services/",
        icon: blockchainService,
        feature: ["Scalable infrastructure designed for the long term—cloud-ready, API-first, microservices-compatible architectures that adapt to change."]
    },
    {
        title: "Performance & Security",
        link: "/web-designing-services",
        icon: designStrategy,
        feature: ["Sub-second load times with military-grade security—SSL, encryption, DDoS protection, regular audits, and proactive threat monitoring."]
    },   {
        title: "UI / UX & Experience",
        link: "/web-designing-services",
        icon: designStrategy,
        feature: ["Data-driven design that reduces bounce rates and increases conversions—every element optimized for user satisfaction and business goals."]
    },   {
        title: "Maintenance & Growth",
        link: "/web-designing-services",
        icon: designStrategy,
        feature: ["Proactive updates, security patches, performance optimization, and feature enhancements—keeping your platform competitive and current."]
    },   {
        title: "Performance & Security",
        link: "/web-designing-services",
        icon: designStrategy,
        feature: ["Sub-second load times with military-grade security—SSL, encryption, DDoS protection, regular audits, and proactive threat monitoring."]
    },     {
        title: "Enterprise Web Solutions",
        link: "/web-designing-services",
        icon: designStrategy,
        feature: ["Mission-critical systems for large organizations—advanced integrations, custom workflows, compliance-ready, and built to handle millions of users."]
    }
]

const ServicesLists = () => {
    return(
        <div className="services_lists_section section-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <ServicesGridSection lists={services} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesLists