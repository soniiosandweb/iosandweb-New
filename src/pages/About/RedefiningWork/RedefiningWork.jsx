import "./RedefiningWork.css";
import { Col, Container, Row } from "react-bootstrap";
import ServicesGridSection from "../../../components/ServicesGridSection/ServicesGridSection";

const aboutOverlay = `${process.env.REACT_APP_API_URL}/assests/about/about_overlay.webp`;
const circleGroup = `${process.env.REACT_APP_API_URL}/assests/circle-group.webp`;
const squareGroup = `${process.env.REACT_APP_API_URL}/assests/square-group.webp`;

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
        title: "Learning & Development",
        link: "/",
        icon: software,
        feature: [
            "We encourage continuous learning through skill enhancement, knowledge sharing, and hands-on experience to help our team grow professionally and personally."
        ]
    },
    {
        title: "Mindful Personal Guidance",
        link: "/",
        icon: mobileApp,
        feature: [
            "We provide thoughtful guidance and mentorship that supports individual growth, well-being, and professional development."
        ]
    },
    {
        title: "Constructive Feedback",
        link: "/",
        icon: webDevelopemnt,
        feature: [
            "We promote open and constructive feedback to encourage continuous improvement, collaboration, and professional growth.",
        ]
    },
    {
        title: "Inclusive & Open-Culture",
        link: "/",
        icon: POCICO,
        feature: [
            "We foster an inclusive and open environment where diverse ideas are valued, voices are heard, and everyone feels respected.",
        ]
    },
    {
        title: "Innovation & Quality First",
        link: "/",
        icon: digital,
        feature: [
            "We prioritize innovation and uncompromising quality to deliver solutions that create lasting value.",
        ]
    },
    {
        title: "Proactive Implementation",
        link: "/",
        icon: payPerClick,
        feature: [
            "We take a proactive approach to planning and execution, ensuring efficient delivery and reliable outcomes.",
        ]
    },
    {
        title: "Best & Global Opportunities",
        link: "/",
        icon: blockchainService,
        feature: [
            "We provide our team with access to exciting global opportunities that foster growth, learning, and career advancement.",
        ]
    },
    {
        title: "Work with Latest Technology",
        link: "/",
        icon: designStrategy,
        feature: [
            "We equip our team to work with cutting-edge tools and technologies, fostering innovation and excellence in every project.",
        ]
    }
]

const RedefiningWork = () => {
    return(
        <div className="redefining_work_section section-padding linear-dark-background">
            <img src={aboutOverlay} alt="Redefining Work-Life Balance Through Innovation" className="redefining_overlay" />
            <div className="redefining_animations">
                <Container>
                    <img src={circleGroup} alt="Circle" className="redefining_circle" />
                    <img src={squareGroup} alt="Square" className="redefining_square square_top" />
                    <img src={squareGroup} alt="Square" className="redefining_square" />
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">Redefining Work-Life Balance Through Innovation</h2>
                        <p className="paragraph_content text-center less-bottom-padding">Supporting People Beyond the Workplace</p>
                        <ServicesGridSection lists={services} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RedefiningWork