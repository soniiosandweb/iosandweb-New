import { Col, Container, Row } from "react-bootstrap";
import ServicesGridSection from "../../../../components/ServicesGridSection/ServicesGridSection";

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
        title: "Software Development",
        link: "/custom-software-development-company",
        icon: software,
        feature: [
            "Custom, scalable software solutions.", 
            "Secure & robust architecture.", 
            "End-to-end build & maintenance.",
        ]
    },
    {
        title: "Mobile App Development",
        link: "/mobile-app-development-services",
        icon: mobileApp,
        feature: [
            "Native & cross-platform apps.", 
            "High-performance mobile UX.", 
            "Secure, scalable features.",
        ]
    },
    {
        title: "Web Development",
        link: "/web-development-services",
        icon: webDevelopemnt,
        feature: [
            "Responsive, fast websites.",
            "Modern full-stack development.",
            "Built for growth & conversions.",
        ]
    },
    {
        title: "Development of POC & ICO",
        link: "https://www.blockchain77.com/services/",
        icon: POCICO,
        feature: [
            "Rapid idea validation.",
            "Functional early-stage builds.",
            "Cost-effective development.",
        ]
    },
    {
        title: "Digital Transformation",
        link: "/digital-marketing-services",
        icon: digital,
        feature: [
            "Modernize legacy systems.",
            "Automate & streamline workflows.",
            "Future-ready tech integration.",
        ]
    },
    {
        title: "Pay Per Click Service",
        link: "/ppc-services",
        icon: payPerClick,
        feature: [
            "Data-driven ad campaigns.",
            "Ongoing optimization.",
            "ROI-focused results.",
        ]
    },
    {
        title: "Blockchain Service",
        link: "https://www.blockchain77.com/services/",
        icon: blockchainService,
        feature: [
            "Secure decentralized solutions.",
            "Smart contract development.",
            "Custom blockchain apps.",
        ]
    },
    {
        title: "Ideation & Design Strategy",
        link: "/web-designing-services",
        icon: designStrategy,
        feature: [
            "Concept discovery sessions.",
            "User-first design approach.",
            "UI/UX strategy & planning.",
        ]
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