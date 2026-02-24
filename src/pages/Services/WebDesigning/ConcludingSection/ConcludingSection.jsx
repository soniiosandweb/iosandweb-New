import { Col, Container, Row } from "react-bootstrap";
import ConcludingServicesLists from "../../../../components/ConcludingServicesLists/ConcludingServicesLists";

const appDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/app-development.webp`;
const crmDevelopment = `${process.env.REACT_APP_API_URL}/assests/services/crm-development.webp`;

const servicesLists = [
    {
        icon: appDevelopment,
        title: "PDF to HTML Designing Services",
        link: "/web-development-services",
    },
    {
        icon: crmDevelopment,
        title: "Graphic Design",
        link: "/crm-development-for-healthcare-industry",
    },
]

const ConcludingSection = () => {
    return(
        <div className="concluding_section paddingBottm body-background">
            <Container>
                <Row>
                    <Col>
                        <ConcludingServicesLists lists={servicesLists} classname={"less-top-padding"} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ConcludingSection