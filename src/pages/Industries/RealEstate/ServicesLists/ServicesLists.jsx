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
        title: "Online Property Booking Solutions",
        link: "#",
        icon: software,
        feature: [
            "Online property booking solutions simplify searches, enable real-time availability, and deliver secure, seamless booking experiences for modern real estate businesses.",
        ]
    },
    {
        title: "Property Management Apps",
        link: "/mobile-app-development-services",
        icon: mobileApp,
        feature: [
            "Property management apps streamline operations, automate tasks, and simplify tenant, maintenance, and property management from one powerful platform.",
        ]
    },
    {
        title: "Home Search Solution",
        link: "#",
        icon: webDevelopemnt,
        feature: [
            "Home search solutions simplify property discovery with smart filters, real-time listings, and personalized results for faster decision-making.",
        ]
    },
    {
        title: "Brokerage Application",
        link: "",
        icon: POCICO,
        feature: [
            "Brokerage applications streamline property transactions, manage client interactions, and empower agents with smart tools for faster, smarter deals.",
        ]
    },
    {
        title: "Centralized Realtor Solution",
        link: "",
        icon: digital,
        feature: [
            "A centralized realtor solution unifies listings, leads, and communications into one powerful platform, enabling seamless management and smarter real estate operations.",
        ]
    },
    {
        title: "Apartment-For-Rent Applications",
        link: "",
        icon: payPerClick,
        feature: [
            "Apartment-for-rent applications simplify rental discovery by showcasing available units, enabling quick inquiries, and streamlining the leasing process for tenants and property managers.",
        ]
    },
    {
        title: "Land-For-Sale Applications",
        link: "",
        icon: blockchainService,
        feature: [
            "Land-for-sale applications simplify property discovery by showcasing available plots, location insights, and inquiry tools for faster, informed buying decisions.",
        ]
    },
    {
        title: "Lead Management Solutions",
        link: "",
        icon: designStrategy,
        feature: [
            "Lead management solutions streamline lead capture, tracking, and follow-ups, helping real estate teams convert prospects into customers more efficiently.",
        ]
    }
]
const ServicesLists = () => {
    return(
        <div className="services_lists_section section-padding bg-gray">
            <Container>
                <Row>
                    <Col>
                    <h1 className="heading_main split textaliginCenter">Engineering the Future of Real Estate with Scalable Digital Ecosystems</h1>
                    <p className="fontSize18 textaliginCenter less-bottom-padding less-top-padding">IAW Technologies builds high-performance, intelligent software that streamlines property management, accelerates sales cycles, and delivers seamless digital experiences for agents and buyers alike.</p>
                        <ServicesGridSection lists={services} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesLists